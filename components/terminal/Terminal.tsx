"use client";

import { Box, Flex } from "@radix-ui/themes";

export function Terminal({ children }: { children: React.ReactNode }) {
  return (
    <Box className="terminal-window" data-terminal="">
      {/* Title bar */}
      <Flex
        className="terminal-title-bar"
        align="center"
        justify="between"
        gap="3"
      >
        <Flex align="center" gap="2">
          <Flex gap="1" className="terminal-dots" aria-hidden="true">
            <span className="terminal-dot terminal-dot-red" />
            <span className="terminal-dot terminal-dot-amber" />
            <span className="terminal-dot terminal-dot-green" />
          </Flex>
          <span className="terminal-title-path">omega@proxy ~</span>
        </Flex>
      </Flex>

      {/* Scrollable content */}
      <Box className="terminal-content">
        {children}
      </Box>
    </Box>
  );
}
