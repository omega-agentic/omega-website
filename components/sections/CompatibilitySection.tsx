"use client";

import {
  Section,
  Container,
  Flex,
  Heading,
  Text,
  Box,
  Grid,
} from "@radix-ui/themes";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { InstallTabs } from "@/components/ui/InstallTabs";
import { ToolLogo } from "@/components/ui/ToolLogos";

const TOOLS = [
  { name: "Cursor", desc: "AI IDE" },
  { name: "Claude Code", desc: "Anthropic CLI" },
  { name: "OpenCode", desc: "Terminal agent" },
  { name: "Cline", desc: "VS Code agent" },
  { name: "Aider", desc: "Pair programming" },
  { name: "Windsurf", desc: "AI IDE" },
  { name: "Continue", desc: "Open-source copilot" },
  { name: "Any OpenAI-compatible client", desc: "BYOK" },
];

const INSTALL_TAB_ITEMS = [
  {
    label: "Cursor",
    terminal: `$ npx omega-boost

Auto-detects Cursor and patches your config.
Your existing API keys pass through untouched.`,
    copy: "Auto-detects Cursor and patches your config. Your existing API keys pass through untouched.",
  },
  {
    label: "Claude Code",
    terminal: `$ npx omega-boost

Auto-detects Claude Code. Patches the connection.
Nothing else changes.`,
    copy: "Auto-detects Claude Code. Patches the connection. Nothing else changes.",
  },
  {
    label: "OpenCode / Cline / Aider",
    terminal: `$ npx omega-boost
# or: set OPENAI_API_BASE=http://localhost:10557

Use your existing API keys. That's it.`,
    copy: "Use your existing API keys. That\u2019s it.",
  },
  {
    label: "Any client",
    terminal: `$ npx omega-boost
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
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "var(--gray-12)",
            }}
          >
            One command. Every tool.
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

          {/* Tool grid */}
          <Box style={{ marginTop: "var(--space-6)" }}>
            <Grid
              columns={{ initial: "2", sm: "4" }}
              gap="3"
            >
              {TOOLS.map((tool) => (
                <Box
                  key={tool.name}
                  className="glass-card"
                  style={{
                    padding: "var(--space-4)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <ToolLogo name={tool.name} size={28} />
                  <Text
                    size="2"
                    weight="medium"
                    style={{
                      fontFamily: "var(--font-outfit), system-ui, sans-serif",
                      color: "var(--gray-12)",
                    }}
                  >
                    {tool.name}
                  </Text>
                  <Text
                    size="1"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      color: "var(--gray-9)",
                      fontSize: "11px",
                    }}
                  >
                    {tool.desc}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Box>

          {/* Install tabs */}
          <Box style={{ marginTop: "var(--space-7)", maxWidth: "600px" }}>
            <InstallTabs items={INSTALL_TAB_ITEMS} />
          </Box>
        </StaggerReveal>
      </Container>
    </Section>
  );
}
