"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { Theme } from "@radix-ui/themes";
import { useEffect, useState } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Theme
        appearance="dark"
        accentColor="blue"
        grayColor="sand"
        radius="small"
        scaling="100%"
      >
        {children}
      </Theme>
    );
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeWrapper>{children}</ThemeWrapper>
    </NextThemesProvider>
  );
}

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const appearance = resolvedTheme === "dark" ? "dark" : "light";

  return (
    <Theme
      appearance={appearance}
      accentColor="blue"
      grayColor="sand"
      radius="small"
      scaling="100%"
    >
      {children}
    </Theme>
  );
}
