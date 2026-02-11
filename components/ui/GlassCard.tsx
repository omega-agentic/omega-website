"use client";

interface GlassCardProps {
  children: React.ReactNode;
  padding?: string;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
}

export function GlassCard({
  children,
  padding = "var(--space-6)",
  className = "",
  style,
  href,
}: GlassCardProps) {
  const cardStyle: React.CSSProperties = {
    padding,
    ...style,
  };

  if (href) {
    return (
      <a
        href={href}
        className={`glass-card ${className}`}
        style={{ ...cardStyle, textDecoration: "none", display: "block" }}
      >
        {children}
      </a>
    );
  }

  return (
    <div className={`glass-card ${className}`} style={cardStyle}>
      {children}
    </div>
  );
}
