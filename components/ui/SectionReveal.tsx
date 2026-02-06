"use client";

import { motion } from "framer-motion";
import { BRAND_EASING, SCROLL_REVEAL_DURATION, SCROLL_REVEAL_OFFSET } from "@/lib/constants";

interface SectionRevealProps {
  children: React.ReactNode;
}

/** ScrollReveal: Framer Motion in-view opacity + translateY with brand easing. */
export function SectionReveal({ children }: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: SCROLL_REVEAL_OFFSET }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: SCROLL_REVEAL_DURATION,
        ease: BRAND_EASING as unknown as [number, number, number, number],
      }}
    >
      {children}
    </motion.div>
  );
}

/** Alias for plan compatibility. */
export const ScrollReveal = SectionReveal;
