"use client";

import {
  Section,
  Container,
  Heading,
  Text,
  Box,
} from "@radix-ui/themes";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { InstallTabs } from "@/components/ui/InstallTabs";
import { LogoTicker } from "@/components/ui/LogoTicker";

const TOOL_ITEMS = [
  { name: "Cursor", metric: "94% wire compression" },
  { name: "Claude Code", metric: "94% wire compression" },
  { name: "OpenCode", metric: "94% wire compression" },
  { name: "Cline", metric: "94% wire compression" },
  { name: "Aider", metric: "94% wire compression" },
  { name: "Windsurf", metric: "94% wire compression" },
  { name: "Continue", metric: "94% wire compression" },
  { name: "Copilot", metric: "94% wire compression" },
  { name: "Any OpenAI-compatible client", metric: "zero config" },
];

const INSTALL_TAB_ITEMS = [
  {
    label: "Cursor",
    terminal: `$ bun run omega-boost

Auto-detects Cursor and patches your config.
Your existing API keys pass through untouched.`,
    copy: "Auto-detects Cursor and patches your config. Your existing API keys pass through untouched.",
  },
  {
    label: "Claude Code",
    terminal: `$ bun run omega-boost

Auto-detects Claude Code. Patches the connection.
Nothing else changes.`,
    copy: "Auto-detects Claude Code. Patches the connection. Nothing else changes.",
  },
  {
    label: "OpenCode / Cline / Aider",
    terminal: `$ bun run omega-boost
# or: set OPENAI_API_BASE=http://localhost:10557

Use your existing API keys. That's it.`,
    copy: "Use your existing API keys. That\u2019s it.",
  },
  {
    label: "Any client",
    terminal: `$ bun run omega-boost
# Point your base URL to localhost:10557

BYOK. We never see your keys or your prompts.`,
    copy: "BYOK. We never see your keys or your prompts.",
  },
];

export function CompatibilitySection() {
  return (
    <Section size="3" id="compatibility" className="section-movement">
      <Container size="3">
        <StaggerReveal delayChildren={0} staggerChildren={0.06} duration={0.5}>
          <div>
            <SectionLabel>Works With Everything</SectionLabel>
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
            One command. <span className="chrome-text-subtle">Every tool.</span>
          </Heading>
          <Text
            as="p"
            size="3"
            style={{
              color: "var(--gray-11)",
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              lineHeight: 1.7,
              maxWidth: "420px",
              marginTop: "var(--space-2)",
            }}
          >
            Your tools. Your keys. Your machine.
          </Text>

          {/* Scrolling logo ticker */}
          <Box style={{ marginTop: "var(--space-7)", marginBottom: "var(--space-7)" }}>
            <LogoTicker items={TOOL_ITEMS} label="COMPATIBLE TOOLS" />
          </Box>

          {/* Install tabs */}
          <Box style={{ maxWidth: "600px" }}>
            <InstallTabs items={INSTALL_TAB_ITEMS} />
          </Box>
        </StaggerReveal>
      </Container>
    </Section>
  );
}
