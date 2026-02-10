"use client";

import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { motion, useReducedMotion } from "framer-motion";

const BRAND_EASING = [0.22, 1, 0.36, 1] as const;

interface GlowCardProps {
  /** Mono overline above title */
  label?: string;
  title: string;
  body?: string;
  /** Render visual/icon in top-right */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  /** Featured variant has gradient border */
  featured?: boolean;
}

export function GlowCard({
  label,
  title,
  body,
  icon,
  children,
  featured = false,
}: GlowCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={`glow-card ${featured ? "gradient-border" : ""}`}
      initial={reduced ? {} : { opacity: 0, y: 16 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: BRAND_EASING }}
    >
      <Flex
        direction="column"
        gap="3"
        style={{ padding: "var(--space-5) var(--space-5)" }}
      >
        <Flex justify="between" align="start">
          <Flex direction="column" gap="2" style={{ flex: 1 }}>
            {label && <Text className="overline">{label}</Text>}
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
          </Flex>
          {icon && (
            <Box
              style={{
                flexShrink: 0,
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--gray-9)",
              }}
            >
              {icon}
            </Box>
          )}
        </Flex>

        {body && (
          <Text
            as="p"
            size="2"
            style={{
              color: "var(--gray-10)",
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              lineHeight: 1.65,
            }}
          >
            {body}
          </Text>
        )}

        {children}
      </Flex>
    </motion.div>
  );
}
