"use client";

import {
  Section,
  Container,
  Heading,
  Text,
  Grid,
  Box,
} from "@radix-ui/themes";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StaggerReveal } from "@/components/ui/StaggerReveal";

const THESIS_BLOCKS = [
  {
    number: "01",
    label: "MEMORY THAT COMPOUNDS",
    body: "Content-addressed storage. Unlimited. Permanent. Every interaction persists. Day 1 becomes day 100. Your agent doesn\u2019t just respond \u2014 it accumulates understanding.",
    detail:
      "Arithmetic progression becomes geometric. The gap widens every session.",
  },
  {
    number: "02",
    label: "EXECUTION THAT\u2019S PROVABLE",
    body: "Every resource tracked. Every obligation resolved. Every action receipted with cryptographic attestation. If it doesn\u2019t resolve, it doesn\u2019t attest.",
    detail:
      "32 theorems. 0 sorry. Machine-checkable proof that the system is correct.",
  },
  {
    number: "03",
    label: "A WIRE THAT WORKS",
    body: "650 bytes per token \u2192 1.5 bytes. Guessed tool boundaries \u2192 typed state machine. Split streaming \u2192 semantic frames.",
    detail: "Sub-millisecond overhead. omega.ms \u2014 it\u2019s in the name.",
  },
] as const;

export function ThesisMovement() {
  return (
    <Section
      size="3"
      className="section-movement section-alt"
      style={{ position: "relative" }}
    >
      <Container size="3">
        <StaggerReveal
          delayChildren={0}
          staggerChildren={0.08}
          duration={0.5}
        >
          <div>
            <SectionLabel>The Thesis</SectionLabel>
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
            Agents don&apos;t need smarter models.
            <br />
            They need better infrastructure.
          </Heading>
          <Text
            as="p"
            size="3"
            style={{
              color: "var(--gray-11)",
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              lineHeight: 1.7,
              maxWidth: "560px",
              marginTop: "var(--space-2)",
            }}
          >
            Intelligence is ahead of deployment. The bottleneck isn&apos;t
            capability — it&apos;s everything around it. Fix the infrastructure
            and the intelligence resolves. That&apos;s Omega.
          </Text>
        </StaggerReveal>

        <Grid
          columns={{ initial: "1", md: "3" }}
          gap="4"
          style={{ marginTop: "var(--space-7)" }}
        >
          {THESIS_BLOCKS.map((block) => (
            <Box
              key={block.label}
              className="glass-card"
              style={{
                padding: "var(--space-5)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-3)",
                borderTop: "1px solid var(--gray-6)",
              }}
            >
              <Text
                className="stat-glow"
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: "48px",
                  lineHeight: 1,
                  color: "var(--gray-8)",
                  letterSpacing: "-0.02em",
                }}
              >
                {block.number}
              </Text>
              <Text
                as="p"
                size="1"
                style={{
                  display: "block",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gray-10)",
                }}
              >
                {block.label}
              </Text>
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
              <Text
                as="p"
                size="2"
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  lineHeight: 1.65,
                  color: "var(--gray-10)",
                  fontStyle: "italic",
                }}
              >
                {block.detail}
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
