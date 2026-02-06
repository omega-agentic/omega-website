"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Section,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Box,
} from "@radix-ui/themes";
import { HeroGlow } from "@/components/ui/GradientOrNoiseBackground";
import { HeroAnimation } from "@/components/ui/HeroAnimation";
import { BRAND_EASING, SCROLL_REVEAL_OFFSET } from "@/lib/constants";

const STAGGER = {
  logo: 0,
  tagline: 0.15,
  h1: 0.3,
  body: 0.5,
  quickstart: 0.65,
  cta: 0.8,
};

const itemVariants = (delay: number, reduced: boolean) =>
  reduced
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.15 } },
      }
    : {
        hidden: { opacity: 0, y: SCROLL_REVEAL_OFFSET },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay,
            ease: BRAND_EASING as [number, number, number, number],
          },
        },
      };

export function HeroMovement() {
  const reducedMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx omega-boost");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section
      size="3"
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "6rem",
        paddingBottom: "4rem",
      }}
    >
      <HeroGlow />
      <Container size="3" style={{ position: "relative", zIndex: 1 }}>
        <Flex
          direction="column"
          align="center"
          gap="4"
          style={{ textAlign: "center" }}
        >
          {/* Omega mark with float */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants(STAGGER.logo, !!reducedMotion)}
            className="float"
          >
            <HeroAnimation size={200} variant="circle" />
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants(STAGGER.tagline, !!reducedMotion)}
          >
            <Text
              size="1"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--gray-9)",
                letterSpacing: "0.05em",
                textTransform: "lowercase",
              }}
            >
              the end state of agentic machine intelligence
            </Text>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants(STAGGER.h1, !!reducedMotion)}
            style={{ maxWidth: "720px" }}
          >
            <Heading
              size="9"
              weight="light"
              style={{
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                fontWeight: 300,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                fontSize: "clamp(2.5rem, 5vw + 0.5rem, 4.5rem)",
                color: "var(--gray-12)",
              }}
            >
              Instantly improve
              <br />
              your AI coding tools.
              <br />
              <Box asChild style={{ color: "var(--gray-10)" }}>
                <span>With proof.</span>
              </Box>
            </Heading>
          </motion.div>

          {/* Body */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants(STAGGER.body, !!reducedMotion)}
            style={{ maxWidth: "480px" }}
          >
            <Text
              size="3"
              style={{
                color: "var(--gray-11)",
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                lineHeight: 1.65,
                fontSize: "clamp(0.95rem, 1.1vw, 1.125rem)",
              }}
            >
              Improve agentic coding outcomes, save time &amp; money, and get
              positive results that compound.
            </Text>
          </motion.div>

          {/* Quickstart command */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants(STAGGER.quickstart, !!reducedMotion)}
          >
            <button
              onClick={handleCopy}
              className="glass-card"
              style={{
                padding: "10px 12px 10px 20px",
                display: "inline-flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                background: "color-mix(in srgb, var(--gray-2) 60%, transparent)",
                font: "inherit",
                border: "1px solid var(--gray-4)",
                borderRadius: "var(--radius-3)",
              }}
            >
              <code
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "14px",
                  color: "var(--gray-11)",
                  userSelect: "all",
                  lineHeight: 1,
                }}
              >
                <span style={{ color: "var(--gray-8)" }}>$ </span>
                npx omega-boost
              </code>
              <span
                style={{
                  padding: "4px 10px",
                  borderRadius: "var(--radius-2)",
                  backgroundColor: "color-mix(in srgb, var(--gray-4) 60%, transparent)",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "12px",
                  color: copied ? "var(--grass-9)" : "var(--gray-9)",
                  transition: "color 0.15s ease",
                  lineHeight: 1,
                }}
              >
                {copied ? "copied!" : "copy"}
              </span>
            </button>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants(STAGGER.cta, !!reducedMotion)}
          >
            <Flex align="center" gap="3">
              <Button size="4" variant="solid" highContrast asChild>
                <Link href="/boost">Install</Link>
              </Button>
              <Button size="4" variant="soft" asChild>
                <Link href="/technology">Docs</Link>
              </Button>
            </Flex>
          </motion.div>
        </Flex>
      </Container>
    </Section>
  );
}
