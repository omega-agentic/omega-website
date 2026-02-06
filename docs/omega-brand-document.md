# Omega Brand & Design Philosophy

## Overview

Omega is agent infrastructure. We make AI agents that actually work — agents that remember, that finish what they start, and that can prove what they did.

This document explains how and why we design the brand and product a certain way. It should serve as a guide for anyone — human or AI — making decisions about how Omega looks, sounds, and feels.

---

## The Core Idea

**"The result is saved."**

This is our tagline, but it's also our design philosophy. Everything we make should feel:

- **Resolved** — Complete, not dangling
- **Permanent** — Built to last, not trendy
- **Precise** — Intentional, not arbitrary
- **Trustworthy** — Provable, not promised

The name "Omega" (ω) means the end state. Completion. Where obligations resolve. The brand must embody this — nothing should feel unfinished or uncertain.

---

## Brand Positioning

### What Omega Is

- Infrastructure for permanence
- The layer that makes agents reliable
- Built on formal verification (Lean4 proofs)
- Memory that compounds over time
- Obligations that must resolve

### What Omega Is Not

- A chatbot or assistant
- A "wrapper" or thin utility
- Trendy AI hype
- Another dev tool in a crowded market

### The Relationship to Fleek

- **Fleek** = Inference layer ("Turning AI models into supermodels")
- **Omega** = Agent layer ("Turning AI agents into super agents")

Fleek is about running models efficiently. Omega is about making agents work. They're complementary layers, and Omega works best with Fleek — but Omega works with any LLM.

---

## Design Philosophy

### Why We Chose "Expensive Paper"

We wanted Omega to feel like something that lasts. Not a SaaS dashboard. Not a dev tool. Something archival.

"Expensive paper" means:
- **Warmth over sterility** — We use warm neutrals, not cold grays
- **Restraint over decoration** — Minimal elements, maximum intention
- **Typography does the work** — The letterforms carry the brand
- **Tactile quality** — Even digitally, it should feel substantial

This aesthetic reinforces our core promise: what you save with Omega is permanent. It's worth preserving.

### Why We Chose Outfit

We evaluated 31 typefaces. Outfit won because:

1. **Geometric but warm** — Modern sans-serif with humanist touches
2. **Excellent ω glyph** — The Greek omega is well-designed, not an afterthought
3. **Technical credibility** — Clean enough for code contexts
4. **Versatile weights** — Light for display, Regular for body, Medium for emphasis
5. **Free and open** — No licensing friction for contributors

We pair Outfit with **JetBrains Mono** for code and technical contexts.

### Why Warm Neutral Over Paper & Ink

We considered a warmer "Paper & Ink" palette (#FAF9F6 cream) but chose Warm Neutral because:

- Outfit is geometric and modern — warm cream felt slightly mismatched
- Stone tones (#FAFAF9) have warmth without feeling dated
- Better contrast in code/terminal contexts
- Works seamlessly with dark mode inversion

---

## Visual Identity

### The Symbol: ω

The lowercase Greek omega is our mark. It represents:

- **The end state** — Where things complete
- **Mathematical rigor** — Used in proofs, formal systems
- **Convergence** — Where obligations resolve

**Critical note:** ω is a lowercase letter. At the same font-size as capitals, it appears smaller. We optically scale it to match the cap height of "Omega."

### The Lockup

The primary logo combines symbol and wordmark:

```
ω Omega
```

**Construction rules:**
- Symbol font-size = Wordmark font-size × 1.35
- Spacing between = Wordmark font-size × 0.28
- Alignment = Baseline

These ratios are derived from Outfit's metrics (cap height ≈ 70%, x-height ≈ 52%) and ensure optical balance at any size.

### Minimum Size

- **Lockup:** 14px base minimum
- **Symbol alone:** 16px minimum
- Below these sizes, use symbol only (lockup becomes illegible)

### Clear Space

- Horizontal: 1× the wordmark base size
- Vertical: 0.66× the wordmark base size
- No elements may enter this zone

---

## Color System

### Light Mode

| Role | Hex | Usage |
|------|-----|-------|
| Background | #FAFAF9 | Page backgrounds, cards |
| Foreground | #18181B | Text, logo, icons |
| Accent | #78716C | Secondary text, labels, borders |

### Dark Mode

| Role | Hex | Usage |
|------|-----|-------|
| Background | #18181B | Page backgrounds, cards |
| Foreground | #FAFAF9 | Text, logo, icons |
| Accent | #A8A29E | Secondary text, labels, borders |

### Rules

- **Two modes only.** Light or dark. No in-between.
- **No gradients on the logo.** Ever.
- **No colored logos.** The mark is always foreground-on-background or inverse.
- **Accent is for support.** Never use accent as the primary logo color.

---

## Typography System

| Weight | Use Case |
|--------|----------|
| Outfit Light (300) | Large display text, hero headlines |
| Outfit Regular (400) | Body text, logo wordmark |
| Outfit Medium (500) | Headlines, emphasis, UI labels |
| JetBrains Mono (400) | Code, technical content, data |

### Hierarchy

1. **Display:** Outfit Light, large sizes (48px+)
2. **Headline:** Outfit Medium, 24-32px
3. **Body:** Outfit Regular, 16-18px
4. **Caption:** Outfit Regular, 12-14px, accent color
5. **Code:** JetBrains Mono, 14px

---

## Brand Imagery

We use three visual patterns, each derived from what Omega actually does:

### 1. Proof Notation

Actual Lean4 syntax rendered as subtle texture.

**What it represents:** "Built on real math, not marketing claims."

**When to use:**
- Documentation backgrounds
- Slide decks
- Subtle watermarks
- Technical content

**How to execute:**
- Use real proof syntax (resolution theorems, CAS definitions)
- Very low opacity (10-20%)
- JetBrains Mono
- ω mark can float above

### 2. Omega Grid

The ω symbol repeated in a grid, with opacity/scale increasing toward center.

**What it represents:** Convergence. Everything drawn toward resolution.

**When to use:**
- Feature section backgrounds
- Special moments (launch, milestones)
- Sparse use only — don't overuse

**How to execute:**
- Grid of ω symbols
- Center is brightest/largest
- Edges fade to near-invisible
- Single prominent ω at center

### 3. Orbital

Elliptical orbits with particles, ω at the gravitational center.

**What it represents:** Omega as attractor. Elements resolving toward center.

**When to use:**
- Hero sections
- Landing pages
- Animated backgrounds
- Marketing materials

**How to execute:**
- 5-7 elliptical paths, rotated
- Small particles on each orbit
- ω at center
- Can be animated (subtle rotation)

### Imagery Rules

- All patterns work in light and dark modes
- Never combine multiple patterns in one composition
- The ω symbol should feel special — don't dilute it through overuse
- Patterns should be subtle — they support content, not overwhelm it

---

## Voice & Tone

### We Sound Like

- **Confident, not arrogant** — We know what we built. We don't need to oversell.
- **Technical, not jargony** — Precise language, but accessible.
- **Direct, not cold** — Short sentences. Clear meaning. Still human.
- **Calm, not hype** — The AI space is noisy. We're the quiet signal.

### Writing Principles

1. **Lead with the problem.** Don't start with features. Start with pain.
2. **Show, don't claim.** "Tool calling: 47% → 89%" not "dramatically improved."
3. **Respect the reader's time.** If it can be shorter, make it shorter.
4. **Use the product language.** Memory, obligations, receipts, attestation.

### Example Transformations

❌ "Omega is a revolutionary AI agent infrastructure platform that leverages cutting-edge formal verification to deliver unprecedented reliability."

✅ "Omega makes agents that actually work. Memory that persists. Obligations that resolve. Receipts that prove what happened."

❌ "Get started with our easy-to-use SDK!"

✅ "One command: `npx omega-code`"

---

## Product Language

These terms have specific meanings in Omega. Use them consistently:

| Term | Meaning |
|------|---------|
| **Memory** | Content-addressed storage (CAS). Permanent. Unlimited. |
| **Obligations** | Resources that must be resolved. Open file → owe a close. |
| **Receipts** | Cryptographic attestation. Proof of what the agent did. |
| **Resolution** | When obligations complete. The "omega" state. |
| **Attestation** | Machine-checkable proof. Hash + signature. |
| **CAS** | Content-Addressed Storage. hash(content) = identity. |
| **Compounds** | Knowledge accumulates over time. Day 1 → Day 100. |

### The Tagline

**"the result is saved"**

Always lowercase. It's a statement of fact, not a headline. Use it:
- Below the lockup in formal contexts
- At the end of documentation
- As a sign-off

---

## Application Guidelines

### CLI Output

```
$ npx omega-code

ω Omega Code v1.0.0
✓ Memory loaded (847 items)
✓ Obligations resolved

Ready. The result is saved.
```

- Symbol (ω) precedes product name
- Green checkmarks for success
- "The result is saved." as sign-off

### App Icons

- Symbol only (ω)
- 50% of container size
- 22% corner radius
- 2% optical lift (raised slightly)
- Dark: light symbol on dark background
- Light: dark symbol on light background

### Documentation

- Proof Notation texture in backgrounds (very subtle)
- Outfit for all text
- JetBrains Mono for code blocks
- Accent color for secondary information
- Clear hierarchy: problem → solution → implementation

### Marketing / Landing Pages

- Orbital pattern for hero sections
- Large display typography (Outfit Light)
- Lead with problem statement
- Benchmark numbers as proof points
- Single clear CTA (`npx omega-code`)

### Pitch Decks

- One idea per slide
- Let visuals breathe — generous whitespace
- Proof Notation texture for technical slides
- Omega Grid for key moments (sparingly)
- End with tagline: "the result is saved"

---

## What Not To Do

### Logo Misuse

- ❌ Don't change the symbol/wordmark ratio
- ❌ Don't use colors other than foreground/background
- ❌ Don't add effects (shadows, glows, gradients)
- ❌ Don't outline the logo
- ❌ Don't rotate or distort
- ❌ Don't place on busy backgrounds without contrast

### Imagery Misuse

- ❌ Don't combine multiple patterns
- ❌ Don't make patterns too prominent
- ❌ Don't use generic AI imagery (neural networks, robots)
- ❌ Don't use gradients or "tech blob" aesthetics

### Voice Misuse

- ❌ Don't use hype language ("revolutionary," "game-changing")
- ❌ Don't be overly casual or use slang
- ❌ Don't make claims without evidence
- ❌ Don't bury the point in jargon

---

## Summary

Omega is infrastructure for permanence. The brand reflects this:

- **Resolved** — Nothing feels unfinished
- **Permanent** — Built to last, not trendy
- **Precise** — Every decision is intentional
- **Trustworthy** — Provable, not promised

When in doubt, ask: "Does this feel like something that will last?"

If yes, ship it. If no, refine it.

---

**the result is saved**

*omega · fleek · 2026*
