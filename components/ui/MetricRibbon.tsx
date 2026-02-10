"use client";

import { Box, Flex, Text } from "@radix-ui/themes";

interface Metric {
  value: string;
  label: string;
}

interface MetricRibbonProps {
  items: Metric[];
}

export function MetricRibbon({ items }: MetricRibbonProps) {
  return (
    <Box
      style={{
        width: "100%",
        overflow: "hidden",
        borderTop: "1px solid var(--gray-3)",
        borderBottom: "1px solid var(--gray-3)",
        padding: "var(--space-5) 0",
      }}
    >
      <Box
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          overflow: "hidden",
        }}
      >
        <Flex className="ticker-scroll">
          {/* Duplicate items for seamless loop */}
          {[...items, ...items].map((item, i) => (
            <Flex
              key={`${item.label}-${i}`}
              align="baseline"
              gap="2"
              style={{
                padding: "0 var(--space-8)",
                flexShrink: 0,
              }}
            >
              <Text
                className="stat-glow"
                style={{
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  fontWeight: 250,
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  letterSpacing: "-0.03em",
                  color: "var(--gray-12)",
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                }}
              >
                {item.value}
              </Text>
              <Text
                size="2"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  color: "var(--gray-8)",
                  whiteSpace: "nowrap",
                  fontSize: "12px",
                  letterSpacing: "0.02em",
                }}
              >
                {item.label}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
