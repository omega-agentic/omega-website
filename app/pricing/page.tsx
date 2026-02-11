"use client";

import { TerminalPrompt } from "@/components/terminal/TerminalPrompt";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const INCLUDES = [
  "433x wire compression",
  "Typed tool framing — 0% syntax errors",
  "Provider normalization — every model, one format",
  "Persistent memory",
  "Verified execution with cryptographic receipts",
  "All future updates",
];

export default function PricingPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <ScrollReveal>
        <h1 className="page-title" style={{ marginBottom: "var(--space-3)" }}>Free</h1>
        <p className="page-subtitle" style={{ maxWidth: "480px", textAlign: "center" }}>
          Open source. No usage limits. No telemetry. No signup.
          Your API keys never leave your machine. MIT Licensed.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <TerminalPrompt />
      </ScrollReveal>

      <ScrollReveal delay={200} className="page-section" style={{ marginTop: "var(--space-7)", textAlign: "left", width: "100%", maxWidth: "400px" }}>
        <div className="page-section-label" style={{ marginBottom: "var(--space-4)" }}>
          What&apos;s included
        </div>
        <ul className="page-list">
          {INCLUDES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ScrollReveal>
    </div>
  );
}
