import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "OmegaCode for Safety-Critical — When 'it probably works' isn't good enough",
  description:
    "32 theorems in Lean4. 0 sorry. Mathematically proven correct for aerospace, medical devices, autonomous vehicles, and safety-critical domains.",
};

export default function SafetyCriticalPage() {
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
            When &ldquo;it probably works&rdquo; isn&apos;t good enough.
          </h1>
          <p className="type-body" style={{ maxWidth: "600px", marginBottom: "var(--space-5)" }}>
            32 theorems in Lean4. 0 sorry. The system is mathematically proven
            correct — not tested, proven. For aerospace, medical devices,
            autonomous vehicles, and any domain where formal verification is
            required.
          </p>
        </SectionReveal>
      </section>

      <section className="section-movement" style={{ background: "var(--bg-subtle)" }}>
        <div className="container-narrow">
          <SectionReveal>
            <GlassCard>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  color: "var(--text-secondary)",
                  textAlign: "center",
                  padding: "var(--space-6) 0",
                  lineHeight: 1.6,
                }}
              >
                &ldquo;The execution is non-deterministic.
                <br />
                The verification is not.&rdquo;
              </div>
            </GlassCard>
          </SectionReveal>
        </div>
      </section>

      <section className="section-movement">
        <div className="container">
          <SectionReveal>
            <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
              {["Aerospace", "Medical Devices", "Autonomous Vehicles", "Nuclear", "Financial Infrastructure"].map((domain) => (
                <span
                  key={domain}
                  style={{
                    padding: "var(--space-2) var(--space-3)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-sm)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--text-low)",
                  }}
                >
                  {domain}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section style={{ padding: "var(--space-9) var(--space-5)", textAlign: "center" }}>
        <SectionReveal>
          <Link href="/technology#verification" className="btn-chrome">
            Read about the formal proofs →
          </Link>
        </SectionReveal>
      </section>
    </div>
  );
}
