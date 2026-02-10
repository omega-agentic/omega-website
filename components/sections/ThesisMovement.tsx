"use client";

import {
  Section,
  Container,
  Heading,
  Text,
  Flex,
  Box,
} from "@radix-ui/themes";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { motion, useReducedMotion } from "framer-motion";

const THESIS_BLOCKS = [
  {
    number: "01",
    label: "MEMORY",
    title: "Memory that compounds",
    body: "Content-addressed storage. Unlimited. Permanent. Every interaction persists. Day 1 becomes day 100. Your agent doesn\u2019t just respond \u2014 it accumulates understanding.",
    detail:
      "Arithmetic progression becomes geometric. The gap widens every session.",
  },
  {
    number: "02",
    label: "PROOF",
    title: "Execution that\u2019s provable",
    body: "Every resource tracked. Every obligation resolved. Every action receipted with cryptographic attestation. If it doesn\u2019t resolve, it doesn\u2019t attest.",
    detail:
      "32 theorems. 0 sorry. Machine-checkable proof that the system is correct.",
  },
  {
    number: "03",
    label: "WIRE",
    title: "A wire that works",
    body: "650 bytes per token \u2192 1.5 bytes. Guessed tool boundaries \u2192 typed state machine. Split streaming \u2192 semantic frames.",
    detail: "Sub-millisecond overhead. omega.ms \u2014 it\u2019s in the name.",
  },
] as const;

export function ThesisMovement() {
  const reduced = useReducedMotion();

  return (
    <Section
      size="3"
      className="section-movement section-alt"
      style={{ position: "relative" }}
    >
      <Container size="3">
        <StaggerReveal
          delayChildren={0}
          staggerChildren={0.06}
          duration={0.5}
        >
          <div>
            <SectionLabel>The Thesis</SectionLabel>
          </div>
          <Heading
            size="8"
            weight="light"
            className="display-heading"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              maxWidth: "600px",
              color: "var(--gray-12)",
            }}
          >
            Agents don&apos;t need smarter models.
            <br />
            <span className="chrome-text-subtle">
              They need better infrastructure.
            </span>
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

        {/* Vertical narrative scroll — each thesis block takes more space */}
        <Flex
          direction="column"
          gap="6"
          style={{ marginTop: "var(--space-8)" }}
        >
          {THESIS_BLOCKS.map((block, i) => (
            <motion.div
              key={block.label}
              initial={reduced ? {} : { opacity: 0, y: 24 }}
              whileInView={reduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box
                className="glow-card"
                style={{
                  padding: "var(--space-7) var(--space-6)",
                }}
              >
                <Flex gap="6" align="start" wrap="wrap">
                  <Text
                    className="chrome-text"
                    style={{
                      fontFamily: "var(--font-outfit), system-ui, sans-serif",
                      fontWeight: 250,
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      flexShrink: 0,
                    }}
                  >
                    {block.number}
                  </Text>
                  <Flex direction="column" gap="3" style={{ flex: 1, minWidth: 280 }}>
                    <Text className="overline" style={{ color: "var(--gray-9)" }}>
                      {block.label}
                    </Text>
                    <Heading
                      size="5"
                      weight="medium"
                      style={{
                        fontFamily: "var(--font-outfit), system-ui, sans-serif",
                        color: "var(--gray-12)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {block.title}
                    </Heading>
                    <Text
                      as="p"
                      size="3"
                      style={{
                        color: "var(--gray-11)",
                        fontFamily: "var(--font-outfit), system-ui, sans-serif",
                        lineHeight: 1.7,
                      }}
                    >
                      {block.body}
                    </Text>
                    <Text
                      as="p"
                      size="2"
                      style={{
                        color: "var(--gray-9)",
                        fontFamily: "var(--font-outfit), system-ui, sans-serif",
                        lineHeight: 1.65,
                        fontStyle: "italic",
                      }}
                    >
                      {block.detail}
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </motion.div>
          ))}
        </Flex>

        {/* Bridge line */}
        <Box style={{ marginTop: "var(--space-8)", textAlign: "center" }}>
          <div className="divider-gradient" style={{ maxWidth: 120, margin: "0 auto var(--space-4)" }} />
          <Text
            size="4"
            weight="medium"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              color: "var(--gray-11)",
              fontStyle: "italic",
              letterSpacing: "-0.02em",
            }}
          >
            And together, they form Omega.
          </Text>
        </Box>
      </Container>
    </Section>
  );
}
