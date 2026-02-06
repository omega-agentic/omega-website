"use client";

import { Text } from "@radix-ui/themes";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <Text
      as="p"
      size="1"
      className={className}
      style={{
        fontFamily: "var(--font-jetbrains-mono), monospace",
        fontSize: "11px",
        letterSpacing: "0.08em",
        color: "var(--gray-9)",
        marginBottom: "var(--space-4)",
      }}
    >
      [{children}]
    </Text>
  );
}
