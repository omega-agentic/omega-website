"use client";

import { Box, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { OmegaLogo } from "@/components/ui/OmegaLogo";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <Box className="page-shell" data-terminal="">
      {/* Nav */}
      <Flex
        asChild
        className="terminal-page-nav"
        align="center"
        justify="between"
      >
        <nav aria-label="Main navigation">
          <Link href="/" className="terminal-logo">
            <OmegaLogo height={16} />
          </Link>

          <Flex align="center" gap="4" className="terminal-page-nav-links">
            <Link href="/technology" className="terminal-nav-link">
              Technology
            </Link>
            <Link href="/pricing" className="terminal-nav-link">
              Pricing
            </Link>
            <Link href="/about" className="terminal-nav-link">
              About
            </Link>
            <a
              href="https://docs.omegacode.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-nav-link"
            >
              [docs]
            </a>
          </Flex>
        </nav>
      </Flex>

      {/* Page content */}
      <Box className="page-shell-content" id="main-content" tabIndex={-1}>
        {children}
      </Box>

      <SiteFooter />
    </Box>
  );
}
