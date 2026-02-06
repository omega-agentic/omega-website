import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import { outfit, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omega — The Agent Layer",
  description:
    "Agent infrastructure. Memory that compounds. Obligations that resolve. Receipts that prove what happened. Turning AI agents into super agents.",
  openGraph: {
    title: "Omega — The Agent Layer",
    description:
      "Agent infrastructure. Memory that compounds. Obligations that resolve. Receipts that prove what happened.",
    type: "website",
  },
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
        <Theme
          appearance="light"
          accentColor="gray"
          grayColor="sand"
          radius="small"
          scaling="100%"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
