"use client";

import { Box, Text } from "@radix-ui/themes";
import Link from "next/link";

interface OmegaLockupProps {
  /** Base font size for the wordmark in px. Symbol is ~1.35×, gap 0.28×. */
  size?: number;
  /** Light = dark symbol/wordmark on light bg. Dark = light on dark bg. */
  variant?: "light" | "dark";
  /** If set, wrap in link to home. */
  asLink?: boolean;
  className?: string;
}

const GAP_RATIO = 0.28;
const SYMBOL_RATIO = 1.35;

export function OmegaLockup({
  size = 20,
  variant = "dark",
  asLink = true,
  className,
}: OmegaLockupProps) {
  const symbolPx = size * SYMBOL_RATIO;
  const gapPx = size * GAP_RATIO;
  const isLight = variant === "light";
  const color = isLight ? "#18181B" : "#FAFAF9";

  const symbol = (
    <Box
      asChild
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: symbolPx,
        height: symbolPx,
        flexShrink: 0,
      }}
      aria-hidden
    >
      <span>
        <svg
          width={symbolPx}
          height={symbolPx}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
        >
          <circle
            cx="16"
            cy="16"
            r="14.5"
            stroke={color}
            strokeWidth="1"
            fill="none"
          />
          <text
            x="16"
            y="21"
            textAnchor="middle"
            fill={color}
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontSize: "18px",
              fontWeight: 400,
            }}
          >
            ω
          </text>
        </svg>
      </span>
    </Box>
  );

  const wordmark = (
    <Text
      as="span"
      style={{
        fontFamily: "var(--font-outfit), system-ui, sans-serif",
        fontWeight: 400,
        fontSize: `${size}px`,
        lineHeight: 1,
        letterSpacing: "0",
        color,
      }}
    >
      omega
    </Text>
  );

  const content = (
    <Box
      asChild
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: `${gapPx}px`,
      }}
    >
      <span>
        {symbol}
        {wordmark}
      </span>
    </Box>
  );

  if (asLink) {
    return (
      <Link href="/" style={{ textDecoration: "none", display: "inline-flex" }}>
        {content}
      </Link>
    );
  }

  return content;
}
