"use client";

import { Section, Container, Heading, Text, Box } from "@radix-ui/themes";

export function Benchmarks() {
  return (
    <Section size="3">
      <Container size="4">
        <Box
          style={{
            backgroundColor: "var(--omega-fg)",
            color: "var(--omega-bg)",
            borderRadius: "var(--radius-2)",
            padding: "var(--space-6)",
            fontFamily: "var(--font-jetbrains-mono), monospace",
          }}
        >
          <Box mb="4">
            <Text size="1" style={{ opacity: 0.7 }}>
              $ npx omega-bench
            </Text>
          </Box>
          <Box asChild style={{ fontSize: "14px", lineHeight: 1.8 }}>
            <pre style={{ margin: 0 }}>
              {`Tool calling success:  47% → 89% (with Omega)
Context utilization:  23% → 94% (with Omega)
Task completion:      34% → 87% (with Omega)`}
            </pre>
          </Box>
        </Box>
        <Text
          size="2"
          style={{
            marginTop: "var(--space-4)",
            color: "var(--omega-accent)",
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
          }}
        >
          Built on Lean4 proofs. 24 theorems. Not marketing.
        </Text>
      </Container>
    </Section>
  );
}
