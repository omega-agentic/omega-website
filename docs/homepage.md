# ω Omega — Homepage Spec & Copy

**URL:** omega.ms  
**Purpose:** Tell the Omega story. Introduce the brand, the thesis, and the products.  
**Audience:** Developers, technical founders, AI engineers.  
**Default mode:** Dark.

---

## Meta

```html
<title>Omega — The End State of Intelligence</title>
<meta name="description" content="Infrastructure for intelligent agents. 
Memory that compounds. Execution that's provable. A wire protocol that works.">
```

Schema.org JSON-LD: Organization (Straylight Infrastructure), SoftwareApplication (Omega Boost), Person (Harrison Hines)

---

## Structure

The homepage is five movements. Each builds on the last. The pacing accelerates from reflective to concrete to resolved.

```
I.   IDENTITY    — ω. The end state of intelligence.
II.  TENSION     — Intelligence arrived. The infrastructure didn't.
III. THESIS      — What agents actually need.
IV.  PRODUCTS    — What we've built.
V.   RESOLUTION  — The end state is closer than you think.
```

---

## MOVEMENT I — Identity

**Visual:** Dark. The ω glyph resolves into view — drawn as a single continuous stroke that settles into its final form. The animation takes 1.5s, plays once, stays. Below, a subtle looping orbital animation (from the brand guide) — data points converging toward center and locking. Quiet. Gravitational.

```
[ω — Outfit Light 300, ~120px, centered, resolves into view]

[tagline — JetBrains Mono, 13px, uppercase, wide tracking, muted]
THE END STATE OF INTELLIGENCE

[gap — 4vh]

[H1 — Outfit Light 300, 64-80px, centered]
Your AI coding tools are broken.
We fixed them. With proof.

[gap — 2vh]

[body — Outfit Regular 400, 18px, muted, centered, max-width 560px]
Omega is infrastructure for intelligent agents.
Memory that compounds. Execution that's provable.
A wire protocol that works.

[gap — 3vh]

[CTA group — centered]
[Get Started →]          [See the proof ↓]
```

**Notes:**
- "Get Started" → /boost
- "See the proof" → smooth-scroll to Movement II
- No install command here. This is the brand page. Install lives on /boost.

---

## MOVEMENT II — Tension

**Visual:** Still dark, but the texture shifts. Faint fragments of JSON — the real 650-byte wire dump — scrolling barely legibly in the background. Something dense underneath. Not chaos — just *density*. The feeling: there's a lot going on that most people don't see.

```
[section label — JetBrains Mono, 11px, uppercase, muted]
THE PROBLEM

[H2 — Outfit Light 300, 48-56px]
Intelligence arrived.
The infrastructure didn't.

[gap — 3vh]

[body — Outfit Regular 400, 17px, muted, max-width 640px]
The models are extraordinary. The capability frontier 
advances every month. But the infrastructure underneath 
was built for rapid research iteration, not production agents.
It served its purpose. Now agents need more.

[gap — 4vh]

[Three problem blocks — horizontal on desktop, stacked on mobile]

THE WIRE
Every token carries 650 bytes of overhead.
Redundant fields, null values, metadata 
repeated on every streaming chunk.
For the token " const" — 650 bytes.

THE TOOLS  
Tool call formats differ across every provider.
Streaming chunks split mid-UTF8, mid-escape.
Parsers guess at boundaries instead of knowing them.

THE MEMORY
Every session starts from zero. No persistence.
No compounding. No attestation. Models get 
smarter every month. Agents start fresh every session.

[gap — 3vh]

[pull quote — Outfit Light 300, 28px, centered]
Every developer building on these APIs 
is solving the same problems independently.

[caption — mono, muted, centered]
We thought it'd be useful to solve them once, correctly.
```

**Notes:**
- This section describes *what is*, not who's at fault. 
- "It served its purpose. Now agents need more." — respectful of the history.
- The pull quote reframes "the unhappiness is identical" without the sharp edge.

---

## MOVEMENT III — Thesis

**Visual:** The density clears. Clean. Bright. More whitespace. The typography breathes. This is the turn — from problem to solution. The visual shift should feel like resolution.

```
[section label]
THE THESIS

[H2 — Outfit Light 300, 48-56px]
Agents don't need smarter models.
They need better infrastructure.

[gap — 3vh]

[body — Outfit Regular 400, 17px, muted, max-width 600px, centered]
Intelligence is ahead of deployment. The bottleneck 
isn't capability — it's everything around it.
The wire. The memory. The execution. The proof.

Fix the infrastructure and the intelligence resolves.
That's Omega.

[gap — 5vh]

[Three thesis blocks — the three pillars]

── ① ──────────────────────────────────────────

MEMORY THAT COMPOUNDS

Content-addressed storage. Unlimited. Permanent.
Every interaction persists. Day 1 becomes day 100.
Your agent doesn't just respond — it accumulates 
understanding.

Arithmetic progression becomes geometric.
The gap widens every session.

── ② ──────────────────────────────────────────

EXECUTION THAT'S PROVABLE

Every resource tracked. Every obligation resolved.
Every action receipted with cryptographic attestation.
If it doesn't resolve, it doesn't attest.

32 theorems. 0 sorry.
Machine-checkable proof that the system is correct.

── ③ ──────────────────────────────────────────

A WIRE THAT WORKS

650 bytes per token → 1.5 bytes.
Guessed tool boundaries → typed state machine.
Split streaming → semantic frames.

Sub-millisecond overhead. omega.ms — it's in the name.
```

---

## MOVEMENT IV — Products

**Visual:** Product cards. Concrete. The first tangible things on the page. Boost is primary — dark bg, terminal aesthetic, install command visible. Code is secondary — coming soon treatment, waitlist CTA.

### IV.a — Section intro

```
[section label]
PRODUCTS

[H2 — Outfit Light 300, 48px]
The stack, shipping in layers.

[body — centered, muted, max-width 560px]
Each product moves closer to the end state.
Boost fixes the wire. Code fixes the agent.
The foundation gets stronger underneath both.
```

### IV.b — Omega Boost card

```
╔════════════════════════════════════════════════════╗
║                                                    ║
║  ω BOOST                               AVAILABLE   ║
║                                                    ║
║  The drop-in proxy that fixes the wire.            ║
║                                                    ║
║  Intercepts the SSE/JSON protocol from any LLM     ║
║  provider and emits clean, typed frames. Tool       ║
║  calls arrive complete. Streaming is deterministic. ║
║  Works with Cursor, Claude Code, OpenCode, Cline,  ║
║  Aider — anything OpenAI-compatible.               ║
║                                                    ║
║  One install. Zero config.                         ║
║                                                    ║
║  ┌────────────────────────────────────────────┐    ║
║  │  $ npx omega-boost                         │    ║
║  └────────────────────────────────────────────┘    ║
║                                                    ║
║  [Learn more →]                 [Get started →]    ║
║                                                    ║
╚════════════════════════════════════════════════════╝
```

### IV.c — Omega Code card

```
┌────────────────────────────────────────────────────┐
│                                                    │
│  ω CODE                              COMING SOON   │
│                                                    │
│  The coding agent that never forgets.              │
│                                                    │
│  Persistent memory that compounds across sessions. │
│  Obligation tracking — every file opened gets       │
│  closed, every process joined. Parallel agents in  │
│  sandboxed environments. Cryptographic attestation  │
│  of every action.                                  │
│                                                    │
│  Built in Haskell. Renders in microseconds.        │
│                                                    │
│  [Join the waitlist →]                             │
│                                                    │
└────────────────────────────────────────────────────┘
```

### IV.d — The Numbers

```
[Four stat blocks — horizontal row, large typography]

650 → 1.5         32 theorems        123k LOC          <1ms
bytes per token    0 sorry            14 days           overhead

[Captions below each — mono, muted]
Wire protocol      Lean4 verified     Production-grade    Proxy latency
compression         formal proofs      kept code           added
```

### IV.e — Works With Everything

```
[section label]
WORKS WITH EVERYTHING

[Logo/icon row — muted, monochrome]
Cursor · Claude Code · OpenCode · Cline · Aider ·
OpenClaw · Windsurf · Continue · Any OpenAI-compatible client

[body — centered, muted]
Your tools. Your keys. Your machine.
Omega Boost works with anything that speaks 
the OpenAI API format — which is all of them.

[Tabbed install — one tab per tool, each 2-3 lines]

─ Cursor ─────────────────────────────
$ npx omega-boost

Auto-detects Cursor and patches your config.
Your existing API keys pass through untouched.

─ Claude Code ────────────────────────
$ npx omega-boost

Auto-detects Claude Code. Patches the connection.
Nothing else changes.

─ OpenCode / Cline / Aider ───────────
$ npx omega-boost
# or: set OPENAI_API_BASE=http://localhost:10557

Use your existing API keys. That's it.

─ Any OpenAI-compatible client ───────
$ npx omega-boost
# Point your base URL to localhost:10557

BYOK. We never see your keys or your prompts.
```

---

## MOVEMENT V — Resolution

**Visual:** Full-width. The omega symbol returns, large, centered. The orbital animation from the hero reappears — slower, settled. Everything has arrived at its end state. Dark background. Maximum contrast.

```
[ω — Outfit Light 300, ~160px, centered, subtle breathing animation]

[gap — 3vh]

[H2 — Outfit Light 300, 44px, centered]
The end state is closer than you think.
Start with Boost.

[gap — 2vh]

[terminal block — centered]
$ npx omega-boost

ω Omega Boost v1.0.0
✔ Proxy running on localhost:10557
✔ Auto-detected: Cursor, Claude Code
✔ Providers normalized: OpenAI, Anthropic, Baseten

Ready. the result is saved.

[gap — 3vh]

[CTA — large, centered]
[Get Started →]

[gap — 4vh]

[sign-off — JetBrains Mono, 13px, muted, centered]
the result is saved
```

---

## Responsive Notes

- **Mobile:** All horizontal layouts stack vertically. Product cards go full-width. Stat blocks become 2×2 grid. Tab install section becomes accordion.
- **Tablet:** Two-column layouts preserved where possible. Product cards stay side-by-side.
- **Typography scales:** All display sizes use clamp() — fluid between mobile and desktop breakpoints.
- **Hero animation:** Simplified on mobile. ω glyph still resolves but orbital background is static.

---

*ω Omega · Homepage Spec · 2026*
