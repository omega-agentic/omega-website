"use client";

import { Box, Flex } from "@radix-ui/themes";
import { CopyButton } from "@/components/ui/CopyButton";

interface TerminalBlockProps {
  /** Lines of terminal output. Use string or nodes (e.g. with <span> for green). */
  children: React.ReactNode;
  /** Show copy button; pass the exact string to copy. */
  copyText?: string;
  /** Show blinking cursor at end. */
  cursor?: boolean;
  className?: string;
}

export function TerminalBlock({
  children,
  copyText,
  cursor = false,
  className,
}: TerminalBlockProps) {
  return (
    <Box
      className={className}
      style={{
        backgroundColor: "var(--gray-2)",
        border: "1px solid var(--omega-border)",
        borderRadius: "var(--radius-2)",
        padding: "var(--space-4)",
        fontFamily: "var(--font-jetbrains-mono), monospace",
        fontSize: "clamp(11px, 1.1vw, 14px)",
        lineHeight: 1.85,
        overflowX: "auto",
      }}
    >
      <Flex align="start" justify="between" gap="4" wrap="wrap">
        <Box style={{ flex: 1, minWidth: 0 }}>
          <pre
            style={{
              margin: 0,
              whiteSpace: "pre-wrap",
              wordBreak: "break-all",
              color: "var(--gray-12)",
            }}
          >
            {children}
            {cursor && (
              <span
                className="terminal-cursor"
                aria-hidden
              />
            )}
          </pre>
        </Box>
        {copyText != null && (
          <CopyButton text={copyText} label="Copy" size="2" />
        )}
      </Flex>
    </Box>
  );
}
