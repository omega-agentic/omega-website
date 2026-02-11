"use client";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface StepFlowProps {
  steps: Step[];
}

export function StepFlow({ steps }: StepFlowProps) {
  return (
    <div className="step-flow">
      {steps.map((step, i) => (
        <div
          key={i}
          className="reveal"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-3)",
            transitionDelay: `${i * 120}ms`,
          }}
        >
          <span className="step-number">{step.number}</span>
          <h3 className="type-h3">{step.title}</h3>
          <p className="type-body" style={{ color: "var(--text-secondary)" }}>
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
