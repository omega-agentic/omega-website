"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Container, Flex, Text, Grid } from "@radix-ui/themes";
import { OmegaLockup } from "@/components/brand/OmegaLockup";
import { useTheme } from "next-themes";

const FOOTER_COLUMNS: {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
}[] = [
  {
    title: "Products",
    links: [
      { href: "/boost", label: "Boost" },
      { href: "/code", label: "Code" },
      { href: "/chat", label: "Chat" },
      { href: "https://docs.omega.ms", label: "Docs", external: true },
    ],
  },
  {
    title: "Technology",
    links: [
      { href: "/technology#sigil", label: "SIGIL" },
      { href: "/technology#stack", label: "Architecture" },
      { href: "/technology#research", label: "Research" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "mailto:harrison@omega.ms", label: "Contact", external: true },
    ],
  },
];

const SOCIAL = [
  { href: "https://github.com/straylight-ai", label: "GitHub" },
  { href: "https://x.com/omega_ms", label: "X" },
  { href: "https://discord.gg/omega", label: "Discord" },
] as const;

export function Footer() {
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();
  const logoVariant = resolvedTheme === "dark" ? "dark" : "light";

  // Hide footer on full-screen pages
  if (pathname === "/chat") return null;

  return (
    <Box asChild style={{ borderTop: "1px solid var(--gray-4)" }}>
      <footer>
        <Box py="7">
          <Container size="3">
            <Grid
              columns={{ initial: "1", sm: "4" }}
              gap="6"
              style={{ marginBottom: "var(--space-7)" }}
            >
              <Flex direction="column" gap="4">
                <OmegaLockup size={16} asLink variant={logoVariant} />
                <Text
                  size="2"
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    color: "var(--gray-9)",
                    fontSize: "12px",
                  }}
                >
                  the result is saved
                </Text>
              </Flex>
              {FOOTER_COLUMNS.map((col) => (
                <Flex key={col.title} direction="column" gap="3">
                  <Text
                    size="2"
                    weight="medium"
                    style={{
                      color: "var(--gray-12)",
                      fontFamily: "var(--font-outfit), system-ui, sans-serif",
                      fontSize: "13px",
                    }}
                  >
                    {col.title}
                  </Text>
                  {col.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      style={{ textDecoration: "none" }}
                    >
                      <Text
                        size="2"
                        style={{
                          color: "var(--gray-10)",
                          fontFamily: "var(--font-outfit), system-ui, sans-serif",
                          fontSize: "13px",
                          transition: "color 0.15s ease",
                        }}
                        className="nav-link"
                      >
                        {link.label}
                      </Text>
                    </Link>
                  ))}
                </Flex>
              ))}
            </Grid>

            <Flex
              justify="between"
              align="center"
              wrap="wrap"
              gap="3"
              style={{ borderTop: "1px solid var(--gray-3)", paddingTop: "var(--space-4)" }}
            >
              <Text
                size="1"
                style={{
                  color: "var(--gray-9)",
                  fontFamily: "var(--font-outfit), system-ui, sans-serif",
                  fontSize: "12px",
                }}
              >
                &copy; 2026 Straylight Infrastructure
              </Text>
              <Flex gap="4" align="center">
                {SOCIAL.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      size="1"
                      style={{
                        color: "var(--gray-9)",
                        fontFamily: "var(--font-outfit), system-ui, sans-serif",
                        fontSize: "12px",
                        transition: "color 0.15s ease",
                      }}
                      className="nav-link"
                    >
                      {s.label}
                    </Text>
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Container>
        </Box>
      </footer>
    </Box>
  );
}
