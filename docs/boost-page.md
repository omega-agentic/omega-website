# ω Boost — Product Page Spec & Copy

**URL:** omega.ms/boost  
**Purpose:** Sell Omega Boost to individual developers. Deep dive on what it does and how to use it.  
**Audience:** Developer who found this via search, HN, or a link. Wants the problem fixed, not the philosophy.  
**Default mode:** Dark.

---

## Meta

```html
<title>Omega Boost — Fix the LLM Wire Protocol</title>
<meta name="description" content="Drop-in proxy that fixes broken LLM streaming, 
tool calls, and response formatting. Works with Cursor, Claude Code, OpenCode, 
Cline, Aider. One install. Zero config.">
```

---

## 1. Hero

```
[eyebrow — mono, muted]
OMEGA BOOST

[H1 — Outfit Light 300, 56-72px]
The drop-in proxy that fixes
the LLM wire protocol.

[body — 18px, muted, max-width 560px]
Every token from your AI provider carries 650 bytes of 
overhead. Tool call formats differ across every model.
Omega Boost intercepts the stream and emits clean, typed frames.
One install. Zero config. Everything gets better.

[CTA group]
[Get Started →]          npx omega-boost  [← copy to clipboard]
```

---

## 2. The Wire — Show, Don't Tell

**Visual:** Two terminal blocks. Before and after. The contrast does the talking.

```
[H2]
What your tools receive today. On every token.

[terminal block — dark, monospace, showing actual SSE dump]
data: {"id":"chatcmpl-cf31b079...","choices":[{"index":0,
"delta":{"content":" const","function_call":null,
"tool_calls":[],"role":"assistant","refusal":null}}],
"created":1770306640,"model":"moonshotai/Kimi-K2.5",
"service_tier":null,"system_fingerprint":null,
"object":"chat.completion.chunk","usage":{"prompt_tokens":22,
"completion_tokens":157,"total_tokens":179,...}}

[annotation — muted, with byte count]
650 bytes. For the five-character token " const".

[gap — 2vh]

[H3]
After Omega Boost:

[terminal block — clean]
{"choices":[{"delta":{"content":" const"}}]}

[annotation — green accent]
40 bytes. Same token. Same information that matters.
In SIGIL binary mode: 1.5 bytes average.
```

---

## 3. Tool Call Normalization

```
[H2]
Every model, one format out.

[body]
Tool call formats differ across providers — different tags,
different JSON structures, different thinking block behavior,
different multi-tool conventions. Omega Boost normalizes 
all of them into a single consistent format.

[comparison grid — clean, factual, no judgment]

Model         Tool Format              Thinking        Multi-tool
─────         ───────────              ────────        ──────────
GPT-4         function_call / tools    —               parallel_tool_calls
Claude        XML-style                Extended         Yes
Qwen3         <tool_call>              <think>          Varies
Llama         Fine-tune dependent      Varies           Varies
Kimi K2.5     <tool_call> variant      <think>          Varies
Mistral       Unique format            —                Yes

[body]
After Omega Boost, your tools see one consistent format.
Tool calls are semantically framed — start and end events 
are explicit. JSON arguments are buffered and emitted only 
when syntactically complete. The parser always knows 
which state it's in.

[code block — the state machine]
StateText       → normal text output
StateThinking   → inside thinking block
StateToolCall   → inside tool call (buffering JSON)
StateCodeBlock  → inside code fence

Four states. No ambiguity. Deterministic.
```

---

## 4. Three Core Features

```
[Three blocks — horizontal on desktop]

① NORMALIZED RESPONSES

Every provider's output normalized to consistent 
OpenAI-compatible format:
• Usage stats on final chunk only
• Proper [DONE] sentinel
• Consistent error format
• Redundant fields stripped
• Role field on first chunk only

94% average bandwidth reduction.

② TYPED TOOL FRAMING

Tool calls arrive complete or not at all:
• Explicit start/end events
• JSON buffered until syntactically complete
• Multi-tool calls normalized across providers
• Thinking blocks properly separated
• Parser state is always known

100% tool call determinism.

③ SUB-MILLISECOND OVERHEAD

omega.ms — it's in the name.
• P50: <0.5ms added latency
• P99: <1ms
• Memory: <50MB resident
• Startup: <500ms
• Runs on localhost. Nothing leaves your machine.

<1ms. Every time.
```

---

## 5. Provider Coverage

```
[H2]
Every provider. Consistent output.

[Provider grid — logos/icons + status badges]

OpenAI (GPT-4, GPT-4o, o1, o3)          ✔
Anthropic (Claude Sonnet, Opus, Haiku)   ✔
Baseten (Kimi K2.5, Qwen, any model)    ✔
DeepSeek                                 ✔
Ollama (local models)                    ✔
Groq                                     ✔
Together AI                              ✔
Fireworks AI                             ✔
vLLM (self-hosted)                       ✔
Any OpenAI-compatible endpoint           ✔

[body — muted]
Each provider has a dedicated adapter that handles 
its specific format, quirks, and edge cases.
Adding a new provider is ~200 lines. 
Community contributions welcome.
```

---

## 6. The Benchmark

**Visual:** A terminal block showing the benchmark output. Designed to be screenshot-worthy.

```
[H2]
Measure it yourself.

[body]
Don't take our word for it. Run the benchmark 
against your own providers with your own keys.

[terminal block]
$ omega-boost benchmark

ω Omega Boost Benchmark Report
═══════════════════════════════

Provider          Bytes/tok    Tool Calls     Stream Err    Overhead
────────────      ─────────    ──────────     ──────────    ────────
OpenAI GPT-4o     648 → 38    87% → 100%     3/100 → 0    +0.4ms
Anthropic Claude  592 → 35    91% → 100%     1/100 → 0    +0.3ms
Baseten Kimi      703 → 42    72% → 100%     8/100 → 0    +0.6ms
Ollama Llama3     489 → 31    65% → 100%     5/100 → 0    +0.2ms

Total bytes saved this session: 847,293 (94% reduction)

the result is saved.

[body — muted]
The report shows raw vs. boosted metrics for every 
provider you have configured. Run it. Share it.
```

---

## 7. Installation — The Full Experience

```
[H2]
30 seconds. Zero config.

[body]
One command. Omega Boost auto-detects your tools, 
reads your existing API keys, starts the proxy, 
and offers to configure everything.

[Primary — large terminal block]
$ npx omega-boost

ω Omega Boost v1.0.0

Detected tools:
  ✔ Cursor          
  ✔ Claude Code     
  ✔ OpenCode        

Detected API keys:
  ✔ OPENAI_API_KEY      (sk-...7f2a)
  ✔ ANTHROPIC_API_KEY   (sk-ant-...3b1c)

Proxy running on http://localhost:10557

Auto-configure detected tools? [Y/n] ✔

Done. the result is saved.

[Alternative installs — horizontal tabs]
npm        npm i -g omega-boost && omega-boost start
Homebrew   brew install omega-boost
Cargo      cargo install omega-boost
Nix        nix run github:straylight-ai/omega-boost
Docker     docker run -p 10557:10557 ghcr.io/straylight-ai/omega-boost

[body — muted]
All originals are backed up. Restore anytime 
with omega-boost uninstall.
```

---

## 8. Security & Privacy

```
[H2]
Your keys. Your machine. Your data.

[Six short blocks — icon + one-liner each]

LOCAL ONLY          Binds to 127.0.0.1. Never exposed to network.
BYOK                API keys passed through. Never stored. Never logged.
NO ACCOUNT          No signup. No cloud dependency. Works offline.
NO TELEMETRY        Nothing collected by default. Opt-in only.
OPEN SOURCE         MIT license. Full source. Every byte inspectable.
REVERSIBLE          Configs backed up. Restore with omega-boost uninstall.
```

---

## 9. Pricing

```
[H2]
Free. Open source. No catch.

[body]
Omega Boost is MIT-licensed and free.
Bring your own API keys. No account.
No usage limits. No trial period.

The core proxy will always be free and open source.

[muted]
Team features (shared dashboard, hosted proxy, 
advanced routing) coming later for those who need them.
```

---

## 10. CLI Reference (collapsible / accordion)

```
[H2]
Commands

omega-boost start [options]
  --port <n>             Port (default: 10557)
  --no-auto-detect       Skip tool detection
  --no-auto-configure    Detect but don't patch
  --telemetry            Opt-in anonymous stats
  --verbose              Log every request
  --dashboard            Open web dashboard

omega-boost status       Proxy status + connections
omega-boost stop         Stop proxy, restore configs
omega-boost logs         Stream logs
omega-boost benchmark    Provider comparison report
omega-boost update       Self-update
omega-boost uninstall    Stop, restore, remove
```

---

## 11. Final CTA

```
[terminal block — centered]
$ npx omega-boost

[H2]
Fix the wire. Keep building.

[CTA]
[Get Started →]

[sign-off]
the result is saved
```

---

*ω Boost · Product Page Spec · 2026*
