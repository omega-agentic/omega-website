"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  highlightLines?: number[];
  filename?: string;
}

export function CodeBlock({
  code,
  language,
  highlightLines = [],
  filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const lines = code.split("\n");

  return (
    <div className="code-block" style={{ position: "relative" }}>
      {/* Header row: filename + language tag */}
      {(filename || language) && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "var(--space-3)",
            paddingBottom: "var(--space-3)",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          {filename && (
            <span style={{ fontSize: "11px", color: "var(--text-low)" }}>
              {filename}
            </span>
          )}
          {language && (
            <span
              style={{
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--text-low)",
                marginLeft: "auto",
              }}
            >
              {language}
            </span>
          )}
        </div>
      )}

      {/* Copy button */}
      <button
        onClick={handleCopy}
        aria-label="Copy code"
        style={{
          position: "absolute",
          top: filename || language ? "calc(var(--space-5) + 28px)" : "var(--space-3)",
          right: "var(--space-3)",
          background: "none",
          border: "none",
          color: copied ? "var(--accent-green)" : "var(--text-low)",
          cursor: "pointer",
          padding: "var(--space-1)",
          borderRadius: "var(--radius-sm)",
          transition: "color 0.15s",
        }}
      >
        {copied ? "✓" : "⎘"}
      </button>

      {/* Code lines */}
      <pre style={{ margin: 0, overflow: "auto" }}>
        {lines.map((line, i) => {
          const isHighlighted = highlightLines.includes(i + 1);
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
    </div>
  );
}
