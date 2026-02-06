import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container, Flex, Heading, Text, Box, Separator } from "@radix-ui/themes";

export const metadata: Metadata = {
  title: "Omega — About",
  description:
    "We build the foundation. Straylight Infrastructure. San Juan, Puerto Rico. Memory that compounds. Execution that's provable. A wire protocol that works.",
};

export default function AboutPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <Section size="3">
        <Container size="2">
          <Flex direction="column" gap="8" style={{ maxWidth: "600px" }}>
            <Heading
              size="9"
              weight="light"
              style={{
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                fontWeight: 300,
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
              }}
            >
              We build the foundation.
            </Heading>
            <Text
              size="4"
              style={{
                color: "var(--omega-accent)",
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                lineHeight: 1.65,
              }}
            >
              Omega is built by Straylight Infrastructure. Intelligent agents are here — coding, building, shipping. The models behind them advance every month. The infrastructure underneath hasn&apos;t kept pace. We&apos;re building that infrastructure. Memory that compounds. Execution that&apos;s provable. A wire protocol that works. Formally verified in Lean4. Running on hardware we own. Shipping from San Juan.
            </Text>

            <Separator size="4" style={{ borderColor: "var(--omega-border)" }} />

            <Heading size="6" weight="medium">
              What we believe.
            </Heading>
            <Flex direction="column" gap="4">
              <Text size="4" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif", lineHeight: 1.65 }}>
                Choices matter more than resources. The right architecture with modest resources outperforms the wrong architecture with unlimited resources. We choose carefully and build from first principles.
              </Text>
              <Text size="4" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif", lineHeight: 1.65 }}>
                Waste nothing. Every byte, every millisecond, every watt, every word. Our domain is omega.ms — millisecond. Under 1ms overhead for everything we ship. This isn&apos;t a performance target. It&apos;s a design philosophy.
              </Text>
              <Text size="4" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif", lineHeight: 1.65 }}>
                Prove it or don&apos;t say it. We use formal verification not because it&apos;s fashionable but because it&apos;s the only way to make claims that are actually checkable. 32 theorems, 0 sorry. The proofs are public.
              </Text>
              <Text size="4" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif", lineHeight: 1.65 }}>
                Build to last. The brand aesthetic is &quot;expensive paper&quot; — permanent, precise, archival. Not a SaaS dashboard. Something worth preserving. Every decision should feel inevitable.
              </Text>
            </Flex>

            <Separator size="4" style={{ borderColor: "var(--omega-border)" }} />

            <Heading size="6" weight="medium">
              Team
            </Heading>
            <Box style={{ padding: "var(--space-4)", border: "1px solid var(--omega-border)", borderRadius: "var(--radius-2)" }}>
              <Text weight="medium" size="4" style={{ fontFamily: "var(--font-outfit), system-ui, sans-serif", color: "var(--gray-12)" }}>
                Harrison Hines — Founder
              </Text>
              <Text size="3" style={{ color: "var(--omega-accent)", fontFamily: "var(--font-outfit), system-ui, sans-serif", marginTop: "var(--space-2)", lineHeight: 1.6 }}>
                [Bio placeholder]
              </Text>
              <Box style={{ width: 80, height: 80, marginTop: "var(--space-3)", backgroundColor: "var(--gray-3)", borderRadius: "var(--radius-2)" }} aria-hidden />
            </Box>

            <Separator size="4" style={{ borderColor: "var(--omega-border)" }} />

            <Flex direction="column" gap="2" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "13px", color: "var(--omega-accent)" }}>
              <Text size="2">Straylight Infrastructure</Text>
              <Text size="2">San Juan, Puerto Rico</Text>
              <Link href="mailto:harrison@omega.ms" style={{ color: "var(--omega-interactive)", textDecoration: "none" }}>
                <Text size="2">harrison@omega.ms</Text>
              </Link>
              <Flex gap="4" style={{ marginTop: "var(--space-2)" }}>
                <Link href="https://github.com/straylight-ai" target="_blank" rel="noopener noreferrer" style={{ color: "var(--omega-accent)", textDecoration: "none" }}>
                  <Text size="2">GitHub</Text>
                </Link>
                <Link href="https://x.com/omega_ms" target="_blank" rel="noopener noreferrer" style={{ color: "var(--omega-accent)", textDecoration: "none" }}>
                  <Text size="2">X</Text>
                </Link>
                <Link href="https://discord.gg/omega" target="_blank" rel="noopener noreferrer" style={{ color: "var(--omega-accent)", textDecoration: "none" }}>
                  <Text size="2">Discord</Text>
                </Link>
              </Flex>
            </Flex>

            <Flex justify="center" style={{ marginTop: "var(--space-6)" }}>
              <Text size="2" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "13px", color: "var(--omega-accent)" }}>
                the result is saved
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Section>
    </main>
  );
}
