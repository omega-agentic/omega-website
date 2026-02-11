import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "OmegaCode for Enterprise — AI agents your compliance team will sign off on",
  description:
    "Cryptographic receipts. Deterministic replay. Formal verification. Machine-checkable attestations for enterprise AI agents.",
};

const INDUSTRIES = ["Finance", "Healthcare", "Legal", "Government", "Defense"];

const CAPABILITIES = [
  {
    title: "Cryptographic Receipts",
    description: "Every agent action produces a signed, timestamped attestation. Immutable audit trail.",
  },
  {
    title: "Deterministic Replay",
    description: "Replay any agent session exactly. Show auditors what happened, not what you think happened.",
  },
  {
    title: "Formal Verification",
    description: "32 theorems in Lean4. The system is mathematically proven correct — not tested, proven.",
  },
  {
    title: "Machine-Checkable Attestations",
    description: "Proofs your automated compliance systems can verify without human review.",
  },
];

export default function EnterpriseAgentsPage() {
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
            AI agents your compliance team will sign off on.
          </h1>
          <p className="type-body" style={{ maxWidth: "600px", marginBottom: "var(--space-5)" }}>
            When you need to prove what happened — to auditors, regulators, or
            your board — you need more than logs.
          </p>
          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
            {INDUSTRIES.map((ind) => (
              <span
                key={ind}
                style={{
                  padding: "var(--space-2) var(--space-3)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--text-low)",
                }}
              >
                {ind}
              </span>
            ))}
          </div>
        </SectionReveal>
      </section>

      <section className="section-movement" style={{ background: "var(--bg-subtle)" }}>
        <div className="container">
          <SectionReveal>
            <div className="grid-2">
              {CAPABILITIES.map((c) => (
                <GlassCard key={c.title}>
                  <h3 className="type-h3" style={{ marginBottom: "var(--space-2)" }}>
                    {c.title}
                  </h3>
                  <p className="type-body">{c.description}</p>
                </GlassCard>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section style={{ padding: "var(--space-9) var(--space-5)", textAlign: "center" }}>
        <SectionReveal>
          <Link href="/technology" className="btn-chrome">
            Read the technical architecture →
          </Link>
        </SectionReveal>
      </section>
    </div>
  );
}
