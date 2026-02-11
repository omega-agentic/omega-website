interface OmegaSymbolProps {
  size?: number;
  pulse?: boolean;
  className?: string;
  color?: string;
}

export function OmegaSymbol({
  size = 48,
  pulse = false,
  className = "",
  color = "var(--text-primary)",
}: OmegaSymbolProps) {
  return (
    <span
      className={`${pulse ? "omega-pulse" : ""} ${className}`}
      aria-label="OmegaCode"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: size * 0.7,
        lineHeight: 1,
        color,
        userSelect: "none",
      }}
    >
      ω
    </span>
  );
}
