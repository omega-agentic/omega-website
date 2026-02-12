"use client";

import { useEffect } from "react";
import { Box, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { Terminal } from "@/components/terminal/Terminal";
import { BootSequence } from "@/components/terminal/BootSequence";
import { TerminalPrompt } from "@/components/terminal/TerminalPrompt";
import { AsciiBackground } from "@/components/terminal/AsciiBackground";
import { LearnMore } from "@/components/terminal/LearnMore";
import { LogoTicker } from "@/components/ui/LogoTicker";
import { OmegaLogo } from "@/components/ui/OmegaLogo";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CountUp } from "@/components/ui/CountUp";
import { ProxyDiagram } from "@/components/ui/ProxyDiagram";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Zap, ShieldCheck, Globe, ArrowDownToLine, Brackets, Shuffle, Brain, FileCheck, Lock } from "lucide-react";

const TOOL_LOGOS = [
  { name: "Cursor", icon: "/logos/cursor.svg" },
  { name: "Claude Code", icon: "/logos/claude.svg" },
  { name: "Cline", icon: "/logos/cline.svg" },
  { name: "OpenCode", icon: "/logos/opencode.svg" },
  { name: "Continue", icon: "/logos/continue.svg" },
  { name: "OpenHands", icon: "/logos/openhands.svg" },
  { name: "Copilot", icon: "/logos/copilot.svg" },
  { name: "Windsurf", icon: "/logos/windsurf.svg" },
  { name: "Anthropic", icon: "/logos/anthropic.svg" },
  { name: "OpenAI", icon: "/logos/openai.svg" },
  { name: "Gemini", icon: "/logos/gemini.svg" },
  { name: "DeepSeek", icon: "/logos/deepseek.svg" },
  { name: "Groq", icon: "/logos/groq.svg" },
];

export default function HomePage() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.body.classList.add("hero-ready");
    }, 50);
    return () => {
      clearTimeout(timeout);
      document.body.classList.remove("hero-ready");
    };
  }, []);

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
        <h1 className="terminal-hero-heading terminal-chrome-text hero-fade hero-fade-1" data-text="Better agent infra">
          Better agent infra
        </h1>
        <p className="terminal-hero-sub hero-fade hero-fade-2">
          Drop-in proxy for Cursor, Claude Code, OpenCode, Cline, and every AI coding tool.
          One command. Zero config. Free.
        </p>

        <Flex direction="column" align="center" className="terminal-hero-cta hero-fade hero-fade-3">
          <TerminalPrompt />
        </Flex>

      </Box>

      {/* Compatibility ticker */}
      <div className="home-ticker-wrap hero-fade hero-fade-4">
        <div className="home-ticker-label">Works with every tool and provider</div>
        <LogoTicker logos={TOOL_LOGOS} speed={35} />
      </div>

      {/* Terminal showcase */}
      <Box className="terminal-page-center">
        <Terminal>
          <BootSequence />
        </Terminal>
      </Box>

      {/* Learn more indicator */}
      <LearnMore />

      {/* ── What changes ── */}
      <ScrollReveal as="section" className="home-section">
        <div className="home-section-label">What changes</div>
        <div className="home-grid-3">
          <ScrollReveal className="home-stat-card" delay={0}>
            <Zap size={20} className="home-card-icon" />
            <div className="home-stat-number">
              <CountUp end={433} suffix="x" duration={1500} />
            </div>
            <div className="home-stat-label">Smaller wire overhead</div>
            <div className="home-stat-desc">
              Every token from every provider is wrapped in ~650 bytes
              of redundant JSON. OmegaCode strips it to ~1.5 bytes.
            </div>
          </ScrollReveal>
          <ScrollReveal className="home-stat-card" delay={100}>
            <ShieldCheck size={20} className="home-card-icon" />
            <div className="home-stat-number">
              <CountUp end={0} suffix="%" duration={500} />
            </div>
            <div className="home-stat-label">Tool call syntax errors</div>
            <div className="home-stat-desc">
              Tool calls arrive as complete semantic frames.
              No more partial JSON. No more regex parsing.
            </div>
          </ScrollReveal>
          <ScrollReveal className="home-stat-card" delay={200}>
            <Globe size={20} className="home-card-icon" />
            <div className="home-stat-number">
              <CountUp end={100} suffix="%" duration={1200} />
            </div>
            <div className="home-stat-label">Provider compatibility</div>
            <div className="home-stat-desc">
              Claude, GPT, Gemini, DeepSeek, Qwen — all normalized
              into one consistent format.
            </div>
          </ScrollReveal>
        </div>
      </ScrollReveal>

      <ScrollReveal className="home-divider" aria-hidden="true">{null}</ScrollReveal>

      {/* ── Before / After ── */}
      <ScrollReveal as="section" className="home-section">
        <div className="home-section-label">Before → After</div>
        <p className="page-body" style={{ marginBottom: "var(--space-5)" }}>
          Same tools. Same models. Better results.
        </p>
        <div className="home-before-after">
          <ScrollReveal className="page-card" delay={0}>
            <div className="page-card-label">Before — Raw SSE</div>
            <div className="page-code page-code-red" style={{ marginTop: "var(--space-3)", fontSize: "12px" }}>
              {`data: {"id":"chatcmpl-cf31b079",
"choices":[{"index":0,"delta":
{"content":" const",
"function_call":null,
"tool_calls":[]}}],
"model":"gpt-4","object":
"chat.completion.chunk"}`}
            </div>
            <div className="page-card-desc" style={{ marginTop: "var(--space-3)" }}>
              ~650 bytes per token
            </div>
          </ScrollReveal>

          <div className="home-before-after-arrow" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>

          <ScrollReveal className="page-card" delay={120}>
            <div className="page-card-label">After — SIGIL frame</div>
            <div className="page-code page-code-green" style={{ marginTop: "var(--space-3)", fontSize: "12px" }}>
              {`[0x2A]

1 byte. The token "const".
Nothing else.`}
            </div>
            <div className="page-card-desc" style={{ marginTop: "var(--space-3)" }}>
              ~1.5 bytes avg per token
            </div>
          </ScrollReveal>
        </div>
        <p className="page-body" style={{ marginTop: "var(--space-5)" }}>
          That&apos;s real. Every token from every provider is wrapped in ~650 bytes of redundant JSON.
          OmegaCode strips it to the essential signal. Your tools respond faster. Your models focus
          on your code, not on parsing brackets.
        </p>
      </ScrollReveal>

      <ScrollReveal className="home-divider" aria-hidden="true">{null}</ScrollReveal>

      {/* ── How it works ── */}
      <ScrollReveal as="section" className="home-section">
        <div className="home-section-label">How it works</div>
        <p className="page-body" style={{ marginBottom: "var(--space-5)" }}>
          30 seconds to better agents.
        </p>
        <div className="home-grid-3">
          <ScrollReveal className="home-step" delay={0}>
            <div className="home-step-number">01</div>
            <div className="home-step-title">Install</div>
            <div className="home-step-desc">
              bun run omega. One command. Takes 30 seconds. No dependencies to manage.
            </div>
            <div className="home-step-code">$ bun run omega</div>
          </ScrollReveal>
          <ScrollReveal className="home-step" delay={100}>
            <div className="home-step-number">02</div>
            <div className="home-step-title">Point</div>
            <div className="home-step-desc">
              Set your tool&apos;s API endpoint to localhost:4800. That&apos;s the only config change.
            </div>
            <div className="home-step-code">localhost:4800</div>
          </ScrollReveal>
          <ScrollReveal className="home-step" delay={200}>
            <div className="home-step-number">03</div>
            <div className="home-step-title">Done</div>
            <div className="home-step-desc">
              Your tools are faster, more reliable, and cheaper to run. Nothing else changes.
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={300}>
          <ProxyDiagram />
        </ScrollReveal>
        <p className="page-body" style={{ marginTop: "var(--space-5)" }}>
          No code changes. No config migration. No new workflows to learn.
          OmegaCode sits between your tools and your providers and makes everything work better.
        </p>
      </ScrollReveal>

      <ScrollReveal className="home-divider" aria-hidden="true">{null}</ScrollReveal>

      {/* ── What you get ── */}
      <ScrollReveal as="section" className="home-section">
        <div className="home-section-label">What you get</div>
        <p className="page-body" style={{ marginBottom: "var(--space-5)" }}>
          Everything your agent needs. Nothing it doesn&apos;t.
        </p>
        <div className="page-grid-2">
          {[
            { label: "433x Wire Compression", desc: "Every token from every provider is wrapped in ~650 bytes of redundant JSON. OmegaCode strips it to the essential signal. Your tools respond faster.", icon: ArrowDownToLine },
            { label: "Typed Tool Framing", desc: "Tool calls arrive as complete semantic frames. No more partial JSON. No more regex parsing. 0% syntax errors across every provider.", icon: Brackets },
            { label: "Provider Normalization", desc: "Claude, GPT, Gemini, DeepSeek, Qwen — all normalized into one consistent format. Stop debugging provider quirks.", icon: Shuffle },
            { label: "Persistent Memory", desc: "Day 1: learns your architecture. Day 30: knows patterns you forgot you wrote. Context compounds instead of resetting every session.", icon: Brain },
            { label: "Verified Execution", desc: "Cryptographic receipt for every action. Rewind and replay any execution. Know exactly what changed, why, and verify it was correct.", icon: FileCheck },
            { label: "Your Keys Stay Local", desc: "BYOK. Your API keys never leave your machine. No telemetry. No tracking. Free forever. MIT Licensed.", icon: Lock },
          ].map((feature, i) => (
            <ScrollReveal key={feature.label} className="page-card" delay={i * 80}>
              <feature.icon size={20} className="home-card-icon" />
              <div className="page-card-label">{feature.label}</div>
              <div className="page-card-desc">{feature.desc}</div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="home-divider" aria-hidden="true">{null}</ScrollReveal>

      {/* ── Under the hood ── */}
      <ScrollReveal as="section" className="home-section">
        <div className="home-section-label">Under the hood</div>
        <p className="page-body" style={{ marginBottom: "var(--space-5)" }}>
          Built on infrastructure that&apos;s been missing from AI since day one.
        </p>
        <div className="home-grid-3">
          <ScrollReveal className="page-card" delay={0}>
            <div className="page-card-label">Typed Protocol (SIGIL)</div>
            <div className="page-card-desc">
              Tool calls arrive as complete semantic frames. No more partial JSON.
              No more guessing when a tool call is complete.
            </div>
          </ScrollReveal>
          <ScrollReveal className="page-card" delay={100}>
            <div className="page-card-label">Deterministic Replay (Trinity)</div>
            <div className="page-card-desc">
              Every execution is captured and replayable. The same architecture Carmack
              built for Quake III multiplayer — applied to AI agent execution.
            </div>
          </ScrollReveal>
          <ScrollReveal className="page-card" delay={200}>
            <div className="page-card-label">Formal Proofs</div>
            <div className="page-card-desc">
              32 theorems in Lean4. 0 sorry. Math, not hope. The system is mathematically
              proven correct — not tested, proven.
            </div>
          </ScrollReveal>
        </div>
        <p className="home-under-hood" style={{ marginTop: "var(--space-5)" }}>
          <Link href="/technology">Read the full technical architecture →</Link>
        </p>
      </ScrollReveal>

      <ScrollReveal className="home-divider" aria-hidden="true">{null}</ScrollReveal>

      {/* ── Final CTA ── */}
      <ScrollReveal className="home-cta">
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
      </ScrollReveal>

      <SiteFooter />
    </Box>
  );
}
