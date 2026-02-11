"use client";

interface LogoItem {
  name: string;
  href?: string;
}

interface LogoGridProps {
  label?: string;
  logos: LogoItem[];
}

export function LogoGrid({ label, logos }: LogoGridProps) {
  return (
    <div>
      {label && (
        <div className="section-label" style={{ marginBottom: "var(--space-4)" }}>
          {label}
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--space-4)",
          alignItems: "center",
        }}
      >
        {logos.map((logo) => (
          <div
            key={logo.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "var(--space-3) var(--space-4)",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border-subtle)",
              background: "var(--bg-subtle)",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--text-low)",
              transition: "color 0.15s, border-color 0.15s",
              cursor: logo.href ? "pointer" : "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.borderColor = "var(--border-element)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-low)";
              e.currentTarget.style.borderColor = "var(--border-subtle)";
            }}
          >
            {logo.name}
          </div>
        ))}
      </div>
    </div>
  );
}
