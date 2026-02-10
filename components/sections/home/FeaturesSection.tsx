"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionReveal } from "@/components/ui/SectionReveal";

const FEATURES = [
  {
    title: "433x Wire Compression",
    description:
      "Every token from every provider is wrapped in ~650 bytes of redundant JSON. OmegaCode strips it to the essential signal. Your tools respond faster.",
  },
  {
    title: "Typed Tool Framing",
    description:
      "Tool calls arrive as complete semantic frames. No more partial JSON. No more regex parsing. 0% syntax errors across every provider.",
  },
  {
    title: "Provider Normalization",
    description:
      "Claude, GPT, Gemini, DeepSeek, Qwen — all normalized into one consistent format. Stop debugging provider quirks.",
  },
  {
    title: "Persistent Memory",
    description:
      "Day 1: learns your architecture. Day 30: knows patterns you forgot you wrote. Context compounds instead of resetting every session.",
  },
  {
    title: "Verified Execution",
    description:
      "Cryptographic receipt for every action. Rewind and replay any execution. Know exactly what changed, why, and verify it was correct.",
  },
  {
    title: "Your Keys Stay Local",
    description:
      "BYOK. Your API keys never leave your machine. No telemetry. No tracking. Free forever. MIT Licensed.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-movement">
      <div className="container">
        <SectionReveal>
          <div style={{ marginBottom: "var(--space-6)" }}>
            <SectionLabel>WHAT YOU GET</SectionLabel>
          </div>
          <h2
            className="type-h2"
            style={{ marginBottom: "var(--space-7)", maxWidth: "600px" }}
          >
            Everything your agent needs. Nothing it doesn&apos;t.
          </h2>
        </SectionReveal>

        <div className="grid-2">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <GlassCard style={{ height: "100%" }}>
                <h3
                  className="type-h3"
                  style={{ marginBottom: "var(--space-3)" }}
                >
                  {feature.title}
                </h3>
                <p className="type-body">{feature.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
