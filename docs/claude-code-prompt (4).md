# Build omega.ms — Complete Website

You are building the marketing website for Omega (omega.ms). This is a developer infrastructure company. The brand is premium, minimal, precise — think Stripe meets Linear but darker and more mathematical. Read everything below carefully before writing any code.

---

## Tech Stack

- **Next.js 15** (App Router, React Server Components)
- **Tailwind CSS v4**
- **Radix Colors** (all color tokens — use `@radix-ui/colors` package)
- **Framer Motion** (scroll-triggered reveals, page transitions, hero animation)
- **Radix UI** (accessible tabs, accordion for FAQ/CLI reference)
- **TypeScript** (strict)
- **Vercel** deployment target
- **Google Fonts:** Outfit (300, 400, 500) and JetBrains Mono (400)
- No other dependencies unless absolutely necessary. We hate waste.

---

## Design System

### Colors — Use Radix Colors Exclusively

Install `@radix-ui/colors`. All color values must come from Radix scales. No custom hex values. The brand palette maps to Radix as follows:

**Primary scale: `sand`** (warm neutral — matches the brand's stone tones)
```
Background:   sand.sand1  (light) / sandDark.sand1  (dark)
Surface:      sand.sand2  (light) / sandDark.sand2  (dark)
Subtle:       sand.sand3  (light) / sandDark.sand3  (dark)
Border:       sand.sand6  (light) / sandDark.sand6  (dark)
Border hover: sand.sand7  (light) / sandDark.sand7  (dark)
Accent text:  sand.sand11 (light) / sandDark.sand11 (dark)
Foreground:   sand.sand12 (light) / sandDark.sand12 (dark)
```

**Semantic scales:**
```
Success/fixed:  grass.grass9  / grassDark.grass9   (checkmarks, "after" states)
Error/broken:   red.red9      / redDark.red9       (use very sparingly, "before" states)
Interactive:    blue.blue9    / blueDark.blue9      (links, CTAs — subtle)
```

**Usage rules:**
- Use `sand` for all neutral UI: backgrounds, text, borders, muted elements
- Use `sand11` for secondary/muted text (body copy, captions, descriptions)
- Use `sand12` for primary text (headlines, important content)
- Use `sand6`/`sand7` for borders and dividers
- Use `grass` only for success indicators (✔ checkmarks, "fixed" annotations)
- Use `red` only for error/problem indicators — very sparingly
- Use `blue` only for interactive elements (links, CTA buttons, hover states)
- Never combine more than one semantic color in the same component

Import the CSS files and use the CSS custom properties directly, or map them to Tailwind theme tokens. Whichever approach, all colors must trace back to Radix scales.

Dark mode is the default. Implement with `next-themes`. Toggle in header. Radix Colors handles light/dark automatically when you import both the light and dark CSS files.

### Typography

```
Display:    Outfit 300 (Light),  64-80px, line-height 1.08, letter-spacing -0.025em
Headline:   Outfit 500 (Medium), 28-48px, line-height 1.2
Body:       Outfit 400 (Regular), 16-18px, line-height 1.65, color: accent
Code/Mono:  JetBrains Mono 400,  12-14px, line-height 1.7
Caption:    JetBrains Mono 400,  10-12px, uppercase, letter-spacing 0.12em, color: accent
```

Use `clamp()` for all font sizes so they scale fluidly between mobile and desktop.

### The ω Lockup

The brand logo is the text `ω Omega` with specific construction:
- The ω symbol is rendered at `1.35×` the base font size
- There is a gap of `0.28×` the base font size between symbol and wordmark
- Both are baseline-aligned
- Font: Outfit 400

Build this as a reusable `<OmegaLockup size={number} />` component.

### Animation

**Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` for all transitions. This is the brand easing. Store it as a constant.

**Philosophy:** Animations feel like things settling into their correct position. Not springy. Not bouncy. Inevitable. Like a proof resolving.

- Scroll reveals: `opacity: 0 → 1`, `translateY(12px) → 0`, duration 500ms, triggered on intersection
- Page transitions: fade, 300ms
- Hero ω: draw-in animation (SVG stroke-dashoffset), 1.5s, plays once
- Terminal blocks: subtle cursor blink animation
- Hover states: 200ms transitions on borders and colors
- No particles. No blobs. No abstract AI visuals. Ever.

### Spacing

Use Tailwind's default scale. Key vertical gaps between sections:
- Between major sections (movements): `py-24 md:py-32 lg:py-40`
- Between section label and headline: `mb-6`
- Between headline and body: `mt-6`
- Between body and content blocks: `mt-12 md:mt-16`

### Components to Build

1. `OmegaLockup` — the ω Omega logo at any size
2. `SectionLabel` — mono, uppercase, wide tracking, muted (e.g., "THE PROBLEM")
3. `TerminalBlock` — dark bg, monospace, with optional cursor blink, copy-to-clipboard on hover
4. `StatBlock` — large number + caption below
5. `ProductCard` — bordered card with status badge, description, CTA
6. `InstallTabs` — tabbed interface showing install commands per tool (Radix Tabs)
7. `NavHeader` — sticky, with logo, nav links, theme toggle, primary CTA
8. `Footer` — four-column layout with logo, links, sign-off
9. `ScrollReveal` — Framer Motion wrapper that fades in children on intersection
10. `CopyButton` — copies text to clipboard, shows "Copied" toast

---

## Site Structure

```
app/
├── layout.tsx          (root layout: fonts, theme provider, nav, footer)
├── page.tsx            (homepage)
├── boost/
│   └── page.tsx        (Omega Boost product page)
├── code/
│   └── page.tsx        (Omega Code preview / waitlist)
├── technology/
│   └── page.tsx        (technology deep dive)
├── about/
│   └── page.tsx        (company page)
components/
├── omega-lockup.tsx
├── section-label.tsx
├── terminal-block.tsx
├── stat-block.tsx
├── product-card.tsx
├── install-tabs.tsx
├── nav-header.tsx
├── footer.tsx
├── scroll-reveal.tsx
├── copy-button.tsx
├── hero-animation.tsx  (the ω draw-in SVG animation)
└── theme-toggle.tsx
```

---

## Page 1: Homepage (app/page.tsx)

The homepage has five movements. Each is a full-viewport (or near-full) section.

### Movement I — Identity (Hero)

- Large ω symbol (SVG) with a stroke draw-in animation that plays once on load (1.5s)
- Below the ω: tagline "THE END STATE OF INTELLIGENCE" in caption style (mono, uppercase, tracking)
- Below that: H1 display text:
  ```
  Your AI coding tools are broken.
  We fixed them. With proof.
  ```
- Below that: body text (muted):
  ```
  Omega is infrastructure for intelligent agents.
  Memory that compounds. Execution that's provable.
  A wire protocol that works.
  ```
- Two CTAs: "Get Started →" (link to /boost) and "See the proof ↓" (smooth scroll to next section)
- Background: subtle orbital animation — 5-7 concentric ellipses with small dots orbiting at different speeds, very low opacity (0.1-0.2), centered behind the ω. Use Framer Motion or CSS keyframes. Keep it performant.

### Movement II — Tension ("The Problem")

- Section label: "THE PROBLEM"
- H2: "Intelligence arrived. The infrastructure didn't."
- Body paragraph explaining the gap (see copy below)
- Three problem blocks in a row (stack on mobile): THE WIRE, THE TOOLS, THE MEMORY
  - Each: caption label + 4-5 lines of body text
- Pull quote at bottom: "Every developer building on these APIs is solving the same problems independently."
- Caption below pull quote: "We thought it'd be useful to solve them once, correctly."

**Copy for body paragraph:**
```
The models are extraordinary. The capability frontier advances every month.
But the infrastructure underneath was built for rapid research iteration,
not production agents. It served its purpose. Now agents need more.
```

**THE WIRE block:**
```
Every token carries 650 bytes of overhead. Redundant fields, null values,
metadata repeated on every streaming chunk. For the token " const" — 650 bytes.
```

**THE TOOLS block:**
```
Tool call formats differ across every provider. Streaming chunks split
mid-UTF8, mid-escape. Parsers guess at boundaries instead of knowing them.
```

**THE MEMORY block:**
```
Every session starts from zero. No persistence. No compounding.
No attestation. Models get smarter every month. Agents start fresh
every session.
```

### Movement III — Thesis

- Section label: "THE THESIS"
- H2: "Agents don't need smarter models. They need better infrastructure."
- Short body:
  ```
  Intelligence is ahead of deployment. The bottleneck isn't capability —
  it's everything around it. The wire. The memory. The execution. The proof.

  Fix the infrastructure and the intelligence resolves. That's Omega.
  ```
- Three thesis blocks (numbered ①②③): MEMORY THAT COMPOUNDS, EXECUTION THAT'S PROVABLE, A WIRE THAT WORKS
- Each block has a headline and 4-6 lines of description

**① MEMORY THAT COMPOUNDS:**
```
Content-addressed storage. Unlimited. Permanent. Every interaction persists.
Day 1 becomes day 100. Your agent doesn't just respond — it accumulates understanding.

Arithmetic progression becomes geometric. The gap widens every session.
```

**② EXECUTION THAT'S PROVABLE:**
```
Every resource tracked. Every obligation resolved. Every action receipted
with cryptographic attestation. If it doesn't resolve, it doesn't attest.

32 theorems. 0 sorry. Machine-checkable proof that the system is correct.
```

**③ A WIRE THAT WORKS:**
```
650 bytes per token → 1.5 bytes. Guessed tool boundaries → typed state machine.
Split streaming → semantic frames.

Sub-millisecond overhead. omega.ms — it's in the name.
```

### Movement IV — Products

- Section label: "PRODUCTS"
- H2: "The stack, shipping in layers."
- Body: "Each product moves closer to the end state. Boost fixes the wire. Code fixes the agent. The foundation gets stronger underneath both."

**Omega Boost card** (primary — use ProductCard with prominent treatment):
- Badge: "AVAILABLE"
- Title: "ω BOOST"
- Subtitle: "The drop-in proxy that fixes the wire."
- Body: "Intercepts the SSE/JSON protocol from any LLM provider and emits clean, typed frames. Tool calls arrive complete. Streaming is deterministic. Works with Cursor, Claude Code, OpenCode, Cline, Aider — anything OpenAI-compatible."
- Subtext: "One install. Zero config."
- Terminal block inside card: `$ npx omega-boost`
- Two CTAs: "Learn more →" (/boost) and "Get started →" (/boost)

**Omega Code card** (secondary — muted border, coming soon):
- Badge: "COMING SOON"
- Title: "ω CODE"
- Subtitle: "The coding agent that never forgets."
- Body: "Persistent memory that compounds across sessions. Obligation tracking — every file opened gets closed, every process joined. Parallel agents in sandboxed environments. Cryptographic attestation of every action."
- Subtext: "Built in Haskell. Renders in microseconds."
- CTA: "Join the waitlist →" (/code)

**Stats row** (four StatBlocks):
```
650 → 1.5          32 theorems       123k LOC          <1ms
bytes per token     0 sorry           14 days           overhead
```
Each has a mono caption below: "Wire protocol compression", "Lean4 verified formal proofs", "Production-grade kept code", "Proxy latency added"

**Works With section:**
- Row of tool names in muted text: Cursor · Claude Code · OpenCode · Cline · Aider · OpenClaw · Windsurf · Continue · Any OpenAI-compatible client
- Body: "Your tools. Your keys. Your machine."
- InstallTabs component with tabs for: Cursor, Claude Code, OpenCode/Cline/Aider, Any client
- Each tab shows 2-3 lines in a terminal block explaining the install

### Movement V — Resolution

- Full-width dark section
- Large ω symbol (~160px), centered, with a very subtle scale breathing animation (1.0 → 1.02 → 1.0, 4s loop)
- H2: "The end state is closer than you think. Start with Boost."
- Terminal block showing the full boot sequence:
  ```
  $ npx omega-boost

  ω Omega Boost v1.0.0
  ✔ Proxy running on localhost:10557
  ✔ Auto-detected: Cursor, Claude Code
  ✔ Providers normalized: OpenAI, Anthropic, Baseten

  Ready. the result is saved.
  ```
- Primary CTA: "Get Started →" (/boost)
- Sign-off: "the result is saved" in mono, muted, centered

---

## Page 2: Boost Product Page (app/boost/page.tsx)

This is a long-form product page. Direct, practical, for the developer who wants the problem fixed.

### Sections in order:

**1. Hero**
- Eyebrow: "OMEGA BOOST"
- H1: "The drop-in proxy that fixes the LLM wire protocol."
- Body: wire protocol overview (650 bytes, tool calls, regex)
- CTA + copy-to-clipboard `npx omega-boost`

**2. The Wire (before/after)**
- H2: "What your tools receive today. On every token."
- TerminalBlock showing the actual 650-byte SSE JSON dump
- Annotation: "650 bytes. For the five-character token ' const'."
- H3: "After Omega Boost:"
- TerminalBlock showing clean output: `{"choices":[{"delta":{"content":" const"}}]}`
- Annotation (green): "40 bytes. Same token. In SIGIL binary: 1.5 bytes average."

**3. Tool Call Normalization**
- H2: "Every model, one format out."
- Provider comparison table (Model, Tool Format, Thinking, Multi-tool)
- Body explaining the state machine approach
- Code block showing the four parser states

**4. Three Features**
- Three cards/blocks: NORMALIZED RESPONSES, TYPED TOOL FRAMING, SUB-MILLISECOND OVERHEAD
- Each with detailed specs (see Boost product page doc for full copy)

**5. Provider Coverage**
- H2: "Every provider. Consistent output."
- Grid of providers with ✔ badges
- Body: "Each provider has a dedicated adapter. Adding a new one is ~200 lines."

**6. Benchmark**
- H2: "Measure it yourself."
- Large TerminalBlock showing the benchmark output report
- Body: "Run it. Share it."

**7. Installation**
- H2: "30 seconds. Zero config."
- Large TerminalBlock showing the full auto-detect flow
- Alternative installs in tabs (npm, Homebrew, Cargo, Nix, Docker)

**8. Security**
- H2: "Your keys. Your machine. Your data."
- Six icon + one-liner blocks: LOCAL ONLY, BYOK, NO ACCOUNT, NO TELEMETRY, OPEN SOURCE, REVERSIBLE

**9. Pricing**
- H2: "Free. Open source. No catch."
- Body: MIT-licensed, BYOK, no limits
- Muted note about future team features

**10. CLI Reference**
- Collapsible accordion (Radix) showing all commands

**11. Final CTA**
- Terminal block with `$ npx omega-boost`
- H2: "Fix the wire. Keep building."
- CTA button
- Sign-off

---

## Page 3: Code Preview (app/code/page.tsx)

Short page. Build anticipation. Capture emails.

- Eyebrow: "OMEGA CODE · COMING SOON"
- H1: "Your coding agent, but it never forgets."
- Body paragraph
- CTA: "Join the waitlist →"
- Five feature blocks: MEMORY, OBLIGATIONS, RECEIPTS, PARALLEL AGENTS, MICROSECOND RENDERING
- "The gap" section: 200K+ GitHub stars, none have persistent memory
- Email capture form (just email input + submit button, use Formspree or just a placeholder action for now)
- Bridge to Boost: "While you wait — Omega Boost is available now."

---

## Page 4: Technology (app/technology/page.tsx)

Intellectual depth. For developers who want the *why*.

- Hero: "Built from first principles. Proven correct."
- SIGIL Protocol section with comparison table and wire format code block
- Continuity Stack diagram (use a styled div stack, not an image)
- Content-Addressed Everything section
- Formal Verification section (32 theorems, trust distance)
- "Choices dominate resources" section
- Research & Papers (linked list)

---

## Page 5: About (app/about/page.tsx)

Simple, dignified.

- H1: "We build the foundation."
- Company description (2 paragraphs)
- "What we believe" — four short paragraphs (choices > resources, waste nothing, prove it, build to last)
- Team: Harrison Hines — Founder (placeholder bio + photo)
- Company details: Straylight Infrastructure, San Juan, Puerto Rico
- Contact: harrison@omega.ms, GitHub, X, Discord links
- Sign-off

---

## Global Elements

### NavHeader (sticky)
- Left: OmegaLockup (small, ~16px base)
- Center/Right: nav links — Boost, Code (with "soon" badge), Technology, About, Docs (external link)
- Far right: theme toggle (sun/moon icon) + "Get Started →" CTA button
- On mobile: hamburger menu
- Background: blur backdrop with border-bottom on scroll

### Footer
- Four columns: Products (Boost, Code, Docs), Technology (SIGIL, Architecture, Research), Company (About, Blog, Careers, Contact), Legal (Privacy, Terms)
- Above columns: OmegaLockup
- Below columns: "the result is saved" in mono, muted
- Below that: © 2026 Straylight Infrastructure + social links (GitHub, X, Discord)

### SEO
- Each page has unique `<title>` and `<meta name="description">`
- Semantic HTML: proper h1-h3 hierarchy, `<section>`, `<nav>`, `<article>`, `<footer>`
- Add JSON-LD for Organization schema on the root layout

### Performance
- Lazy load below-fold sections
- Use `next/font` for Outfit and JetBrains Mono (no external font requests)
- No heavy images — this is a text-and-code website
- Target: Lighthouse > 95 on all pages

---

## Critical Brand Rules

1. **Never talk down about competitors or other tools.** Describe what we build, not what others don't. No comparisons that make others look bad. The reader is smart enough to draw their own conclusions.

2. **No exclamation marks.** Ever. The conviction is in the content.

3. **No emoji.** Except ✔ for checkmarks in terminal output.

4. **No filler adjectives.** Never use: revolutionary, cutting-edge, next-gen, blazing, lightning, game-changing, seamless, best-in-class, supercharge, unlock, empower, delighted. If you can't attach a number to the claim, don't make it.

5. **Show, don't claim.** Use actual data: 650 bytes, 1.5 bytes, 32 theorems, <1ms, 123k LOC. Let numbers do the convincing.

6. **Default dark mode.** This is developer infrastructure.

7. **The sign-off** "the result is saved" appears at the bottom of every page, in JetBrains Mono, muted, centered. It's always lowercase. No period.

8. **Animations feel like resolution.** Things settling into place. Never bouncy, never playful. Use the brand easing: `cubic-bezier(0.22, 1, 0.36, 1)`.

---

## Build Order

1. Root layout (fonts, theme provider, nav, footer)
2. Component library (all reusable components)
3. Homepage (this is the most important page — get it right)
4. Boost product page
5. Code preview page
6. Technology page
7. About page
8. Polish: animations, responsive, performance audit

Start with the root layout and component library. Get the design system locked in before building pages.
