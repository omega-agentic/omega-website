import type { Metadata } from "next";
import { TerminalPrompt } from "@/components/terminal/TerminalPrompt";

export const metadata: Metadata = {
  title: "OmegaCode Pricing — Free. Forever. MIT Licensed.",
  description:
    "OmegaCode is free and open source. MIT Licensed. No usage limits. No telemetry.",
};

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
      <h1 className="page-title" style={{ marginBottom: "var(--space-3)" }}>Free</h1>
      <p className="page-subtitle" style={{ maxWidth: "480px", textAlign: "center" }}>
        Open source. No usage limits. No telemetry. No signup.
        Your API keys never leave your machine. MIT Licensed.
      </p>

      <TerminalPrompt />

      <div style={{ marginTop: "var(--space-7)", textAlign: "left", width: "100%", maxWidth: "400px" }}>
        <div className="page-section-label" style={{ marginBottom: "var(--space-4)" }}>
          What&apos;s included
        </div>
        <ul className="page-list">
          {INCLUDES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
