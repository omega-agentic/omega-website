"use client";

import { useEffect, useRef, useCallback } from "react";

const CHARS = "ω∑∫π∞≈±∂√θλΔ∇εφ≠αβγδσμ".split("");
const CELL_SIZE = 36;
const MOUSE_RADIUS = 140;
const PHANTOM_RADIUS = 90;
const FADE_LERP = 0.15;
const BASE_FONT_SIZE = 14;
const MAX_OPACITY = 0.15;
const MARGIN = 0.05;

// Two phantoms with different Lissajous params so they cover different areas
const PHANTOMS = [
  { freqX: 0.0005, freqY: 0.00037, phaseX: 0, phaseY: Math.PI / 3 },
  { freqX: 0.00031, freqY: 0.00047, phaseX: Math.PI / 2, phaseY: 0 },
];

interface Cell {
  char: string;
  x: number;
  y: number;
  currentOpacity: number;
  targetOpacity: number;
}

function gaussianFalloff(dist: number, radius: number): number {
  return Math.exp(-(dist * dist) / (2 * radius * radius));
}

export function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cellsRef = useRef<Cell[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef(0);
  const reducedMotionRef = useRef(false);

  const buildGrid = useCallback(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const cols = Math.ceil(w / CELL_SIZE);
    const rows = Math.ceil(h / CELL_SIZE);
    const cells: Cell[] = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        cells.push({
          char: CHARS[Math.floor(Math.random() * CHARS.length)],
          x: col * CELL_SIZE + CELL_SIZE / 2,
          y: row * CELL_SIZE + CELL_SIZE / 2,
          currentOpacity: 0,
          targetOpacity: 0,
        });
      }
    }

    cellsRef.current = cells;
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    buildGrid();
  }, [buildGrid]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
    const onMqChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mq.addEventListener("change", onMqChange);

    startTimeRef.current = performance.now();
    resizeCanvas();

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", resizeCanvas);

    const loop = () => {
      rafRef.current = requestAnimationFrame(loop);

      if (reducedMotionRef.current) return;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const cells = cellsRef.current;
      const mouse = mouseRef.current;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const t = performance.now() - startTimeRef.current;

      const cx = w * 0.5;
      const cy = h * 0.5;
      const ax = w * (0.5 - MARGIN);
      const ay = h * (0.5 - MARGIN);

      // Compute phantom positions
      const phantomPositions = PHANTOMS.map((p) => ({
        x: cx + ax * Math.sin(p.freqX * t + p.phaseX),
        y: cy + ay * Math.sin(p.freqY * t + p.phaseY),
      }));

      // Compute target opacities
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];

        // Mouse
        const mdx = cell.x - mouse.x;
        const mdy = cell.y - mouse.y;
        let target = gaussianFalloff(Math.sqrt(mdx * mdx + mdy * mdy), MOUSE_RADIUS);

        // Phantoms (take max)
        for (let p = 0; p < phantomPositions.length; p++) {
          const ph = phantomPositions[p];
          const pdx = cell.x - ph.x;
          const pdy = cell.y - ph.y;
          const pVal = gaussianFalloff(Math.sqrt(pdx * pdx + pdy * pdy), PHANTOM_RADIUS);
          if (pVal > target) target = pVal;
        }

        cell.targetOpacity = target;

        // Lerp — fast enough to keep up with the phantoms
        const diff = cell.targetOpacity - cell.currentOpacity;
        if (Math.abs(diff) > 0.001) {
          cell.currentOpacity += diff * FADE_LERP;
        } else {
          cell.currentOpacity = cell.targetOpacity;
        }
      }

      // Draw
      ctx.clearRect(0, 0, w, h);
      ctx.font = `${BASE_FONT_SIZE}px var(--font-jetbrains-mono), ui-monospace, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#6e6e6e"; // Radix gray-9

      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        if (cell.currentOpacity < 0.005) continue;
        ctx.globalAlpha = cell.currentOpacity * MAX_OPACITY;
        ctx.fillText(cell.char, cell.x, cell.y);
      }

      ctx.globalAlpha = 1;
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", resizeCanvas);
      mq.removeEventListener("change", onMqChange);
    };
  }, [resizeCanvas]);

  return (
    <canvas
      ref={canvasRef}
      className="ascii-background"
      aria-hidden="true"
    />
  );
}
