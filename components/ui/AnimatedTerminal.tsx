"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Box, Flex } from "@radix-ui/themes";
import { CopyButton } from "@/components/ui/CopyButton";
import { BRAND_EASING } from "@/lib/constants";

interface AnimatedTerminalProps {
  /** Full text (with newlines for line-by-line). */
  content: string;
  /** Exact string to copy. */
  copyText?: string;
  /** "lines" = line-by-line reveal; "typing" = char-by-char (for short one-liners); "none" = static. */
  mode?: "lines" | "typing" | "none";
  /** Delay (ms) between lines or chars. */
  delayMs?: number;
  /** Start animation when in view. */
  triggerOnView?: boolean;
  className?: string;
}

export function AnimatedTerminal({
  content,
  copyText,
  mode = "lines",
  delayMs = 80,
  triggerOnView = true,
  className,
}: AnimatedTerminalProps) {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const lines = content.split("\n");
  const displayContent = copyText ?? content;

  useEffect(() => {
    if (!triggerOnView || reducedMotion || mode === "none") {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnView, reducedMotion, mode]);

  const showAll = reducedMotion || mode === "none" || !visible;

  if (showAll) {
    return (
      <Box
        ref={ref}
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
              {content}
              <span className="terminal-cursor" aria-hidden />
            </pre>
          </Box>
          {copyText != null && <CopyButton text={copyText} label="Copy" size="2" />}
        </Flex>
      </Box>
    );
  }

  if (mode === "typing") {
    return (
      <AnimatedTerminalTyping
        content={content}
        copyText={copyText}
        delayMs={delayMs}
        className={className}
      />
    );
  }

  return (
    <Box
      ref={ref}
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
            {visible
              ? lines.map((line, i) => (
                  <LineReveal
                    key={i}
                    line={line}
                    isLast={i === lines.length - 1}
                    delay={i * delayMs}
                    visible
                  />
                ))
              : [
                  <span key="placeholder" style={{ opacity: 0 }}>
                    {content.slice(0, 1)}
                  </span>,
                  <span key="cursor" className="terminal-cursor" aria-hidden />,
                ]}
          </pre>
        </Box>
        {copyText != null && <CopyButton text={copyText} label="Copy" size="2" />}
      </Flex>
    </Box>
  );
}

function LineReveal({
  line,
  isLast,
  delay,
  visible,
}: {
  line: string;
  isLast: boolean;
  delay: number;
  visible: boolean;
}) {
  if (!visible) return null;
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.35,
        delay: delay / 1000,
        ease: BRAND_EASING as [number, number, number, number],
      }}
      style={{ display: "block" }}
    >
      {line}
      {isLast ? (
        <>
          {"\n"}
          <span className="terminal-cursor" aria-hidden />
        </>
      ) : (
        "\n"
      )}
    </motion.span>
  );
}

function AnimatedTerminalTyping({
  content,
  copyText,
  delayMs,
  className,
}: {
  content: string;
  copyText?: string;
  delayMs: number;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (!visible || reducedMotion) return;
    if (length >= content.length) return;
    const t = setTimeout(() => setLength((l) => Math.min(l + 1, content.length)), delayMs);
    return () => clearTimeout(t);
  }, [visible, length, content.length, delayMs, reducedMotion]);

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
            {reducedMotion ? content : content.slice(0, length)}
            <span className="terminal-cursor" aria-hidden />
          </pre>
        </Box>
        {copyText != null && <CopyButton text={copyText} label="Copy" size="2" />}
      </Flex>
      {!visible && <IntersectionTrigger onVisible={() => setVisible(true)} />}
    </Box>
  );
}

function IntersectionTrigger({ onVisible }: { onVisible: () => void }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) onVisible();
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [onVisible]);
  return <span ref={ref} style={{ position: "absolute", width: 1, height: 1, opacity: 0 }} />;
}
