import type { TypewriterLineConfig } from "./useTypewriter";

export function buildBootSequenceLines(): TypewriterLineConfig[] {
  return [
    // Phase 0 — Splash
    { type: "heading", content: "ω OmegaCode v1.0", delay: 400, speed: 50 },
    { type: "heading", content: "Your coding agent. 10x more reliable.", delay: 150, speed: 35 },
    { type: "blank", content: "", delay: 400 },

    // Phase 1 — Diagnostics (before)
    { type: "output", content: "> running diagnostics...", delay: 300, instant: true },
    { type: "blank", content: "", delay: 100 },
    { type: "output", content: "[WIRE]     current overhead    650 bytes/token", delay: 0, instant: true },
    { type: "output", content: "[TOOLS]    tool call errors    frequent", delay: 0, instant: true },
    { type: "output", content: "[LATENCY]  proxy overhead      variable", delay: 0, instant: true },
    { type: "output", content: "[COMPAT]   provider formats    fragmented", delay: 0, instant: true },
    { type: "blank", content: "", delay: 80 },
    { type: "output", content: "status: DEGRADED", delay: 0, instant: true },
    { type: "blank", content: "", delay: 500 },

    // Phase 2 — Fix
    { type: "output", content: "> installing ω...", delay: 200, instant: true },
    { type: "blank", content: "", delay: 150 },
    { type: "command", content: "bun run omega", delay: 100, speed: 30 },
    { type: "output", content: "  ✓ ω proxy started on localhost:4800", delay: 100, instant: true },
    { type: "output", content: "  ✓ pointed tools to proxy", delay: 0, instant: true },
    { type: "output", content: "  ✓ done. 30 seconds.", delay: 0, instant: true },
    { type: "blank", content: "", delay: 120 },
    { type: "output", content: "no code changes. no config migration. no new workflows.", delay: 0, instant: true },
    { type: "blank", content: "", delay: 500 },

    // Phase 3 — Proof (after)
    { type: "output", content: "> running diagnostics...", delay: 200, instant: true },
    { type: "blank", content: "", delay: 100 },
    { type: "output", content: "[WIRE]     overhead           1.5 bytes/token  (433x smaller)", delay: 0, instant: true },
    { type: "output", content: "[TOOLS]    syntax errors      0%               (typed frames)", delay: 0, instant: true },
    { type: "output", content: "[LATENCY]  added latency      <1ms             (negligible)", delay: 0, instant: true },
    { type: "output", content: "[COMPAT]   provider support   100%             (normalized)", delay: 0, instant: true },
    { type: "blank", content: "", delay: 80 },
    { type: "output", content: "status: OPTIMAL", delay: 0, instant: true },
    { type: "blank", content: "", delay: 500 },

    // Phase 4 — Under the Hood
    { type: "output", content: "> cat /proc/ω/architecture", delay: 200, instant: true },
    { type: "blank", content: "", delay: 100 },
    { type: "output", content: "SIGIL     typed protocol        tool calls as semantic frames", delay: 0, instant: true },
    { type: "output", content: "TRINITY   deterministic replay  quake III-style execution replay", delay: 0, instant: true },
    { type: "output", content: "PROOFS    formal verification   32 lean4 theorems, 0 sorry", delay: 0, instant: true },
    { type: "blank", content: "", delay: 500 },

    // Phase 5 — Features
    { type: "output", content: "> ω --features", delay: 200, instant: true },
    { type: "blank", content: "", delay: 100 },
    { type: "output", content: "433x wire compression     strip redundant JSON", delay: 0, instant: true },
    { type: "output", content: "typed tool framing        0% syntax errors", delay: 0, instant: true },
    { type: "output", content: "provider normalization    one format, every model", delay: 0, instant: true },
    { type: "output", content: "persistent memory         context that compounds", delay: 0, instant: true },
    { type: "output", content: "verified execution        cryptographic receipts", delay: 0, instant: true },
    { type: "output", content: "local keys only           BYOK, no telemetry, MIT", delay: 0, instant: true },
    { type: "blank", content: "", delay: 500 },

    // Phase 6 — Close
    { type: "output", content: "> ω ready", delay: 200, instant: true },
    { type: "blank", content: "", delay: 150 },
    { type: "heading", content: "better agents start with better infrastructure.", delay: 0, speed: 25 },
    { type: "blank", content: "", delay: 200 },
    { type: "command", content: "bun run omega", delay: 100, speed: 30 },
    { type: "blank", content: "", delay: 150 },
    { type: "output", content: "ω the result is saved.", delay: 0, instant: true },
  ];
}
