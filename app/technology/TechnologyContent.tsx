"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";

const STACK_LAYERS = [
  { name: "OmegaCode", color: "var(--text-primary)" },
  { name: "SIGIL — Typed binary wire protocol", color: "var(--text-secondary)" },
  { name: "TRINITY — Deterministic replay engine", color: "var(--text-secondary)" },
  { name: "CONTINUITY — Formal verification (32 theorems, Lean4)", color: "var(--text-secondary)" },
  { name: "CAS — Content-addressed storage", color: "var(--text-secondary)" },
  { name: "ALEPH — Typed build system (Dhall, System Fω)", color: "var(--text-low)" },
  { name: "HARDWARE — Blackwell, io_uring, bare metal", color: "var(--text-low)" },
];

export function TechnologyContent() {
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
          <h1 className="type-h1" style={{ marginBottom: "var(--space-4)" }}>
            How it works.
          </h1>
          <p className="type-body" style={{ maxWidth: "500px" }}>
            From wire protocols to formal proofs.
          </p>
        </SectionReveal>
      </section>

      {/* The Stack */}
      <section id="stack" className="section-movement" style={{ background: "var(--bg-subtle)" }}>
        <div className="container">
          <SectionReveal>
            <SectionLabel>THE STACK</SectionLabel>
            <h2 className="type-h2" style={{ margin: "var(--space-5) 0 var(--space-6)" }}>
              Seven layers. Each one solves a specific failure mode.
            </h2>
          </SectionReveal>
          <SectionReveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {STACK_LAYERS.map((layer, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--bg-element)",
                    padding: "var(--space-4) var(--space-5)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    color: layer.color,
                    borderRadius: i === 0 ? "var(--radius-md) var(--radius-md) 0 0"
                      : i === STACK_LAYERS.length - 1 ? "0 0 var(--radius-md) var(--radius-md)"
                      : "0",
                  }}
                >
                  {layer.name}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* SIGIL */}
      <section id="sigil" className="section-movement">
        <div className="container">
          <SectionReveal>
            <SectionLabel>SIGIL</SectionLabel>
            <h2 className="type-h2" style={{ margin: "var(--space-5) 0 var(--space-4)" }}>
              The wire protocol.
            </h2>
            <p className="type-body" style={{ maxWidth: "var(--narrow)", marginBottom: "var(--space-6)" }}>
              Every token from every provider is wrapped in ~650 bytes of
              redundant JSON. SIGIL is a typed binary protocol that reduces this
              to ~1.5 bytes. 433x compression. Zero information loss.
            </p>
          </SectionReveal>
          <SectionReveal>
            <div className="grid-2">
              <GlassCard>
                <h3 className="type-h3" style={{ marginBottom: "var(--space-3)" }}>The Problem</h3>
                <p className="type-body">
                  Every SSE chunk carries the full ChatCompletion object: model
                  name, timestamps, null fields, role strings. For a single
                  token like &ldquo;const&rdquo;, you get 650 bytes of JSON
                  wrapping 5 bytes of content.
                </p>
              </GlassCard>
              <GlassCard>
                <h3 className="type-h3" style={{ marginBottom: "var(--space-3)" }}>The Fix</h3>
                <p className="type-body">
                  SIGIL sends typed binary frames. A token frame is the varint
                  tag + the UTF-8 bytes. A tool-call frame carries the complete
                  typed invocation — name, arguments, status — in a single
                  message. No reassembly. No regex.
                </p>
              </GlassCard>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Trinity */}
      <section id="trinity" className="section-movement" style={{ background: "var(--bg-subtle)" }}>
        <div className="container">
          <SectionReveal>
            <SectionLabel>TRINITY</SectionLabel>
            <h2 className="type-h2" style={{ margin: "var(--space-5) 0 var(--space-4)" }}>
              The replay engine.
            </h2>
            <p className="type-body" style={{ maxWidth: "var(--narrow)", marginBottom: "var(--space-6)" }}>
              Carmack&apos;s Quake III architecture applied to AI agents.
              Deterministic simulation wrapping non-deterministic inference.
              Event sourcing with io_uring.
            </p>
          </SectionReveal>
          <SectionReveal>
            <GlassCard>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  textAlign: "center",
                  padding: "var(--space-6) 0",
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

      {/* Continuity */}
      <section id="verification" className="section-movement">
        <div className="container">
          <SectionReveal>
            <SectionLabel>CONTINUITY</SectionLabel>
            <h2 className="type-h2" style={{ margin: "var(--space-5) 0 var(--space-4)" }}>
              Formal verification.
            </h2>
            <p className="type-body" style={{ maxWidth: "var(--narrow)", marginBottom: "var(--space-6)" }}>
              32 theorems. 0 sorry. 9,000 lines of Lean4. Key proofs: cache
              correctness, hermetic builds, attestation soundness. The main
              theorem: <code style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>continuity_correctness</code>.
            </p>
          </SectionReveal>
          <SectionReveal>
            <div className="code-block" style={{ maxWidth: "var(--narrow)" }}>
              <pre style={{ margin: 0 }}>{`-- Lean4: the main correctness theorem
theorem continuity_correctness
  (env : Env) (expr : Expr)
  (h_wf : WellFormed env expr)
  (h_hermetic : Hermetic env) :
  ∀ (r₁ r₂ : Result),
    eval env expr = r₁ →
    eval env expr = r₂ →
    r₁ = r₂ := by
  exact deterministic_eval h_wf h_hermetic`}</pre>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CAS */}
      <section className="section-movement" style={{ background: "var(--bg-subtle)" }}>
        <div className="container">
          <SectionReveal>
            <SectionLabel>CONTENT-ADDRESSED STORAGE</SectionLabel>
            <h2 className="type-h2" style={{ margin: "var(--space-5) 0 var(--space-4)" }}>
              Hash is identity.
            </h2>
            <p className="type-body" style={{ maxWidth: "var(--narrow)" }}>
              Every artifact is addressed by its content hash. The attestation
              graph links every output to the inputs that produced it. The
              coeffect algebra tracks which resources were consumed and ensures
              nothing leaks.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="section-movement">
        <div className="container">
          <SectionReveal>
            <SectionLabel>OPEN RESEARCH</SectionLabel>
            <h2 className="type-h2" style={{ margin: "var(--space-5) 0 var(--space-6)" }}>
              Everything is public.
            </h2>
          </SectionReveal>
          <SectionReveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {[
                { label: "Continuity Formal Specification", href: "https://github.com/omegacode-ai/continuity" },
                { label: "SIGIL Protocol Spec", href: "https://github.com/omegacode-ai/sigil" },
                { label: "OmegaCode Architecture", href: "https://github.com/omegacode-ai/architecture" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; }}
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
