"use client";

import { Section, Container, Grid, Card, Flex, Heading, Text, Code, Box } from "@radix-ui/themes";

const pillars = [
  {
    title: "Memory (CAS)",
    description: "Content-addressed storage. Unlimited. Permanent.",
    code: "hash(content) = identity",
  },
  {
    title: "Obligations (Ledger)",
    description: "Every resource tracked. Every task resolved.",
    code: "open file → owe a close",
  },
  {
    title: "Receipts (Attestation)",
    description: "Cryptographic proof of execution.",
    code: "attestation: machine-checkable",
  },
];

export function Pillars() {
  return (
    <Section size="3" style={{ position: "relative" }}>
      {/* Subtle Proof Notation texture */}
      <Box
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          opacity: 0.08,
        }}
      >
        <pre
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "12px",
            color: "var(--omega-fg)",
            padding: "2rem",
            transform: "rotate(-2deg)",
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
          }}
        >
          {`theorem resolution_omega (α : Type) : obligation α → α`}
        </pre>
      </Box>
      <Container size="4" style={{ position: "relative", zIndex: 1 }}>
        <Grid columns={{ initial: "1", md: "3" }} gap="6">
          {pillars.map((pillar) => (
            <Card key={pillar.title} size="3">
              <Flex direction="column" gap="4">
                <Text
                  size="2"
                  style={{
                    color: "var(--omega-accent)",
                    fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  }}
                >
                  ω
                </Text>
                <Heading
                  size="5"
                  weight="medium"
                  style={{
                    fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  }}
                >
                  {pillar.title}
                </Heading>
                <Text
                  size="3"
                  style={{
                    fontFamily: "var(--font-outfit), system-ui, sans-serif",
                    lineHeight: 1.6,
                  }}
                >
                  {pillar.description}
                </Text>
                <Code
                  size="2"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    alignSelf: "start",
                  }}
                >
                  {pillar.code}
                </Code>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
