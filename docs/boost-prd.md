# ω Boost — Product Requirements Document

**Product:** Omega Boost  
**Version:** 1.0  
**Date:** February 2026  
**Status:** Pre-launch

---

## 1. Summary

Omega Boost is a local BYOK proxy that sits between AI coding tools (Cursor, Claude Code, OpenCode, Cline, Aider, etc.) and LLM providers. It intercepts the broken SSE/JSON wire protocol and normalizes it into consistent, deterministic responses. 

Zero config. No account. Sub-millisecond overhead. Every tool gets better immediately.

This is Phase 0x00 from Project Descabello — the wedge product that provides immediate value, maps every provider failure mode, and builds adoption while the full stack ships underneath.

---

## 2. Goals

| Goal | Metric |
|------|--------|
| Frictionless adoption | 30 seconds from `npx omega-boost` to working proxy |
| Wire protocol fix | 94%+ bandwidth reduction across all providers |
| Tool call reliability | 100% deterministic tool call framing |
| Zero overhead perception | <1ms p99 added latency |
| Trust through transparency | Open source, local-only, no telemetry default |

---

## 3. User Personas

| Persona | Tool(s) | Primary Pain |
|---------|---------|-------------|
| **Cursor power user** | Cursor | Tool calls fail on non-OpenAI models. Streaming glitches on provider switch. |
| **Claude Code dev** | Claude Code | Extended thinking streams poorly through third-party setups. Format differences break multi-model workflows. |
| **Multi-provider dev** | OpenCode, Cline | Using 3-4 providers. Each has different response quirks. Hours debugging parsing edge cases. |
| **Aider user** | Aider | Multi-model workflows break on provider switch. Tool result injection differs. |
| **Open-source enthusiast** | OpenClaw, Ollama | Tool calls on Qwen, Llama, DeepSeek aren't reliable enough for real work. |
| **Team lead** | Various | Wants consistent behavior across the team regardless of provider. |

---

## 4. Architecture

```
┌───────────────────────────────────────────────────┐
│  AI Tool (Cursor, Claude Code, OpenCode, etc.)    │
│  Sends standard OpenAI-format HTTP requests       │
└────────────────────┬──────────────────────────────┘
                     │ HTTP → localhost:10557
                     ▼
┌───────────────────────────────────────────────────┐
│                 OMEGA BOOST                        │
│                                                   │
│  ┌──────────┐  ┌────────────┐  ┌──────────────┐  │
│  │ Ingress  │→ │ Normalizer │→ │ Egress       │  │
│  │          │  │            │  │              │  │
│  │ Parse    │  │ Fix format │  │ Emit clean   │  │
│  │ provider │  │ Fix tools  │  │ OpenAI-compat│  │
│  │ response │  │ Fix stream │  │ response     │  │
│  └──────────┘  └────────────┘  └──────────────┘  │
│                                                   │
│  ┌───────────────────────────────────────────┐    │
│  │  jaylene-slide adapter layer              │    │
│  │                                           │    │
│  │  OpenAI · Anthropic · Baseten · Ollama    │    │
│  │  Groq · Together · DeepSeek · Fireworks   │    │
│  │  vLLM · Generic OpenAI-compat            │    │
│  └───────────────────────────────────────────┘    │
└────────────────────┬──────────────────────────────┘
                     │ HTTPS → provider
                     ▼
┌───────────────────────────────────────────────────┐
│  LLM Provider                                     │
└───────────────────────────────────────────────────┘
```

### Data flow (per request):

1. Tool sends OpenAI-format request to `localhost:10557`
2. Boost reads the request, identifies target provider from model string or headers
3. Boost forwards request to actual provider endpoint with original API key
4. Provider streams SSE/JSON response
5. jaylene-slide adapter parses provider-specific format into internal semantic frames
6. Normalizer fixes: strips redundant fields, buffers tool calls, reassembles split UTF-8, deduplicates usage stats
7. Egress emits clean OpenAI-compatible SSE stream back to tool
8. Tool receives consistent, correct response

---

## 5. Installation Experience

### 5.1 Design Principle

**30 seconds to value. Zero configuration. No account required.**

The install experience is the product's most important feature. If it's not effortless, nothing else matters.

### 5.2 Primary: npx (zero-install)

```bash
npx omega-boost
```

This single command:
1. Downloads the latest omega-boost binary
2. Scans for installed AI coding tools (Cursor, Claude Code, OpenCode, Cline, Aider, VS Code + Continue, OpenClaw, Windsurf)
3. Scans for existing API keys (OPENAI_API_KEY, ANTHROPIC_API_KEY, GROQ_API_KEY, etc. from env vars and tool-specific config files)
4. Starts local proxy on `localhost:10557`
5. Prints detected tools and keys (keys redacted to last 4 chars)
6. Asks one question: "Auto-configure detected tools? [Y/n]"
7. On yes: patches tool configs to point base URL to proxy. Backs up originals.
8. On no: prints manual config instructions for each detected tool.
9. Done.

### 5.3 Auto-detection targets

| Tool | Config location(s) |
|------|-------------------|
| Cursor | `~/Library/Application Support/Cursor/User/settings.json` (macOS), `~/.config/Cursor/User/settings.json` (Linux) |
| Claude Code | `~/.claude/settings.json`, `~/.claude/config.json` |
| OpenCode | `~/.opencode/config.json`, `~/.config/opencode/` |
| Cline | VS Code extension settings |
| Aider | `~/.aider.conf.yml`, env vars |
| Continue | VS Code extension settings, `~/.continue/config.json` |
| OpenClaw | `~/.openclaw/config.json` |
| Windsurf | App-specific config path |

### 5.4 Auto-configuration behavior

When patching a config:
1. Read current config file
2. Create backup at `{filename}.omega-backup`
3. Set API base URL to `http://localhost:10557`
4. Preserve all other settings unchanged
5. Log what was changed

When restoring (`omega-boost stop` or `omega-boost uninstall`):
1. Find all `.omega-backup` files
2. Restore originals
3. Delete backups
4. Log what was restored

### 5.5 Alternative installs

```bash
npm i -g omega-boost       # Global npm install
brew install omega-boost    # Homebrew
cargo install omega-boost   # Cargo (Rust)
nix run github:straylight-ai/omega-boost  # Nix
docker run -p 10557:10557 ghcr.io/straylight-ai/omega-boost  # Docker
```

### 5.6 Port selection

Default: `10557`
- Unlikely to conflict with common services
- Configurable via `--port`
- If port is occupied, auto-increment and notify

---

## 6. Feature Specifications

### F1: Response Normalization

**Problem:** Each provider includes different metadata fields, at different frequencies, in different formats. Tools waste bandwidth and parsing time on irrelevant data.

**Solution:** Strip all non-essential fields from streaming chunks. Consolidate metadata to final chunk only.

**Specification:**

| Field | Behavior |
|-------|----------|
| `id` | First chunk only |
| `object` | First chunk only |
| `model` | First chunk only, normalized to canonical name |
| `created` | First chunk only |
| `choices[].delta.role` | First chunk only |
| `choices[].delta.content` | Every chunk (this is the payload) |
| `choices[].delta.function_call` | Omitted if null |
| `choices[].delta.tool_calls` | Omitted if empty array |
| `choices[].delta.refusal` | Omitted if null |
| `usage` | Final chunk only |
| `service_tier` | Omitted always |
| `system_fingerprint` | Omitted always |
| `[DONE]` | Always emitted as final message |

**Result:** ~94% bandwidth reduction on average across providers.

### F2: Typed Tool Call Framing

**Problem:** Tool calls are embedded as text in streaming responses. Their boundaries are ambiguous. JSON may be partial. Multi-tool format differs across providers. Thinking blocks interleave unpredictably.

**Solution:** Internal state machine that tracks parser state. Tool calls are buffered and only emitted when syntactically complete.

**State machine:**

```
        ┌─────────────────┐
        │    StateText     │ ← default
        └────┬───────┬─────┘
             │       │
    think_start  tool_start
             │       │
             ▼       ▼
    ┌────────────┐  ┌─────────────┐
    │StateThinking│  │StateToolCall │
    └──────┬─────┘  └──────┬──────┘
           │               │
      think_end      tool_end (JSON complete)
           │               │
           ▼               ▼
        ┌─────────────────┐
        │    StateText     │
        └─────────────────┘
```

**Tool call buffering rules:**
1. On tool_call_start: begin buffering JSON
2. On each streaming chunk: append to buffer, attempt JSON parse
3. On successful parse AND tool_call_end signal: emit complete tool call
4. On tool_call_end without valid JSON: emit error frame
5. Never emit partial tool call JSON to client

**Multi-tool normalization:**
- Repeated `<tool_call>` tags → array of tool calls
- Array inside single `<tool_call>` → array of tool calls
- `parallel_tool_calls` (OpenAI) → array of tool calls
- All formats → consistent array output

### F3: Streaming Correctness

**Problem:** SSE chunks from providers split at arbitrary byte boundaries. This causes: split UTF-8 multi-byte sequences, split JSON escape sequences, split SSE `data:` fields.

**Solution:** Reassembly buffer that respects encoding boundaries.

**Rules:**
1. Buffer incoming bytes until complete UTF-8 codepoint boundary
2. Never split JSON escape sequences (`\"`, `\n`, `\uXXXX`)
3. Parse SSE `data:` lines even when malformed (missing newline, extra whitespace)
4. Handle backpressure: if client reads slower than provider sends, buffer without dropping

### F4: Provider Adapters (jaylene-slide)

**Architecture:** Pluggable adapter interface. One adapter per provider.

```rust
trait ProviderAdapter {
    /// Identify if this adapter handles the given model string
    fn matches(&self, model: &str) -> bool;
    
    /// Transform outgoing request if needed
    fn transform_request(&self, req: Request) -> Request;
    
    /// Parse provider's SSE stream into semantic frames  
    fn parse_stream(&self, chunk: &[u8], state: &mut ParseState) -> Vec<Frame>;
    
    /// Provider-specific error mapping
    fn map_error(&self, status: u16, body: &[u8]) -> NormalizedError;
}
```

**Launch adapters (10):**

| Provider | Model matching | Key quirks |
|----------|---------------|------------|
| OpenAI | `gpt-*`, `o1-*`, `o3-*` | `parallel_tool_calls` field, usage on every chunk |
| Anthropic | `claude-*` | Messages API format, extended thinking blocks, XML tool format |
| Baseten | User-configured | Variable model names, inconsistent usage reporting |
| DeepSeek | `deepseek-*` | Custom tool format, thinking tokens |
| Ollama | `ollama/*` or localhost detection | No usage stats, variable tool support |
| Groq | `groq/*` or header detection | Fast but minimal tool support |
| Together | `together/*` | Standard OpenAI-compat with quirks |
| Fireworks | `fireworks/*` | Custom model naming |
| vLLM | User-configured | Self-hosted, variable behavior |
| Generic | Fallback | Standard OpenAI-compat, minimal fixups |

**Adding a new adapter:** ~200 lines implementing the trait. Community contribution guide included.

### F5: Local Diagnostics Dashboard

**Optional.** Accessible at `http://localhost:10557` when proxy is running. Never required for operation.

**Dashboard shows:**
- Live stream: current requests, tokens/sec, bytes in vs. bytes out
- Provider stats: error rate (raw vs. normalized), tool call success rate
- Session summary: total requests, total bytes saved, uptime
- Connected tools: which tools are routing through the proxy
- Provider health: latency, error rate, last seen

**Tech:** Static HTML/JS served by the proxy process. No additional dependencies.

### F6: Benchmark Command

```bash
omega-boost benchmark [--providers <list>] [--iterations <n>]
```

**Behavior:**
1. For each configured provider:
   a. Send standardized text completion prompt (measure bytes/token)
   b. Send standardized tool call prompt × N iterations (measure success rate)
   c. Send streaming prompt with known UTF-8 edge cases (measure split errors)
   d. Measure raw latency vs. proxied latency
2. Output formatted terminal report
3. Optionally save report to file (`--output report.txt`)

**Report design:** The terminal output should be clean and screenshot-worthy. It is designed to be shared. This is a growth mechanism.

### F7: Zero Telemetry

**Default:** No telemetry. No analytics. No network calls except to configured providers.

**Opt-in:** `omega-boost start --telemetry` enables anonymous usage stats:
- Providers used (not keys)
- Requests per session (count only)
- Bytes saved (aggregate)
- Error rates (aggregate)
- No prompts, no completions, no API keys, no PII

**API keys:** Passed through in request headers. Never written to disk. Never logged. Redacted in all output (showing only last 4 characters).

---

## 7. CLI Specification

```
COMMANDS:

omega-boost [start]          Start proxy (default command)
  --port <n>                 Port (default: 10557)
  --no-auto-detect           Skip tool scanning  
  --no-auto-configure        Detect but don't offer to patch
  --telemetry                Enable anonymous stats
  --verbose                  Log every proxied request
  --providers <list>         Only enable specific adapters
  --dashboard                Open dashboard in browser on start

omega-boost status           Show running state, connections, providers
omega-boost stop             Stop proxy, restore tool configs
omega-boost logs             Stream proxy logs to terminal
omega-boost benchmark        Run provider comparison
  --providers <list>         Test specific providers only
  --iterations <n>           Tool call test iterations (default: 100)
  --output <file>            Save report to file
omega-boost update           Self-update to latest version
omega-boost uninstall        Stop, restore all configs, remove install

FLAGS (global):
  --help                     Show help
  --version                  Show version
```

**Process management:**
- `omega-boost start` runs in foreground by default
- `omega-boost start --daemon` runs in background (creates PID file)
- `omega-boost stop` sends SIGTERM, waits for clean shutdown, restores configs
- If proxy crashes, configs remain patched. `omega-boost stop` or `omega-boost uninstall` always restores.

---

## 8. Web Demo

**URL:** omega.ms/demo

**Purpose:** Let visitors experience the difference before installing.

**Implementation:**
- Two side-by-side chat panels
- Left panel: "Direct" — request goes straight to provider
- Right panel: "Boosted" — request goes through WASM-compiled normalizer
- Below each: debug panel showing raw SSE stream, byte count, frame events
- User provides their own API key (client-side only, never sent to Omega)
- Same prompt, same model, same key → visible difference in output quality

**Key interactions:**
- Toggle between providers to see how each one differs (and how Boost normalizes)
- "Try a tool call" button sends a prompt that triggers tool use
- Byte counter shows cumulative savings in real time
- Clear privacy notice: "Your API key stays in your browser. We never see it."

**Tech:** WASM compilation of the Rust normalizer core. Runs entirely client-side.

---

## 9. Security Model

| Property | Implementation |
|----------|---------------|
| Network exposure | Binds to `127.0.0.1` only. Not `0.0.0.0`. |
| API keys | Passed through in headers. Never stored to disk. Never logged (redacted to last 4 chars even in verbose mode). |
| Account | None required. No signup. No cloud dependency. |
| Telemetry | Off by default. Opt-in flag required. |
| Source | Open source. MIT license. |
| Config changes | Backed up before patching. Restorable always. |
| Offline mode | Works fully offline with local providers (Ollama, vLLM). |
| Dependencies | Single binary. No runtime dependencies. |

---

## 10. Technical Requirements

| Spec | Target |
|------|--------|
| Language | Rust (core proxy + adapters) |
| CLI wrapper | TypeScript (for npx distribution) |
| Dashboard | Static HTML/JS (bundled, no framework) |
| Binary size | <10MB |
| Memory | <50MB resident |
| Startup | <500ms cold start |
| Proxy overhead | <0.5ms p50, <1ms p99 |
| Platforms | macOS ARM64, macOS x86, Linux x86_64, Linux ARM64, Windows x86_64 |
| Node.js | ≥18 (for npx path only) |
| Non-Node paths | curl, brew, cargo, nix, docker |

### Build & distribution:

- Rust binary compiled per platform
- npm package wraps binary with auto-download on postinstall
- Homebrew formula in custom tap
- Cargo crate published to crates.io
- Docker image on ghcr.io
- Nix flake in repo

---

## 11. Success Metrics

### 90-day targets:

| Metric | Target |
|--------|--------|
| npm installs (cumulative) | 10,000 |
| Weekly active proxies | 2,500 |
| GitHub stars | 3,000 |
| Benchmark screenshots shared on X | 500 |
| Provider adapters (including community) | 15+ |
| Average session duration | >4 hours/day |
| P50 proxy overhead | <0.5ms |
| Tool call success rate improvement | +30% average |
| Net Promoter Score (from beta users) | >60 |

### Leading indicators (first 2 weeks):

| Indicator | Signal |
|-----------|--------|
| Install-to-configured ratio | >80% of installs complete auto-config |
| First-session duration | >30 minutes average |
| Return rate | >60% use it again next day |
| Benchmark command usage | >30% of users run benchmark |

---

## 12. Pricing

### Phase 1 (Launch): Free

- MIT-licensed open source
- BYOK, no account, no limits
- The proxy is the adoption wedge

### Phase 2 (Post-adoption): Freemium

- Core proxy: always free, always open source
- **Boost Pro** (teams): shared dashboard, hosted proxy option, advanced routing, priority adapters
- Pricing TBD based on adoption data

### Phase 3 (Omega Code): Product revenue

- Boost Pro continues as team tier
- Omega Code is the primary revenue product
- Boost serves as top-of-funnel

---

## 13. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Provider changes wire format | High | Medium | Adapter architecture isolates changes. Community reports surface issues fast. |
| Tool config format changes | Medium | Medium | Version-pinned config parsers. Backup/restore is always safe. |
| Low adoption / awareness | Medium | High | Benchmark screenshot virality. Blog post on HN. Discord community. |
| User blames Boost for provider errors | Medium | Low | Dashboard clearly shows which errors are provider-side vs. proxy-side. |
| Competitive response (LiteLLM adds wire fix) | Low | Medium | Our fix is deeper (SIGIL, typed frames, state machine). Hard to replicate as a feature on existing architecture. |
| Security concern (proxy sees all traffic) | Medium | Medium | Open source, local-only, no telemetry default. Transparency is the mitigation. |

---

## 14. Roadmap

| Phase | Timeline | Deliverables |
|-------|----------|-------------|
| **0.9 (Beta)** | Week 1-2 | Core proxy, 6 adapters (OpenAI, Anthropic, Ollama, Groq, DeepSeek, generic), auto-detect for Cursor + Claude Code + OpenCode, benchmark command |
| **1.0 (Launch)** | Week 3 | All 10 adapters, all tool auto-detection, dashboard, web demo, full docs |
| **1.1** | Week 5-6 | Community adapters, SIGIL binary mode (opt-in), performance optimizations |
| **1.2** | Week 8-10 | Boost Pro features (team dashboard, hosted option), Omega Code integration |

---

*ω Boost · PRD v1.0 · February 2026*

the result is saved
