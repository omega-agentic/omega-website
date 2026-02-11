"use client";

import { useState, useCallback } from "react";
import { Flex, Text } from "@radix-ui/themes";

const DEFAULT_COMMAND = "bun run omega";

interface TerminalPromptProps {
  command?: string;
  className?: string;
}

export function TerminalPrompt({ command = DEFAULT_COMMAND, className }: TerminalPromptProps) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard?.writeText(command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [command]);

  return (
    <Flex
      align="center"
      className={`terminal-install-box ${className ?? ""}`}
      onClick={copy}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") copy(); }}
      aria-label={`Copy command: ${command}`}
    >
      <Text as="span" className="terminal-install-dollar">$</Text>
      <Text as="span" className="terminal-install-command">{command}</Text>
      <Text as="span" className="terminal-install-copy">
        {copied ? (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Copy
          </>
        )}
      </Text>
    </Flex>
  );
}
