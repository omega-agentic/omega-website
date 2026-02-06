"use client";

import { Section, Container, Heading, Text, Flex, Code, Box } from "@radix-ui/themes";
import { OrbitalBackground } from "./OrbitalBackground";
import { CopyButton } from "@/components/ui/CopyButton";

export function Hero() {
  return (
    <Section
      size="3"
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "5rem",
      }}
    >
      <OrbitalBackground />
      <Container size="4" style={{ position: "relative", zIndex: 1 }}>
        <Flex
          direction="column"
          align="start"
          gap="6"
          style={{ maxWidth: "720px" }}
        >
          <Heading
            size="9"
            weight="light"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              fontSize: "clamp(2.25rem, 5vw + 1.5rem, 3.5rem)",
            }}
          >
            AI agents are brilliant with amnesia.
          </Heading>
          <Text
            size="5"
            style={{
              color: "var(--omega-accent)",
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              lineHeight: 1.6,
            }}
          >
            Omega gives them memory that compounds, obligations that resolve, and
            receipts that prove what happened.
          </Text>
          <Flex align="center" gap="3" style={{ marginTop: "8px" }}>
            <Code
              size="3"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                height: "var(--space-7)",
                display: "inline-flex",
                alignItems: "center",
                padding: "0 var(--space-4)",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
            >
              npx omega-code
            </Code>
            <CopyButton text="npx omega-code" label="Copy command" size="3" />
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
