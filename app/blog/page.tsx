import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Omega Blog — Engineering, research, and product updates",
  description:
    "Technical writing about wire protocols, formal verification, AI infrastructure, and building Omega.",
};

export default function BlogPage() {
  return (
    <div style={{ paddingTop: 56 }}>
      <section
        style={{
          padding: "var(--space-10) var(--space-5) var(--space-8)",
          maxWidth: "var(--narrow)",
          margin: "0 auto",
        }}
      >
        <SectionReveal>
          <h1 className="type-h1" style={{ marginBottom: "var(--space-5)" }}>Blog</h1>
          <p className="type-body" style={{ marginBottom: "var(--space-7)" }}>
            Technical writing about wire protocols, formal verification, AI
            infrastructure, and building Omega.
          </p>
        </SectionReveal>

        <SectionReveal>
          <div
            className="glass-card"
            style={{
              padding: "var(--space-6)",
              textAlign: "center",
            }}
          >
            <p className="type-body" style={{ marginBottom: "var(--space-4)" }}>
              First post coming soon.
            </p>
            <p className="type-caption">
              Follow us on{" "}
              <a
                href="https://twitter.com/omega_ms"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--text-secondary)", textDecoration: "underline" }}
              >
                Twitter
              </a>{" "}
              or{" "}
              <a
                href="https://discord.gg/omega"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--text-secondary)", textDecoration: "underline" }}
              >
                Discord
              </a>{" "}
              for updates.
            </p>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
