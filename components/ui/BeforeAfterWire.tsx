"use client";

import { Box, Flex, Text } from "@radix-ui/themes";

const BEFORE_SAMPLE = `data: {"id":"chatcmpl-…","choices":[{"delta":{"content":" const"},"index":0}]}
data: {"id":"chatcmpl-…","choices":[{"delta":{},"index":0}]}
data: [DONE]`;

const AFTER_SAMPLE = `{"t":"delta","c":" const"}`;

export function BeforeAfterWire() {
  return (
    <Box
      className="glass-card"
      style={{
        marginTop: "var(--space-6)",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        overflow: "hidden",
        padding: 0,
      }}
    >
      {/* Before */}
      <Flex
        direction="column"
        gap="3"
        style={{ padding: "var(--space-5)" }}
      >
        <Text
          size="1"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--gray-10)",
          }}
        >
          What your tools receive
        </Text>
        <Text
          className="stat-glow"
          style={{
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            color: "var(--gray-12)",
          }}
        >
          650 bytes
        </Text>
        <Box
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "11px",
            lineHeight: 1.7,
            color: "var(--gray-9)",
            overflowX: "auto",
          }}
        >
          <pre
            style={{
              margin: 0,
              whiteSpace: "pre-wrap",
              wordBreak: "break-all",
            }}
          >
            {BEFORE_SAMPLE}
          </pre>
        </Box>
      </Flex>

      {/* Arrow divider */}
      <Flex
        align="center"
        justify="center"
        style={{
          borderLeft: "1px solid var(--gray-4)",
          borderRight: "1px solid var(--gray-4)",
          padding: "0 var(--space-3)",
        }}
      >
        <Text
          className="pulse-arrow"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "20px",
            color: "var(--gray-8)",
          }}
        >
          →
        </Text>
      </Flex>

      {/* After */}
      <Flex
        direction="column"
        gap="3"
        style={{
          padding: "var(--space-5)",
          backgroundColor: "color-mix(in srgb, var(--gray-3) 40%, transparent)",
        }}
      >
        <Text
          size="1"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--gray-10)",
          }}
        >
          After Omega Boost
        </Text>
        <Text
          className="stat-glow"
          style={{
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            color: "var(--gray-12)",
          }}
        >
          40 bytes
        </Text>
        <Box
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "11px",
            lineHeight: 1.7,
            color: "var(--gray-9)",
            overflowX: "auto",
          }}
        >
          <pre
            style={{
              margin: 0,
              whiteSpace: "pre-wrap",
              wordBreak: "break-all",
            }}
          >
            {AFTER_SAMPLE}
          </pre>
        </Box>
      </Flex>
    </Box>
  );
}
