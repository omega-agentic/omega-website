"use client";

import { Section, Container, Grid, Text, Flex } from "@radix-ui/themes";

const stats = [
  {
    value: "30–40%",
    label: "Tool calling success (complex tasks)",
  },
  {
    value: "20–30%",
    label: "Multi-step workflow completion",
  },
  {
    value: "0%",
    label: "Knowledge retained across sessions",
  },
];

export function ProblemStats() {
  return (
    <Section size="3">
      <Container size="4">
        <Grid
          columns={{ initial: "1", sm: "3" }}
          gap="6"
          style={{ marginBottom: "var(--space-6)" }}
        >
          {stats.map((stat) => (
            <Flex key={stat.label} direction="column" gap="2" align="start">
              <Text
                size="8"
                weight="medium"
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  color: "var(--omega-fg)",
                }}
              >
                {stat.value}
              </Text>
              <Text
                size="2"
                style={{
                  color: "var(--omega-accent)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                }}
              >
                {stat.label}
              </Text>
            </Flex>
          ))}
        </Grid>
        <Text
          size="4"
          style={{
            color: "var(--omega-accent)",
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
          }}
        >
          Every session starts from zero. Models get smarter but never wiser.
        </Text>
      </Container>
    </Section>
  );
}
