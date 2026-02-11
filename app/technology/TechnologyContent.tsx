"use client";

const DIV = "────────────────────────────────────────────────────────────";

const STACK_LAYERS = [
  { name: "OmegaCode", desc: "the proxy" },
  { name: "SIGIL", desc: "typed binary wire protocol" },
  { name: "TRINITY", desc: "deterministic replay engine" },
  { name: "CONTINUITY", desc: "formal verification (Lean4)" },
  { name: "CAS", desc: "content-addressed storage" },
  { name: "ALEPH", desc: "typed build system (System Fω)" },
  { name: "HARDWARE", desc: "Blackwell, io_uring, bare metal" },
];

const RESEARCH_LINKS = [
  { label: "Continuity Formal Specification", href: "https://github.com/omegacode-ai/continuity" },
  { label: "SIGIL Protocol Spec", href: "https://github.com/omegacode-ai/sigil" },
  { label: "OmegaCode Architecture", href: "https://github.com/omegacode-ai/architecture" },
];

export function TechnologyContent() {
  return (
    <>
      <h1 className="page-title">How it works</h1>
      <p className="page-subtitle">
        From wire protocols to formal proofs. Seven layers, each solving a specific failure mode.
      </p>

      {/* The Stack */}
      <section className="page-section" id="stack">
        <div className="page-section-label">The Stack</div>
        <ul className="page-list">
          {STACK_LAYERS.map((layer) => (
            <li key={layer.name}>
              <span className="list-label">{layer.name}</span>{" "}
              <span className="list-desc">— {layer.desc}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="page-divider" aria-hidden="true">{DIV}</div>

      {/* SIGIL */}
      <section className="page-section" id="sigil">
        <div className="page-section-label">SIGIL</div>
        <h2 className="page-section-heading">The wire protocol</h2>
        <p className="page-body">
          Every token from every provider is wrapped in ~650 bytes of redundant JSON.
          SIGIL is a typed binary protocol that reduces this to ~1.5 bytes. 433x compression.
          Zero information loss.
        </p>
        <div className="page-grid-2">
          <div className="page-card">
            <div className="page-card-label">The Problem</div>
            <div className="page-card-desc">
              Every SSE chunk carries the full ChatCompletion object: model name, timestamps,
              null fields, role strings. For a single token like &ldquo;const&rdquo;, you get
              650 bytes of JSON wrapping 5 bytes of content.
            </div>
          </div>
          <div className="page-card">
            <div className="page-card-label">The Fix</div>
            <div className="page-card-desc">
              SIGIL sends typed binary frames. A token frame is the varint tag + the UTF-8 bytes.
              A tool-call frame carries the complete typed invocation — name, arguments, status —
              in a single message. No reassembly. No regex.
            </div>
          </div>
        </div>
      </section>

      <div className="page-divider" aria-hidden="true">{DIV}</div>

      {/* TRINITY */}
      <section className="page-section" id="trinity">
        <div className="page-section-label">Trinity</div>
        <h2 className="page-section-heading">The replay engine</h2>
        <p className="page-body">
          Carmack&apos;s Quake III architecture applied to AI agents. Deterministic simulation
          wrapping non-deterministic inference. Event sourcing with io_uring.
        </p>
        <div className="page-code">
          &ldquo;The execution is non-deterministic.{"\n"}The verification is not.&rdquo;
        </div>
      </section>

      <div className="page-divider" aria-hidden="true">{DIV}</div>

      {/* CONTINUITY */}
      <section className="page-section" id="verification">
        <div className="page-section-label">Continuity</div>
        <h2 className="page-section-heading">Formal verification</h2>
        <p className="page-body">
          32 theorems. 0 sorry. 9,000 lines of Lean4. Key proofs: cache correctness,
          hermetic builds, attestation soundness. The main theorem:{" "}
          <span style={{ color: "var(--terminal-accent-bright)" }}>continuity_correctness</span>.
        </p>
        <div className="page-code">
{`-- Lean4: the main correctness theorem
theorem continuity_correctness
  (env : Env) (expr : Expr)
  (h_wf : WellFormed env expr)
  (h_hermetic : Hermetic env) :
  ∀ (r₁ r₂ : Result),
    eval env expr = r₁ →
    eval env expr = r₂ →
    r₁ = r₂ := by
  exact deterministic_eval h_wf h_hermetic`}
        </div>
      </section>

      <div className="page-divider" aria-hidden="true">{DIV}</div>

      {/* CAS */}
      <section className="page-section">
        <div className="page-section-label">Content-Addressed Storage</div>
        <h2 className="page-section-heading">Hash is identity</h2>
        <p className="page-body">
          Every artifact is addressed by its content hash. The attestation graph links every
          output to the inputs that produced it. The coeffect algebra tracks which resources
          were consumed and ensures nothing leaks.
        </p>
      </section>

      <div className="page-divider" aria-hidden="true">{DIV}</div>

      {/* Research */}
      <section className="page-section" id="research">
        <div className="page-section-label">Open Research</div>
        <h2 className="page-section-heading">Everything is public</h2>
        <ul className="page-list">
          {RESEARCH_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--terminal-accent-bright)",
                  textDecoration: "none",
                }}
              >
                {link.label} →
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
