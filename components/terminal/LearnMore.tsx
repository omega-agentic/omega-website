"use client";

import { useEffect, useRef, useState } from "react";

export function LearnMore() {
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the sentinel (placed at the content section) enters the viewport
        // the learn-more indicator has been scrolled past
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    // Observe the learn-more element itself — when it leaves viewport, flip
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // We actually want to detect when the USER has scrolled down past this element.
  // Simpler: use scroll position check
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`home-learn-more ${scrolled ? "home-learn-more-scrolled" : ""}`} ref={sentinelRef}>
      <span>{scrolled ? "Oh, you like reading?" : "Learn more"}</span>
      <div className="home-learn-more-arrow">
        {scrolled ? (
          <span style={{ fontSize: "18px", lineHeight: 1 }}>:)</span>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        )}
      </div>
    </div>
  );
}
