"use client";

import { Box, Flex, Text } from "@radix-ui/themes";
import { CopyButton } from "@/components/ui/CopyButton";

interface CodeBlockProps {
  /** Raw code string */
  code: string;
  /** Language label shown in header */
  language?: string;
  /** Filename shown in header */
  filename?: string;
  /** Show copy button (default true) */
  copyable?: boolean;
  /** Lines to highlight (1-indexed) */
  highlightLines?: number[];
  /** Max height with scroll */
  maxHeight?: string;
}

export function CodeBlock({
  code,
  language,
  filename,
  copyable = true,
  highlightLines = [],
  maxHeight,
}: CodeBlockProps) {
  const lines = code.split("\n");

  return (
    <Box className="code-block" style={{ padding: 0, overflow: "hidden" }}>
      {/* Header */}
      {(filename || language || copyable) && (
        <Flex
          align="center"
          justify="between"
          style={{
            padding: "var(--space-2) var(--space-4)",
            borderBottom: "1px solid var(--gray-4)",
            backgroundColor:
              "color-mix(in srgb, var(--gray-3) 50%, transparent)",
          }}
        >
          <Flex align="center" gap="3">
            {/* Dots */}
            <Flex gap="1">
              <Box
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "var(--gray-6)",
                }}
              />
              <Box
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "var(--gray-6)",
                }}
              />
              <Box
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "var(--gray-6)",
                }}
              />
            </Flex>
            <Text
              size="1"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--gray-8)",
                fontSize: "11px",
              }}
            >
              {filename || language || ""}
            </Text>
          </Flex>
          {copyable && <CopyButton text={code} />}
        </Flex>
      )}

      {/* Code content */}
      <Box
        style={{
          padding: "var(--space-4)",
          maxHeight: maxHeight,
          overflowY: maxHeight ? "auto" : undefined,
          overflowX: "auto",
        }}
      >
        <pre
          style={{
            margin: 0,
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            fontSize: "13px",
            lineHeight: 1.7,
            color: "var(--gray-11)",
          }}
        >
          {lines.map((line, i) => {
            const lineNum = i + 1;
            const isHighlighted = highlightLines.includes(lineNum);
            return (
              <span
                key={i}
                className={isHighlighted ? "code-line-highlight" : undefined}
              >
                {line}
                {i < lines.length - 1 ? "\n" : ""}
              </span>
            );
          })}
        </pre>
      </Box>
    </Box>
  );
}
