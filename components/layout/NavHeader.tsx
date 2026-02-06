"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Box, Container, Flex, Button, Text } from "@radix-ui/themes";
import { OmegaLockup } from "@/components/brand/OmegaLockup";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_LINKS: { href: string; label: string; badge?: string }[] = [
  { href: "/boost", label: "Boost" },
  { href: "/code", label: "Code", badge: "soon" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
];

export function NavHeader() {
  const { resolvedTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const logoVariant = resolvedTheme === "dark" ? "dark" : "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      asChild
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: "1px solid transparent",
        transition: "border-color 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className={scrolled ? "nav-border-on-scroll scrolled" : "nav-border-on-scroll"}
    >
      <header>
        <Container size="4">
          <Flex
            justify="between"
            align="center"
            py="3"
            style={{ minHeight: "56px" }}
          >
            <OmegaLockup size={16} asLink variant={logoVariant} className="nav-logo" />

            {/* Desktop nav */}
            <Flex align="center" gap="5" className="nav-desktop">
              {NAV_LINKS.map(({ href, label, badge }) => (
                <Link
                  key={href}
                  href={href}
                  className="nav-link"
                  style={{ textDecoration: "none" }}
                >
                  <Flex align="center" gap="2">
                    <Text
                      size="2"
                      style={{
                        color: "var(--gray-11)",
                        fontFamily: "var(--font-outfit), system-ui, sans-serif",
                        fontSize: "14px",
                      }}
                    >
                      {label}
                    </Text>
                    {badge === "soon" && (
                      <Text
                        size="1"
                        style={{
                          color: "var(--gray-9)",
                          fontFamily: "var(--font-jetbrains-mono), monospace",
                          fontSize: "9px",
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                        }}
                      >
                        soon
                      </Text>
                    )}
                  </Flex>
                </Link>
              ))}
              <Link
                href="https://docs.omega.ms"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                <Text
                  size="2"
                  style={{
                    color: "var(--gray-11)",
                    fontFamily: "var(--font-outfit), system-ui, sans-serif",
                    fontSize: "14px",
                  }}
                >
                  Docs
                </Text>
              </Link>
            </Flex>

            <Flex align="center" gap="3" className="nav-desktop">
              <ThemeToggle />
              <Button size="2" variant="solid" highContrast asChild>
                <Link href="/boost">Get Started</Link>
              </Button>
            </Flex>

            {/* Mobile */}
            <Flex align="center" gap="3" className="nav-mobile">
              <ThemeToggle />
              <Button
                size="2"
                variant="ghost"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileOpen((o) => !o)}
                style={{
                  color: "var(--gray-12)",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                }}
              >
                {mobileOpen ? "\u2715" : "\u2261"}
              </Button>
            </Flex>
          </Flex>

          {/* Mobile dropdown */}
          {mobileOpen && (
            <Box
              pb="4"
              style={{
                borderTop: "1px solid var(--gray-4)",
                paddingTop: "var(--space-3)",
              }}
              className="nav-mobile"
            >
              <Flex direction="column" gap="3">
                {NAV_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      size="3"
                      style={{
                        color: "var(--gray-12)",
                        fontFamily: "var(--font-outfit), system-ui, sans-serif",
                      }}
                    >
                      {label}
                    </Text>
                  </Link>
                ))}
                <Button size="3" variant="solid" highContrast asChild>
                  <Link href="/boost" onClick={() => setMobileOpen(false)}>Get Started</Link>
                </Button>
              </Flex>
            </Box>
          )}
        </Container>
      </header>
    </Box>
  );
}
