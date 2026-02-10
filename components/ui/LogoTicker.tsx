"use client";

import { Box, Flex, Text } from "@radix-ui/themes";

interface LogoItem {
  name: string;
  /** Optional SVG or image node; falls back to text */
  icon?: React.ReactNode;
  /** Optional metric e.g. "95% compression" */
  metric?: string;
}

interface LogoTickerProps {
  items: LogoItem[];
  /** Label above the ticker */
  label?: string;
}

function TickerRow({ items }: { items: LogoItem[] }) {
  return (
    <>
      {items.map((item, i) => (
        <Flex
          key={`${item.name}-${i}`}
          align="center"
          gap="2"
          style={{
            padding: "0 var(--space-7)",
            flexShrink: 0,
            opacity: 0.5,
            transition: "opacity 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.opacity = "0.9";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.opacity = "0.5";
          }}
        >
          {item.icon && (
            <Box style={{ width: 20, height: 20, flexShrink: 0 }}>
              {item.icon}
            </Box>
          )}
          <Text
            size="2"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 400,
              color: "var(--gray-11)",
              whiteSpace: "nowrap",
              fontSize: "14px",
            }}
          >
            {item.name}
          </Text>
          {item.metric && (
            <Text
              size="1"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                color: "var(--gray-8)",
                whiteSpace: "nowrap",
                fontSize: "11px",
              }}
            >
              {item.metric}
            </Text>
          )}
        </Flex>
      ))}
    </>
  );
}

export function LogoTicker({ items, label }: LogoTickerProps) {
  return (
    <Box style={{ width: "100%", overflow: "hidden" }}>
      {label && (
        <Text
          className="overline"
          style={{
            display: "block",
            textAlign: "center",
            marginBottom: "var(--space-4)",
          }}
        >
          {label}
        </Text>
      )}
      <Box
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <Flex className="logo-ticker-track">
          <TickerRow items={items} />
          <TickerRow items={items} />
        </Flex>
      </Box>
    </Box>
  );
}
