"use client";

import { useState } from "react";

interface InstallBlockProps {
  command?: string;
  className?: string;
}

export function InstallBlock({
  command = "bun run omega",
  className = "",
}: InstallBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for non-secure contexts
    }
  };

  return (
    <div className={`install-block ${className}`}>
      <code>
        <span style={{ color: "var(--text-low)", userSelect: "none" }}>$ </span>
        {command}
      </code>
      <button onClick={handleCopy} aria-label="Copy command" title="Copy">
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M13.5 4.5L6 12L2.5 8.5"
              stroke="var(--accent-green)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect
              x="5.5"
              y="5.5"
              width="8"
              height="8"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M10.5 5.5V3.5C10.5 2.67 9.83 2 9 2H3.5C2.67 2 2 2.67 2 3.5V9C2 9.83 2.67 10.5 3.5 10.5H5.5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
