"use client";

import { OmegaSymbol } from "@/components/ui/OmegaSymbol";
import { InstallBlock } from "@/components/ui/InstallBlock";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function CloseSection() {
  return (
    <section
      style={{
        padding: "var(--space-10) var(--space-5)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "var(--space-6)",
      }}
    >
      <SectionReveal>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--space-6)",
          }}
        >
          <OmegaSymbol size={64} pulse color="var(--text-low)" />

          <h2
            className="type-h1"
            style={{ maxWidth: "640px" }}
          >
            Better agents start with better infrastructure.
          </h2>

          <InstallBlock />

          <div
            style={{
              display: "flex",
              gap: "var(--space-3)",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a href="#install" className="btn-chrome">
              Get Started →
            </a>
            <a
              href="https://docs.omegacode.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Read the docs
            </a>
          </div>

          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--text-low)",
              letterSpacing: "0.02em",
              marginTop: "var(--space-4)",
            }}
          >
            the result is saved
          </span>
        </div>
      </SectionReveal>
    </section>
  );
}
