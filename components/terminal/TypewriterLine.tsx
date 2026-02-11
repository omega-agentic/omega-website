"use client";

import { Box } from "@radix-ui/themes";
import type { VisibleLine } from "./useTypewriter";

interface TypewriterLineProps {
  line: VisibleLine;
  className?: string;
}

export function TypewriterLine({ line, className }: TypewriterLineProps) {
  const { config, visibleContent, showCursor } = line;
  const type = config.type;

  if (type === "blank") {
    return <Box className={`terminal-line terminal-blank ${className ?? ""}`} />;
  }

  if (type === "divider") {
    return (
      <Box className={`terminal-line terminal-divider ${className ?? ""}`} aria-hidden="true">
        {visibleContent}
      </Box>
    );
  }

  if (type === "label") {
    return (
      <Box className={`terminal-line terminal-label ${className ?? ""}`}>
        {visibleContent}
      </Box>
    );
  }

  if (type === "ascii") {
    return (
      <Box className={`terminal-line terminal-ascii ${className ?? ""}`} asChild>
        <pre className="terminal-ascii-pre">{visibleContent}</pre>
      </Box>
    );
  }

  const cursor = showCursor ? (
    <span className="terminal-cursor" aria-hidden="true" />
  ) : null;

  if (type === "command") {
    return (
      <Box className={`terminal-line terminal-command ${className ?? ""}`}>
        <span className="terminal-prompt-char">{"$ "}</span>
        <span className="terminal-command-text">{visibleContent}{cursor}</span>
      </Box>
    );
  }

  if (type === "heading") {
    return (
      <Box className={`terminal-line terminal-heading ${className ?? ""}`}>
        <span className="terminal-heading-text">{visibleContent}{cursor}</span>
      </Box>
    );
  }

  if (type === "success") {
    return (
      <Box className={`terminal-line terminal-success ${className ?? ""}`}>
        <span className="terminal-success-text">{visibleContent}{cursor}</span>
      </Box>
    );
  }

  if (type === "error") {
    return (
      <Box className={`terminal-line terminal-error ${className ?? ""}`}>
        <span className="terminal-error-text">{visibleContent}{cursor}</span>
      </Box>
    );
  }

  if (type === "muted") {
    return (
      <Box className={`terminal-line terminal-muted-line ${className ?? ""}`}>
        <span className="terminal-muted-text">{visibleContent}</span>
      </Box>
    );
  }

  // Default: output
  return (
    <Box className={`terminal-line terminal-output ${className ?? ""}`}>
      <span className="terminal-output-text">{visibleContent}{cursor}</span>
    </Box>
  );
}
