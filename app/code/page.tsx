import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  Section,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Grid,
  Box,
  Code,
  TextField,
} from "@radix-ui/themes";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionReveal as Reveal } from "@/components/ui/SectionReveal";
import { GlowCard } from "@/components/ui/GlowCard";
import { BentoGrid, BentoCell } from "@/components/ui/BentoGrid";

export const metadata: Metadata = {
  title: "Omega Code — Coming Soon",
  description:
    "The coding agent that never forgets. Persistent memory. Obligation tracking. Cryptographic attestation. Join the waitlist.",
};

const FEATURE_BLOCKS = [
  {
    label: "MEMORY",
    title: "Content-addressed storage",
    body: "Day 1: learns your architecture. Day 30: knows patterns you forgot you wrote. Day 100: understands your codebase better than you do. Every session compounds on every session before it.",
    span: 2 as const,
  },
  {
    label: "OBLIGATIONS",
    title: "Resource tracking at the type level",
    body: "Every file opened gets closed. Every process spawned gets joined. Every network connection terminated. If it doesn\u2019t resolve, it doesn\u2019t attest.",
    span: 1 as const,
  },
  {
    label: "ATTESTATION",
    title: "Cryptographic proof of every action",
    body: "Know exactly what the agent did, when, and why. The attestation chain is tamper-evident. Audit any session. Reproduce any result.",
    span: 1 as const,
  },
  {
    label: "PARALLEL AGENTS",
    title: "Multiple approaches, one decision",
    body: "Multiple agents working the same task simultaneously in sandboxed environments. Copy-on-write filesystems. Each explores a different approach. You pick the best diff.",
    span: 1 as const,
  },
  {
    label: "PERFORMANCE",
    title: "Microsecond rendering",
    body: "Built in Haskell on Brick. The rendering loop runs in microseconds. The terminal is a first-class interface, not a web browser pretending to be one.",
    span: 1 as const,
  },
];

const TIMELINE = [
  {
    number: "01",
    label: "DAY 1",
    body: "Agent learns your architecture, conventions, and patterns. First session builds the foundation of persistent memory.",
  },
  {
    number: "02",
    label: "DAY 30",
    body: "Knows patterns you forgot you wrote. Suggests refactors based on accumulated context. Memory compounds.",
  },
  {
    number: "03",
    label: "DAY 100",
    body: "Understands your codebase better than you do. Every interaction informed by everything before it. Geometric improvement.",
  },
];

export default function CodePage() {
  return (
    <main>
      {/* Hero — split: left headline + description, right timeline/memory illustration */}
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
              <SectionLabel>OMEGA CODE &middot; COMING SOON</SectionLabel>
              <Heading
                size="9"
                weight="light"
                className="display-heading"
                style={{
                  fontSize: "clamp(2.25rem, 4vw, 4rem)",
                }}
              >
                Your coding agent, but{" "}
                <span className="chrome-text-subtle">it never forgets.</span>
              </Heading>
              <Text
                size="4"
                style={{
                  color: "var(--gray-11)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  lineHeight: 1.65,
                }}
              >
                Omega Code is the coding agent rebuilt on the corrected stack.
                Persistent memory. Obligation tracking. Cryptographic attestation.
                Parallel agents in sandboxes.
              </Text>
              <Flex gap="3" align="center" wrap="wrap">
                <Button
                  size="4"
                  variant="solid"
                  highContrast
                  className="btn-chrome"
                  asChild
                >
                  <Link href="/code#waitlist">Join the waitlist</Link>
                </Button>
                <Text
                  size="1"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    color: "var(--gray-9)",
                  }}
                >
                  bun run omega-code — coming Q1 2026
                </Text>
              </Flex>
            </Flex>
            {/* Timeline visualization: sessions accumulating */}
            <Flex
              className="glass-card glow-accent"
              style={{
                padding: "var(--space-6)",
                flex: 1,
                maxWidth: 360,
                minHeight: 200,
              }}
            >
              <Flex direction="column" gap="4" style={{ width: "100%" }}>
                <Text size="1" className="overline" style={{ color: "var(--gray-9)" }}>
                  Memory over time
                </Text>
                <Flex gap="3" align="end" style={{ marginTop: "var(--space-2)" }}>
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Box
                      key={i}
                      style={{
                        flex: 1,
                        height: 24 + i * 18,
                        borderRadius: "var(--radius-2)",
                        backgroundColor: "var(--gray-4)",
                        opacity: 0.4 + (i / 6) * 0.5,
                      }}
                      title={`Session ${i}`}
                    />
                  ))}
                </Flex>
                <Flex justify="between" style={{ marginTop: "var(--space-2)" }}>
                  <Text size="1" style={{ color: "var(--gray-8)", fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                    Day 1
                  </Text>
                  <Text size="1" style={{ color: "var(--gray-8)", fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                    Day 100
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Section>

      {/* Timeline — how memory compounds */}
      <Reveal>
        <Section size="3" className="section-movement section-alt">
          <Container size="3">
            <Flex direction="column" gap="6">
              <SectionLabel>THE COMPOUNDING EFFECT</SectionLabel>
              <Heading
                size="8"
                weight="light"
                className="display-heading"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                Memory that{" "}
                <span className="chrome-text-subtle">gets better every day.</span>
              </Heading>
            </Flex>
            <Grid
              columns={{ initial: "1", md: "3" }}
              gap="4"
              style={{ marginTop: "var(--space-7)" }}
            >
              {TIMELINE.map((item) => (
                <GlowCard
                  key={item.label}
                  label={item.label}
                  title={item.body.split(".")[0] + "."}
                  body={item.body.split(".").slice(1).join(".").trim()}
                  icon={
                    <Text
                      className="stat-glow"
                      style={{
                        fontFamily: "var(--font-outfit), system-ui, sans-serif",
                        fontWeight: 250,
                        fontSize: "36px",
                        lineHeight: 1,
                        color: "var(--gray-7)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {item.number}
                    </Text>
                  }
                />
              ))}
            </Grid>
          </Container>
        </Section>
      </Reveal>

      {/* Features — Bento Grid */}
      <Reveal>
        <Section size="3" className="section-movement">
          <Container size="3">
            <Flex direction="column" gap="6">
              <SectionLabel>WHAT&apos;S DIFFERENT</SectionLabel>
              <Heading
                size="8"
                weight="light"
                className="display-heading"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                Five things no coding agent has.
              </Heading>
            </Flex>
            <Box style={{ marginTop: "var(--space-6)" }}>
              <BentoGrid columns={3}>
                {FEATURE_BLOCKS.map((block, i) => {
                  const visuals: Record<string, React.ReactNode> = {
                    MEMORY: (
                      <Flex gap="2" align="end" style={{ marginTop: "var(--space-2)" }}>
                        {[1, 2, 3, 4].map((j) => (
                          <Box key={j} style={{ flex: 1, height: 16 + j * 8, borderRadius: 4, backgroundColor: "var(--gray-4)" }} />
                        ))}
                      </Flex>
                    ),
                    OBLIGATIONS: (
                      <Flex gap="2" style={{ marginTop: "var(--space-2)" }}>
                        {[1, 2, 3].map((j) => (
                          <Text key={j} style={{ color: "var(--grass-9)", fontSize: 18 }}>✓</Text>
                        ))}
                      </Flex>
                    ),
                    ATTESTATION: (
                      <Text size="1" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "var(--gray-8)", marginTop: "var(--space-2)", wordBreak: "break-all" }}>
                        sha256:a3f2…
                      </Text>
                    ),
                    "PARALLEL AGENTS": (
                      <Flex gap="2" align="center" style={{ marginTop: "var(--space-2)" }}>
                        <Box style={{ width: 8, height: 20, backgroundColor: "var(--gray-5)", borderRadius: 2 }} />
                        <Flex gap="1">
                          <Box style={{ width: 6, height: 12, backgroundColor: "var(--gray-5)", borderRadius: 2 }} />
                          <Box style={{ width: 6, height: 12, backgroundColor: "var(--gray-5)", borderRadius: 2 }} />
                        </Flex>
                      </Flex>
                    ),
                    PERFORMANCE: (
                      <Box style={{ marginTop: "var(--space-2)", width: 40, height: 40, borderRadius: "50%", border: "2px solid var(--gray-6)", borderTopColor: "var(--grass-8)", transform: "rotate(-45deg)" }} />
                    ),
                  };
                  return (
                    <BentoCell
                      key={block.label}
                      span={block.span}
                      label={block.label}
                      title={block.title}
                      body={block.body}
                      visual={visuals[block.label]}
                      visualPosition="bottom"
                    />
                  );
                })}
              </BentoGrid>
            </Box>
          </Container>
        </Section>
      </Reveal>

      {/* The Gap */}
      <Reveal>
        <Section size="3" className="section-movement section-alt">
          <Container size="2">
            <Flex
              direction="column"
              align="center"
              gap="6"
              style={{ textAlign: "center" }}
            >
              <SectionLabel>THE GAP</SectionLabel>
              <Heading
                size="8"
                weight="light"
                className="display-heading"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                200K+ GitHub stars.{" "}
                <span className="chrome-text-subtle">Zero persistent memory.</span>
              </Heading>
              <Text
                size="3"
                style={{
                  color: "var(--gray-11)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  lineHeight: 1.65,
                  maxWidth: "520px",
                }}
              >
                The demand is real. Developers want agents that work. None of
                them have persistent memory. Every session starts from zero. One
                command changes that.
              </Text>
              <Code
                size="3"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  padding: "var(--space-2) var(--space-4)",
                }}
              >
                $ bun run omega-code
              </Code>
            </Flex>
          </Container>
        </Section>
      </Reveal>

      {/* Waitlist — centered full-width, glass-card form, glow accent, social proof */}
      <Reveal>
        <Section size="3" id="waitlist" className="section-movement" style={{ width: "100%" }}>
          <Container size="3">
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
                Get early access.
              </Heading>
              <Text
                size="2"
                style={{
                  color: "var(--gray-10)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                }}
              >
                Join 2,000+ developers on the waitlist.
              </Text>
              <Box className="glass-card glow-accent" style={{ padding: "var(--space-6)", width: "100%", maxWidth: 480 }}>
                <form
                  action="#"
                  method="post"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-4)",
                    width: "100%",
                  }}
                >
                  <TextField.Root
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    size="3"
                    required
                  />
                  <Button
                    type="submit"
                    size="3"
                    variant="solid"
                    highContrast
                    className="btn-chrome"
                  >
                    Join the waitlist
                  </Button>
                </form>
              </Box>
              <Text
                size="2"
                style={{
                  color: "var(--gray-9)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  maxWidth: "360px",
                }}
              >
                We&apos;ll email you once. When it&apos;s ready. Nothing else.
              </Text>
            </Flex>
          </Container>
        </Section>
      </Reveal>

      {/* Bridge to Boost — gradient divider, bento-style card */}
      <Reveal>
        <Section size="3" className="section-movement section-alt">
          <Container size="3">
            <div className="divider-gradient" style={{ width: "100%", maxWidth: 240, margin: "0 auto var(--space-6)" }} />
            <Box className="glow-card gradient-border" style={{ padding: "var(--space-7)", textAlign: "center" }}>
              <SectionLabel>WHILE YOU WAIT</SectionLabel>
              <Heading
                size="6"
                weight="light"
                className="display-heading"
                style={{ marginTop: "var(--space-2)", marginBottom: "var(--space-3)" }}
              >
                Omega Boost is available now
              </Heading>
              <Text
                size="3"
                style={{
                  color: "var(--gray-11)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  lineHeight: 1.65,
                  maxWidth: "520px",
                  margin: "0 auto var(--space-5)",
                }}
              >
                The drop-in proxy that fixes the wire protocol your current tools run on. Same
                foundation. Shipping today.
              </Text>
              <Flex gap="3" align="center" wrap="wrap" justify="center">
                <Button
                  size="4"
                  variant="solid"
                  highContrast
                  className="btn-chrome"
                  asChild
                >
                  <Link href="/boost">Try Omega Boost</Link>
                </Button>
                <Button size="4" variant="outline" asChild>
                  <Link href="/chat">Try Omega Chat</Link>
                </Button>
              </Flex>
              <Text
                size="2"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "13px",
                  color: "var(--gray-9)",
                  marginTop: "var(--space-4)",
                }}
              >
                the result is saved
              </Text>
            </Box>
          </Container>
        </Section>
      </Reveal>
    </main>
  );
}
