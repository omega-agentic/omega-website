"use client";

import { Box } from "@radix-ui/themes";

/**
 * Orbital pattern: 5-7 elliptical orbits, particles, ω at center.
 * Brand: "Omega as attractor. Elements resolving toward center."
 */
export function OrbitalBackground() {
  const orbits = [
    { rx: 120, ry: 40, duration: 24, delay: 0 },
    { rx: 140, ry: 55, duration: 28, delay: -2 },
    { rx: 160, ry: 70, duration: 32, delay: -4 },
    { rx: 100, ry: 35, duration: 20, delay: -1 },
    { rx: 180, ry: 80, duration: 36, delay: -6 },
    { rx: 130, ry: 48, duration: 26, delay: -3 },
  ];

  return (
    <Box
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <svg
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.35,
        }}
      >
        {/* Elliptical orbits (strokes) and particles */}
        {orbits.map((o, i) => (
          <g key={i}>
            <ellipse
              cx="200"
              cy="200"
              rx={o.rx}
              ry={o.ry}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              style={{ color: "var(--omega-fg)", opacity: 0.12 }}
            />
            <circle r="2" fill="var(--omega-fg)" style={{ opacity: 0.2 }}>
              <animateMotion
                dur={o.duration}
                repeatCount="indefinite"
                begin={o.delay}
                path={`M ${200 + o.rx} 200 A ${o.rx} ${o.ry} 0 0 1 ${200 - o.rx} 200 A ${o.rx} ${o.ry} 0 0 1 ${200 + o.rx} 200`}
              />
            </circle>
          </g>
        ))}
        {/* Center: omega symbol */}
        <text
          x="200"
          y="208"
          textAnchor="middle"
          style={{
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
            fontSize: "48px",
            fill: "var(--omega-fg)",
            opacity: 0.15,
          }}
        >
          ω
        </text>
      </svg>
    </Box>
  );
}
