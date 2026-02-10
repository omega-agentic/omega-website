"use client";

import { Box, Flex, Text, TextField, Button } from "@radix-ui/themes";

// When chat.omega.ms goes live, uncomment the iframe block below and remove the placeholder UI.
// const OPEN_WEBUI_URL = "https://chat.omega.ms";

export function ChatEmbed() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      style={{
        minHeight: "calc(100vh - 56px)",
        width: "100%",
        padding: "var(--space-6)",
        backgroundColor: "var(--gray-1)",
      }}
    >
      <Flex
        direction="column"
        align="center"
        gap="6"
        className="glass-card"
        style={{
          maxWidth: 420,
          width: "100%",
          padding: "var(--space-8)",
          textAlign: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(3rem, 8vw, 5rem)",
            lineHeight: 1,
            color: "var(--gray-5)",
            userSelect: "none",
          }}
        >
          {"\u03c9"}
        </Text>
        <Flex direction="column" gap="2">
          <Text
            size="5"
            weight="medium"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              color: "var(--gray-12)",
              letterSpacing: "-0.03em",
            }}
          >
            Omega Chat
          </Text>
          <Text
            size="2"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              color: "var(--gray-9)",
            }}
          >
            Coming soon — powered by Open WebUI
          </Text>
        </Flex>
        <Flex direction="column" gap="3" style={{ width: "100%" }}>
          <Text
            size="1"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "var(--gray-8)",
              letterSpacing: "0.05em",
            }}
          >
            Notify me when it&apos;s ready
          </Text>
          <Flex gap="2" align="center">
            <TextField.Root
              placeholder="you@example.com"
              type="email"
              size="2"
              style={{ flex: 1 }}
            />
            <Button size="2" className="btn-chrome" type="submit">
              Notify me
            </Button>
          </Flex>
        </Flex>
        <Text size="1" style={{ color: "var(--gray-8)" }}>
          Or join us on{" "}
          <Box asChild>
            <a
              href="https://discord.gg/omega"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--gray-11)",
                textDecoration: "underline",
                textUnderlineOffset: 2,
              }}
            >
              Discord
            </a>
          </Box>{" "}
          for updates.
        </Text>
      </Flex>

      {/* When chat.omega.ms is live, uncomment and use this instead of the placeholder above:
      <Box style={{ flex: 1, position: "relative", width: "100%" }}>
        <iframe
          src={OPEN_WEBUI_URL}
          title="Omega Chat"
          style={{ width: "100%", height: "100%", border: "none", display: "block" }}
          allow="clipboard-write; microphone"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-downloads"
        />
      </Box>
      */}
    </Flex>
  );
}
