"use client";

import { Box, Container, Flex, Text, Separator } from "@radix-ui/themes";
import { OmegaLockup } from "@/components/brand/OmegaLockup";

export function Footer() {
  return (
    <Box asChild>
      <footer>
        <Separator size="4" style={{ borderColor: "rgba(24, 24, 27, 0.08)" }} />
        <Box py="6">
          <Container size="4">
            <Flex justify="between" align="center" wrap="wrap" gap="4">
              <OmegaLockup size={18} />
              <Text
                size="2"
                style={{
                  color: "var(--omega-accent)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                }}
              >
                the result is saved
              </Text>
            </Flex>
            <Text
              size="1"
              style={{
                marginTop: "var(--space-2)",
                color: "var(--omega-accent)",
                opacity: 0.8,
                fontFamily: "var(--font-outfit), system-ui, sans-serif",
              }}
            >
              omega · fleek · 2026
            </Text>
          </Container>
        </Box>
      </footer>
    </Box>
  );
}
