"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { Box } from "@radix-ui/themes";
import { useTypewriter } from "./useTypewriter";
import { TypewriterLine } from "./TypewriterLine";
import { buildBootSequenceLines } from "./bootSequenceLines";

export function BootSequence() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const lines = useMemo(() => buildBootSequenceLines(), []);

  const { visibleLines, isComplete } = useTypewriter(lines, {
    skip: false,
    startImmediately: mounted,
  });

  // Auto-scroll the terminal content container (not the page)
  useEffect(() => {
    const el = containerRef.current?.closest(".terminal-content");
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [visibleLines, isComplete]);

  return (
    <Box className="terminal-boot-sequence" ref={containerRef}>
      <Box style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {visibleLines.map((line, i) => (
          <TypewriterLine key={i} line={line} />
        ))}
      </Box>
    </Box>
  );
}
