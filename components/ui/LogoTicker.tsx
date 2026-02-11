"use client";

interface LogoItem {
  name: string;
  icon?: string; // SVG path or emoji fallback
}

interface LogoTickerProps {
  logos: LogoItem[];
  speed?: number;
}

/**
 * Prominent logo ticker with branded pills.
 * Each logo is displayed as a recognizable pill with icon + name.
 */
function LogoPill({ logo }: { logo: LogoItem }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 20px",
        background: "var(--bg-element)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)",
        whiteSpace: "nowrap",
        transition: "border-color 0.2s, background 0.2s",
        cursor: "default",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--border-hover)";
        e.currentTarget.style.background = "var(--bg-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-subtle)";
        e.currentTarget.style.background = "var(--bg-element)";
      }}
    >
      <LogoIcon name={logo.name} />
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          fontWeight: 500,
          color: "var(--text-primary)",
          letterSpacing: "-0.01em",
        }}
      >
        {logo.name}
      </span>
    </div>
  );
}

function LogoIcon({ name }: { name: string }) {
  const size = 20;
  const style: React.CSSProperties = {
    width: size,
    height: size,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Brand-colored SVG icons for recognizable tools
  const icons: Record<string, React.ReactNode> = {
    Cursor: (
      <svg style={style} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#111" stroke="#555" strokeWidth="1" />
        <path d="M7 5l10 7-10 7V5z" fill="#fff" />
      </svg>
    ),
    "Claude Code": (
      <svg style={style} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#D4A574" />
        <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 9.5c-1.9 0-3.5-1.6-3.5-3.5S10.1 8.5 12 8.5s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" fill="#fff" />
      </svg>
    ),
    Cline: (
      <svg style={style} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#10B981" />
        <path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    OpenCode: (
      <svg style={style} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#333" stroke="#555" strokeWidth="1" />
        <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    Aider: (
      <svg style={style} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#14B8A6" />
        <path d="M12 7v10M7 12h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    Continue: (
      <svg style={style} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#6366F1" />
        <path d="M10 8l6 4-6 4V8z" fill="#fff" />
      </svg>
    ),
    OpenHands: (
      <svg style={style} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#F59E0B" />
        <path d="M12 7v4l3 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
    Copilot: (
      <svg style={style} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1F6FEB" />
        <path d="M12 7c-2.8 0-5 2.2-5 5 0 2 1.2 3.8 3 4.6V18c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1.4c1.8-.8 3-2.6 3-4.6 0-2.8-2.2-5-5-5z" fill="#fff" />
        <circle cx="10" cy="12" r="1" fill="#1F6FEB" />
        <circle cx="14" cy="12" r="1" fill="#1F6FEB" />
      </svg>
    ),
    Windsurf: (
      <svg style={style} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#06B6D4" />
        <path d="M6 17c2-4 4-6 6-8s4-3 6-2c-3 1-5 3-7 6s-3 5-5 4z" fill="#fff" />
      </svg>
    ),
    Anthropic: (
      <svg style={style} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#D4A574" />
        <path d="M12 6l6 12H6l6-12z" fill="#fff" />
      </svg>
    ),
    OpenAI: (
      <svg style={style} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#10A37F" />
        <path d="M12 7a5 5 0 00-4.3 7.5L12 9.5l4.3 5A5 5 0 0012 7z" fill="#fff" />
        <path d="M7.7 14.5L12 19.5l4.3-5" stroke="#fff" strokeWidth="1.2" fill="none" />
      </svg>
    ),
    Google: (
      <svg style={style} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#4285F4" />
        <path d="M12 10.5v3.2h4.5c-.2 1-1.3 2.8-4.5 2.8-2.7 0-4.9-2.2-4.9-5s2.2-5 4.9-5c1.5 0 2.5.7 3.1 1.2l2.1-2C15.8 4.5 14 3.5 12 3.5 7.3 3.5 3.5 7.3 3.5 12s3.8 8.5 8.5 8.5c4.9 0 8.2-3.5 8.2-8.3 0-.6-.1-1-.1-1.5H12z" fill="#fff" />
      </svg>
    ),
    DeepSeek: (
      <svg style={style} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#4F46E5" />
        <circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="1.5" />
        <path d="M12 4v3M12 17v3M4 12h3M17 12h3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    Groq: (
      <svg style={style} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#F97316" />
        <path d="M8 8h8v8H8z" stroke="#fff" strokeWidth="2" rx="1" fill="none" />
        <path d="M12 8v8" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
  };

  return (icons[name] || (
    <div
      style={{
        ...style,
        background: "var(--border-element)",
        borderRadius: 4,
        fontSize: 10,
        color: "var(--text-primary)",
        fontWeight: 600,
      }}
    >
      {name[0]}
    </div>
  )) as React.ReactElement;
}

function TickerRow({ logos }: { logos: LogoItem[] }) {
  return (
    <>
      {logos.map((logo, i) => (
        <LogoPill key={`${logo.name}-${i}`} logo={logo} />
      ))}
    </>
  );
}

export function LogoTicker({ logos, speed = 30 }: LogoTickerProps) {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        maskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div
        className="logo-ticker-track"
        style={{
          gap: "12px",
          animationDuration: `${speed}s`,
        }}
      >
        <TickerRow logos={logos} />
        <TickerRow logos={logos} />
      </div>
    </div>
  );
}
