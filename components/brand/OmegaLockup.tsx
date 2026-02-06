"use client";

import { Box, Text } from "@radix-ui/themes";

interface OmegaLockupProps {
  /** Base font size for the wordmark in px. Symbol is 1.35×, spacing 0.28×. */
  size?: number;
  className?: string;
}

export function OmegaLockup({ size = 20, className }: OmegaLockupProps) {
  const symbolSize = size * 1.35;
  const gap = size * 0.28;

  return (
    <Box
      asChild
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: `${gap}px`,
        fontFamily: "var(--font-outfit), system-ui, sans-serif",
      }}
    >
      <span>
        <Text
          as="span"
          style={{
            fontSize: `${symbolSize}px`,
            lineHeight: 1,
            fontWeight: 400,
          }}
          aria-hidden
        >
          ω
        </Text>
        <Text
          as="span"
          size="3"
          weight="regular"
          style={{
            fontSize: `${size}px`,
            letterSpacing: "0",
          }}
        >
          Omega
        </Text>
      </span>
    </Box>
  );
}
