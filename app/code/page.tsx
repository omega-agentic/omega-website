import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container, Flex, Heading, Text, Button, Grid, Box, TextField } from "@radix-ui/themes";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TerminalBlock } from "@/components/ui/TerminalBlock";
import { SectionReveal as Reveal } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Omega Code — Coming Soon",
  description:
    "The coding agent that never forgets. Persistent memory. Obligation tracking. Cryptographic attestation. Join the waitlist.",
};

const FEATURE_BLOCKS = [
  {
    label: "MEMORY (CAS)",
    body: "Content-addressed storage. Unlimited. Permanent. Day 1: learns your architecture. Day 30: knows patterns you forgot you wrote. Day 100: understands your codebase better than you do. Every session compounds on every session before it.",
  },
  {
    label: "OBLIGATIONS (LEDGER)",
    body: "Every file opened gets closed. Every process spawned gets joined. Every network connection terminated. Tool calls don't silently fail. If it doesn't resolve, it doesn't attest. Resources are tracked at the type level.",
  },
  {
    label: "RECEIPTS (ATTESTATION)",
    body: "Cryptographic proof of every action. Know exactly what the agent did, when, and why. The attestation chain is tamper-evident. Audit any session. Reproduce any result.",
  },
  {
    label: "PARALLEL AGENTS",
    body: "Multiple agents working the same task simultaneously in sandboxed environments. Copy-on-write filesystems. Each explores a different approach. You pick the best diff. The others are discarded cleanly.",
  },
  {
    label: "MICROSECOND RENDERING",
    body: "Built in Haskell on Brick. The rendering loop runs in microseconds. The terminal is a first-class interface, not a web browser pretending to be one.",
  },
];

export default function CodePage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <Section size="3">
        <Container size="2">
          <Flex direction="column" gap="6" style={{ maxWidth: "560px" }}>
            <SectionLabel>OMEGA CODE · COMING SOON</SectionLabel>
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
              Your coding agent, but it never forgets.
            </Heading>
            <Text
              size="4"
              style={{
                color: "var(--omega-accent)",
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                lineHeight: 1.65,
              }}
            >
              Omega Code is the coding agent rebuilt on the corrected stack. Persistent memory. Obligation tracking. Cryptographic attestation. Parallel agents in sandboxes.
            </Text>
            <Button size="4" variant="solid" highContrast asChild>
              <Link href="/code#waitlist">Join the waitlist →</Link>
            </Button>
            <Text size="1" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--omega-accent)" }}>
              npx omega-code — coming Q1 2026
            </Text>
          </Flex>
        </Container>
      </Section>

      {/* Five Differences */}
      <Reveal>
        <Section size="3" style={{ backgroundColor: "var(--gray-2)" }}>
          <Container size="2">
            <Flex direction="column" gap="8">
              <SectionLabel>WHAT&apos;S DIFFERENT</SectionLabel>
              <Grid columns={{ initial: "1", md: "2" }} gap="6">
                {FEATURE_BLOCKS.map((block) => (
                  <Box
                    key={block.label}
                    style={{
                      padding: "var(--space-5)",
                      border: "1px solid var(--omega-border)",
                      borderRadius: "var(--radius-2)",
                    }}
                  >
                    <Text
                      size="1"
                      style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--omega-accent)",
                        marginBottom: "var(--space-3)",
                      }}
                    >
                      {block.label}
                    </Text>
                    <Text
                      size="3"
                      style={{
                        fontFamily: "var(--font-outfit), system-ui, sans-serif",
                        lineHeight: 1.6,
                        color: "var(--gray-12)",
                      }}
                    >
                      {block.body}
                    </Text>
                  </Box>
                ))}
              </Grid>
            </Flex>
          </Container>
        </Section>
      </Reveal>

      {/* The Gap */}
      <Reveal>
        <Section size="3">
          <Container size="2">
            <Flex direction="column" gap="6">
              <Heading size="8" weight="medium">
                The gap.
              </Heading>
              <Text
                size="4"
                style={{
                  color: "var(--omega-accent)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  lineHeight: 1.65,
                }}
              >
                200K+ GitHub stars across the major coding agents. The demand is real. Developers want agents that work. None of them have persistent memory. Every session starts from zero. One command changes that.
              </Text>
              <TerminalBlock copyText="$ npx omega-code">$ npx omega-code</TerminalBlock>
            </Flex>
          </Container>
        </Section>
      </Reveal>

      {/* Waitlist */}
      <Reveal>
        <Section size="3" id="waitlist" style={{ backgroundColor: "var(--gray-2)" }}>
          <Container size="2">
            <Flex direction="column" gap="6" style={{ maxWidth: "480px" }}>
              <Heading size="8" weight="medium">
                Get early access.
              </Heading>
              <form
                action="#"
                method="post"
                style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}
              >
                <TextField.Root name="email" type="email" placeholder="your@email.com" size="3" required />
                <Button type="submit" size="3" variant="solid" highContrast>
                  Join →
                </Button>
              </form>
              <Text size="2" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif" }}>
                We&apos;ll email you once. When it&apos;s ready. Nothing else. No newsletter. No spam. We don&apos;t waste your time either.
              </Text>
            </Flex>
          </Container>
        </Section>
      </Reveal>

      {/* Bridge to Boost */}
      <Reveal>
        <Section size="3">
          <Container size="2">
            <Flex direction="column" align="center" gap="6" style={{ textAlign: "center" }}>
              <Text
                size="4"
                style={{
                  color: "var(--omega-accent)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  lineHeight: 1.65,
                  maxWidth: "560px",
                }}
              >
                While you wait — Omega Boost is available now. The drop-in proxy that fixes the wire protocol your current tools run on. Same foundation. Shipping today.
              </Text>
              <Flex gap="4" align="center" wrap="wrap" justify="center">
                <Button size="4" variant="solid" highContrast asChild>
                  <Link href="/boost">Try Omega Boost →</Link>
                </Button>
                <TerminalBlock copyText="npx omega-boost">npx omega-boost</TerminalBlock>
              </Flex>
            </Flex>
          </Container>
        </Section>
      </Reveal>

      <Reveal>
        <Section size="3">
          <Container size="2">
            <Flex justify="center">
              <Text size="2" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "13px", color: "var(--omega-accent)" }}>
                the result is saved
              </Text>
            </Flex>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}
