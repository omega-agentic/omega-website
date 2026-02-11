"use client";

import { useEffect, useRef, useState } from "react";

interface MetricDisplayProps {
  value: string;
  numericValue?: number;
  suffix?: string;
  prefix?: string;
  benefit: string;
  caption: string;
}

export function MetricDisplay({
  value,
  numericValue,
  suffix = "",
  prefix = "",
  benefit,
  caption,
}: MetricDisplayProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(
    numericValue !== undefined ? "0" : value
  );
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (numericValue === undefined || hasAnimated) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount(0, numericValue, 1200, (v) => {
            setDisplayValue(
              Number.isInteger(numericValue)
                ? Math.round(v).toString()
                : v.toFixed(1)
            );
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [numericValue, hasAnimated]);

  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
      <div className="type-metric">
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <div
        style={{
          fontSize: "1rem",
          fontWeight: 500,
          color: "var(--text-primary)",
          lineHeight: 1.4,
        }}
      >
        {benefit}
      </div>
      <div className="type-caption">{caption}</div>
    </div>
  );
}

function animateCount(
  from: number,
  to: number,
  duration: number,
  onUpdate: (value: number) => void
) {
  const start = performance.now();
  const tick = (now: number) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    onUpdate(from + (to - from) * eased);
    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };
  requestAnimationFrame(tick);
}
