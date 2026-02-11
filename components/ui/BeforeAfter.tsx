interface BeforeAfterProps {
  before: {
    label?: string;
    code: string;
    footer?: string;
  };
  after: {
    label?: string;
    code: string;
    footer?: string;
  };
}

export function BeforeAfter({ before, after }: BeforeAfterProps) {
  return (
    <div className="before-after">
      <div className="before-panel">
        {before.label && (
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.04em",
              textTransform: "uppercase" as const,
              color: "var(--accent-red)",
              marginBottom: "var(--space-2)",
            }}
          >
            {before.label}
          </div>
        )}
        <div className="code-block" style={{ fontSize: "12px", lineHeight: 1.6 }}>
          <pre style={{ margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
            {before.code}
          </pre>
          {before.footer && (
            <div
              style={{
                marginTop: "var(--space-3)",
                paddingTop: "var(--space-3)",
                borderTop: "1px solid var(--border-subtle)",
                fontSize: "11px",
                color: "var(--text-low)",
              }}
            >
              {before.footer}
            </div>
          )}
        </div>
      </div>
      <div className="after-panel">
        {after.label && (
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.04em",
              textTransform: "uppercase" as const,
              color: "var(--accent-green)",
              marginBottom: "var(--space-2)",
            }}
          >
            {after.label}
          </div>
        )}
        <div className="code-block" style={{ fontSize: "12px", lineHeight: 1.6 }}>
          <pre style={{ margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
            {after.code}
          </pre>
          {after.footer && (
            <div
              style={{
                marginTop: "var(--space-3)",
                paddingTop: "var(--space-3)",
                borderTop: "1px solid var(--border-subtle)",
                fontSize: "11px",
                color: "var(--text-low)",
              }}
            >
              {after.footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
