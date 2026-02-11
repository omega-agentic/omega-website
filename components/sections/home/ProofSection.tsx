"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { MetricDisplay } from "@/components/ui/MetricDisplay";
import { MetricGrid } from "@/components/ui/MetricGrid";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function ProofSection() {
  return (
    <section className="section-movement">
      <div className="container">
        <SectionReveal>
          <div style={{ marginBottom: "var(--space-6)" }}>
            <SectionLabel>WHAT CHANGES</SectionLabel>
          </div>
          <h2 className="type-h2" style={{ marginBottom: "var(--space-7)", maxWidth: "600px" }}>
            Install OmegaCode. See the difference immediately.
          </h2>
        </SectionReveal>

        <SectionReveal>
          <MetricGrid>
            <MetricDisplay
              value="433×"
              numericValue={433}
              suffix="×"
              benefit="Smaller wire overhead"
              caption="650 bytes → 1.5 bytes per token"
            />
            <MetricDisplay
              value="0%"
              numericValue={0}
              suffix="%"
              benefit="Tool call syntax errors"
              caption="Typed frames replace regex parsing"
            />
            <MetricDisplay
              value="<1ms"
              prefix="<"
              numericValue={1}
              suffix="ms"
              benefit="Added latency"
              caption="Proxy overhead is negligible"
            />
            <MetricDisplay
              value="100%"
              numericValue={100}
              suffix="%"
              benefit="Provider compatibility"
              caption="One format. Every model. Every provider."
            />
          </MetricGrid>
        </SectionReveal>
      </div>
    </section>
  );
}
