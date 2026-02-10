"use client";

import Link from "next/link";
import {
  Section,
  Container,
  Heading,
  Text,
  Grid,
  Flex,
  Button,
  Box,
} from "@radix-ui/themes";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { AnimatedStatBlock } from "@/components/ui/AnimatedStatBlock";
import { AnimatedTerminal } from "@/components/ui/AnimatedTerminal";
import { MetricRibbon } from "@/components/ui/MetricRibbon";

const PRODUCT_METRICS = [
  { value: "650 → 1.5", label: "bytes per token" },
  { value: "94%", label: "wire compression" },
  { value: "32", label: "theorems" },
  { value: "<1ms", label: "proxy latency" },
];

interface ProductCardData {
  badge: string;
  badgeVariant: "live" | "available" | "soon";
  title: string;
  subtitle: string;
  body: string;
  cta: { label: string; href: string };
  terminal?: React.ReactNode;
  visual?: React.ReactNode;
}

const PRODUCTS: ProductCardData[] = [
  {
    badge: "AVAILABLE",
    badgeVariant: "available",
    title: "Omega Boost",
    subtitle: "The drop-in proxy that fixes the wire.",
    body: "Intercepts the SSE/JSON protocol from any LLM provider and emits clean, typed frames. Tool calls arrive complete. Streaming is deterministic. One install. Zero config.",
    cta: { label: "Get started", href: "/boost" },
  },
  {
    badge: "LIVE",
    badgeVariant: "live",
    title: "Omega Chat",
    subtitle: "AI chat, powered by Omega infrastructure.",
    body: "Full-featured AI chat interface running on Omega\u2019s infrastructure. Multi-model, multi-conversation, with the same wire-level optimizations as Boost under the hood.",
    cta: { label: "Try Omega Chat", href: "/chat" },
  },
  {
    badge: "COMING SOON",
    badgeVariant: "soon",
    title: "Omega Code",
    subtitle: "The coding agent that never forgets.",
    body: "Persistent memory that compounds across sessions. Obligation tracking \u2014 every file opened gets closed. Cryptographic attestation of every action. Built in Haskell.",
    cta: { label: "Join the waitlist", href: "/code" },
    visual: (
      <Flex gap="2" align="center" style={{ marginTop: "var(--space-3)" }}>
        {["Day 1", "Day 30", "Day 100"].map((d, i) => (
          <Flex key={d} direction="column" align="center" gap="1">
            <Box
              style={{
                width: 24 + i * 8,
                height: 24 + i * 8,
                borderRadius: "50%",
                backgroundColor: "var(--gray-4)",
              }}
            />
            <Text size="1" style={{ fontSize: "9px", color: "var(--gray-8)" }}>
              {d}
            </Text>
          </Flex>
        ))}
      </Flex>
    ),
  },
];

function ProductCardBlock({ product }: { product: ProductCardData }) {
  const isLive = product.badgeVariant === "live";
  const isAvailable = product.badgeVariant === "available";
  const isFeatured = isAvailable;

  return (
    <Box
      className={isFeatured ? "glow-card gradient-border" : "glow-card"}
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
          {product.title}
        </Heading>
        <Flex
          align="center"
          gap="2"
          style={{
            padding: "var(--space-1) var(--space-2)",
            borderRadius: "var(--radius-2)",
            border: isLive || isAvailable ? "none" : "1px solid var(--gray-5)",
            background: isLive ? "color-mix(in srgb, var(--grass-4) 50%, transparent)" : undefined,
          }}
        >
          {(isLive || isAvailable) && (
            <Box
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: isLive ? "var(--grass-9)" : "var(--gray-9)",
              }}
            />
          )}
          <Text
            size="1"
            className={isFeatured ? "shimmer-badge" : undefined}
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "10px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: isLive ? "var(--grass-11)" : isFeatured ? undefined : "var(--gray-10)",
            }}
          >
            {product.badge}
          </Text>
        </Flex>
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
        {product.subtitle}
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
        {product.body}
      </Text>

      {product.terminal && <Box>{product.terminal}</Box>}
      {product.visual && <Box>{product.visual}</Box>}

      <Flex style={{ marginTop: "auto" }}>
        <Button
          size="3"
          variant={isFeatured ? "solid" : "outline"}
          highContrast={isFeatured}
          className={isFeatured ? "btn-chrome" : undefined}
          asChild
        >
          <Link href={product.cta.href}>{product.cta.label}</Link>
        </Button>
      </Flex>
    </Box>
  );
}

export function ProductsMovement() {
  // Add terminal only to Boost
  const productsWithTerminals = PRODUCTS.map((p) => {
    if (p.title === "Omega Boost") {
      return {
        ...p,
        terminal: (
          <AnimatedTerminal
            content="$ bun run omega-boost"
            copyText="bun run omega-boost"
            mode="typing"
            delayMs={50}
          />
        ),
      };
    }
    return p;
  });

  return (
    <Section size="3" id="products" className="section-movement">
      <Container size="3">
        <StaggerReveal
          delayChildren={0}
          staggerChildren={0.08}
          duration={0.5}
        >
          <div>
            <SectionLabel>Products</SectionLabel>
          </div>
          <Heading
            size="8"
            weight="light"
            className="display-heading"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "var(--gray-12)",
            }}
          >
            The stack,{" "}
            <span className="chrome-text-subtle">shipping in layers.</span>
          </Heading>
          <Text
            as="p"
            size="3"
            style={{
              color: "var(--gray-11)",
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              lineHeight: 1.7,
              maxWidth: "520px",
              marginTop: "var(--space-2)",
            }}
          >
            Each product moves closer to the end state. Boost fixes the wire.
            Chat brings AI to your browser. Code fixes the agent. The foundation
            gets stronger underneath all three.
          </Text>
        </StaggerReveal>

        {/* Metric ribbon above cards */}
        <Box style={{ marginTop: "var(--space-6)" }}>
          <MetricRibbon items={PRODUCT_METRICS} />
        </Box>

        {/* 3-product grid */}
        <Grid
          columns={{ initial: "1", md: "3" }}
          gap="4"
          style={{ marginTop: "var(--space-6)" }}
        >
          {productsWithTerminals.map((p) => (
            <ProductCardBlock key={p.title} product={p} />
          ))}
        </Grid>

        {/* Stats */}
        <Box
          className="divider-gradient"
          style={{ margin: "var(--space-8) 0" }}
        />
        <Grid columns={{ initial: "2", sm: "4" }} gap="6">
          <AnimatedStatBlock
            value="650 → 1.5"
            caption="Wire protocol compression"
          />
          <AnimatedStatBlock
            value="32 theorems"
            caption="Lean4 verified formal proofs"
          />
          <AnimatedStatBlock
            value="123k LOC"
            caption="Production-grade kept code"
          />
          <AnimatedStatBlock value="<1ms" caption="Proxy latency added" />
        </Grid>
      </Container>
    </Section>
  );
}
