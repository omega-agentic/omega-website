"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export function NavHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const useCasesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (useCasesRef.current && !useCasesRef.current.contains(e.target as Node)) {
        setUseCasesOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header
      className={`nav-border-on-scroll ${scrolled ? "scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 56,
      }}
    >
      <nav
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 24px)",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-2)",
            textDecoration: "none",
            color: "var(--text-primary)",
            fontWeight: 500,
            fontSize: "0.9375rem",
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "20px",
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            ω
          </span>
          OmegaCode
        </Link>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "var(--space-5)" }}>
          <Link href="/technology" className="nav-link">
            Technology
          </Link>

          {/* Use Cases dropdown */}
          <div ref={useCasesRef} style={{ position: "relative" }}>
            <button
              className="nav-link"
              onClick={() => setUseCasesOpen(!useCasesOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              Use Cases
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.5 }}>
                <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </button>
            <div className={`nav-dropdown ${useCasesOpen ? "open" : ""}`}>
              <Link href="/use-cases/coding-agents" className="nav-dropdown-item" onClick={() => setUseCasesOpen(false)}>
                Coding Agents
              </Link>
              <Link href="/use-cases/enterprise-agents" className="nav-dropdown-item" onClick={() => setUseCasesOpen(false)}>
                Enterprise Agents
              </Link>
              <Link href="/use-cases/safety-critical" className="nav-dropdown-item" onClick={() => setUseCasesOpen(false)}>
                Safety-Critical
              </Link>
            </div>
          </div>

          <Link href="/pricing" className="nav-link">
            Pricing
          </Link>

          <Link href="/about" className="nav-link">
            About
          </Link>

          <a
            href="https://docs.omegacode.ai"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </a>

          <Link href="/#install" className="btn-chrome" style={{ padding: "8px 18px", fontSize: "13px" }}>
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="nav-mobile"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            color: "var(--text-primary)",
            cursor: "pointer",
            padding: "var(--space-2)",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {mobileOpen ? (
              <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="nav-mobile"
          style={{
            position: "absolute",
            top: 56,
            left: 0,
            right: 0,
            background: "var(--bg-base)",
            borderBottom: "1px solid var(--border-subtle)",
            padding: "var(--space-4) var(--space-5)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-3)",
          }}
        >
          <Link href="/technology" className="nav-link" onClick={() => setMobileOpen(false)}>
            Technology
          </Link>

          <div className="section-label" style={{ marginTop: "var(--space-2)" }}>Use Cases</div>
          <Link href="/use-cases/coding-agents" className="nav-link" onClick={() => setMobileOpen(false)}>
            Coding Agents
          </Link>
          <Link href="/use-cases/enterprise-agents" className="nav-link" onClick={() => setMobileOpen(false)}>
            Enterprise Agents
          </Link>
          <Link href="/use-cases/safety-critical" className="nav-link" onClick={() => setMobileOpen(false)}>
            Safety-Critical
          </Link>

          <div className="divider-subtle" style={{ margin: "var(--space-2) 0" }} />

          <Link href="/pricing" className="nav-link" onClick={() => setMobileOpen(false)}>
            Pricing
          </Link>
          <Link href="/about" className="nav-link" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <a href="https://docs.omegacode.ai" className="nav-link" target="_blank" rel="noopener noreferrer">
            Docs
          </a>

          <Link
            href="/#install"
            className="btn-chrome"
            onClick={() => setMobileOpen(false)}
            style={{ textAlign: "center", marginTop: "var(--space-2)" }}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
