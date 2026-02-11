"use client";

import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionReveal } from "@/components/ui/SectionReveal";

const CARDS = [
  {
    title: "Typed Protocol (SIGIL)",
    description:
      "Tool calls arrive as complete semantic frames. No more partial JSON. No more guessing when a tool call is complete.",
    href: "/technology#sigil",
  },
  {
    title: "Deterministic Replay (Trinity)",
    description:
      "Every execution is captured and replayable. The same architecture Carmack built for Quake III multiplayer — applied to AI agent execution.",
    href: "/technology#trinity",
  },
  {
    title: "Formal Proofs",
    description:
      "32 theorems in Lean4. 0 sorry. Math, not hope. The system is mathematically proven correct — not tested, proven.",
    href: "/technology#verification",
  },
];

export function DepthSection() {
  return (
    <section
      className="section-movement"
      style={{ background: "var(--bg-subtle)" }}
    >
      <div className="container">
        <SectionReveal>
          <div style={{ marginBottom: "var(--space-6)" }}>
            <SectionLabel>UNDER THE HOOD</SectionLabel>
          </div>
          <h2
            className="type-h2"
            style={{ marginBottom: "var(--space-7)", maxWidth: "700px" }}
          >
            Built on infrastructure that&apos;s been missing from AI since day
            one.
          </h2>
        </SectionReveal>

        <div className="grid-3">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              className="reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <GlassCard href={card.href} style={{ height: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-3)",
                    minHeight: "200px",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h3
                      className="type-h3"
                      style={{ marginBottom: "var(--space-3)" }}
                    >
                      {card.title}
                    </h3>
                    <p className="type-body">{card.description}</p>
                  </div>
                  <span
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.875rem",
                    }}
                  >
                    Learn more →
                  </span>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        <SectionReveal>
          <div style={{ textAlign: "center", marginTop: "var(--space-7)" }}>
            <Link
              href="/technology"
              className="nav-link"
              style={{ fontSize: "0.875rem" }}
            >
              Read the full technical architecture →
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
