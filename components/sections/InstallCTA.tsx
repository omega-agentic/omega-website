"use client";

import { Section, Container, Heading, Flex, Code, Box, Text } from "@radix-ui/themes";
import { CopyButton } from "@/components/ui/CopyButton";

export function InstallCTA() {
  return (
    <Section size="3" id="install">
      <Container size="2">
        <Flex direction="column" align="center" gap="6">
          <Heading
            size="8"
            weight="light"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 300,
            }}
          >
            One command.
          </Heading>
          <Flex align="center" gap="4" wrap="wrap" justify="center">
            <Code
              size="4"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                height: "var(--space-7)",
                display: "inline-flex",
                alignItems: "center",
                padding: "0 var(--space-5)",
                fontSize: "18px",
                boxSizing: "border-box",
              }}
            >
              npx omega-code
            </Code>
            <CopyButton text="npx omega-code" label="Copy" size="3" />
          </Flex>
          <Text
            size="2"
            style={{
              color: "var(--omega-accent)",
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
            }}
          >
            <Code size="1" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
              npx omega-claw
            </Code>
            {" · "}
            <Code size="1" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
              npx omega-sdk
            </Code>
          </Text>
        </Flex>
      </Container>
    </Section>
  );
}
