import type { Metadata } from "next";
import Link from "next/link";
import {
  Section,
  Container,
  Flex,
  Heading,
  Text,
  Box,
} from "@radix-ui/themes";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlowCard } from "@/components/ui/GlowCard";
import { BentoGrid, BentoCell } from "@/components/ui/BentoGrid";

export const metadata: Metadata = {
  title: "Omega \u2014 About",
  description:
    "We build the foundation. Straylight Infrastructure. San Juan, Puerto Rico. Memory that compounds. Execution that's provable. A wire protocol that works.",
};

const BELIEFS = [
  {
    label: "ARCHITECTURE",
    title: "Choices dominate resources",
    body: "The right architecture with modest resources outperforms the wrong architecture with unlimited resources. We choose carefully and build from first principles.",
  },
  {
    label: "EFFICIENCY",
    title: "Waste nothing",
    body: "Every byte, every millisecond, every watt, every word. Our domain is omega.ms \u2014 millisecond. Under 1ms overhead for everything we ship.",
    featured: true,
  },
  {
    label: "VERIFICATION",
    title: "Prove it or don\u2019t say it",
    body: "We use formal verification because it\u2019s the only way to make claims that are actually checkable. 32 theorems. 0 sorry. The proofs are public.",
  },
  {
    label: "PERMANENCE",
    title: "Build to last",
    body: "The brand aesthetic is \u201Cexpensive paper\u201D \u2014 permanent, precise, archival. Not a SaaS dashboard. Something worth preserving.",
  },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/straylight-ai",
  },
  {
    label: "X / Twitter",
    href: "https://x.com/omega_ms",
  },
  {
    label: "Discord",
    href: "https://discord.gg/omega",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero — "We build the foundation" with large omega background glow */}
      <Section
        size="3"
        className="section-hero-gradient"
        style={{
          paddingTop: "120px",
          paddingBottom: "var(--space-8)",
          position: "relative",
        }}
      >
        <Box
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(80vw, 480px)",
            height: "min(80vw, 480px)",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, var(--gray-4) 0%, transparent 70%)",
            opacity: 0.5,
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <Container size="2" style={{ position: "relative", zIndex: 1 }}>
          <Flex direction="column" gap="6" style={{ maxWidth: "600px" }}>
            <SectionLabel>ABOUT</SectionLabel>
            <Heading
              size="9"
              weight="light"
              className="display-heading"
              style={{
                fontSize: "clamp(2.25rem, 4vw, 4rem)",
              }}
            >
              We build the{" "}
              <span className="chrome-text-subtle">foundation.</span>
            </Heading>
            <Text
              size="4"
              style={{
                color: "var(--gray-11)",
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                lineHeight: 1.65,
              }}
            >
              Omega is built by Straylight Infrastructure. Intelligent agents are
              here \u2014 coding, building, shipping. The models behind them advance
              every month. The infrastructure underneath hasn&apos;t kept pace.
              We&apos;re building that infrastructure.
            </Text>
          </Flex>
        </Container>
      </Section>

      {/* Mission — full-width callout with large italic text (Linear-style) */}
      <SectionReveal>
        <Section size="3" className="section-movement section-alt" style={{ width: "100%" }}>
          <Container size="3">
            <Flex
              direction="column"
              align="center"
              gap="5"
              style={{ textAlign: "center" }}
            >
              <Text
                size="6"
                weight="regular"
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  fontStyle: "italic",
                  color: "var(--gray-11)",
                  lineHeight: 1.5,
                  maxWidth: "720px",
                  letterSpacing: "-0.02em",
                }}
              >
                Memory that compounds. Execution that&apos;s provable. A wire protocol that works.
              </Text>
              <Text
                size="2"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  color: "var(--gray-9)",
                  fontSize: "13px",
                }}
              >
                Formally verified in Lean4. Running on hardware we own. Shipping
                from San Juan.
              </Text>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Principles — 4 glow cards in 2x2 bento grid, icon per card */}
      <SectionReveal>
        <Section size="3" className="section-movement">
          <Container size="3">
            <Flex direction="column" gap="6">
              <SectionLabel>WHAT WE BELIEVE</SectionLabel>
              <Heading
                size="8"
                weight="light"
                className="display-heading"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                Principles, not preferences.
              </Heading>
            </Flex>
            <Box style={{ marginTop: "var(--space-6)" }}>
              <BentoGrid columns={2}>
                {BELIEFS.map((belief) => (
                  <BentoCell
                    key={belief.label}
                    span={1}
                    label={belief.label}
                    title={belief.title}
                    body={belief.body}
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
                        {belief.label === "ARCHITECTURE" ? "◈" : belief.label === "EFFICIENCY" ? "ω" : belief.label === "VERIFICATION" ? "✓" : "◇"}
                      </Text>
                    }
                    visualPosition="top"
                  />
                ))}
              </BentoGrid>
            </Box>
          </Container>
        </Section>
      </SectionReveal>

      {/* Team — glass-card with glow accent, GitHub/Twitter links */}
      <SectionReveal>
        <Section size="3" className="section-movement section-alt">
          <Container size="2">
            <Flex direction="column" gap="6">
              <SectionLabel>TEAM</SectionLabel>
              <Box className="glass-card glow-accent" style={{ padding: "var(--space-6)" }}>
                <Flex direction="column" gap="4">
                  <Flex align="center" gap="4">
                    <Box
                      style={{
                        width: 72,
                        height: 72,
                        backgroundColor: "var(--gray-3)",
                        borderRadius: "var(--radius-3)",
                        flexShrink: 0,
                        border: "1px solid var(--gray-4)",
                      }}
                      aria-hidden
                    />
                    <Flex direction="column" gap="2">
                      <Text
                        weight="medium"
                        size="4"
                        style={{
                          fontFamily:
                            "var(--font-outfit), system-ui, sans-serif",
                          color: "var(--gray-12)",
                        }}
                      >
                        Harrison Hines
                      </Text>
                      <Text
                        className="overline"
                        style={{ letterSpacing: "0.1em", color: "var(--gray-9)" }}
                      >
                        FOUNDER
                      </Text>
                      <Flex gap="3">
                        <Link
                          href="https://github.com/harrisonhines"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "var(--gray-10)",
                            fontFamily: "var(--font-jetbrains-mono), monospace",
                            fontSize: "12px",
                            textDecoration: "none",
                          }}
                        >
                          GitHub
                        </Link>
                        <Link
                          href="https://x.com/harrisonhines"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "var(--gray-10)",
                            fontFamily: "var(--font-jetbrains-mono), monospace",
                            fontSize: "12px",
                            textDecoration: "none",
                          }}
                        >
                          X / Twitter
                        </Link>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Text
                    size="3"
                    style={{
                      color: "var(--gray-10)",
                      fontFamily:
                        "var(--font-outfit), system-ui, sans-serif",
                      lineHeight: 1.6,
                    }}
                  >
                    Founder of Straylight Infrastructure. Building Omega \u2014 infrastructure for intelligent agents. Previously co-founded Terminal and Codecademy. Focused on memory that compounds, execution that&apos;s provable, and a wire protocol that works.
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Container>
        </Section>
      </SectionReveal>

      {/* Contact */}
      <SectionReveal>
        <Section size="3" className="section-movement">
          <Container size="2">
            <Flex direction="column" align="center" gap="6" style={{ textAlign: "center" }}>
              <Flex direction="column" gap="2">
                <Text
                  className="overline"
                  style={{ display: "block" }}
                >
                  STRAYLIGHT INFRASTRUCTURE
                </Text>
                <Text
                  size="2"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    color: "var(--gray-10)",
                    fontSize: "13px",
                  }}
                >
                  San Juan, Puerto Rico
                </Text>
              </Flex>

              <Link
                href="mailto:harrison@omega.ms"
                style={{
                  color: "var(--gray-12)",
                  textDecoration: "none",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "14px",
                }}
              >
                harrison@omega.ms
              </Link>

              <Flex gap="5">
                {SOCIAL_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--gray-10)",
                      textDecoration: "none",
                      fontFamily:
                        "var(--font-jetbrains-mono), monospace",
                      fontSize: "13px",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Flex>

              <Box
                className="divider-gradient"
                style={{ width: "60px", marginTop: "var(--space-4)" }}
              />

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
