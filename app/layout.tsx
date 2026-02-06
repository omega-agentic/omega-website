import type { Metadata } from "next";
import { outfit, jetbrainsMono } from "@/lib/fonts";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { NavHeader } from "@/components/layout/NavHeader";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omega — The End State of Intelligence",
  description:
    "Infrastructure for intelligent agents. Memory that compounds. Execution that's provable. A wire protocol that works.",
  openGraph: {
    title: "Omega — The End State of Intelligence",
    description:
      "Infrastructure for intelligent agents. Memory that compounds. Execution that's provable. A wire protocol that works.",
    type: "website",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://omega.ms/#organization",
      name: "Straylight Infrastructure",
      url: "https://omega.ms",
      logo: "https://omega.ms/logo.png",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://omega.ms/boost#software",
      name: "Omega Boost",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      description: "Drop-in proxy that fixes broken LLM streaming, tool calls, and response formatting. Works with Cursor, Claude Code, OpenCode, Cline, Aider. One install. Zero config.",
      url: "https://omega.ms/boost",
      author: { "@id": "https://omega.ms/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://omega.ms/about#harrison",
      name: "Harrison Hines",
      jobTitle: "Founder",
      worksFor: { "@id": "https://omega.ms/#organization" },
      url: "https://omega.ms/about",
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
      className={`${outfit.variable} ${jetbrainsMono.variable}`}
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
            backgroundColor: "var(--gray-12)",
            color: "var(--gray-1)",
            fontFamily: "var(--font-outfit), system-ui, sans-serif",
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
