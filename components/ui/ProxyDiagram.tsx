"use client";

import { useEffect, useRef } from "react";

/* ─── Data ─── */
const TOOLS = ["Cursor", "Claude Code", "Copilot", "Cline", "OpenHands"];
const PROVIDERS = ["Anthropic", "OpenAI", "Gemini", "DeepSeek", "Groq"];

const PARTICLES_PER_PATH = 2;
const SPEED_MIN = 0.0018;
const SPEED_MAX = 0.0035;
const RESPAWN_DELAY = 1000;

/* Dark palette — terminal-page is always dark */
const C = {
  nodeFill: "#222221",
  nodeStroke: "#494844",
  line: "rgba(59, 58, 55, 0.5)",
  accent: "#4ccce6",
  accentGlow: "rgba(76, 204, 230, 0.22)",
  accentSoft: "rgba(76, 204, 230, 0.06)",
  labelDim: "#7c7b74",
  labelBright: "#eeeeec",
  headerDim: "#5c5b56",
};

/* ─── Omega icon path (from omega-icon.svg, viewBox 0 0 153 119) ─── */
const OMEGA_PATH_D =
  "M99.8331 0C106.566 0.540208 113.105 2.12224 119.451 4.74611C125.797 7.36997 131.408 11.0357 136.284 15.7432C141.237 20.5279 145.261 26.6245 148.357 34.0331C151.452 41.4416 153 50.2393 153 60.4261C153 68.6835 151.917 76.4394 149.75 83.6936C147.583 90.8706 144.526 97.0444 140.579 102.215C136.555 107.617 131.834 111.784 126.417 114.717C121.077 117.572 114.924 119 107.959 119C101.226 119 95.2284 117.302 89.9659 113.907C84.7033 110.511 80.2147 105.765 76.5 99.6683C72.6305 105.842 68.1419 110.627 63.0341 114.022C58.0038 117.341 52.0061 119 45.041 119C38.308 119 32.1555 117.534 26.5835 114.601C21.0888 111.591 16.368 107.463 12.4211 102.215C8.4742 97.0444 5.4173 90.8706 3.25038 83.6936C1.08346 76.4394 0 68.6835 0 60.4261C0 50.3165 1.5091 41.6346 4.52731 34.3803C7.54552 27.1261 11.6085 20.9523 16.7162 15.8589C21.7466 10.9971 27.3961 7.2928 33.6646 4.74611C40.0106 2.19942 46.5114 0.61738 53.1669 0L54.9082 9.2607C49.3361 9.95525 44.5766 11.8074 40.6297 14.8171C36.6829 17.7497 33.4712 21.5311 30.9947 26.1615C28.673 30.5603 26.893 36.2325 25.6548 43.178C24.4939 50.0464 23.9135 57.1077 23.9135 64.3619C23.9135 70.227 24.3005 75.822 25.0744 81.1469C25.9256 86.4718 27.2026 91.2565 28.9052 95.501C30.6851 99.7455 33.0455 103.141 35.9863 105.688C38.9272 108.234 42.4484 109.508 46.5501 109.508C52.8961 109.508 57.6555 107.501 60.8285 103.488C64.0015 99.3982 65.588 92.3369 65.588 82.3045V39.5895H87.412V82.3045C87.412 92.1054 88.9598 99.0895 92.0554 103.257C95.2284 107.424 100.027 109.508 106.45 109.508C110.629 109.508 114.189 108.234 117.13 105.688C120.071 103.064 122.392 99.6683 124.095 95.501C125.952 90.9478 127.229 86.1631 127.926 81.1469C128.7 76.0535 129.087 70.4585 129.087 64.3619C129.087 56.5674 128.506 49.429 127.345 42.9465C126.262 36.464 124.482 30.869 122.005 26.1615C119.374 21.2224 116.162 17.4024 112.37 14.7014C108.656 11.9232 103.896 10.1096 98.0918 9.2607L99.8331 0Z";

/* ─── Helpers ─── */
interface Vec2 {
  x: number;
  y: number;
}

function qBez(a: Vec2, cp: Vec2, b: Vec2, t: number): Vec2 {
  const m = 1 - t;
  return {
    x: m * m * a.x + 2 * m * t * cp.x + t * t * b.x,
    y: m * m * a.y + 2 * m * t * cp.y + t * t * b.y,
  };
}

interface Particle {
  progress: number;
  speed: number;
  toolIdx: number;
  provIdx: number;
  phase: 0 | 1; // 0 = tool→hub, 1 = hub→provider
  delayUntil: number;
}

/* ═══════════════════════════════════════════ */

export function ProxyDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement!;

    /* Reduced-motion */
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
    const onMq = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mq.addEventListener("change", onMq);

    const dpr = window.devicePixelRatio || 1;

    /* Resolve the CSS custom property to actual font family name —
       canvas ctx.font cannot parse var() */
    const monoFont =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--font-jetbrains-mono")
        .trim() || "monospace";

    const omegaPath = new Path2D(OMEGA_PATH_D);

    const resize = () => {
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };
    resize();

    /* ── Particles ── */
    const particles: Particle[] = [];
    const now = performance.now();
    for (let t = 0; t < TOOLS.length; t++) {
      for (let j = 0; j < PARTICLES_PER_PATH; j++) {
        particles.push({
          progress: Math.random(),
          speed: SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN),
          toolIdx: t,
          provIdx: Math.floor(Math.random() * PROVIDERS.length),
          phase: Math.random() < 0.5 ? 0 : 1,
          delayUntil: now + Math.random() * 1500,
        });
      }
    }

    /* ── Loop ── */
    const loop = () => {
      rafRef.current = requestAnimationFrame(loop);

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      /* ─── Layout — all spacing handled here ─── */
      const inset = 30;
      const padX = Math.max(w * 0.14, 60);
      const headerSize = 10;
      const nodeTop = inset + headerSize + 28;   /* below header */
      const nodeBottom = h - inset;              /* above bottom edge */
      const hubX = w / 2;
      const hubY = h / 2;
      const hubR = Math.min(w, h) * 0.11;
      const nodeR = 5;

      const toolNodes: Vec2[] = TOOLS.map((_, i) => ({
        x: padX,
        y: nodeTop + (i / (TOOLS.length - 1)) * (nodeBottom - nodeTop),
      }));
      const provNodes: Vec2[] = PROVIDERS.map((_, i) => ({
        x: w - padX,
        y: nodeTop + (i / (PROVIDERS.length - 1)) * (nodeBottom - nodeTop),
      }));

      /* Control points — curve toward center vertically */
      const toolCPs = toolNodes.map((n) => ({
        x: padX + (hubX - padX) * 0.38,
        y: n.y * 0.4 + hubY * 0.6,
      }));
      const provCPs = provNodes.map((n) => ({
        x: hubX + (w - padX - hubX) * 0.62,
        y: n.y * 0.4 + hubY * 0.6,
      }));

      const hubL: Vec2 = { x: hubX - hubR - 6, y: hubY };
      const hubRt: Vec2 = { x: hubX + hubR + 6, y: hubY };

      /* ─── Column headers ─── */
      const headerFont = `${headerSize}px ${monoFont}, monospace`;
      ctx.font = headerFont;
      ctx.fillStyle = C.headerDim;
      ctx.textAlign = "right";
      ctx.textBaseline = "top";
      ctx.fillText("YOUR TOOLS", padX + 30, inset);
      ctx.textAlign = "left";
      ctx.fillText("PROVIDERS", w - padX - 30, inset);

      /* ─── Connection lines ─── */
      ctx.strokeStyle = C.line;
      ctx.lineWidth = 1;
      for (let i = 0; i < TOOLS.length; i++) {
        ctx.beginPath();
        ctx.moveTo(toolNodes[i].x, toolNodes[i].y);
        ctx.quadraticCurveTo(toolCPs[i].x, toolCPs[i].y, hubL.x, hubL.y);
        ctx.stroke();
      }
      for (let i = 0; i < PROVIDERS.length; i++) {
        ctx.beginPath();
        ctx.moveTo(hubRt.x, hubRt.y);
        ctx.quadraticCurveTo(provCPs[i].x, provCPs[i].y, provNodes[i].x, provNodes[i].y);
        ctx.stroke();
      }

      /* ─── Particles ─── */
      if (!reducedMotionRef.current) {
        const t = performance.now();
        for (const p of particles) {
          if (t < p.delayUntil) continue;

          p.progress += p.speed;
          if (p.progress >= 1) {
            p.progress = 0;
            if (p.phase === 0) {
              p.phase = 1;
            } else {
              p.phase = 0;
              p.toolIdx = Math.floor(Math.random() * TOOLS.length);
              p.provIdx = Math.floor(Math.random() * PROVIDERS.length);
              p.delayUntil = t + Math.random() * RESPAWN_DELAY;
            }
          }

          let pos: Vec2;
          if (p.phase === 0) {
            pos = qBez(toolNodes[p.toolIdx], toolCPs[p.toolIdx], hubL, p.progress);
          } else {
            pos = qBez(hubRt, provCPs[p.provIdx], provNodes[p.provIdx], p.progress);
          }

          /* Glow */
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 8, 0, Math.PI * 2);
          ctx.fillStyle = C.accentGlow;
          ctx.fill();

          /* Dot */
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = C.accent;
          ctx.fill();
        }
      }

      /* ─── Hub ─── */
      /* Outer glow */
      const grad = ctx.createRadialGradient(
        hubX,
        hubY,
        hubR * 0.8,
        hubX,
        hubY,
        hubR * 2.4
      );
      grad.addColorStop(0, C.accentSoft);
      grad.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(hubX, hubY, hubR * 2.4, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      /* Circle */
      ctx.beginPath();
      ctx.arc(hubX, hubY, hubR, 0, Math.PI * 2);
      ctx.fillStyle = C.nodeFill;
      ctx.fill();
      ctx.strokeStyle = C.accent;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      /* Omega icon (from omega-icon.svg, 153×119) */
      const iconW = 153, iconH = 119;
      const iconScale = (hubR * 1.0) / Math.max(iconW, iconH);
      ctx.save();
      ctx.translate(hubX - (iconW * iconScale) / 2, hubY - (iconH * iconScale) / 2);
      ctx.scale(iconScale, iconScale);
      ctx.fillStyle = C.labelBright;
      ctx.fill(omegaPath);
      ctx.restore();

      /* Sublabel */
      ctx.font = `${Math.max(7, hubR * 0.28)}px ${monoFont}, monospace`;
      ctx.fillStyle = C.labelDim;
      ctx.fillText("OMEGACODE", hubX, hubY + hubR + Math.max(12, hubR * 0.5));

      /* ─── Tool nodes ─── */
      const labelFont = `${Math.max(9, Math.min(11, w * 0.017))}px ${monoFont}, monospace`;
      for (let i = 0; i < TOOLS.length; i++) {
        const n = toolNodes[i];
        ctx.beginPath();
        ctx.arc(n.x, n.y, nodeR, 0, Math.PI * 2);
        ctx.fillStyle = C.nodeFill;
        ctx.fill();
        ctx.strokeStyle = C.nodeStroke;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.font = labelFont;
        ctx.fillStyle = C.labelDim;
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.fillText(TOOLS[i], n.x - nodeR - 8, n.y);
      }

      /* ─── Provider nodes ─── */
      for (let i = 0; i < PROVIDERS.length; i++) {
        const n = provNodes[i];
        ctx.beginPath();
        ctx.arc(n.x, n.y, nodeR, 0, Math.PI * 2);
        ctx.fillStyle = C.nodeFill;
        ctx.fill();
        ctx.strokeStyle = C.nodeStroke;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.font = labelFont;
        ctx.fillStyle = C.labelDim;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(PROVIDERS[i], n.x + nodeR + 8, n.y);
      }

      ctx.restore();
    };

    rafRef.current = requestAnimationFrame(loop);

    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      mq.removeEventListener("change", onMq);
    };
  }, []);

  return (
    <div className="proxy-diagram-wrap">
      <canvas ref={canvasRef} className="proxy-diagram-canvas" aria-hidden="true" />
    </div>
  );
}
