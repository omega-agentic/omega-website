"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";

const PRINCIPLES = [
  {
    title: "Correct by Construction",
    description: "32 theorems, not 32,000 unit tests.",
  },
  {
    title: "Anti-Waste",
    description: "650 bytes for one token is waste. We don't waste.",
  },
  {
    title: "Permanent",
    description: "Content-addressed. Attested. Archival.",
  },
  {
    title: "Open",
    description: "MIT Licensed. The infrastructure should be a public good.",
  },
];

export function AboutContent() {
  return (
    <div style={{ paddingTop: 56 }}>
      {/* Hero */}
      <section
        style={{
          padding: "var(--space-10) var(--space-5) var(--space-8)",
          maxWidth: "var(--max-width)",
          margin: "0 auto",
        }}
      >
        <SectionReveal>
          <h1 className="type-h1" style={{ maxWidth: "700px", marginBottom: "var(--space-5)" }}>
            We build the infrastructure for correct AI.
          </h1>
        </SectionReveal>
      </section>

      {/* Statement */}
      <section className="section-movement" style={{ background: "var(--bg-subtle)" }}>
        <div className="container-narrow">
          <SectionReveal>
            <blockquote
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                fontWeight: 300,
                lineHeight: 1.5,
                color: "var(--text-primary)",
                borderLeft: "2px solid var(--border-element)",
                paddingLeft: "var(--space-5)",
                margin: 0,
              }}
            >
              &ldquo;The models improve every quarter. The infrastructure
              hasn&apos;t changed since 2021. That&apos;s what we fix.&rdquo;
            </blockquote>
          </SectionReveal>
        </div>
      </section>

      {/* Principles */}
      <section className="section-movement">
        <div className="container">
          <SectionReveal>
            <div className="grid-2">
              {PRINCIPLES.map((p) => (
                <GlassCard key={p.title}>
                  <h3 className="type-h3" style={{ marginBottom: "var(--space-2)" }}>
                    {p.title}
                  </h3>
                  <p className="type-body">{p.description}</p>
                </GlassCard>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* The Name */}
      <section className="section-movement" style={{ background: "var(--bg-subtle)" }}>
        <div className="container-narrow">
          <SectionReveal>
            <h2 className="type-h2" style={{ marginBottom: "var(--space-4)" }}>
              The name.
            </h2>
            <p className="type-body">
              Omega (ω) — the end state. Where sequences converge. Where
              obligations resolve. Where the result is saved. OmegaCode is
              built on that principle: every execution reaches its correct
              conclusion.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-movement">
        <div className="container">
          <SectionReveal>
            <h2 className="type-h2" style={{ marginBottom: "var(--space-6)" }}>
              Team
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "var(--space-4)",
              }}
            >
              <GlassCard>
                <h3 className="type-h3">Harrison Hines</h3>
                <p
                  className="type-caption"
                  style={{ marginTop: "var(--space-1)" }}
                >
                  Founder
                </p>
              </GlassCard>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Company info */}
      <section className="section-movement" style={{ background: "var(--bg-subtle)" }}>
        <div className="container-narrow">
          <SectionReveal>
            <p
              className="type-body"
              style={{ textAlign: "center" }}
            >
              OmegaCode
              <br />
              San Juan, PR
            </p>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
