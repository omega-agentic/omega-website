"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

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
    <>
      <ScrollReveal>
        <h1 className="page-title">Infrastructure for correct AI</h1>
        <p className="page-subtitle">
          The models improve every quarter. The infrastructure hasn&apos;t changed since 2021.
          That&apos;s what we fix.
        </p>
      </ScrollReveal>

      <ScrollReveal className="page-divider" aria-hidden="true">{null}</ScrollReveal>

      {/* Principles */}
      <ScrollReveal as="section" className="page-section">
        <div className="page-section-label">Principles</div>
        <div className="page-grid-2">
          {PRINCIPLES.map((p, i) => (
            <ScrollReveal className="page-card" key={p.title} delay={i * 80}>
              <div className="page-card-label">{p.title}</div>
              <div className="page-card-desc">{p.description}</div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="page-divider" aria-hidden="true">{null}</ScrollReveal>

      {/* The Name */}
      <ScrollReveal as="section" className="page-section">
        <div className="page-section-label">The Name</div>
        <h2 className="page-section-heading">ω</h2>
        <p className="page-body">
          Omega — the end state. Where sequences converge. Where obligations resolve.
          Where the result is saved. OmegaCode is built on that principle: every execution
          reaches its correct conclusion.
        </p>
      </ScrollReveal>

      <ScrollReveal className="page-divider" aria-hidden="true">{null}</ScrollReveal>

      {/* Company */}
      <ScrollReveal as="section" className="page-section">
        <div className="page-section-label">Company</div>
        <p className="page-body">
          OmegaCode · San Juan, PR
        </p>
        <p className="page-body">
          <a href="https://github.com/omegacode-ai" target="_blank" rel="noopener noreferrer">GitHub</a>
          {" · "}
          <a href="https://discord.gg/omegacode" target="_blank" rel="noopener noreferrer">Discord</a>
          {" · "}
          <a href="https://twitter.com/omegacode_ai" target="_blank" rel="noopener noreferrer">Twitter</a>
        </p>
      </ScrollReveal>
    </>
  );
}
