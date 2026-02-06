"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, Text, Box } from "@radix-ui/themes";
import { BRAND_EASING } from "@/lib/constants";

export interface InstallTabItem {
  /** Tab label, e.g. "Cursor" */
  label: string;
  /** Terminal lines (string or node) */
  terminal: React.ReactNode;
  /** Short copy below terminal */
  copy?: string;
}

interface InstallTabsProps {
  items: InstallTabItem[];
}

export function InstallTabs({ items }: InstallTabsProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Tabs.Root defaultValue={items[0]?.label ?? ""}>
      <Tabs.List>
        {items.map((item) => (
          <Tabs.Trigger key={item.label} value={item.label}>
            {item.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {items.map((item) => (
        <Tabs.Content key={item.label} value={item.label}>
          <motion.div
            initial={mounted ? { opacity: 0, y: 4 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              ease: BRAND_EASING as [number, number, number, number],
            }}
          >
            <Box pt="4">
              <Box
                style={{
                  backgroundColor: "var(--gray-2)",
                  border: "1px solid var(--omega-border)",
                  borderRadius: "var(--radius-2)",
                  padding: "var(--space-4)",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "clamp(11px, 1.1vw, 14px)",
                  lineHeight: 1.85,
                  marginBottom: item.copy ? "var(--space-3)" : 0,
                }}
              >
                <pre
                  style={{
                    margin: 0,
                    whiteSpace: "pre-wrap",
                    color: "var(--gray-12)",
                  }}
                >
                  {item.terminal}
                </pre>
              </Box>
              {item.copy && (
                <Text
                  size="2"
                  style={{
                    fontFamily: "var(--font-outfit), system-ui, sans-serif",
                    color: "var(--omega-accent)",
                  }}
                >
                  {item.copy}
                </Text>
              )}
            </Box>
          </motion.div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
