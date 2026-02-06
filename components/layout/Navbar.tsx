"use client";

import { useEffect, useState } from "react";
import { Box, Container, Flex, Button } from "@radix-ui/themes";
import { OmegaLockup } from "@/components/brand/OmegaLockup";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToInstall = () => {
    document.getElementById("install")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      asChild
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "var(--omega-bg)",
        borderBottom: "1px solid transparent",
        transition: "border-color 0.2s ease",
      }}
      className={scrolled ? "nav-border-on-scroll scrolled" : "nav-border-on-scroll"}
    >
      <header>
        <Container size="4">
          <Flex
            justify="between"
            align="center"
            py="4"
            style={{ minHeight: "64px" }}
          >
            <OmegaLockup size={20} />
            <Button size="3" variant="soft" onClick={scrollToInstall}>
              Get Early Access
            </Button>
          </Flex>
        </Container>
      </header>
    </Box>
  );
}
