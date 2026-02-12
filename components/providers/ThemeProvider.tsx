"use client";

import { Theme } from "@radix-ui/themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <Theme
      appearance="dark"
      accentColor="gray"
      grayColor="gray"
      radius="small"
      scaling="100%"
    >
      {children}
    </Theme>
  );
}
