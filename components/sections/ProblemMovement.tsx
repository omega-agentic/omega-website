"use client";

import {
  Section,
  Container,
  Flex,
  Heading,
  Text,
  Box,
} from "@radix-ui/themes";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { BentoGrid, BentoCell } from "@/components/ui/BentoGrid";
import { BeforeAfterWire } from "@/components/ui/BeforeAfterWire";

function CodeDiffVisual() {
  return (
    <Box
      className="glass-card"
      style={{
        padding: "var(--space-3)",
        fontFamily: "var(--font-jetbrains-mono), monospace",
        fontSize: "11px",
        lineHeight: 1.6,
        color: "var(--gray-10)",
      }}
    >
      <Text as="p" size="1" style={{ color: "var(--red-9)", marginBottom: "var(--space-2)" }}>
        — Chunks split mid-UTF8
      </Text>
      <Text as="p" size="1" style={{ color: "var(--grass-9)", marginTop: "var(--space-2)" }}>
        + Typed state machine
      </Text>
    </Box>
  );
}

function TimelineVisual() {
  return (
    <Flex gap="4" align="center" style={{ marginTop: "var(--space-3)" }}>
      <Flex direction="column" align="center" gap="1">
        <Text size="1" className="overline" style={{ color: "var(--gray-8)" }}>
          Day 1
        </Text>
        <Box
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            backgroundColor: "var(--gray-4)",
          }}
        />
      </Flex>
      <Box
        style={{
          flex: 1,
          height: 2,
          background: "linear-gradient(90deg, var(--gray-4), var(--gray-6))",
        }}
      />
      <Flex direction="column" align="center" gap="1">
        <Text size="1" className="overline" style={{ color: "var(--gray-8)" }}>
          Day 100
        </Text>
        <Box
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            backgroundColor: "var(--gray-6)",
            boxShadow: "0 0 20px color-mix(in srgb, var(--gray-8) 30%, transparent)",
          }}
        />
      </Flex>
    </Flex>
  );
}

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
            className="display-heading"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              maxWidth: "600px",
              color: "var(--gray-12)",
            }}
          >
            Intelligence arrived.
            <br />
            <span className="chrome-text-subtle">
              The infrastructure didn&apos;t.
            </span>
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
            month. But the infrastructure underneath was built for rapid
            research iteration, not production agents.
          </Text>
        </StaggerReveal>

        {/* Bento: THE WIRE (2-col with BeforeAfterWire), THE TOOLS (code diff), THE MEMORY (timeline) */}
        <Box style={{ marginTop: "var(--space-7)" }}>
          <BentoGrid columns={3}>
            <BentoCell
              span={2}
              label="THE WIRE"
              title="650 bytes of overhead"
              body='Every token carries 650 bytes of redundant fields. For a single token like " const" — 650 bytes.'
              visual={<BeforeAfterWire />}
              visualPosition="bottom"
            />
            <BentoCell
              span={1}
              label="THE TOOLS"
              title="Broken tool calls"
              body="Tool call formats differ across every provider. Chunks split mid-UTF8, mid-escape. Parsers guess at boundaries."
              visual={<CodeDiffVisual />}
              visualPosition="bottom"
            />
            <BentoCell
              span={1}
              label="THE MEMORY"
              title="Amnesia by default"
              body="Every session starts from zero. No persistence. No compounding. Models get smarter monthly; agents start fresh every session."
              visual={<TimelineVisual />}
              visualPosition="bottom"
            />
          </BentoGrid>
        </Box>

        {/* Closing statement */}
        <Box style={{ marginTop: "var(--space-8)" }}>
          <div className="divider-gradient" style={{ maxWidth: "120px", margin: "0 auto var(--space-6)" }} />
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
      </Container>
    </Section>
  );
}
