"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@radix-ui/themes";
import { HERO_DRAW_DURATION } from "@/lib/constants";

interface HeroAnimationProps {
  /** Size in px (e.g. 120) */
  size?: number;
  /** Color (CSS value) */
  color?: string;
  /** Use ω-in-circle mark (new logo) or plain ω */
  variant?: "circle" | "plain";
  className?: string;
}

/** SVG ω with stroke draw-in animation. Plays once on load. */
export function HeroAnimation({
  size = 120,
  color = "var(--gray-12)",
  variant = "circle",
  className,
}: HeroAnimationProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Box
        style={{
          width: size,
          height: size,
          opacity: 0,
        }}
        className={className}
        aria-hidden
      />
    );
  }

  if (variant === "circle") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{ width: size, height: size }}
        className={className}
        aria-hidden
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
        >
          <motion.circle
            cx="16"
            cy="16"
            r="14.5"
            stroke={color}
            strokeWidth="1"
            fill="none"
            strokeDasharray={2 * Math.PI * 14.5}
            initial={{ strokeDashoffset: 2 * Math.PI * 14.5 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{
              duration: HERO_DRAW_DURATION * 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
          <text
            x="16"
            y="21"
            textAnchor="middle"
            fill={color}
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontSize: "18px",
              fontWeight: 400,
            }}
          >
            <motion.tspan
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: HERO_DRAW_DURATION * 0.4,
                delay: HERO_DRAW_DURATION * 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              ω
            </motion.tspan>
          </text>
        </svg>
      </motion.div>
    );
  }

  /* Plain ω: single path draw would need an SVG path for ω. For simplicity use same circle+ω with draw. */
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: HERO_DRAW_DURATION, ease: [0.22, 1, 0.36, 1] }}
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={className}
      aria-hidden
    >
      <span
        style={{
          fontFamily: "var(--font-outfit), system-ui, sans-serif",
          fontWeight: 300,
          fontSize: size,
          lineHeight: 1,
          color,
        }}
      >
        ω
      </span>
    </motion.div>
  );
}
