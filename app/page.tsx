"use client";

import { Box, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { Terminal } from "@/components/terminal/Terminal";
import { BootSequence } from "@/components/terminal/BootSequence";
import { TerminalPrompt } from "@/components/terminal/TerminalPrompt";
import { AsciiBackground } from "@/components/terminal/AsciiBackground";
import { LearnMore } from "@/components/terminal/LearnMore";
import { OmegaLogo } from "@/components/ui/OmegaLogo";

export default function HomePage() {
  return (
    <Box className="terminal-page" data-terminal="">
      <AsciiBackground />

      {/* Nav bar */}
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

      {/* Hero section */}
      <Box className="terminal-hero" id="main-content" tabIndex={-1}>
        <h1 className="terminal-hero-heading terminal-chrome-text">
          Better agent infra
        </h1>
        <p className="terminal-hero-sub">
          Drop-in proxy for Cursor, Claude Code, OpenCode, Cline, and every AI coding tool.
          One command. Zero config. Free.
        </p>

        <Flex direction="column" align="center" className="terminal-hero-cta">
          <TerminalPrompt />
        </Flex>

        {/* Above-fold value props */}
        <Flex className="terminal-hero-stats" justify="center" wrap="wrap">
          <span className="hero-stat"><strong>433x</strong> less overhead</span>
          <span className="hero-stat"><strong>0%</strong> tool errors</span>
          <span className="hero-stat"><strong>&lt;1ms</strong> latency</span>
          <span className="hero-stat"><strong>MIT</strong> licensed</span>
        </Flex>
      </Box>

      {/* Terminal showcase */}
      <Box className="terminal-page-center">
        <Terminal>
          <BootSequence />
        </Terminal>
      </Box>

      {/* Learn more indicator */}
      <LearnMore />

      {/* ── What it does ── */}
      <section className="home-section">
        <div className="home-section-label">What changes</div>
        <div className="home-grid-3">
          <div className="home-stat-card">
            <div className="home-stat-number">433x</div>
            <div className="home-stat-desc">
              Less wire overhead. Strip redundant JSON from every provider.
            </div>
          </div>
          <div className="home-stat-card">
            <div className="home-stat-number">0%</div>
            <div className="home-stat-desc">
              Tool call errors. Typed semantic frames replace broken regex parsing.
            </div>
          </div>
          <div className="home-stat-card">
            <div className="home-stat-number">100%</div>
            <div className="home-stat-desc">
              Provider compatibility. Works with Cursor, Claude Code, Cline, OpenCode, Aider, and every LLM.
            </div>
          </div>
        </div>
      </section>

      <div className="home-divider" aria-hidden="true">
        ────────────────────────────────────────────────────────────
      </div>

      {/* ── How it works ── */}
      <section className="home-section">
        <div className="home-section-label">How it works</div>
        <div className="home-grid-3">
          <div className="home-step">
            <div className="home-step-number">01</div>
            <div className="home-step-title">Install</div>
            <div className="home-step-desc">One command. No dependencies. 30 seconds.</div>
            <div className="home-step-code">$ bun run omega</div>
          </div>
          <div className="home-step">
            <div className="home-step-number">02</div>
            <div className="home-step-title">Point</div>
            <div className="home-step-desc">Set your API endpoint to the local proxy. Only config change needed.</div>
            <div className="home-step-code">localhost:4800</div>
          </div>
          <div className="home-step">
            <div className="home-step-number">03</div>
            <div className="home-step-title">Done</div>
            <div className="home-step-desc">Your tools are faster, more reliable, and cheaper. Nothing else changes.</div>
          </div>
        </div>
      </section>

      <div className="home-divider" aria-hidden="true">
        ────────────────────────────────────────────────────────────
      </div>

      {/* ── Under the hood ── */}
      <section className="home-section">
        <div className="home-section-label">Under the hood</div>
        <p className="home-under-hood">
          Built on SIGIL (typed wire protocol), TRINITY (deterministic replay),
          and 32 formally verified Lean4 theorems. No code changes. No config migration.
          No new workflows to learn.{" "}
          <Link href="/technology">Read the full architecture →</Link>
        </p>
      </section>

      <div className="home-divider" aria-hidden="true">
        ────────────────────────────────────────────────────────────
      </div>

      {/* ── Final CTA ── */}
      <section className="home-cta">
        <div className="home-cta-heading">Better agents start with better infrastructure</div>
        <div className="home-cta-sub">Free. Open source. MIT Licensed.</div>
        <Flex justify="center">
          <TerminalPrompt />
        </Flex>
        <div className="home-cta-links">
          <a
            href="https://docs.omegacode.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="home-cta-link"
          >
            Read the docs
          </a>
          <Link href="/technology" className="home-cta-link">
            Technology
          </Link>
          <a
            href="https://github.com/omegacode-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="home-cta-link"
          >
            GitHub
          </a>
        </div>
      </section>
    </Box>
  );
}
