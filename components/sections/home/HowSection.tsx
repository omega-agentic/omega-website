"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { StepFlow } from "@/components/ui/StepFlow";
import { InstallBlock } from "@/components/ui/InstallBlock";
import { SectionReveal } from "@/components/ui/SectionReveal";

const STEPS = [
  {
    number: "01",
    title: "Install",
    description:
      "bun run omega. One command. Takes 30 seconds. No dependencies to manage.",
  },
  {
    number: "02",
    title: "Point",
    description:
      "Set your tool's API endpoint to localhost:4800. That's the only config change.",
  },
  {
    number: "03",
    title: "Done",
    description:
      "Your tools are faster, more reliable, and cheaper to run. Nothing else changes.",
  },
];

export function HowSection() {
  return (
    <section id="how" className="section-movement">
      <div className="container">
        <SectionReveal>
          <div style={{ marginBottom: "var(--space-6)" }}>
            <SectionLabel>HOW IT WORKS</SectionLabel>
          </div>
          <h2
            className="type-h2"
            style={{ marginBottom: "var(--space-7)", maxWidth: "600px" }}
          >
            30 seconds to better agents.
          </h2>
        </SectionReveal>

        <StepFlow steps={STEPS} />

        <SectionReveal>
          <div
            style={{
              textAlign: "center",
              marginTop: "var(--space-8)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "var(--space-5)",
            }}
          >
            <p
              className="type-body"
              style={{ maxWidth: "var(--narrow)" }}
            >
              No code changes. No config migration. No new workflows to learn.
              OmegaCode sits between your tools and your providers and makes
              everything work better.
            </p>

            <InstallBlock />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
