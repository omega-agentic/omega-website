"use client";

import { InstallBlock } from "@/components/ui/InstallBlock";
import { LogoTicker } from "@/components/ui/LogoTicker";
import { SectionReveal } from "@/components/ui/SectionReveal";

const TOOL_LOGOS = [
  { name: "Cursor" },
  { name: "Claude Code" },
  { name: "Cline" },
  { name: "OpenCode" },
  { name: "Aider" },
  { name: "Continue" },
  { name: "OpenHands" },
  { name: "Copilot" },
  { name: "Windsurf" },
  { name: "Anthropic" },
  { name: "OpenAI" },
  { name: "Google" },
  { name: "DeepSeek" },
  { name: "Groq" },
];

export function HookSection() {
  return (
    <section
      className="hero-gradient"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "calc(56px + var(--space-9))",
        paddingBottom: "var(--space-7)",
        paddingLeft: "var(--space-5)",
        paddingRight: "var(--space-5)",
        position: "relative",
      }}
    >
      <SectionReveal>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--space-5)",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Omega glyph — large, chrome-styled */}
          <div
            style={{
              fontSize: "clamp(48px, 8vw, 80px)",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 400,
              lineHeight: 1,
              background:
                "linear-gradient(180deg, #ddd 0%, #888 40%, #aaa 60%, #666 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 2px 8px rgba(255,255,255,0.06))",
              marginBottom: "var(--space-2)",
              userSelect: "none",
            }}
            aria-hidden="true"
          >
            ω
          </div>

          <h1 className="type-display" style={{ maxWidth: "700px" }}>
            Your coding agent.
            <br />
            10x more reliable.
          </h1>

          <p
            className="type-body"
            style={{
              maxWidth: "480px",
              textAlign: "center",
            }}
          >
            One command. Works with Cursor, Claude Code, OpenCode, Cline, and
            every LLM provider. No config changes. No switching tools.
          </p>

          <div id="install">
            <InstallBlock />
          </div>

          <div
            style={{
              display: "flex",
              gap: "var(--space-3)",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a href="#how" className="btn-chrome">
              How it works ↓
            </a>
            <a
              href="https://docs.omegacode.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Read the docs
            </a>
          </div>
        </div>
      </SectionReveal>

      {/* Compatibility ticker */}
      <div
        style={{
          marginTop: "var(--space-9)",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-low)",
            marginBottom: "var(--space-4)",
          }}
        >
          Works with every tool and provider
        </p>
        <LogoTicker logos={TOOL_LOGOS} speed={40} />
      </div>
    </section>
  );
}
