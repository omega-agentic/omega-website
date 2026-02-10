import type { Metadata } from "next";
import Link from "next/link";
import {
  Section,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Box,
  Code,
  Tabs,
} from "@radix-ui/themes";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { GlowCard } from "@/components/ui/GlowCard";
import { BentoGrid, BentoCell } from "@/components/ui/BentoGrid";
import { MetricRibbon } from "@/components/ui/MetricRibbon";
import { LogoTicker } from "@/components/ui/LogoTicker";
import { InteractiveWireDemo } from "@/components/ui/InteractiveWireDemo";

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

Omega Boost Benchmark Report
═══════════════════════════════

Provider          Bytes/tok    Tool Calls     Stream Err    Overhead
────────────      ─────────    ──────────     ──────────    ────────
OpenAI GPT-4o     648 → 38    87% → 100%     3/100 → 0    +0.4ms
Anthropic Claude  592 → 35    91% → 100%     1/100 → 0    +0.3ms
Baseten Kimi      703 → 42    72% → 100%     8/100 → 0    +0.6ms
Ollama Llama3     489 → 31    65% → 100%     5/100 → 0    +0.2ms

Total bytes saved this session: 847,293 (94% reduction)

the result is saved.`;

const INSTALL_OUTPUT = `$ bun run omega-boost

Omega Boost v1.0.0

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
  { name: "OpenAI" },
  { name: "Anthropic" },
  { name: "Baseten" },
  { name: "DeepSeek" },
  { name: "Ollama" },
  { name: "Groq" },
  { name: "Together AI" },
  { name: "Fireworks AI" },
  { name: "vLLM" },
  { name: "Any OpenAI-compatible" },
];

const SECURITY_ITEMS = [
  {
    label: "LOCAL ONLY",
    title: "Runs on localhost",
    body: "Binds to 127.0.0.1. Never exposed to network.",
  },
  {
    label: "BYOK",
    title: "Your keys stay yours",
    body: "API keys passed through. Never stored. Never logged.",
  },
  {
    label: "NO ACCOUNT",
    title: "Zero signup required",
    body: "No signup. No cloud dependency. Works offline.",
  },
  {
    label: "NO TELEMETRY",
    title: "Nothing collected",
    body: "Nothing collected by default. Opt-in only.",
  },
  {
    label: "OPEN SOURCE",
    title: "MIT licensed",
    body: "MIT license. Full source. Every byte inspectable.",
  },
  {
    label: "REVERSIBLE",
    title: "Fully reversible",
    body: "Configs backed up. Restore with omega-boost uninstall.",
  },
];

const FEATURES = [
  {
    label: "NORMALIZED RESPONSES",
    title: "94% bandwidth reduction",
    body: "Every provider's output normalized to consistent format: usage stats on final chunk only, proper [DONE] sentinel, redundant fields stripped, role field on first chunk only.",
    span: 2 as const,
  },
  {
    label: "TYPED TOOL FRAMING",
    title: "100% tool call determinism",
    body: "Tool calls arrive complete or not at all: explicit start/end events, JSON buffered until syntactically complete, multi-tool calls normalized across providers.",
    span: 1 as const,
  },
  {
    label: "SUB-MILLISECOND",
    title: "<1ms latency overhead",
    body: "P50: <0.5ms. P99: <1ms. Memory: <50MB resident. Startup: <500ms. Runs on localhost. Nothing leaves your machine.",
    span: 1 as const,
  },
  {
    label: "STATE MACHINE",
    title: "Four states. No ambiguity.",
    body: "StateText → normal output. StateThinking → inside thinking block. StateToolCall → buffering JSON. StateCodeBlock → inside code fence. Deterministic parsing.",
    span: 2 as const,
  },
];

const CLI_ITEMS = [
  {
    title: "omega-boost start [options]",
    body: "--port <n>             Port (default: 10557)\n--no-auto-detect       Skip tool detection\n--no-auto-configure    Detect but don't patch\n--verbose              Log every request\n--dashboard            Open web dashboard",
  },
  { title: "omega-boost status", body: "Proxy status + connections" },
  { title: "omega-boost stop", body: "Stop proxy, restore configs" },
  { title: "omega-boost logs", body: "Stream logs" },
  { title: "omega-boost benchmark", body: "Provider comparison report" },
  { title: "omega-boost update", body: "Self-update" },
  { title: "omega-boost uninstall", body: "Stop, restore, remove" },
];

const BOOST_METRICS = [
  { value: "94%", label: "bandwidth reduction" },
  { value: "<1ms", label: "latency added" },
  { value: "100%", label: "tool call accuracy" },
  { value: "0 config", label: "to get started" },
];

export default function BoostPage() {
  return (
    <main>
      {/* Hero — two-column: left headline + CTA, right InteractiveWireDemo */}
      <Section
        size="3"
        className="section-hero-gradient"
        style={{ paddingTop: "120px", paddingBottom: "var(--space-8)" }}
      >
        <Container size="3">
          <Flex
            direction={{ initial: "column", md: "row" }}
            gap="8"
            align={{ initial: "center", md: "center" }}
            justify="between"
            style={{ width: "100%" }}
          >
            <Flex direction="column" gap="6" style={{ maxWidth: "560px", flex: 1 }}>
              <SectionLabel>OMEGA BOOST</SectionLabel>
              <Heading
                size="9"
                weight="light"
                className="display-heading"
                style={{
                  fontSize: "clamp(2.25rem, 4vw, 4rem)",
                }}
              >
                The drop-in proxy that{" "}
                <span className="chrome-text-subtle">
                  fixes the LLM wire protocol.
                </span>
              </Heading>
              <Text
                size="4"
                style={{
                  color: "var(--gray-11)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  lineHeight: 1.65,
                }}
              >
                Every token from your AI provider carries 650 bytes of overhead.
                Tool call formats differ across every model. Omega Boost intercepts
                the stream and emits clean, typed frames. One install. Zero config.
              </Text>
              <Flex gap="4" align="center" wrap="wrap">
                <Button
                  size="4"
                  variant="solid"
                  highContrast
                  className="btn-chrome"
                  asChild
                >
                  <Link href="/boost#install">Get Started</Link>
                </Button>
                <Code
                  size="3"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    padding: "var(--space-2) var(--space-3)",
                  }}
                >
                  bun run omega-boost
                </Code>
              </Flex>
            </Flex>
            <Box style={{ flex: 1, maxWidth: 380, width: "100%" }}>
              <InteractiveWireDemo />
            </Box>
          </Flex>
        </Container>
      </Section>

      {/* Metric ribbon */}
      <MetricRibbon items={BOOST_METRICS} />

      {/* The Wire — visual before/after side-by-side (red-tinted / green-tinted) */}
      <SectionReveal>
        <Section size="3" className="section-movement section-alt">
          <Container size="2">
            <Flex direction="column" gap="6">
              <SectionLabel>THE WIRE</SectionLabel>
              <Heading
                size="8"
                weight="light"
                className="display-heading"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                What your tools receive today.{" "}
                <span className="chrome-text-subtle">On every token.</span>
              </Heading>

              <Flex
                direction={{ initial: "column", md: "row" }}
                gap="4"
                align="stretch"
                style={{ width: "100%" }}
              >
                <Box
                  style={{
                    flex: 1,
                    borderRadius: "var(--radius-3)",
                    overflow: "hidden",
                    border: "1px solid var(--gray-4)",
                    background: "color-mix(in srgb, var(--red-3) 15%, var(--gray-2))",
                  }}
                >
                  <CodeBlock
                    code={BEFORE_WIRE}
                    filename="before — raw SSE stream"
                    highlightLines={[2, 5, 6]}
                  />
                </Box>
                <Flex align="center" justify="center" style={{ flexShrink: 0 }}>
                  <Text
                    className="pulse-arrow"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "24px",
                      color: "var(--gray-8)",
                    }}
                  >
                    →
                  </Text>
                </Flex>
                <Box
                  style={{
                    flex: 1,
                    borderRadius: "var(--radius-3)",
                    overflow: "hidden",
                    border: "1px solid var(--gray-4)",
                    background: "color-mix(in srgb, var(--grass-3) 20%, var(--gray-2))",
                  }}
                >
                  <CodeBlock
                    code={AFTER_WIRE}
                    filename="after — Omega Boost"
                  />
                </Box>
              </Flex>

              <Text
                size="2"
                style={{
                  color: "var(--grass-11)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                }}
              >
                650 bytes → 40 bytes. Same token. Same information that matters. In SIGIL
                binary mode: 1.5 bytes average.
              </Text>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Features — Bento Grid */}
      <SectionReveal>
        <Section size="3" className="section-movement">
          <Container size="3">
            <Flex direction="column" gap="6">
              <SectionLabel>WHAT IT DOES</SectionLabel>
              <Heading
                size="8"
                weight="light"
                className="display-heading"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                Every model, one format out.
              </Heading>
            </Flex>
            <Box style={{ marginTop: "var(--space-6)" }}>
              <BentoGrid columns={3}>
                {FEATURES.map((f) => (
                  <BentoCell
                    key={f.label}
                    span={f.span}
                    label={f.label}
                    title={f.title}
                    body={f.body}
                  />
                ))}
              </BentoGrid>
            </Box>
          </Container>
        </Section>
      </SectionReveal>

      {/* Provider Coverage */}
      <SectionReveal>
        <Section size="3" className="section-movement section-alt">
          <Container size="3">
            <Flex direction="column" gap="6" align="center" style={{ textAlign: "center" }}>
              <SectionLabel>PROVIDER COVERAGE</SectionLabel>
              <Heading
                size="7"
                weight="light"
                className="display-heading"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                Every provider. Consistent output.
              </Heading>
              <LogoTicker items={PROVIDERS} />
              <Text
                size="2"
                style={{
                  color: "var(--gray-10)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  maxWidth: "480px",
                }}
              >
                Each provider has a dedicated adapter that handles its specific
                format, quirks, and edge cases. Adding a new provider is ~200
                lines. Community contributions welcome.
              </Text>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Benchmark — visual chart + terminal as secondary */}
      <SectionReveal>
        <Section size="3" className="section-movement">
          <Container size="2">
            <Flex direction="column" gap="6">
              <SectionLabel>BENCHMARK</SectionLabel>
              <Heading
                size="8"
                weight="light"
                className="display-heading"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                Measure it yourself.
              </Heading>
              <Text
                size="3"
                style={{
                  color: "var(--gray-11)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  lineHeight: 1.65,
                }}
              >
                Don&apos;t take our word for it. Run the benchmark against your
                own providers with your own keys.
              </Text>
              {/* Visual compression chart */}
              <Flex
                gap="3"
                wrap="wrap"
                align="end"
                style={{
                  padding: "var(--space-5)",
                  borderRadius: "var(--radius-3)",
                  border: "1px solid var(--gray-4)",
                  background: "color-mix(in srgb, var(--gray-2) 80%, transparent)",
                }}
              >
                {[
                  { name: "OpenAI", before: 648, after: 38 },
                  { name: "Anthropic", before: 592, after: 35 },
                  { name: "Baseten", before: 703, after: 42 },
                  { name: "Ollama", before: 489, after: 31 },
                ].map((p) => (
                  <Flex key={p.name} direction="column" align="center" gap="2" style={{ flex: 1, minWidth: 80 }}>
                    <Text size="1" className="overline" style={{ color: "var(--gray-9)" }}>{p.name}</Text>
                    <Flex gap="1" align="end" style={{ height: 100 }}>
                      <Box
                        style={{
                          width: 24,
                          height: (p.before / 800) * 100,
                          backgroundColor: "var(--red-6)",
                          borderRadius: "var(--radius-1)",
                          opacity: 0.8,
                        }}
                        title={`${p.before} bytes/tok`}
                      />
                      <Box
                        style={{
                          width: 24,
                          height: Math.max(12, (p.after / 800) * 100),
                          backgroundColor: "var(--grass-7)",
                          borderRadius: "var(--radius-1)",
                        }}
                        title={`${p.after} bytes/tok`}
                      />
                    </Flex>
                    <Text size="1" style={{ color: "var(--gray-8)", fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                      {p.before} → {p.after}
                    </Text>
                  </Flex>
                ))}
              </Flex>
              <CodeBlock
                code={BENCHMARK_OUTPUT}
                filename="omega-boost benchmark"
                highlightLines={[7, 8, 9, 10]}
                maxHeight="360px"
              />
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Installation — full-width feel, 1 min badge */}
      <SectionReveal>
        <Section size="3" id="install" className="section-movement section-alt" style={{ width: "100%" }}>
          <Container size="3">
            <Flex direction="column" gap="6" align="center" style={{ textAlign: "center" }}>
              <Flex align="center" gap="3" wrap="wrap" justify="center">
                <SectionLabel>INSTALL</SectionLabel>
                <Box
                  style={{
                    padding: "var(--space-1) var(--space-3)",
                    borderRadius: "var(--radius-2)",
                    border: "1px solid var(--grass-6)",
                    background: "color-mix(in srgb, var(--grass-4) 40%, transparent)",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "11px",
                    color: "var(--grass-11)",
                    letterSpacing: "0.05em",
                  }}
                >
                  1 min to install
                </Box>
              </Flex>
              <Heading
                size="8"
                weight="light"
                className="display-heading"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                30 seconds.{" "}
                <span className="chrome-text-subtle">Zero config.</span>
              </Heading>
              <Text
                size="3"
                style={{
                  color: "var(--gray-11)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  lineHeight: 1.65,
                }}
              >
                One command. Omega Boost auto-detects your tools, reads your
                existing API keys, starts the proxy, and offers to configure
                everything.
              </Text>
              <CodeBlock
                code={INSTALL_OUTPUT}
                filename="terminal"
                maxHeight="400px"
              />
              <Tabs.Root defaultValue="bun">
                <Tabs.List>
                  <Tabs.Trigger value="bun">bun</Tabs.Trigger>
                  <Tabs.Trigger value="npm">npm</Tabs.Trigger>
                  <Tabs.Trigger value="brew">Homebrew</Tabs.Trigger>
                  <Tabs.Trigger value="cargo">Cargo</Tabs.Trigger>
                  <Tabs.Trigger value="nix">Nix</Tabs.Trigger>
                  <Tabs.Trigger value="docker">Docker</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="bun">
                  <Box pt="3">
                    <Code
                      size="3"
                      style={{
                        fontFamily:
                          "var(--font-jetbrains-mono), monospace",
                      }}
                    >
                      bun run omega-boost
                    </Code>
                  </Box>
                </Tabs.Content>
                <Tabs.Content value="npm">
                  <Box pt="3">
                    <Code
                      size="3"
                      style={{
                        fontFamily:
                          "var(--font-jetbrains-mono), monospace",
                      }}
                    >
                      npm i -g omega-boost && omega-boost start
                    </Code>
                  </Box>
                </Tabs.Content>
                <Tabs.Content value="brew">
                  <Box pt="3">
                    <Code
                      size="3"
                      style={{
                        fontFamily:
                          "var(--font-jetbrains-mono), monospace",
                      }}
                    >
                      brew install omega-boost
                    </Code>
                  </Box>
                </Tabs.Content>
                <Tabs.Content value="cargo">
                  <Box pt="3">
                    <Code
                      size="3"
                      style={{
                        fontFamily:
                          "var(--font-jetbrains-mono), monospace",
                      }}
                    >
                      cargo install omega-boost
                    </Code>
                  </Box>
                </Tabs.Content>
                <Tabs.Content value="nix">
                  <Box pt="3">
                    <Code
                      size="3"
                      style={{
                        fontFamily:
                          "var(--font-jetbrains-mono), monospace",
                      }}
                    >
                      nix run github:straylight-ai/omega-boost
                    </Code>
                  </Box>
                </Tabs.Content>
                <Tabs.Content value="docker">
                  <Box pt="3">
                    <Code
                      size="3"
                      style={{
                        fontFamily:
                          "var(--font-jetbrains-mono), monospace",
                      }}
                    >
                      docker run -p 10557:10557
                      ghcr.io/straylight-ai/omega-boost
                    </Code>
                  </Box>
                </Tabs.Content>
              </Tabs.Root>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Security — bento grid with icons */}
      <SectionReveal>
        <Section size="3" className="section-movement">
          <Container size="3">
            <Flex direction="column" gap="6">
              <SectionLabel>SECURITY</SectionLabel>
              <Heading
                size="8"
                weight="light"
                className="display-heading"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                Your keys. Your machine.{" "}
                <span className="chrome-text-subtle">Your data.</span>
              </Heading>
              <BentoGrid columns={3}>
                {SECURITY_ITEMS.map((item) => (
                  <BentoCell
                    key={item.label}
                    span={1}
                    label={item.label}
                    title={item.title}
                    body={item.body}
                    visual={
                      <Text
                        style={{
                          fontFamily: "var(--font-outfit), system-ui, sans-serif",
                          fontWeight: 300,
                          fontSize: "28px",
                          lineHeight: 1,
                          color: "var(--gray-7)",
                        }}
                      >
                        {item.label === "LOCAL ONLY" ? "⌂" : item.label === "BYOK" ? "🔑" : item.label === "NO ACCOUNT" ? "◯" : item.label === "NO TELEMETRY" ? "⊙" : item.label === "OPEN SOURCE" ? "⟨⟩" : "↩"}
                      </Text>
                    }
                    visualPosition="top"
                  />
                ))}
              </BentoGrid>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Pricing — clean centered callout with gradient accent line */}
      <SectionReveal>
        <Section size="3" className="section-movement section-alt">
          <Container size="2">
            <Flex
              direction="column"
              align="center"
              gap="5"
              style={{ textAlign: "center" }}
            >
              <div className="divider-gradient" style={{ width: "100%", maxWidth: 200, margin: "0 auto var(--space-4)" }} />
              <SectionLabel>PRICING</SectionLabel>
              <Heading
                size="9"
                weight="light"
                className="display-heading"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Free. Forever. <span className="chrome-text-subtle">MIT Licensed.</span>
              </Heading>
              <Text
                size="3"
                style={{
                  color: "var(--gray-11)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  lineHeight: 1.65,
                  maxWidth: "480px",
                }}
              >
                Omega Boost is MIT-licensed and free. Bring your own API keys. No
                account. No usage limits. No trial period. The core proxy will
                always be free and open source.
              </Text>
              <Text
                size="2"
                style={{
                  color: "var(--gray-9)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                }}
              >
                Team features (shared dashboard, hosted proxy, advanced routing)
                coming later for those who need them.
              </Text>
              <div className="divider-gradient" style={{ width: "100%", maxWidth: 200, margin: "var(--space-4) 0 0" }} />
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* CLI Reference */}
      <SectionReveal>
        <Section size="3" className="section-movement">
          <Container size="2">
            <Flex direction="column" gap="6">
              <SectionLabel>CLI REFERENCE</SectionLabel>
              <Heading
                size="7"
                weight="light"
                className="display-heading"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                Commands
              </Heading>
              <Flex direction="column" gap="3">
                {CLI_ITEMS.map((item) => (
                  <Box key={item.title} className="glow-card" style={{ padding: "var(--space-4)" }}>
                    <Code
                      size="2"
                      style={{
                        fontFamily:
                          "var(--font-jetbrains-mono), monospace",
                        display: "block",
                        marginBottom: "var(--space-2)",
                        color: "var(--gray-12)",
                      }}
                    >
                      {item.title}
                    </Code>
                    <pre
                      style={{
                        margin: 0,
                        fontFamily:
                          "var(--font-jetbrains-mono), monospace",
                        fontSize: "13px",
                        whiteSpace: "pre-wrap",
                        color: "var(--gray-10)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.body}
                    </pre>
                  </Box>
                ))}
              </Flex>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Final CTA */}
      <SectionReveal>
        <Section size="3" className="section-movement section-alt">
          <Container size="2">
            <Flex
              direction="column"
              align="center"
              gap="6"
              style={{ textAlign: "center" }}
            >
              <Heading
                size="8"
                weight="light"
                className="display-heading"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Fix the wire.{" "}
                <span className="chrome-text-subtle">Keep building.</span>
              </Heading>
              <Code
                size="3"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  padding: "var(--space-2) var(--space-4)",
                }}
              >
                $ bun run omega-boost
              </Code>
              <Button
                size="4"
                variant="solid"
                highContrast
                className="btn-chrome"
                asChild
              >
                <Link href="/boost#install">Get Started</Link>
              </Button>
              <Text
                size="2"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "13px",
                  color: "var(--gray-9)",
                }}
              >
                the result is saved
              </Text>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>
    </main>
  );
}
