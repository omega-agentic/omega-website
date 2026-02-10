"use client";

import Link from "next/link";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How It Works", href: "/#how" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "Overview", href: "/technology" },
      { label: "SIGIL Protocol", href: "/technology#sigil" },
      { label: "Verification", href: "/technology#verification" },
      { label: "Research", href: "/technology#research" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/about#careers" },
      { label: "Press", href: "/about#press" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: "https://github.com/omegacode-ai", external: true },
      { label: "Discord", href: "https://discord.gg/omegacode", external: true },
      { label: "Twitter", href: "https://twitter.com/omegacode_ai", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        padding: "var(--space-8) 0 var(--space-6)",
      }}
    >
      <div className="container">
        {/* Top row: logo + tagline */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "var(--space-7)",
          }}
        >
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
                fontSize: "18px",
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              ω
            </span>
            OmegaCode
          </Link>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--text-low)",
              letterSpacing: "0.02em",
            }}
          >
            the result is saved
          </span>
        </div>

        {/* Link columns */}
        <div
          className="footer-columns"
          style={{ marginBottom: "var(--space-7)" }}
        >
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div
                className="section-label"
                style={{ marginBottom: "var(--space-3)" }}
              >
                {col.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                {col.links.map((link) => {
                  const isExternal = "external" in link && link.external;
                  if (isExternal) {
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link"
                        style={{ fontSize: "0.875rem" }}
                      >
                        {link.label}
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="nav-link"
                      style={{ fontSize: "0.875rem" }}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "var(--space-5)",
            fontSize: "0.8125rem",
            color: "var(--text-low)",
          }}
        >
          © 2026 OmegaCode · MIT Licensed
        </div>
      </div>
    </footer>
  );
}
