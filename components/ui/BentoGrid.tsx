"use client";

import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { motion, useReducedMotion } from "framer-motion";

const BRAND_EASING = [0.22, 1, 0.36, 1] as const;

interface BentoCellProps {
  /** Column span: 1 | 2 | 3 */
  span?: 1 | 2 | 3;
  /** Row span */
  rowSpan?: 1 | 2;
  /** Optional overline label (mono, uppercase) */
  label?: string;
  /** Main heading */
  title?: string;
  /** Supporting body text */
  body?: string;
  /** Render visual content (diagram, animation, etc.) */
  visual?: React.ReactNode;
  /** Extra children below the text */
  children?: React.ReactNode;
  /** Align visual: "top" puts it above text, "bottom" below */
  visualPosition?: "top" | "bottom";
  /** Min height override */
  minHeight?: string;
}

export function BentoCell({
  span = 1,
  rowSpan = 1,
  label,
  title,
  body,
  visual,
  children,
  visualPosition = "bottom",
  minHeight,
}: BentoCellProps) {
  const reduced = useReducedMotion();

  const spanClass =
    span === 3
      ? "bento-span-3"
      : span === 2
        ? "bento-span-2"
        : "";
  const rowClass = rowSpan === 2 ? "bento-span-row-2" : "";

  return (
    <motion.div
      className={`bento-cell ${spanClass} ${rowClass}`}
      style={{ minHeight: minHeight || (rowSpan === 2 ? "380px" : "200px") }}
      initial={reduced ? {} : { opacity: 0, y: 16 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: BRAND_EASING }}
    >
      {visualPosition === "top" && visual && (
        <Box style={{ marginBottom: "var(--space-4)" }}>{visual}</Box>
      )}

      <Flex direction="column" gap="2">
        {label && (
          <Text className="overline">{label}</Text>
        )}
        {title && (
          <Heading
            size="4"
            weight="medium"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              color: "var(--gray-12)",
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </Heading>
        )}
        {body && (
          <Text
            as="p"
            size="2"
            style={{
              color: "var(--gray-10)",
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              lineHeight: 1.65,
              maxWidth: "480px",
            }}
          >
            {body}
          </Text>
        )}
      </Flex>

      {visualPosition === "bottom" && visual && (
        <Box style={{ marginTop: "var(--space-5)", flex: 1, display: "flex", alignItems: "flex-end" }}>
          {visual}
        </Box>
      )}

      {children}
    </motion.div>
  );
}

interface BentoGridProps {
  /** Number of columns at desktop (mobile always 1) */
  columns?: 2 | 3 | 4;
  children: React.ReactNode;
}

export function BentoGrid({ columns = 3, children }: BentoGridProps) {
  return (
    <Box
      className="bento-grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {children}
    </Box>
  );
}
