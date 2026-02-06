"use client";

import { Box } from "@radix-ui/themes";

/**
 * Soft radial glow behind hero content -- warm tone, large radius.
 * Dual concentric rings for depth, plus a faint noise texture overlay.
 */
export function HeroGlow() {
  return (
    <Box
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Primary warm glow */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(900px, 90vw)",
          height: "min(600px, 70vh)",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, var(--gray-4) 0%, transparent 70%)",
          opacity: 0.7,
          filter: "blur(60px)",
        }}
      />
      {/* Inner brighter ring for depth */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(500px, 60vw)",
          height: "min(350px, 45vh)",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, var(--gray-5) 0%, transparent 65%)",
          opacity: 0.4,
          filter: "blur(40px)",
        }}
      />
      {/* Noise overlay for texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </Box>
  );
}
