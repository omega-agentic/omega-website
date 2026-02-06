"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BRAND_EASING, SCROLL_REVEAL_OFFSET } from "@/lib/constants";

interface StaggerRevealProps {
  children: React.ReactNode;
  /** Delay before first child (s) */
  delayChildren?: number;
  /** Delay between each child (s) */
  staggerChildren?: number;
  /** Initial translateY (px) */
  offset?: number;
  /** Duration per child (s) */
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function StaggerReveal({
  children,
  delayChildren = 0,
  staggerChildren = 0.08,
  offset = SCROLL_REVEAL_OFFSET,
  duration = 0.5,
  className,
  style,
}: StaggerRevealProps) {
  const reducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: reducedMotion
      ? { transition: { staggerChildren: 0, delayChildren: 0 } }
      : {
          transition: {
            delayChildren,
            staggerChildren,
            ease: BRAND_EASING as [number, number, number, number],
          },
        },
  };

  const itemVariants = reducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.15 } } }
    : {
        hidden: { opacity: 0, y: offset },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: BRAND_EASING as [number, number, number, number] },
        },
      };

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
