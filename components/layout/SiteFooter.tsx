"use client";

import { Box, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { OmegaLogo } from "@/components/ui/OmegaLogo";

export function SiteFooter() {
  return (
    <Box asChild className="page-shell-footer">
      <footer>
        <Flex justify="between" align="center" wrap="wrap" gap="3">
          <Link href="/" className="terminal-logo" style={{ fontSize: "12px" }}>
            <OmegaLogo height={12} />
          </Link>
          <Flex gap="4" className="page-shell-footer-links">
            <Link href="/technology" className="terminal-nav-link">Technology</Link>
            <Link href="/pricing" className="terminal-nav-link">Pricing</Link>
            <Link href="/about" className="terminal-nav-link">About</Link>
            <a href="https://docs.omegacode.ai" target="_blank" rel="noopener noreferrer" className="terminal-nav-link">[docs]</a>
            <a href="https://github.com/omegacode-ai" target="_blank" rel="noopener noreferrer" className="terminal-nav-link">[github]</a>
          </Flex>
        </Flex>
        <Box className="page-shell-footer-copy">
          © 2026 OmegaCode · MIT Licensed · ω the result is saved.
        </Box>
      </footer>
    </Box>
  );
}
