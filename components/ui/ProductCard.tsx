"use client";

import Link from "next/link";
import { Flex, Text, Heading, Button, Box } from "@radix-ui/themes";

interface ProductCardProps {
  badge: string;
  title: string;
  subtitle: string;
  body: string;
  subtext?: string;
  terminal?: React.ReactNode;
  variant?: "primary" | "secondary";
  ctas?: { label: string; href: string }[];
  singleCta?: { label: string; href: string };
}

export function ProductCard({
  badge,
  title,
  subtitle,
  body,
  subtext,
  terminal,
  variant = "primary",
  ctas,
  singleCta,
}: ProductCardProps) {
  const isPrimary = variant === "primary";

  return (
    <Box
      className={isPrimary ? "glass-card gradient-border" : "glass-card"}
      style={{
        padding: "var(--space-6)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
      }}
    >
      <Flex justify="between" align="center">
        <Heading
          size="5"
          weight="medium"
          style={{
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
            color: "var(--gray-12)",
          }}
        >
          {title}
        </Heading>
        <Text
          size="1"
          className={isPrimary ? "shimmer-badge" : undefined}
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "10px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: isPrimary ? undefined : "var(--gray-10)",
            padding: "var(--space-1) var(--space-2)",
            border: isPrimary ? "none" : "1px solid var(--gray-5)",
            borderRadius: "var(--radius-2)",
          }}
        >
          {badge}
        </Text>
      </Flex>

      <Text
        as="p"
        size="3"
        weight="medium"
        style={{
          fontFamily: "var(--font-outfit), system-ui, sans-serif",
          color: "var(--gray-12)",
        }}
      >
        {subtitle}
      </Text>

      <Text
        as="p"
        size="2"
        style={{
          fontFamily: "var(--font-outfit), system-ui, sans-serif",
          lineHeight: 1.65,
          color: "var(--gray-11)",
        }}
      >
        {body}
      </Text>

      {subtext && (
        <Text
          as="p"
          size="2"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            color: "var(--gray-10)",
            fontSize: "13px",
          }}
        >
          {subtext}
        </Text>
      )}

      {terminal && <Box>{terminal}</Box>}

      <Flex gap="3" wrap="wrap" style={{ marginTop: "auto" }}>
        {ctas?.map((c) => (
          <Button
            key={c.label}
            size="3"
            variant={isPrimary ? "solid" : "soft"}
            highContrast={isPrimary}
            asChild
          >
            <Link href={c.href}>{c.label}</Link>
          </Button>
        ))}
        {singleCta && (
          <Button size="3" variant="soft" asChild>
            <Link href={singleCta.href}>{singleCta.label}</Link>
          </Button>
        )}
      </Flex>
    </Box>
  );
}
