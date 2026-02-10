import type { Metadata } from "next";
import { inter, jetbrainsMono } from "@/lib/fonts";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { RevealProvider } from "@/components/ui/RevealProvider";
import { NavHeader } from "@/components/layout/NavHeader";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "OmegaCode — Make Your AI Coding Agent 10x More Reliable",
  description:
    "Drop-in upgrade for Cursor, Claude Code, OpenCode, Cline, and every AI coding tool. 433x wire compression. 0% tool call syntax errors. One command. Free. MIT Licensed.",
  openGraph: {
    title: "OmegaCode — Make Your AI Coding Agent 10x More Reliable",
    description:
      "Drop-in upgrade for Cursor, Claude Code, OpenCode, Cline, and every AI coding tool. 433x wire compression. 0% tool call syntax errors. One command. Free. MIT Licensed.",
    type: "website",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://omegacode.ai/#organization",
      name: "OmegaCode",
      url: "https://omegacode.ai",
      logo: "https://omegacode.ai/logo.png",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://omegacode.ai/#software",
      name: "OmegaCode",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      description:
        "Make your AI coding agent 10x more reliable. Wire compression, typed tool framing, persistent memory, verified execution. Works with Cursor, Claude Code, OpenCode, Cline, Aider. One install. Zero config.",
      url: "https://omegacode.ai",
      author: { "@id": "https://omegacode.ai/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://omegacode.ai/about#harrison",
      name: "Harrison Hines",
      jobTitle: "Founder",
      worksFor: { "@id": "https://omegacode.ai/#organization" },
      url: "https://omegacode.ai/about",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <a
          href="#main-content"
          className="skip-link"
          style={{
            position: "absolute",
            left: "-9999px",
            zIndex: 999,
            padding: "var(--space-2) var(--space-4)",
            backgroundColor: "var(--text-primary)",
            color: "var(--bg-base)",
            fontFamily: "var(--font-body)",
            fontSize: "14px",
          }}
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <ThemeProvider>
          <RevealProvider />
          <NavHeader />
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
