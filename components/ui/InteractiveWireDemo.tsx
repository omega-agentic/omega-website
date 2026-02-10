"use client";

import { Box, Flex, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const PIPE_WIDTH = 12;
const PARTICLE_COUNT = 12;
const DURATION_MS = 2500;

interface Particle {
  id: number;
  delay: number;
  progress: number;
}

export function InteractiveWireDemo() {
  const reduced = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        delay: (i / PARTICLE_COUNT) * DURATION_MS,
        progress: 0,
      }))
    );
  }, []);

  useEffect(() => {
    if (reduced) return;
    const start = Date.now();
    let raf: number;
    const tick = () => {
      const elapsed = Date.now() - start;
      setParticles((prev) =>
        prev.map((p) => {
          const raw = (elapsed - p.delay) / DURATION_MS;
          const progress = raw < 0 ? 0 : raw % 1;
          return { ...p, progress };
        })
      );
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  return (
    <Flex
      direction="column"
      align="center"
      gap="4"
      className="glass-card glow-accent"
      style={{
        padding: "var(--space-6)",
        minHeight: 140,
        justifyContent: "center",
      }}
    >
      <Text
        size="1"
        className="overline"
        style={{
          marginBottom: "var(--space-2)",
          color: "var(--gray-9)",
        }}
      >
        Wire compression
      </Text>
      {/* Pipe: left (raw/bloated) → right (compressed) */}
      <Box
        style={{
          width: "100%",
          maxWidth: 320,
          height: PIPE_WIDTH * 2,
          borderRadius: PIPE_WIDTH,
          background: `linear-gradient(
            90deg,
            color-mix(in srgb, var(--red-9) 35%, var(--gray-3)) 0%,
            var(--gray-5) 45%,
            var(--gray-5) 55%,
            color-mix(in srgb, var(--grass-9) 40%, var(--gray-3)) 100%
          )`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {!reduced &&
          particles.map((p) => (
            <Box
              key={p.id}
              aria-hidden
              style={{
                position: "absolute",
                left: `${p.progress * 100}%`,
                top: "50%",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor:
                  p.progress < 0.5
                    ? "var(--red-8)"
                    : "var(--grass-8)",
                transform: "translate(-50%, -50%)",
                transition: "left 0.1s linear",
                boxShadow: "0 0 8px currentColor",
              }}
            />
          ))}
      </Box>
      <Flex justify="between" style={{ width: "100%", maxWidth: 320 }}>
        <Text
          size="1"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            color: "var(--gray-9)",
            fontSize: "10px",
          }}
        >
          Raw
        </Text>
        <Text
          size="1"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            color: "var(--gray-9)",
            fontSize: "10px",
          }}
        >
          Compressed
        </Text>
      </Flex>
    </Flex>
  );
}
