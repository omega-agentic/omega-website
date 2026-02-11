"use client";

import { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}

/**
 * Wrapper that applies the .reveal class for scroll-triggered animation.
 * The global RevealProvider handles the IntersectionObserver.
 */
export function SectionReveal({
  children,
  className = "",
  stagger = false,
}: SectionRevealProps) {
  return (
    <div className={`reveal ${stagger ? "stagger" : ""} ${className}`}>
      {children}
    </div>
  );
}
