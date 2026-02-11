"use client";

interface LogoItem {
  name: string;
  icon?: string;
}

interface LogoTickerProps {
  logos: LogoItem[];
  speed?: number;
}

function LogoPill({ logo }: { logo: LogoItem }) {
  return (
    <div
      className="logo-pill"
      title={logo.name}
    >
      {logo.icon ? (
        <img
          src={logo.icon}
          alt={logo.name}
          className="logo-pill-img"
        />
      ) : (
        <span className="logo-pill-fallback">
          {logo.name}
        </span>
      )}
    </div>
  );
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
