"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Flex, Text } from "@radix-ui/themes";
import { BRAND_EASING } from "@/lib/constants";

interface AnimatedStatBlockProps {
  /** Large number or value (e.g. "650 → 1.5", "32 theorems") */
  value: React.ReactNode;
  /** Caption below (e.g. "bytes per token") */
  caption: string;
  /** Duration for value reveal (s) */
  duration?: number;
  /** Delay before caption appears (s) */
  captionDelay?: number;
}

export function AnimatedStatBlock({
  value,
  caption,
  duration = 0.5,
  captionDelay = 0.15,
}: AnimatedStatBlockProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <Flex ref={ref} direction="column" gap="2" align="start">
        <Text
          size="8"
          weight="light"
          style={{
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
            color: "var(--gray-12)",
          }}
        >
          {value}
        </Text>
        <Text
          size="1"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "clamp(10px, 0.9vw, 12px)",
            color: "var(--omega-accent)",
          }}
        >
          {caption}
        </Text>
      </Flex>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: captionDelay,
            delayChildren: 0,
          },
        },
      }}
    >
      <Flex direction="column" gap="2" align="start">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration, ease: BRAND_EASING as [number, number, number, number] },
            },
          }}
        >
          <Text
            size="8"
            weight="light"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
              color: "var(--gray-12)",
            }}
          >
            {value}
          </Text>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 4 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: BRAND_EASING as [number, number, number, number] },
            },
          }}
        >
          <Text
            size="1"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "clamp(10px, 0.9vw, 12px)",
              color: "var(--omega-accent)",
            }}
          >
            {caption}
          </Text>
        </motion.div>
      </Flex>
    </motion.div>
  );
}
