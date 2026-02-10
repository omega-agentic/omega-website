import type { Metadata } from "next";
import Link from "next/link";
import {
  Section,
  Container,
  Flex,
  Heading,
  Text,
  Box,
  Grid,
} from "@radix-ui/themes";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { GlowCard } from "@/components/ui/GlowCard";
import { BentoGrid, BentoCell } from "@/components/ui/BentoGrid";

export const metadata: Metadata = {
  title: "Omega Technology — Built from First Principles",
  description:
    "SIGIL protocol. Continuity stack. Content-addressed storage. Formally verified in Lean4. 32 theorems. 0 sorry.",
};

const SIGIL_TABLE = `                     SSE/JSON (current)    SIGIL
Bytes per token      ~650                  ~1.5
Tool call parsing    Text matching         State machine
Syntax errors        ~15%                  0%
Streaming            Splits anywhere       Semantic frames
Byte order           Big-endian            Little-endian (zero-copy)
Schema               Implicit              Content-addressed`;

const SIGIL_ENCODING = `0xxxxxxx  = hot token (ID in 7 bits)    — MOST COMMON
10xxxxxx  = extended token (varint)
1100xxxx  = stream control:
    0xC0 = CHUNK_END
    0xC1 = TOOL_CALL_START
    0xC2 = TOOL_CALL_END
    0xC3 = THINK_START
    0xC4 = THINK_END
    0xC5 = CODE_BLOCK_START
    0xC6 = CODE_BLOCK_END
    0xCF = STREAM_END`;

const STACK_LAYERS = [
  {
    title: "PRODUCTS",
    body: "Omega Boost \u00B7 Omega Chat \u00B7 Omega Code \u00B7 Omega SDK",
  },
  {
    title: "PROTOCOL",
    body: "SIGIL \u2014 typed frames, deterministic tool calls",
  },
  {
    title: "BUILD",
    body: "Armitage \u2014 STM orchestration, DICE computation\nDhall \u2014 System F\u03C9 config (total, decidable)",
  },
  {
    title: "MEMORY",
    body: "freeside \u2014 content-addressed store\nHash is identity. Same content \u2192 same path.",
  },
  {
    title: "COMPUTE",
    body: "isospin-microvm \u2014 GPU passthrough for Firecracker\nBlackwell hardware \u2014 1397 TFLOPS FP4 measured",
  },
  {
    title: "PROOFS",
    body: "villa-straylight \u2014 Lean4, 32+ theorems, 0 sorry\nCompiles against mathlib 4.26",
  },
];

const TRUST_LEVELS = [
  {
    label: "DISTANCE 0",
    title: "kernel",
    body: "rfl, Lean\u2019s type theory. Self-evident.",
  },
  {
    label: "DISTANCE 1",
    title: "crypto",
    body: "+ SHA256, ed25519. Standard cryptographic assumptions.",
  },
  {
    label: "DISTANCE 2",
    title: "os",
    body: "+ namespaces, syscalls. Operating system guarantees.",
  },
  {
    label: "DISTANCE 3",
    title: "toolchain",
    body: "+ compilers. Trusted build toolchain.",
  },
  {
    label: "DISTANCE 4",
    title: "consensus",
    body: "+ human agreement. Social layer.",
  },
];

const RESEARCH_LINKS = [
  {
    title: "The Continuity Project \u2014 The First Year",
    description: "Full technical specification. Lean4 proofs. The thesis.",
    href: "https://docs.omega.ms/continuity",
    author: "Straylight",
    date: "2025",
  },
  {
    title: "SIGIL Executive Summary",
    description: "Protocol specification and strategic landscape.",
    href: "https://docs.omega.ms/sigil",
    author: "Straylight",
    date: "2025",
  },
  {
    title: "The Compounding Advantage",
    description:
      "Op-ed on tool-augmented agents vs. raw LLM access. Cryptographically attested.",
    href: "https://docs.omega.ms/compounding",
    author: "Straylight",
    date: "2025",
  },
  {
    title: "Straylight Cube: The Triptych",
    description:
      "24 theorems. 9 axioms. 1 intentional sorry. The formal proof, visualized.",
    href: "https://straylight.software/cube",
    author: "Straylight",
    date: "2024",
  },
];

export default function TechnologyPage() {
  return (
    <main>
      {/* Hero — with visual architecture diagram (Omega stack layers) */}
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
          >
            <Flex direction="column" gap="6" style={{ maxWidth: "560px", flex: 1 }}>
              <SectionLabel>TECHNOLOGY</SectionLabel>
              <Heading
                size="9"
                weight="light"
                className="display-heading"
                style={{
                  fontSize: "clamp(2.25rem, 4vw, 4rem)",
                }}
              >
                Built from first principles.{" "}
                <span className="chrome-text-subtle">Proven correct.</span>
              </Heading>
              <Text
                size="4"
                style={{
                  color: "var(--gray-11)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  lineHeight: 1.65,
                }}
              >
                Omega isn&apos;t built on the current stack. It&apos;s a new
                foundation \u2014 derived from math, verified in Lean4, running on
                hardware we own.
              </Text>
            </Flex>
            {/* Architecture diagram — layered stack */}
            <Flex
              className="glass-card"
              direction="column"
              gap="0"
              style={{
                flex: 1,
                maxWidth: 320,
                overflow: "hidden",
                border: "1px solid var(--gray-4)",
                borderRadius: "var(--radius-4)",
              }}
            >
              {["Products", "Protocol", "Memory", "Compute", "Proofs"].map((label, i) => (
                <Box
                  key={label}
                  style={{
                    padding: "var(--space-2) var(--space-4)",
                    borderBottom: i < 4 ? "1px solid var(--gray-4)" : undefined,
                    backgroundColor: `color-mix(in srgb, var(--gray-${2 + (i % 2)}) 90%, transparent)`,
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "12px",
                    color: "var(--gray-11)",
                  }}
                >
                  {label}
                </Box>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Section>

      {/* SIGIL Protocol */}
      <SectionReveal>
        <Section size="3" id="sigil" className="section-movement section-alt">
          <Container size="2">
            <Flex direction="column" gap="6">
              <SectionLabel>THE PROTOCOL</SectionLabel>
              <Heading
                size="8"
                weight="light"
                className="display-heading"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                SIGIL:{" "}
                <span className="chrome-text-subtle">
                  Structured Interchange with Guaranteed Identity Layer
                </span>
              </Heading>
              <Text
                size="3"
                style={{
                  color: "var(--gray-11)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  lineHeight: 1.65,
                }}
              >
                Most protocols are designed by enumerating features. SIGIL is
                derived from the actual distribution of messages \u2014 Shannon and
                Huffman applied to LLM inference traffic. ~95% of messages are
                token continuations. The wire format reflects this: the most
                common operation is the cheapest.
              </Text>

              <CodeBlock
                code={SIGIL_TABLE}
                filename="SSE/JSON vs SIGIL"
                copyable={false}
              />

              <CodeBlock
                code={SIGIL_ENCODING}
                filename="SIGIL byte encoding"
                copyable={false}
              />

              <Text
                size="3"
                style={{
                  color: "var(--gray-11)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  lineHeight: 1.65,
                }}
              >
                Every model ships with a tokenizer. None ship with a
                specification. SIGIL changes that: typed tokenizer contracts,
                content-addressed schemas, test vectors that the model must
                pass. Type error at load time \u2014 not garbage output in
                production.
              </Text>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Continuity Stack */}
      <SectionReveal>
        <Section size="3" id="stack" className="section-movement">
          <Container size="2">
            <Flex direction="column" gap="6">
              <SectionLabel>THE STACK</SectionLabel>
              <Heading
                size="8"
                weight="light"
                className="display-heading"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                Every layer.{" "}
                <span className="chrome-text-subtle">Verified.</span>
              </Heading>
              <Text
                size="3"
                style={{
                  color: "var(--gray-11)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  lineHeight: 1.65,
                }}
              >
                Omega products run on the Continuity stack \u2014 infrastructure
                designed from formal foundations up. Content-addressed storage.
                Cryptographic attestation. Typed derivations.
              </Text>

              {/* Vertical layered diagram — each layer glass card, expand on hover */}
              <Flex direction="column" gap="2">
                {STACK_LAYERS.map((layer, i) => (
                  <Box
                    key={layer.title}
                    className="glass-card"
                    style={{
                      padding: "var(--space-4) var(--space-5)",
                      transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                    }}
                  >
                    <Text
                      className="overline"
                      style={{
                        display: "block",
                        marginBottom: "var(--space-2)",
                        color: "var(--gray-9)",
                      }}
                    >
                      {layer.title}
                    </Text>
                    <Text
                      size="2"
                      style={{
                        fontFamily:
                          "var(--font-jetbrains-mono), monospace",
                        color: "var(--gray-11)",
                        whiteSpace: "pre-line",
                        fontSize: "13px",
                      }}
                    >
                      {layer.body}
                    </Text>
                  </Box>
                ))}
              </Flex>

              <Text
                size="3"
                style={{
                  color: "var(--gray-11)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  lineHeight: 1.65,
                }}
              >
                The coeffect algebra tracks what each computation requires from
                the environment. Every requirement is explicit. Every discharge
                is attested. Cache invalidation isn&apos;t hard when the cache
                key includes everything the computation actually depends on.
              </Text>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Content-Addressed Identity */}
      <SectionReveal>
        <Section size="3" className="section-movement section-alt">
          <Container size="2">
            <Flex
              direction="column"
              align="center"
              gap="6"
              style={{ textAlign: "center" }}
            >
              <SectionLabel>IDENTITY</SectionLabel>
              <Heading
                size="9"
                weight="light"
                className="display-heading"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Hash is identity.
              </Heading>
              <Text
                size="3"
                style={{
                  color: "var(--gray-11)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  lineHeight: 1.65,
                  maxWidth: "560px",
                }}
              >
                Same content \u2192 same hash \u2192 same path. Different content \u2192
                different hash \u2192 different path. Caching is trivial. Tampering is
                detectable. Deduplication is automatic. This extends to
                everything: model weights, tokenizer specs, tool format grammars,
                build outputs, attestation chains.
              </Text>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Formal Verification — 32 checkmarks animate on scroll */}
      <SectionReveal>
        <Section size="3" className="section-movement">
          <Container size="3">
            <Flex direction="column" gap="6">
              <SectionLabel>PROOF</SectionLabel>
              <Heading
                size="8"
                weight="light"
                className="display-heading"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                32 theorems.{" "}
                <span className="chrome-text-subtle">0 sorry.</span>
              </Heading>
              <Text
                size="3"
                style={{
                  color: "var(--gray-11)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  lineHeight: 1.65,
                  maxWidth: "560px",
                }}
              >
                The Continuity stack is formally verified in Lean4. Not
                &quot;tested&quot; \u2014 proven. The type checker doesn&apos;t care if
                the code was written by a human or a model. rfl either holds or
                it doesn&apos;t.
              </Text>
            </Flex>

            {/* 32 green checkmarks grid — animate in on scroll */}
            <Flex
              wrap="wrap"
              gap="2"
              justify="center"
              style={{
                marginTop: "var(--space-6)",
                padding: "var(--space-5)",
                borderRadius: "var(--radius-4)",
                border: "1px solid var(--gray-4)",
                background: "color-mix(in srgb, var(--gray-2) 80%, transparent)",
              }}
            >
              {Array.from({ length: 32 }, (_, i) => (
                <Box
                  key={i}
                  className="reveal-scale"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "var(--radius-2)",
                    backgroundColor: "var(--grass-4)",
                    color: "var(--grass-11)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    animationDelay: `${i * 30}ms`,
                  }}
                  title={`Theorem ${i + 1}`}
                >
                  ✓
                </Box>
              ))}
            </Flex>

            {/* Trust distance grid */}
            <Grid
              columns={{ initial: "1", sm: "2", md: "5" }}
              gap="3"
              style={{ marginTop: "var(--space-6)" }}
            >
              {TRUST_LEVELS.map((level) => (
                <GlowCard
                  key={level.label}
                  label={level.label}
                  title={level.title}
                  body={level.body}
                />
              ))}
            </Grid>

            <Box style={{ marginTop: "var(--space-6)" }}>
              <Text
                size="2"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  color: "var(--gray-9)",
                  fontSize: "12px",
                }}
              >
                All core theorems proven at distance \u2264 crypto. Compiles against
                mathlib 4.26.
              </Text>
            </Box>
          </Container>
        </Section>
      </SectionReveal>

      {/* Why Now */}
      <SectionReveal>
        <Section size="3" className="section-movement section-alt">
          <Container size="2">
            <Flex direction="column" gap="6">
              <SectionLabel>TIMING</SectionLabel>
              <Heading
                size="8"
                weight="light"
                className="display-heading"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                Choices dominate{" "}
                <span className="chrome-text-subtle">resources.</span>
              </Heading>
              <Text
                size="3"
                style={{
                  color: "var(--gray-11)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  lineHeight: 1.65,
                }}
              >
                The largest AI labs have extraordinary resources and thousands of
                talented engineers. But every architectural choice has been made
                \u2014 the API format, the tokenizer contracts, the serving stack,
                the customer integrations. Changing the wire protocol means
                changing every integration.
              </Text>
              <Text
                size="3"
                style={{
                  color: "var(--gray-11)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  lineHeight: 1.65,
                }}
              >
                We&apos;re building without that constraint. Different starting
                point, different choices, different outcomes. The capability
                frontier advances every month. The deployment infrastructure is
                where the compounding gains are.
              </Text>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Research */}
      <SectionReveal>
        <Section size="3" id="research" className="section-movement">
          <Container size="3">
            <Flex direction="column" gap="6">
              <SectionLabel>RESEARCH</SectionLabel>
              <Heading
                size="8"
                weight="light"
                className="display-heading"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                The work, in full.
              </Heading>
              <Grid columns={{ initial: "1", md: "2" }} gap="4">
                {RESEARCH_LINKS.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ textDecoration: "none" }}
                  >
                    <Box className="glow-card" style={{ padding: "var(--space-5)", height: "100%" }}>
                      <Text
                        weight="medium"
                        size="3"
                        style={{
                          fontFamily:
                            "var(--font-outfit), system-ui, sans-serif",
                          color: "var(--gray-12)",
                          display: "block",
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        size="2"
                        style={{
                          color: "var(--gray-10)",
                          fontFamily:
                            "var(--font-outfit), system-ui, sans-serif",
                          marginTop: "var(--space-2)",
                          display: "block",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.description}
                      </Text>
                      <Flex gap="2" style={{ marginTop: "var(--space-3)" }}>
                        <Text size="1" style={{ color: "var(--gray-8)", fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                          {item.author}
                        </Text>
                        <Text size="1" style={{ color: "var(--gray-8)", fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                          {item.date}
                        </Text>
                      </Flex>
                    </Box>
                  </Link>
                ))}
              </Grid>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Closing */}
      <Section size="3" className="section-movement section-alt">
        <Container size="2">
          <Flex justify="center">
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
    </main>
  );
}
