"use client";

import Link from "next/link";
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
import { StaggerReveal } from "@/components/ui/StaggerReveal";

const BOOT_LINES = [
  "$ bun run omega-boost",
  "",
  "Omega Boost v1.0.0",
  "\u2714 Proxy running on localhost:10557",
  "\u2714 Auto-detected: Cursor, Claude Code",
  "\u2714 Providers normalized: OpenAI, Anthropic, Baseten",
  "",
  "Ready. the result is saved.",
];

function TerminalChrome({ children }: { children: React.ReactNode }) {
  return (
    <Box
      className="glow-card"
      style={{
        overflow: "hidden",
        width: "100%",
        maxWidth: "520px",
        padding: 0,
      }}
    >
      {/* Title bar */}
      <Flex
        align="center"
        gap="2"
        style={{
          padding: "var(--space-2) var(--space-3)",
          borderBottom: "1px solid var(--gray-4)",
          backgroundColor:
            "color-mix(in srgb, var(--gray-3) 50%, transparent)",
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--gray-7)",
          }}
        />
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--gray-7)",
          }}
        />
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--gray-7)",
          }}
        />
        <Text
          size="1"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "10px",
            color: "var(--gray-9)",
            marginLeft: "var(--space-2)",
          }}
        >
          terminal
        </Text>
      </Flex>
      {/* Content */}
      <Box style={{ padding: "var(--space-4)" }}>{children}</Box>
    </Box>
  );
}

export function ResolutionMovement() {
  const reducedMotion = useReducedMotion();

  return (
    <Section
      size="3"
      className="section-movement section-alt"
      style={{
        width: "100%",
        maxWidth: "none",
      }}
    >
      <Container size="3">
        <Flex
          direction="column"
          align="center"
          gap="7"
          style={{ textAlign: "center" }}
        >
          <StaggerReveal
            delayChildren={0}
            staggerChildren={0.1}
            duration={0.5}
          >
            <Heading
              size="8"
              weight="light"
              className="display-heading"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                maxWidth: "520px",
                color: "var(--gray-12)",
              }}
            >
              The end state is{" "}
              <span className="chrome-text-subtle">
                closer than you think.
              </span>
            </Heading>

            <TerminalChrome>
              <pre
                style={{
                  margin: 0,
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "12px",
                  lineHeight: 1.8,
                  color: "var(--gray-11)",
                  whiteSpace: "pre-wrap",
                }}
              >
                {BOOT_LINES.join("\n")}
              </pre>
            </TerminalChrome>

            <Flex gap="3" align="center" wrap="wrap" justify="center">
              <Button
                size="4"
                variant="solid"
                highContrast
                className="btn-chrome"
                asChild
              >
                <Link href="/boost">Get Started</Link>
              </Button>
              <Button size="4" variant="outline" asChild>
                <a href="https://docs.omega.ms" target="_blank" rel="noopener noreferrer">
                  Read the docs
                </a>
              </Button>
              <Button size="4" variant="outline" asChild>
                <Link href="/chat">Try Omega Chat</Link>
              </Button>
            </Flex>
          </StaggerReveal>

          {/* Omega signature with full-width glow accent + stronger radial glow */}
          <Box className="glow-accent" style={{ position: "relative", padding: "var(--space-8)" }}>
            <Box
              aria-hidden
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                background:
                  "radial-gradient(ellipse at center, var(--gray-5) 0%, var(--gray-4) 25%, transparent 70%)",
                opacity: 0.7,
                filter: "blur(40px)",
                pointerEvents: "none",
              }}
            />
            <motion.div
              className="float"
              style={{
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(5rem, 10vw, 9rem)",
                lineHeight: 1,
                color: "var(--gray-6)",
                marginTop: "var(--space-4)",
                userSelect: "none",
                position: "relative",
              }}
              animate={reducedMotion ? {} : { scale: [1, 1.02, 1] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {"\u03c9"}
            </motion.div>
          </Box>
          <Text
            size="2"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "13px",
              color: "var(--gray-9)",
            }}
          >
            the result is saved
          </Text>
        </Flex>
      </Container>
    </Section>
  );
}
