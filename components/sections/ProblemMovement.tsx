"use client";

import {
  Section,
  Container,
  Flex,
  Heading,
  Text,
  Grid,
  Box,
  Separator,
} from "@radix-ui/themes";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { BeforeAfterWire } from "@/components/ui/BeforeAfterWire";

const PROBLEM_BLOCKS = [
  {
    icon: "~",
    label: "THE WIRE",
    body: "Every token carries 650 bytes of overhead. Redundant fields, null values, metadata repeated on every streaming chunk. For the token \u201c const\u201d \u2014 650 bytes.",
  },
  {
    icon: "{",
    label: "THE TOOLS",
    body: "Tool call formats differ across every provider. Streaming chunks split mid-UTF8, mid-escape. Parsers guess at boundaries instead of knowing them.",
  },
  {
    icon: "\u2205",
    label: "THE MEMORY",
    body: "Every session starts from zero. No persistence. No compounding. No attestation. Models get smarter every month. Agents start fresh every session.",
  },
] as const;

export function ProblemMovement() {
  return (
    <Section
      size="3"
      id="the-problem"
      className="section-movement"
      style={{ position: "relative" }}
    >
      <Container size="3">
        <StaggerReveal
          delayChildren={0}
          staggerChildren={0.08}
          duration={0.5}
        >
          <div>
            <SectionLabel>The Problem</SectionLabel>
          </div>
          <Heading
            size="8"
            weight="light"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              maxWidth: "600px",
              color: "var(--gray-12)",
            }}
          >
            Intelligence arrived.
            <br />
            The infrastructure didn&apos;t.
          </Heading>
          <Text
            as="p"
            size="3"
            style={{
              color: "var(--gray-11)",
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              lineHeight: 1.7,
              maxWidth: "580px",
              marginTop: "var(--space-2)",
            }}
          >
            The models are extraordinary. The capability frontier advances every
            month. But the infrastructure underneath was built for rapid research
            iteration, not production agents. It served its purpose. Now agents
            need more.
          </Text>

          <Grid
            columns={{ initial: "1", md: "3" }}
            gap="4"
            style={{ marginTop: "var(--space-6)" }}
          >
            {PROBLEM_BLOCKS.map((block) => (
              <Box
                key={block.label}
                className="glass-card"
                style={{ padding: "var(--space-5)" }}
              >
                <Flex align="center" gap="3" style={{ marginBottom: "var(--space-3)" }}>
                  <Text
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "18px",
                      lineHeight: 1,
                      color: "var(--gray-8)",
                    }}
                  >
                    {block.icon}
                  </Text>
                  <Text
                    as="p"
                    size="1"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--gray-10)",
                    }}
                  >
                    {block.label}
                  </Text>
                </Flex>
                <Text
                  as="p"
                  size="2"
                  style={{
                    fontFamily: "var(--font-outfit), system-ui, sans-serif",
                    lineHeight: 1.65,
                    color: "var(--gray-12)",
                  }}
                >
                  {block.body}
                </Text>
              </Box>
            ))}
          </Grid>

          <BeforeAfterWire />

          <Box style={{ marginTop: "var(--space-7)" }}>
            <Separator
              size="4"
              style={{ maxWidth: "120px", margin: "0 auto var(--space-6)" }}
            />
            <Flex direction="column" align="center" gap="2">
              <Heading
                size="5"
                weight="light"
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  fontWeight: 300,
                  textAlign: "center",
                  maxWidth: "520px",
                  lineHeight: 1.35,
                  color: "var(--gray-12)",
                }}
              >
                Every developer building on these APIs is solving the same
                problems independently.
              </Heading>
              <Text
                size="2"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  color: "var(--gray-10)",
                  fontSize: "13px",
                }}
              >
                We thought it&apos;d be useful to solve them once, correctly.
              </Text>
            </Flex>
          </Box>
        </StaggerReveal>
      </Container>
    </Section>
  );
}
