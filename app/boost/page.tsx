import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container, Flex, Heading, Text, Button, Grid, Box, Code, Tabs } from "@radix-ui/themes";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TerminalBlock } from "@/components/ui/TerminalBlock";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Omega Boost — Fix the LLM Wire Protocol",
  description:
    "Drop-in proxy that fixes broken LLM streaming, tool calls, and response formatting. Works with Cursor, Claude Code, OpenCode, Cline, Aider. One install. Zero config.",
};

const BEFORE_WIRE = `data: {"id":"chatcmpl-cf31b079...","choices":[{"index":0,
"delta":{"content":" const","function_call":null,
"tool_calls":[],"role":"assistant","refusal":null}}],
"created":1770306640,"model":"moonshotai/Kimi-K2.5",
"service_tier":null,"system_fingerprint":null,
"object":"chat.completion.chunk","usage":{"prompt_tokens":22,
"completion_tokens":157,"total_tokens":179,...}}`;

const AFTER_WIRE = `{"choices":[{"delta":{"content":" const"}}]}`;

const BENCHMARK_OUTPUT = `$ omega-boost benchmark

ω Omega Boost Benchmark Report
═══════════════════════════════

Provider          Bytes/tok    Tool Calls     Stream Err    Overhead
────────────      ─────────    ──────────     ──────────    ────────
OpenAI GPT-4o     648 → 38    87% → 100%     3/100 → 0    +0.4ms
Anthropic Claude  592 → 35    91% → 100%     1/100 → 0    +0.3ms
Baseten Kimi      703 → 42    72% → 100%     8/100 → 0    +0.6ms
Ollama Llama3     489 → 31    65% → 100%     5/100 → 0    +0.2ms

Total bytes saved this session: 847,293 (94% reduction)

the result is saved.`;

const INSTALL_OUTPUT = `$ npx omega-boost

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

Done. the result is saved.`;

const PROVIDERS = [
  "OpenAI (GPT-4, GPT-4o, o1, o3)",
  "Anthropic (Claude Sonnet, Opus, Haiku)",
  "Baseten (Kimi K2.5, Qwen, any model)",
  "DeepSeek",
  "Ollama (local models)",
  "Groq",
  "Together AI",
  "Fireworks AI",
  "vLLM (self-hosted)",
  "Any OpenAI-compatible endpoint",
];

const SECURITY_ITEMS = [
  { label: "LOCAL ONLY", body: "Binds to 127.0.0.1. Never exposed to network." },
  { label: "BYOK", body: "API keys passed through. Never stored. Never logged." },
  { label: "NO ACCOUNT", body: "No signup. No cloud dependency. Works offline." },
  { label: "NO TELEMETRY", body: "Nothing collected by default. Opt-in only." },
  { label: "OPEN SOURCE", body: "MIT license. Full source. Every byte inspectable." },
  { label: "REVERSIBLE", body: "Configs backed up. Restore with omega-boost uninstall." },
];

const CLI_ITEMS = [
  {
    title: "omega-boost start [options]",
    body: "--port <n>             Port (default: 10557)\n  --no-auto-detect       Skip tool detection\n  --no-auto-configure    Detect but don't patch\n  --telemetry            Opt-in anonymous stats\n  --verbose              Log every request\n  --dashboard            Open web dashboard",
  },
  { title: "omega-boost status", body: "Proxy status + connections" },
  { title: "omega-boost stop", body: "Stop proxy, restore configs" },
  { title: "omega-boost logs", body: "Stream logs" },
  { title: "omega-boost benchmark", body: "Provider comparison report" },
  { title: "omega-boost update", body: "Self-update" },
  { title: "omega-boost uninstall", body: "Stop, restore, remove" },
];

export default function BoostPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <Section size="3">
        <Container size="2">
          <Flex direction="column" gap="6" style={{ maxWidth: "560px" }}>
            <SectionLabel>OMEGA BOOST</SectionLabel>
            <Heading
              size="9"
              weight="light"
              style={{
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                fontWeight: 300,
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                fontSize: "clamp(2.25rem, 4vw, 4rem)",
              }}
            >
              The drop-in proxy that fixes the LLM wire protocol.
            </Heading>
            <Text
              size="4"
              style={{
                color: "var(--omega-accent)",
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                lineHeight: 1.65,
              }}
            >
              Every token from your AI provider carries 650 bytes of overhead. Tool call formats differ across every model. Omega Boost intercepts the stream and emits clean, typed frames. One install. Zero config. Everything gets better.
            </Text>
            <Flex gap="4" align="center" wrap="wrap">
              <Button size="4" variant="solid" highContrast asChild>
                <Link href="/boost#install">Get Started →</Link>
              </Button>
              <TerminalBlock copyText="npx omega-boost">$ npx omega-boost</TerminalBlock>
            </Flex>
          </Flex>
        </Container>
      </Section>

      {/* The Wire */}
      <SectionReveal>
        <Section size="3" style={{ backgroundColor: "var(--gray-2)" }}>
          <Container size="2">
            <Flex direction="column" gap="6">
              <Heading size="8" weight="medium">
                What your tools receive today. On every token.
              </Heading>
              <TerminalBlock copyText={BEFORE_WIRE}>{BEFORE_WIRE}</TerminalBlock>
              <Text size="2" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                650 bytes. For the five-character token &quot; const&quot;.
              </Text>
              <Heading size="6" weight="medium">
                After Omega Boost:
              </Heading>
              <TerminalBlock copyText={AFTER_WIRE}>{AFTER_WIRE}</TerminalBlock>
              <Text size="2" style={{ color: "var(--omega-success)", fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                40 bytes. Same token. Same information that matters. In SIGIL binary mode: 1.5 bytes average.
              </Text>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Tool Call Normalization */}
      <SectionReveal>
        <Section size="3">
          <Container size="2">
            <Flex direction="column" gap="6">
              <Heading size="8" weight="medium">
                Every model, one format out.
              </Heading>
              <Text size="4" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif", lineHeight: 1.65 }}>
                Tool call formats differ across providers — different tags, different JSON structures, different thinking block behavior, different multi-tool conventions. Omega Boost normalizes all of them into a single consistent format.
              </Text>
              <Box
                asChild
                style={{
                  overflowX: "auto",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "13px",
                  border: "1px solid var(--omega-border)",
                  borderRadius: "var(--radius-2)",
                  padding: "var(--space-4)",
                }}
              >
                <pre style={{ margin: 0, whiteSpace: "pre" }}>
{`Model         Tool Format              Thinking        Multi-tool
─────         ───────────              ────────        ──────────
GPT-4         function_call / tools    —               parallel_tool_calls
Claude        XML-style                Extended         Yes
Qwen3         <tool_call>              thinking        Varies
Llama         Fine-tune dependent      Varies           Varies
Kimi K2.5     <tool_call> variant     thinking        Varies
Mistral       Unique format            —                Yes`}
                </pre>
              </Box>
              <Text size="4" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif", lineHeight: 1.65 }}>
                After Omega Boost, your tools see one consistent format. Tool calls are semantically framed — start and end events are explicit. JSON arguments are buffered and emitted only when syntactically complete. The parser always knows which state it&apos;s in.
              </Text>
              <Box
                asChild
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "13px",
                  border: "1px solid var(--omega-border)",
                  borderRadius: "var(--radius-2)",
                  padding: "var(--space-4)",
                }}
              >
                <pre style={{ margin: 0, whiteSpace: "pre-wrap", color: "var(--gray-12)" }}>
{`StateText       → normal text output
StateThinking   → inside thinking block
StateToolCall   → inside tool call (buffering JSON)
StateCodeBlock  → inside code fence

Four states. No ambiguity. Deterministic.`}
                </pre>
              </Box>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Three Features */}
      <SectionReveal>
        <Section size="3" style={{ backgroundColor: "var(--gray-2)" }}>
          <Container size="4">
            <Grid columns={{ initial: "1", md: "3" }} gap="6">
              <Box style={{ padding: "var(--space-5)", border: "1px solid var(--omega-border)", borderRadius: "var(--radius-2)" }}>
                <Text size="1" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--omega-accent)", marginBottom: "var(--space-3)" }}>① NORMALIZED RESPONSES</Text>
                <Text size="3" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", lineHeight: 1.6, color: "var(--gray-12)" }}>
                  Every provider&apos;s output normalized to consistent OpenAI-compatible format: usage stats on final chunk only, proper [DONE] sentinel, consistent error format, redundant fields stripped, role field on first chunk only. 94% average bandwidth reduction.
                </Text>
              </Box>
              <Box style={{ padding: "var(--space-5)", border: "1px solid var(--omega-border)", borderRadius: "var(--radius-2)" }}>
                <Text size="1" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--omega-accent)", marginBottom: "var(--space-3)" }}>② TYPED TOOL FRAMING</Text>
                <Text size="3" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", lineHeight: 1.6, color: "var(--gray-12)" }}>
                  Tool calls arrive complete or not at all: explicit start/end events, JSON buffered until syntactically complete, multi-tool calls normalized across providers, thinking blocks properly separated. 100% tool call determinism.
                </Text>
              </Box>
              <Box style={{ padding: "var(--space-5)", border: "1px solid var(--omega-border)", borderRadius: "var(--radius-2)" }}>
                <Text size="1" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--omega-accent)", marginBottom: "var(--space-3)" }}>③ SUB-MILLISECOND OVERHEAD</Text>
                <Text size="3" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", lineHeight: 1.6, color: "var(--gray-12)" }}>
                  omega.ms — it&apos;s in the name. P50: &lt;0.5ms added latency. P99: &lt;1ms. Memory: &lt;50MB resident. Startup: &lt;500ms. Runs on localhost. Nothing leaves your machine. &lt;1ms. Every time.
                </Text>
              </Box>
            </Grid>
          </Container>
        </Section>
      </SectionReveal>

      {/* Provider Coverage */}
      <SectionReveal>
        <Section size="3">
          <Container size="2">
            <Flex direction="column" gap="6">
              <Heading size="8" weight="medium">
                Every provider. Consistent output.
              </Heading>
              <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap="3">
                {PROVIDERS.map((p) => (
                  <Flex key={p} align="center" gap="2">
                    <Text size="2" style={{ color: "var(--omega-success)" }}>✔</Text>
                    <Text size="3" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", color: "var(--gray-12)" }}>{p}</Text>
                  </Flex>
                ))}
              </Grid>
              <Text size="3" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Each provider has a dedicated adapter that handles its specific format, quirks, and edge cases. Adding a new provider is ~200 lines. Community contributions welcome.
              </Text>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Benchmark */}
      <SectionReveal>
        <Section size="3" style={{ backgroundColor: "var(--gray-2)" }}>
          <Container size="2">
            <Flex direction="column" gap="6">
              <Heading size="8" weight="medium">
                Measure it yourself.
              </Heading>
              <Text size="4" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif", lineHeight: 1.65 }}>
                Don&apos;t take our word for it. Run the benchmark against your own providers with your own keys.
              </Text>
              <TerminalBlock copyText={BENCHMARK_OUTPUT}>{BENCHMARK_OUTPUT}</TerminalBlock>
              <Text size="2" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                The report shows raw vs. boosted metrics for every provider you have configured. Run it. Share it.
              </Text>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Installation */}
      <SectionReveal>
        <Section size="3" id="install">
          <Container size="2">
            <Flex direction="column" gap="6">
              <Heading size="8" weight="medium">
                30 seconds. Zero config.
              </Heading>
              <Text size="4" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif", lineHeight: 1.65 }}>
                One command. Omega Boost auto-detects your tools, reads your existing API keys, starts the proxy, and offers to configure everything.
              </Text>
              <TerminalBlock copyText={INSTALL_OUTPUT}>{INSTALL_OUTPUT}</TerminalBlock>
              <Tabs.Root defaultValue="npx">
                <Tabs.List>
                  <Tabs.Trigger value="npx">npx</Tabs.Trigger>
                  <Tabs.Trigger value="npm">npm</Tabs.Trigger>
                  <Tabs.Trigger value="brew">Homebrew</Tabs.Trigger>
                  <Tabs.Trigger value="cargo">Cargo</Tabs.Trigger>
                  <Tabs.Trigger value="nix">Nix</Tabs.Trigger>
                  <Tabs.Trigger value="docker">Docker</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="npx">
                  <Box pt="3">
                    <Code size="3" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>npx omega-boost</Code>
                  </Box>
                </Tabs.Content>
                <Tabs.Content value="npm">
                  <Box pt="3">
                    <Code size="3" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>npm i -g omega-boost && omega-boost start</Code>
                  </Box>
                </Tabs.Content>
                <Tabs.Content value="brew">
                  <Box pt="3">
                    <Code size="3" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>brew install omega-boost</Code>
                  </Box>
                </Tabs.Content>
                <Tabs.Content value="cargo">
                  <Box pt="3">
                    <Code size="3" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>cargo install omega-boost</Code>
                  </Box>
                </Tabs.Content>
                <Tabs.Content value="nix">
                  <Box pt="3">
                    <Code size="3" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>nix run github:straylight-ai/omega-boost</Code>
                  </Box>
                </Tabs.Content>
                <Tabs.Content value="docker">
                  <Box pt="3">
                    <Code size="3" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>docker run -p 10557:10557 ghcr.io/straylight-ai/omega-boost</Code>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
              <Text size="2" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                All originals are backed up. Restore anytime with omega-boost uninstall.
              </Text>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Security */}
      <SectionReveal>
        <Section size="3" style={{ backgroundColor: "var(--gray-2)" }}>
          <Container size="2">
            <Flex direction="column" gap="6">
              <Heading size="8" weight="medium">
                Your keys. Your machine. Your data.
              </Heading>
              <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap="4">
                {SECURITY_ITEMS.map((item) => (
                  <Box key={item.label} style={{ padding: "var(--space-4)", border: "1px solid var(--omega-border)", borderRadius: "var(--radius-2)" }}>
                    <Text size="1" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--omega-accent)", marginBottom: "var(--space-2)" }}>{item.label}</Text>
                    <Text size="3" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", color: "var(--gray-12)" }}>{item.body}</Text>
                  </Box>
                ))}
              </Grid>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Pricing */}
      <SectionReveal>
        <Section size="3">
          <Container size="2">
            <Flex direction="column" gap="4">
              <Heading size="8" weight="medium">
                Free. Open source. No catch.
              </Heading>
              <Text size="4" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif", lineHeight: 1.65 }}>
                Omega Boost is MIT-licensed and free. Bring your own API keys. No account. No usage limits. No trial period. The core proxy will always be free and open source.
              </Text>
              <Text size="2" style={{ color: "var(--omega-accent)", opacity: 0.8, fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                Team features (shared dashboard, hosted proxy, advanced routing) coming later for those who need them.
              </Text>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* CLI Reference */}
      <SectionReveal>
        <Section size="3" style={{ backgroundColor: "var(--gray-2)" }}>
          <Container size="2">
            <Flex direction="column" gap="4">
              <Heading size="8" weight="medium">
                Commands
              </Heading>
              <Flex direction="column" gap="3">
                {CLI_ITEMS.map((item) => (
                  <Box
                    key={item.title}
                    style={{
                      padding: "var(--space-4)",
                      border: "1px solid var(--omega-border)",
                      borderRadius: "var(--radius-2)",
                    }}
                  >
                    <Code size="2" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", marginBottom: "var(--space-2)", display: "block" }}>{item.title}</Code>
                    <pre style={{ margin: 0, fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "13px", whiteSpace: "pre-wrap", color: "var(--gray-12)" }}>{item.body}</pre>
                  </Box>
                ))}
              </Flex>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Final CTA */}
      <SectionReveal>
        <Section size="3">
          <Container size="2">
            <Flex direction="column" align="center" gap="6" style={{ textAlign: "center" }}>
              <TerminalBlock copyText="$ npx omega-boost">$ npx omega-boost</TerminalBlock>
              <Heading size="8" weight="light" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", fontWeight: 300 }}>
                Fix the wire. Keep building.
              </Heading>
              <Button size="4" variant="solid" highContrast asChild>
                <Link href="/boost#install">Get Started →</Link>
              </Button>
              <Text size="2" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "13px", color: "var(--omega-accent)" }}>
                the result is saved
              </Text>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>
    </main>
  );
}
