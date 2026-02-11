import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { MetricDisplay } from "@/components/ui/MetricDisplay";
import { MetricGrid } from "@/components/ui/MetricGrid";
import { LogoGrid } from "@/components/ui/LogoGrid";

export const metadata: Metadata = {
  title: "OmegaCode for Coding Agents — Dramatically more reliable AI tools",
  description:
    "Make Cursor, Claude Code, and every AI coding tool dramatically more reliable. Fix 30-40% failure rates. 433x wire compression.",
};

const TOOLS = [
  { name: "Cursor" }, { name: "Claude Code" }, { name: "Cline" },
  { name: "OpenCode" }, { name: "Aider" }, { name: "Continue" },
  { name: "OpenHands" }, { name: "Copilot" }, { name: "Windsurf" },
];

export default function CodingAgentsPage() {
  return (
    <div style={{ paddingTop: 56 }}>
      <section
        style={{
          padding: "var(--space-10) var(--space-5) var(--space-8)",
          maxWidth: "var(--max-width)",
          margin: "0 auto",
        }}
      >
        <SectionReveal>
          <h1 className="type-h1" style={{ maxWidth: "700px", marginBottom: "var(--space-5)" }}>
            Make Cursor, Claude Code, and every AI coding tool dramatically more reliable.
          </h1>
          <p className="type-body" style={{ maxWidth: "600px" }}>
            Your agent fails 30-40% of complex tool calls. Not because
            it&apos;s wrong — because the plumbing leaks. OmegaCode fixes the
            plumbing.
          </p>
        </SectionReveal>
      </section>

      <section className="section-movement" style={{ background: "var(--bg-subtle)" }}>
        <div className="container">
          <SectionReveal>
            <MetricGrid>
              <MetricDisplay
                value="30-40% → <1%"
                benefit="Failure rate"
                caption="Tool call failures drop to near zero"
              />
              <MetricDisplay
                value="650 → 1.5"
                benefit="Bytes per token"
                caption="433x wire compression"
              />
              <MetricDisplay
                value="0% → 100%"
                benefit="Session retention"
                caption="Context compounds forever"
              />
              <MetricDisplay
                value="30s"
                benefit="Time to install"
                caption="One command. Zero config."
              />
            </MetricGrid>
          </SectionReveal>
        </div>
      </section>

      <section className="section-movement">
        <div className="container">
          <SectionReveal>
            <LogoGrid label="COMPATIBLE TOOLS" logos={TOOLS} />
          </SectionReveal>
        </div>
      </section>

      <section
        style={{
          padding: "var(--space-9) var(--space-5)",
          textAlign: "center",
        }}
      >
        <SectionReveal>
          <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/#install" className="btn-chrome">
              Get Started →
            </Link>
            <Link href="/technology" className="btn-secondary">
              Read the technology →
            </Link>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
