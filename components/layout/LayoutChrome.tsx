"use client";

import { usePathname } from "next/navigation";
import { PageShell } from "./PageShell";

export function LayoutChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return <>{children}</>;
  }

  return <PageShell>{children}</PageShell>;
}
