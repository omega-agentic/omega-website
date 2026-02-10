"use client";

import { useEffect, useState, useCallback } from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const BRAND_EASING = [0.22, 1, 0.36, 1] as const;

interface WireNode {
  id: string;
  label: string;
  x: number;
  y: number;
}

interface WireEdge {
  from: string;
  to: string;
  label?: string;
}

interface WireStep {
  /** Which nodes are "active" in this step */
  activeNodes: string[];
  /** Which edges are "active" in this step */
  activeEdges: [string, string][];
  /** Annotation text */
  annotation: string;
}

interface WireDiagramProps {
  nodes: WireNode[];
  edges: WireEdge[];
  steps: WireStep[];
  /** Width of the SVG viewBox */
  width?: number;
  /** Height of the SVG viewBox */
  height?: number;
  /** Auto-advance interval in ms (0 = manual) */
  autoAdvanceMs?: number;
}

export function WireDiagram({
  nodes,
  edges,
  steps,
  width = 600,
  height = 300,
  autoAdvanceMs = 3000,
}: WireDiagramProps) {
  const [stepIdx, setStepIdx] = useState(0);
  const reduced = useReducedMotion();
  const step = steps[stepIdx];

  const advance = useCallback(() => {
    setStepIdx((prev) => (prev + 1) % steps.length);
  }, [steps.length]);

  useEffect(() => {
    if (autoAdvanceMs <= 0) return;
    const id = setInterval(advance, autoAdvanceMs);
    return () => clearInterval(id);
  }, [autoAdvanceMs, advance]);

  const isNodeActive = (id: string) => step?.activeNodes.includes(id);
  const isEdgeActive = (from: string, to: string) =>
    step?.activeEdges.some(([f, t]) => f === from && t === to);

  return (
    <Flex direction="column" gap="3" align="center">
      <Box
        style={{
          width: "100%",
          maxWidth: width,
          aspectRatio: `${width} / ${height}`,
        }}
      >
        <svg
          viewBox={`0 0 ${width} ${height}`}
          style={{ width: "100%", height: "100%" }}
        >
          {/* Edges */}
          {edges.map((edge) => {
            const from = nodes.find((n) => n.id === edge.from);
            const to = nodes.find((n) => n.id === edge.to);
            if (!from || !to) return null;
            const active = isEdgeActive(edge.from, edge.to);
            return (
              <g key={`${edge.from}-${edge.to}`}>
                <line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  className={`diagram-edge ${active ? "active" : ""}`}
                  strokeDasharray={active ? "none" : "4 4"}
                />
                {edge.label && (
                  <text
                    x={(from.x + to.x) / 2}
                    y={(from.y + to.y) / 2 - 8}
                    textAnchor="middle"
                    style={{
                      fontFamily:
                        "var(--font-jetbrains-mono), ui-monospace, monospace",
                      fontSize: 9,
                      fill: active ? "var(--gray-10)" : "var(--gray-7)",
                      transition: "fill 0.3s ease",
                    }}
                  >
                    {edge.label}
                  </text>
                )}
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const active = isNodeActive(node.id);
            return (
              <g key={node.id}>
                <rect
                  x={node.x - 50}
                  y={node.y - 18}
                  width={100}
                  height={36}
                  rx={6}
                  ry={6}
                  style={{
                    fill: active ? "var(--gray-3)" : "var(--gray-2)",
                    stroke: active ? "var(--gray-7)" : "var(--gray-4)",
                    strokeWidth: 1,
                    transition: "all 0.3s ease",
                  }}
                />
                <text
                  x={node.x}
                  y={node.y + 4}
                  textAnchor="middle"
                  style={{
                    fontFamily:
                      "var(--font-jetbrains-mono), ui-monospace, monospace",
                    fontSize: 11,
                    fill: active ? "var(--gray-12)" : "var(--gray-9)",
                    transition: "fill 0.3s ease",
                  }}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </Box>

      {/* Annotation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={stepIdx}
          initial={reduced ? {} : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? {} : { opacity: 0, y: -4 }}
          transition={{ duration: 0.25, ease: BRAND_EASING }}
        >
          <Text
            size="2"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              color: "var(--gray-10)",
              textAlign: "center",
            }}
          >
            {step?.annotation}
          </Text>
        </motion.div>
      </AnimatePresence>

      {/* Step indicators */}
      <Flex gap="2" align="center">
        {steps.map((_, i) => (
          <Box
            key={i}
            onClick={() => setStepIdx(i)}
            style={{
              width: i === stepIdx ? 20 : 6,
              height: 6,
              borderRadius: 3,
              backgroundColor:
                i === stepIdx ? "var(--gray-10)" : "var(--gray-5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Flex>
    </Flex>
  );
}
