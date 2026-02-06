"use client";

import { Box, Text, Flex } from "@radix-ui/themes";

interface StatBlockProps {
  /** Large number or value (e.g. "650 → 1.5", "32 theorems") */
  value: React.ReactNode;
  /** Caption below (e.g. "bytes per token") */
  caption: string;
}

export function StatBlock({ value, caption }: StatBlockProps) {
  return (
    <Flex direction="column" gap="2" align="start">
      <Text
        size="8"
        weight="light"
        style={{
          fontFamily: "var(--font-outfit), system-ui, sans-serif",
          fontWeight: 300,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
          color: "var(--gray-12)",
        }}
      >
        {value}
      </Text>
      <Text
        size="1"
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "clamp(10px, 0.9vw, 12px)",
          color: "var(--omega-accent)",
        }}
      >
        {caption}
      </Text>
    </Flex>
  );
}
