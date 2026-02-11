"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export type LineType = "ascii" | "command" | "output" | "heading" | "blank" | "divider" | "label" | "success" | "error" | "muted";

export interface TypewriterLineConfig {
  type: LineType;
  content: string;
  /** Delay in ms before this line starts */
  delay?: number;
  /** Ms per character for typing (ignored for ascii/blank) */
  speed?: number;
  /** For output: show entire line after delay (no char-by-char) */
  instant?: boolean;
}

export interface VisibleLine {
  config: TypewriterLineConfig;
  visibleContent: string;
  showCursor: boolean;
  isComplete: boolean;
}

const DEFAULT_SPEED = 40;
const LINE_PAUSE = 60;

export function useTypewriter(
  lines: TypewriterLineConfig[],
  options: {
    skip?: boolean;
    onComplete?: () => void;
    startImmediately?: boolean;
  } = {}
) {
  const { skip = false, onComplete, startImmediately = true } = options;

  const [visibleLines, setVisibleLines] = useState<VisibleLine[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  // Refs to avoid dependency loops
  const linesRef = useRef(lines);
  linesRef.current = lines;
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const skipRef = useRef(skip);
  skipRef.current = skip;

  const lineIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const flush = useCallback(() => {
    setVisibleLines(
      linesRef.current.map((config) => ({
        config,
        visibleContent: config.content,
        showCursor: false,
        isComplete: true,
      }))
    );
    setIsComplete(true);
    onCompleteRef.current?.();
  }, []);

  const skipToEnd = useCallback(() => {
    skipRef.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    flush();
  }, [flush]);

  useEffect(() => {
    const currentLines = linesRef.current;
    if (!currentLines.length || !startImmediately) return;

    if (skipRef.current) {
      flush();
      return;
    }

    // Reset
    lineIndexRef.current = 0;
    charIndexRef.current = 0;
    setVisibleLines([]);

    function pushLine(lineIndex: number, vl: VisibleLine) {
      setVisibleLines((prev) => {
        if (lineIndex < prev.length) {
          const next = [...prev];
          next[lineIndex] = vl;
          return next;
        }
        return [...prev, vl];
      });
    }

    function tick() {
      if (skipRef.current) return;

      const lineIndex = lineIndexRef.current;
      const charIndex = charIndexRef.current;

      if (lineIndex >= currentLines.length) {
        setIsComplete(true);
        onCompleteRef.current?.();
        return;
      }

      const line = currentLines[lineIndex];
      const isAscii = line.type === "ascii";
      const isBlank = line.type === "blank";
      const instant = !!line.instant;
      const speed = line.speed ?? DEFAULT_SPEED;
      const fullLen = line.content.length;

      const isDivider = line.type === "divider";
      const isLabel = line.type === "label";
      const isMuted = line.type === "muted";
      const alwaysInstant = isAscii || isBlank || isDivider || isLabel || isMuted;

      // Instant lines
      if (alwaysInstant || (instant && (line.type === "output" || line.type === "success" || line.type === "error"))) {
        pushLine(lineIndex, {
          config: line,
          visibleContent: line.content,
          showCursor: false,
          isComplete: true,
        });
        lineIndexRef.current = lineIndex + 1;
        charIndexRef.current = 0;
        timeoutRef.current = setTimeout(tick, line.delay ?? LINE_PAUSE);
        return;
      }

      // First character — create the line entry
      if (charIndex === 0) {
        const delay = line.delay ?? LINE_PAUSE;
        timeoutRef.current = setTimeout(() => {
          if (skipRef.current) return;
          charIndexRef.current = 1;
          pushLine(lineIndex, {
            config: line,
            visibleContent: line.content.slice(0, 1),
            showCursor: true,
            isComplete: false,
          });
          timeoutRef.current = setTimeout(tick, speed);
        }, delay);
        return;
      }

      // Still typing
      if (charIndex < fullLen) {
        charIndexRef.current = charIndex + 1;
        pushLine(lineIndex, {
          config: line,
          visibleContent: line.content.slice(0, charIndex + 1),
          showCursor: true,
          isComplete: false,
        });
        timeoutRef.current = setTimeout(tick, speed);
        return;
      }

      // Line complete
      pushLine(lineIndex, {
        config: line,
        visibleContent: line.content,
        showCursor: false,
        isComplete: true,
      });
      lineIndexRef.current = lineIndex + 1;
      charIndexRef.current = 0;
      timeoutRef.current = setTimeout(tick, LINE_PAUSE);
    }

    const initialDelay = currentLines[0]?.delay ?? 300;
    timeoutRef.current = setTimeout(tick, initialDelay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [startImmediately, skip, flush]);

  return {
    visibleLines,
    isComplete,
    skipToEnd,
  };
}
