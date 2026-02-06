import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container, Flex, Heading, Text, Box, Grid } from "@radix-ui/themes";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Omega Technology — Built from First Principles",
  description:
    "SIGIL protocol. Continuity stack. Content-addressed storage. Formally verified in Lean4. 32 theorems. 0 sorry.",
};

const STACK_LAYERS = [
  { title: "PRODUCTS", body: "Omega Boost · Omega Code · Omega SDK" },
  { title: "PROTOCOL", body: "SIGIL — typed frames, deterministic tool calls" },
  { title: "BUILD", body: "Armitage — STM orchestration, DICE computation\nDhall — System Fω config (total, decidable)" },
  { title: "MEMORY", body: "freeside — content-addressed store\nHash is identity. Same content → same path." },
  { title: "COMPUTE", body: "isospin-microvm — GPU passthrough for Firecracker\nBlackwell hardware — 1397 TFLOPS FP4 measured" },
  { title: "PROOFS", body: "villa-straylight — Lean4, 32+ theorems, 0 sorry\nCompiles against mathlib 4.26" },
];

const RESEARCH_LINKS = [
  { title: "The Continuity Project — The First Year", description: "Full technical specification. Lean4 proofs. The thesis.", href: "#" },
  { title: "SIGIL Executive Summary", description: "Protocol specification and strategic landscape.", href: "#" },
  { title: "The Compounding Advantage", description: "Op-ed on tool-augmented agents vs. raw LLM access. Written by Kimi K2.5. Cryptographically attested.", href: "#" },
  { title: "Straylight Cube: The Triptych", description: "24 theorems. 9 axioms. 1 intentional sorry. The formal proof, visualized.", href: "https://straylight.software/cube" },
];

export default function TechnologyPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <Section size="3">
        <Container size="2">
          <Flex direction="column" gap="6" style={{ maxWidth: "560px" }}>
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
              Built from first principles. Proven correct.
            </Heading>
            <Text
              size="4"
              style={{
                color: "var(--omega-accent)",
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                lineHeight: 1.65,
              }}
            >
              Omega isn&apos;t built on the current stack. It&apos;s a new foundation — derived from math, verified in Lean4, running on hardware we own.
            </Text>
          </Flex>
        </Container>
      </Section>

      {/* SIGIL */}
      <SectionReveal>
        <Section size="3" id="sigil" style={{ backgroundColor: "var(--gray-2)" }}>
          <Container size="2">
            <Flex direction="column" gap="6">
              <SectionLabel>THE PROTOCOL</SectionLabel>
              <Heading size="8" weight="medium">
                SIGIL: Structured Interchange with Guaranteed Identity Layer
              </Heading>
              <Text size="4" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif", lineHeight: 1.65 }}>
                Most protocols are designed by enumerating features. SIGIL is derived from the actual distribution of messages — Shannon and Huffman applied to LLM inference traffic. ~95% of messages are token continuations. The wire format reflects this: the most common operation is the cheapest. Hot tokens encode in 1-2 bytes. Control frames mark semantic boundaries. The parser always knows which state it&apos;s in.
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
{`                     SSE/JSON (current)    SIGIL
Bytes per token      ~650                  ~1.5
Tool call parsing    Text matching         State machine
Syntax errors        ~15%                  0%
Streaming            Splits anywhere       Semantic frames
Byte order           Big-endian            Little-endian (zero-copy)
Schema               Implicit              Content-addressed`}
                </pre>
              </Box>
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
{`0xxxxxxx  = hot token (ID in 7 bits)    — MOST COMMON
10xxxxxx  = extended token (varint)
1100xxxx  = stream control:
    0xC0 = CHUNK_END
    0xC1 = TOOL_CALL_START
    0xC2 = TOOL_CALL_END
    0xC3 = THINK_START
    0xC4 = THINK_END
    0xC5 = CODE_BLOCK_START
    0xC6 = CODE_BLOCK_END
    0xCF = STREAM_END`}
                </pre>
              </Box>
              <Text size="4" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif", lineHeight: 1.65 }}>
                Every model ships with a tokenizer. None ship with a specification. SIGIL changes that: typed tokenizer contracts, content-addressed schemas, test vectors that the model must pass. Type error at load time — not garbage output in production.
              </Text>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Continuity Stack */}
      <SectionReveal>
        <Section size="3" id="stack">
          <Container size="2">
            <Flex direction="column" gap="6">
              <SectionLabel>THE STACK</SectionLabel>
              <Heading size="8" weight="medium">
                Every layer. Verified.
              </Heading>
              <Text size="4" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif", lineHeight: 1.65 }}>
                Omega products run on the Continuity stack — infrastructure designed from formal foundations up. Content-addressed storage. Cryptographic attestation. Typed derivations. Coeffect-indexed builds. Each layer proven correct independently, then composed.
              </Text>
              <Flex direction="column" gap="0" style={{ border: "1px solid var(--omega-border)", borderRadius: "var(--radius-2)", overflow: "hidden" }}>
                {STACK_LAYERS.map((layer) => (
                  <Box
                    key={layer.title}
                    style={{
                      padding: "var(--space-4)",
                      borderBottom: "1px solid var(--omega-border)",
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "13px",
                    }}
                  >
                    <Text weight="medium" style={{ color: "var(--gray-12)" }}>{layer.title}</Text>
                    <Text size="2" style={{ color: "var(--omega-accent)", whiteSpace: "pre-line", marginTop: "var(--space-1)" }}>{layer.body}</Text>
                  </Box>
                ))}
              </Flex>
              <Text size="4" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif", lineHeight: 1.65 }}>
                The coeffect algebra tracks what each computation requires from the environment — network access, authentication, sandbox isolation, specific environment variables. Every requirement is explicit. Every discharge is attested. Cache invalidation isn&apos;t hard when the cache key includes everything the computation actually depends on.
              </Text>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Content-Addressed */}
      <SectionReveal>
        <Section size="3" style={{ backgroundColor: "var(--gray-2)" }}>
          <Container size="2">
            <Flex direction="column" gap="6">
              <SectionLabel>IDENTITY</SectionLabel>
              <Heading size="8" weight="medium">
                Hash is identity.
              </Heading>
              <Text size="4" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif", lineHeight: 1.65 }}>
                A file path tells you nothing about whether the file changed, whether it matches someone else&apos;s, or whether it&apos;s safe to cache. A content hash tells you everything. Same content → same hash → same path. Different content → different hash → different path. Caching is trivial. Tampering is detectable. Deduplication is automatic. Sharing is global. This extends to everything in the stack: model weights, tokenizer specs, tool format grammars, build outputs, attestation chains. If the hashes match, the behavior matches. No version negotiation.
              </Text>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Formal Verification */}
      <SectionReveal>
        <Section size="3">
          <Container size="2">
            <Flex direction="column" gap="6">
              <SectionLabel>PROOF</SectionLabel>
              <Heading size="8" weight="medium">
                32 theorems. 0 sorry.
              </Heading>
              <Text size="4" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif", lineHeight: 1.65 }}>
                The Continuity stack is formally verified in Lean4. Not &quot;tested&quot; — proven. The type checker doesn&apos;t care if the code was written by a human or a model. rfl either holds or it doesn&apos;t. Key theorems: Cache correctness: same coset → same outputs. Build hermeticity: builds only access declared inputs. Attestation soundness: signatures are unforgeable. Obligation resolution: every opened resource is closed. Prevention sufficiency: any single lever breaks the failure conjunction. The proofs compile against mathlib 4.26. The axioms are standard cryptographic assumptions that every bank and government relies on today. Trust distance: kernel — 0: rfl, Lean&apos;s type theory; crypto — 1: + SHA256, ed25519; os — 2: + namespaces, syscalls; toolchain — 3: + compilers; consensus — 4: + human agreement. All core theorems proven at distance ≤ crypto.
              </Text>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Why Now */}
      <SectionReveal>
        <Section size="3" style={{ backgroundColor: "var(--gray-2)" }}>
          <Container size="2">
            <Flex direction="column" gap="6">
              <SectionLabel>TIMING</SectionLabel>
              <Heading size="8" weight="medium">
                Choices dominate resources.
              </Heading>
              <Text size="4" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif", lineHeight: 1.65 }}>
                The largest AI labs have extraordinary resources and thousands of talented engineers. But every architectural choice has been made — the API format, the tokenizer contracts, the serving stack, the customer integrations that depend on all of it. Changing the wire protocol means changing every integration. Changing tokenizer contracts means changing every fine-tune. Moving Python from the hot path means changing every workflow. These aren&apos;t failures of intelligence or effort. They&apos;re the natural consequence of building at scale with paying customers. The choices that got them here are the choices that keep them here. We&apos;re building without that constraint. Different starting point, different choices, different outcomes. The capability frontier advances every month. The deployment infrastructure is where the compounding gains are. That&apos;s where we build.
              </Text>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Research */}
      <SectionReveal>
        <Section size="3" id="research">
          <Container size="2">
            <Flex direction="column" gap="6">
              <SectionLabel>RESEARCH</SectionLabel>
              <Heading size="8" weight="medium">
                The work, in full.
              </Heading>
              <Grid columns={{ initial: "1", md: "2" }} gap="4">
                {RESEARCH_LINKS.map((item) => (
                  <Link key={item.title} href={item.href} style={{ textDecoration: "none" }}>
                    <Box
                      style={{
                        padding: "var(--space-4)",
                        border: "1px solid var(--omega-border)",
                        borderRadius: "var(--radius-2)",
                      }}
                    >
                      <Text weight="medium" size="3" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", color: "var(--gray-12)" }}>{item.title}</Text>
                      <Text size="2" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif", marginTop: "var(--space-2)" }}>{item.description}</Text>
                    </Box>
                  </Link>
                ))}
              </Grid>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      <SectionReveal>
        <Section size="3">
          <Container size="2">
            <Flex justify="center">
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
