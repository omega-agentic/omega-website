# Omega — Complete Website Build Specification
## Hand this entire document to Cursor.
### v4.0 — "Why should I give a shit?"

---

# PART ONE: POSITIONING

## The one thing to understand before building anything

Omega is NOT competing with Claude Code, Cursor, OpenCode, or Cline. Omega makes ALL of them better. That's the positioning. Not "switch to our thing." It's "your thing, but it actually works now."

Omega Boost = upgrade layer for every AI tool you already use
Omega Code = our own flagship agent (coming soon)
Omega Chat = self-hosted chat with verification (beta)

The homepage sells Omega Boost first because it has zero switching cost: one command, your existing tools get better immediately. That's the hook.

## The 5-second test

A developer lands on the homepage. They use Cursor or Claude Code every day. In 5 seconds they need to understand:

**"This makes my coding agent dramatically more reliable, faster, and cheaper. I can install it in 30 seconds and it works with what I already use."**

If they don't get that in 5 seconds, we've failed.

---

# PART TWO: DESIGN SYSTEM

## Philosophy
Premium. Precise. Fast-loading. The site itself should feel like the product — no bloat, no waste, every pixel intentional. Dark mode default. The aesthetic is Linear meets Stripe — developer-credible, not marketing-fluffy.

## Typography
```
Primary:        Inter (Google Fonts or self-hosted)
                300 (display), 400 (body), 500 (subheads), 600 (emphasis)

Monospace:      JetBrains Mono, 400
                For: code, metrics, install commands, tagline

Display:        clamp(48px, 8vw, 96px), 300 weight, -0.03em tracking
H1:             clamp(36px, 5vw, 64px), 300 weight, -0.025em
H2:             clamp(24px, 3vw, 40px), 400 weight, -0.015em
H3:             clamp(18px, 1.8vw, 24px), 500 weight, -0.01em
Body:           clamp(16px, 1.2vw, 18px), 400 weight, 1.7 line-height
Caption:        13px mono, uppercase, 0.12em tracking
Metric:         clamp(48px, 6vw, 80px), 300 weight, mono
```

## Colors — Radix Sand (dark mode default)
```css
:root {
  --bg-base:        #111110;
  --bg-subtle:      #191918;
  --bg-element:     #222221;
  --bg-hover:       #2a2a28;
  --border-subtle:  #3b3a37;
  --border-element: #494844;
  --border-hover:   #62605b;
  --text-low:       #717069;
  --text-mid:       #86857f;
  --text-secondary: #a09f98;
  --text-primary:   #eeeeec;
  --green:          #30a46c;
  --red:            #e5484d;
  --amber:          #ffb224;

  --space-1: 4px;  --space-2: 8px;  --space-3: 12px;
  --space-4: 16px; --space-5: 24px; --space-6: 32px;
  --space-7: 48px; --space-8: 64px; --space-9: 96px;
  --space-10: 128px;

  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --max-width: 1200px;
  --narrow: 720px;
  --section-pad: clamp(64px, 12vh, 128px);
}

[data-theme="light"] {
  --bg-base: #fdfdfc; --bg-subtle: #f9f9f8;
  --bg-element: #f1f0ef; --border-subtle: #d7d6d3;
  --text-secondary: #706f6c; --text-primary: #21201c;
}
```

No pure black. No pure white. Warm stone. "Expensive paper."

## Motion
```css
.reveal { opacity:0; transform:translateY(16px);
  transition: opacity .6s var(--ease-out), transform .6s var(--ease-out); }
.reveal.visible { opacity:1; transform:translateY(0); }
.stagger > .reveal:nth-child(1) { transition-delay:0ms; }
.stagger > .reveal:nth-child(2) { transition-delay:60ms; }
.stagger > .reveal:nth-child(3) { transition-delay:120ms; }
.stagger > .reveal:nth-child(4) { transition-delay:180ms; }
```
Subtle. 16px translate, not 60px. Respect `prefers-reduced-motion`. No auto-playing loops except a faint ω pulse on the closing section.

## Core Components
- **GlassCard** — `--bg-subtle` bg, `--border-subtle` border, 16px radius, hover brightens border
- **CodeBlock** — `--bg-element` bg, JetBrains Mono 13px, language tag top-right, copy button
- **SectionLabel** — JetBrains Mono 12px, uppercase, 0.12em tracking, `--text-low`
- **InstallBlock** — Large centered terminal command, glass bg, copy button, the hero CTA element
- **MetricDisplay** — Large mono number + caption, counts up on scroll-into-view
- **LogoTicker** — Infinite horizontal scroll, muted logos, hover brightens
- **LogoGrid** — Static grid for product pages, muted with hover
- **StatusBadge** — Green dot "Available" / Amber dot "Coming Soon" / "Beta"
- **BeforeAfter** — Two code blocks side by side, left red-tinted border, right green-tinted
- **BtnPrimary** — Solid `--text-primary` bg, `--bg-base` text, 15px, 12px 24px padding, 8px radius
- **BtnSecondary** — Transparent bg, `--border-element` border, hover fills `--bg-element`

---

# PART THREE: THE HOMEPAGE

Every section exists to answer one question: **"What does this do for ME?"**

No section explains what Omega is. Every section explains what the developer GETS.

---

## SECTION 1: THE HOOK (above the fold, 5 seconds)

The entire goal: stop the scroll. Make them think "wait, this is for me."

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│                        [ω Omega]                         │
│                                                          │
│              [display — Inter 300, huge]                  │
│                                                          │
│           Your coding agent.                             │
│           10x more reliable.                             │
│                                                          │
│  [body — text-secondary, max 480px, centered]            │
│  One command. Works with Cursor, Claude Code,            │
│  OpenCode, Cline, and every LLM provider.                │
│  No config changes. No switching tools.                  │
│                                                          │
│  ┌──────────────────────────────────────┐                │
│  │  $ npx omega-boost                   │  [copy btn]   │
│  └──────────────────────────────────────┘                │
│                                                          │
│  [Get Started →]    [How it works ↓]                     │
│                                                          │
│  ── Logo ticker (infinite scroll) ──────────────────     │
│  [Cursor] [Claude Code] [Cline] [OpenCode] [Aider]      │
│  [Continue] [OpenHands] [Copilot] [Windsurf]             │
│  [Anthropic] [OpenAI] [Google] [DeepSeek] [Groq]        │
│  ──────────────────────────────────────────────────      │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Why this works:**
- "Your coding agent" — immediately personal, they already have one
- "10x more reliable" — the benefit, not the feature
- "One command" — zero friction
- "Works with Cursor, Claude Code..." — they see their tool, they stay
- The install command IS the CTA — a developer can try it in 30 seconds
- Logo ticker below = instant social proof + "oh, this works with MY thing"

**Design:**
- Full viewport, centered
- Minimal. Typography does the work. No hero image, no illustration.
- Install block is large, glass bg, monospace, impossible to miss
- Logo ticker: infinite horizontal scroll, logos muted at ~30% opacity, subtle
- Faint radial gradient behind center text for depth

---

## SECTION 2: THE PROOF (what you actually get)

Don't explain HOW. Show WHAT CHANGES. Before/after. Numbers. Receipts.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  [section-label] WHAT CHANGES                            │
│                                                          │
│  [h2] Install Omega. See the difference immediately.     │
│                                                          │
│  ┌─── METRIC GRID (2x2 on desktop, stack on mobile) ──┐ │
│  │                                                      │ │
│  │  ┌──────────────────┐  ┌──────────────────┐         │ │
│  │  │                  │  │                  │         │ │
│  │  │  [huge metric]   │  │  [huge metric]   │         │ │
│  │  │  433×             │  │  0%              │         │ │
│  │  │                  │  │                  │         │ │
│  │  │  smaller wire    │  │  tool call       │         │ │
│  │  │  overhead        │  │  syntax errors   │         │ │
│  │  │                  │  │                  │         │ │
│  │  │  [caption]       │  │  [caption]       │         │ │
│  │  │  650 bytes →     │  │  Typed frames    │         │ │
│  │  │  1.5 bytes       │  │  replace regex   │         │ │
│  │  │  per token       │  │  parsing         │         │ │
│  │  │                  │  │                  │         │ │
│  │  └──────────────────┘  └──────────────────┘         │ │
│  │                                                      │ │
│  │  ┌──────────────────┐  ┌──────────────────┐         │ │
│  │  │                  │  │                  │         │ │
│  │  │  [huge metric]   │  │  [huge metric]   │         │ │
│  │  │  <1ms            │  │  100%            │         │ │
│  │  │                  │  │                  │         │ │
│  │  │  added           │  │  provider        │         │ │
│  │  │  latency         │  │  compatibility   │         │ │
│  │  │                  │  │                  │         │ │
│  │  │  [caption]       │  │  [caption]       │         │ │
│  │  │  Proxy overhead  │  │  One format.     │         │ │
│  │  │  is negligible   │  │  Every model.    │         │ │
│  │  │                  │  │  Every provider. │         │ │
│  │  │                  │  │                  │         │ │
│  │  └──────────────────┘  └──────────────────┘         │ │
│  │                                                      │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Design:**
- Each metric card is a glass-card
- The number is HUGE (mono, 300 weight, clamp 48-80px)
- Counts up on scroll-into-view (0 → 433, etc.)
- Below each number: a one-line benefit, then a caption explaining the mechanism
- The grid itself is the argument. No paragraph of explanation needed.

---

## SECTION 3: THE EXPERIENCE (before → after, real code)

Show them what their tools look like before and after Omega. Make it visceral.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  [section-label] BEFORE → AFTER                          │
│                                                          │
│  [h2] Same tools. Same models. Better results.           │
│                                                          │
│  ┌── TABBED COMPARISON ─────────────────────────────┐    │
│  │                                                   │    │
│  │  [Tab: Wire Protocol] [Tab: Tool Calls] [Tab: Streaming] │
│  │                                                   │    │
│  │  ┌─ BEFORE (red-tinted) ──┐ ┌─ AFTER (green) ──┐│    │
│  │  │                        │ │                    ││    │
│  │  │ data: {"id":"chatcmpl  │ │ [0x2A]            ││    │
│  │  │ -cf31b079...","choices │ │                    ││    │
│  │  │ ":[{"index":0,"delta": │ │ 1 byte.           ││    │
│  │  │ {"content":" const",   │ │ The token "const". ││    │
│  │  │ "function_call":null,  │ │ Nothing else.     ││    │
│  │  │ "tool_calls":[],"role" │ │                    ││    │
│  │  │ :"assistant","refusal" │ │                    ││    │
│  │  │ :null}}],"created":    │ │                    ││    │
│  │  │ 1770306640,"model":   │ │                    ││    │
│  │  │ "moonshotai/Kimi-K2.5 │ │                    ││    │
│  │  │ ","service_tier":null  │ │                    ││    │
│  │  │ ,"system_fingerprint" │ │                    ││    │
│  │  │ :null,"object":"chat. │ │                    ││    │
│  │  │ completion.chunk"...  │ │                    ││    │
│  │  │                        │ │                    ││    │
│  │  │ 650 bytes              │ │ 1.5 bytes avg     ││    │
│  │  │                        │ │                    ││    │
│  │  └────────────────────────┘ └────────────────────┘│    │
│  │                                                   │    │
│  └───────────────────────────────────────────────────┘    │
│                                                          │
│  [body — centered, narrow]                               │
│  That's real. Every token from every provider is wrapped │
│  in ~650 bytes of redundant JSON. Omega strips it to     │
│  the essential signal. Your tools respond faster. Your    │
│  models focus on your code, not on parsing brackets.     │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Tabs:**
1. **Wire Protocol** — the JSON blob vs 1 byte (above)
2. **Tool Calls** — 4 different broken formats vs 1 typed frame
3. **Streaming** — fragmented byte chunks vs complete semantic frames

**Design:**
- Tabbed interface, each tab swaps the before/after content
- "Before" code block has subtle red left border
- "After" code block has subtle green left border
- Real code from the Descabello memo — not pseudocode, REAL provider output
- Below the comparison: one short paragraph explaining why this matters TO THEM

---

## SECTION 4: HOW IT WORKS (dead simple, 3 steps)

Eliminate friction. Show them it's trivially easy.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  [section-label] HOW IT WORKS                            │
│                                                          │
│  [h2] 30 seconds to better agents.                       │
│                                                          │
│  ┌── STEP 1 ──┐    →    ┌── STEP 2 ──┐    →    ┌── STEP 3 ──┐  │
│  │             │         │             │         │             │  │
│  │  [01]       │         │  [02]       │         │  [03]       │  │
│  │             │         │             │         │             │  │
│  │  Install    │         │  Point      │         │  Done       │  │
│  │             │         │             │         │             │  │
│  │  npx        │         │  Set your   │         │  Your tools │  │
│  │  omega-boost│         │  tool's API │         │  are faster,│  │
│  │             │         │  endpoint   │         │  more       │  │
│  │             │         │  to         │         │  reliable,  │  │
│  │             │         │  localhost  │         │  and cheaper│  │
│  │             │         │  :4800      │         │  to run.    │  │
│  │             │         │             │         │             │  │
│  └─────────────┘         └─────────────┘         └─────────────┘  │
│                                                          │
│  [body — centered]                                       │
│  No code changes. No config migration. No new            │
│  workflows to learn. Omega sits between your             │
│  tools and your providers and makes everything           │
│  work better.                                            │
│                                                          │
│  ┌──────────────────────────────────────┐                │
│  │  $ npx omega-boost                   │                │
│  └──────────────────────────────────────┘                │
│  [Get Started →]                                         │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Design:**
- Three cards in a row, connected by subtle arrows or a dotted line
- Each card has a large mono number (01, 02, 03), a bold title, and a short description
- Below: reassurance copy + repeated install command + CTA
- This is the conversion point — make the CTA unavoidable

---

## SECTION 5: GOING DEEPER (for developers who want more)

For the people who scrolled past the CTA because they want to understand MORE before committing. This is where we earn trust with the technical audience.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  [section-label] UNDER THE HOOD                          │
│                                                          │
│  [h2] Built on infrastructure that's                     │
│       been missing from AI since day one.                │
│                                                          │
│  ┌── FEATURE GRID (3 columns desktop) ──────────────┐   │
│  │                                                    │   │
│  │  ┌── Card ─────────┐  ┌── Card ─────────┐  ┌── Card ┐│
│  │  │                  │  │                  │  │        ││
│  │  │ Typed Protocol   │  │ Deterministic    │  │ Formal ││
│  │  │ (SIGIL)          │  │ Replay (Trinity) │  │ Proofs ││
│  │  │                  │  │                  │  │        ││
│  │  │ Tool calls arrive│  │ Every execution  │  │ 32     ││
│  │  │ as complete      │  │ is captured and  │  │ theorems││
│  │  │ semantic frames. │  │ replayable. The  │  │ in     ││
│  │  │ No more partial  │  │ same architecture│  │ Lean4. ││
│  │  │ JSON. No more    │  │ Carmack built    │  │ 0      ││
│  │  │ guessing when a  │  │ for Quake III    │  │ sorry. ││
│  │  │ tool call is     │  │ multiplayer —    │  │ Math,  ││
│  │  │ complete.        │  │ applied to AI    │  │ not    ││
│  │  │                  │  │ agent execution. │  │ hope.  ││
│  │  │ [Learn more →]   │  │ [Learn more →]   │  │ [→]   ││
│  │  │                  │  │                  │  │        ││
│  │  └──────────────────┘  └──────────────────┘  └────────┘│
│  │                                                    │   │
│  └────────────────────────────────────────────────────┘   │
│                                                          │
│  [link → /technology]                                    │
│  Read the full technical architecture →                  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Design:**
- Three glass-cards, equal size
- Each has a title, a short benefit-focused description, and a "Learn more" link to /technology
- This is the ONLY section on the homepage that mentions technical details
- It's positioned as "for people who want to go deeper" — not as the main pitch
- Links to /technology for the full story

---

## SECTION 6: THE FUTURE (products lineup)

Show them there's a bigger vision. Boost is the entry point. Code is the destination.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  [section-label] PRODUCTS                                │
│                                                          │
│  [h2] Start with Boost. Go further with Code.            │
│                                                          │
│  ┌── OMEGA BOOST (hero card, ~60% width) ───────────┐   │
│  │                                                    │   │
│  │  [StatusBadge: green dot] Available now             │   │
│  │                                                    │   │
│  │  [h3] Omega Boost                                  │   │
│  │                                                    │   │
│  │  Drop-in upgrade for every AI coding tool.         │   │
│  │  Wire compression. Typed tool framing. Provider    │   │
│  │  normalization. Free and open source.              │   │
│  │                                                    │   │
│  │  $ npx omega-boost                                 │   │
│  │                                                    │   │
│  │  [Get Started →]   [View on GitHub →]              │   │
│  │                                                    │   │
│  └────────────────────────────────────────────────────┘   │
│                                                          │
│  ┌── OMEGA CODE (~35%) ──────┐  ┌── OMEGA CHAT (~25%) ─┐│
│  │                            │  │                       ││
│  │  [amber dot] Coming soon   │  │  [amber dot] Beta    ││
│  │                            │  │                       ││
│  │  Omega Code                │  │  Omega Chat           ││
│  │                            │  │                       ││
│  │  The coding agent that     │  │  Self-hosted AI chat  ││
│  │  never forgets your        │  │  with verification.   ││
│  │  codebase. Persistent      │  │  Powered by           ││
│  │  memory. Verified          │  │  Open WebUI.          ││
│  │  execution.                │  │                       ││
│  │                            │  │  [Try it →]           ││
│  │  [Join waitlist →]         │  │                       ││
│  │                            │  │                       ││
│  └────────────────────────────┘  └───────────────────────┘│
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## SECTION 7: THE CLOSE

Short. Confident. One final CTA.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  [centered, generous whitespace above and below]         │
│                                                          │
│  [ω — large, subtle pulse animation]                     │
│                                                          │
│  [h1] Better agents start with better infrastructure.    │
│                                                          │
│  ┌──────────────────────────────────────┐                │
│  │  $ npx omega-boost                   │                │
│  └──────────────────────────────────────┘                │
│                                                          │
│  [Get Started →]    [Read the docs]                      │
│                                                          │
│  [mono, text-low]                                        │
│  the result is saved                                     │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

# PART FOUR: ALL OTHER PAGES

## /boost — Omega Boost

### Hero
```
[h1] Fix every AI tool you already use.

[body] Drop-in BYOK proxy. Typed tool framing. 433x wire 
compression. Works with Cursor, Claude Code, OpenCode, 
Cline, and every LLM provider. One command.

$ npx omega-boost

[Get Started →]  [View on GitHub →]
```

### Works With (immediately after hero — social proof)
Two-row logo grid. Large.
```
YOUR TOOLS
[Cursor] [Claude Code] [Cline] [OpenCode] [Aider] 
[Continue] [OpenHands] [Copilot] [Windsurf]

YOUR PROVIDERS  
[Anthropic] [OpenAI] [Google] [DeepSeek] [Groq]
[Fireworks] [Together] [Baseten] [Qwen]
```
Real SVG logos. Muted. Hover brightens. Each links to compatibility docs.

### What You Get (benefit cards, 2x3 grid)
```
FASTER RESPONSES           MORE RELIABLE TOOL CALLS
433x less wire overhead.   0% syntax errors. Every tool
Your tools respond faster  call arrives as a complete 
because there's less       typed frame. No more partial
garbage to parse.          JSON. No more regex.

EVERY PROVIDER, ONE FORMAT   LOWER COSTS  
Stop debugging provider      Less overhead per token = 
quirks. Omega normalizes     less spend on your API bill.
Claude, GPT, Gemini,         Same results. Less waste.
DeepSeek, Qwen into one
consistent format.

YOUR KEYS STAY LOCAL         OPEN SOURCE
BYOK. Your API keys never   MIT Licensed. Fully 
leave your machine. No       auditable. Free forever.
telemetry. No tracking.      
```

### The Wire Protocol (visual proof)
The before/after code comparison from the homepage, but larger and with more detail. Include the actual Baseten JSON blob and the SIGIL binary frame.

### How to Install (3 tabs: npx / Docker / From Source)

### Pricing
```
Free. Forever. MIT Licensed.

$ npx omega-boost
```
Centered. Simple. Done.

---

## /code — Omega Code

### Hero
```
[h1] The coding agent that remembers everything 
     and finishes what it starts.

[body] Persistent memory. Verified execution. Parallel 
competing agents in isolated sandboxes. Built on the 
complete Omega stack.

[StatusBadge: amber] Coming Q2 2026

[Join the waitlist →]
```

### What You Get
```
YOUR AGENT REMEMBERS EVERYTHING
Day 1: learns your architecture. Day 30: knows 
patterns you forgot you wrote. Day 100: understands 
your codebase better than you do. Context compounds
instead of resetting.

YOUR AGENT FINISHES WHAT IT STARTS
Every file opened gets closed. Every process spawned 
gets joined. Every resource acquired gets released. 
Obligation tracking means no more zombie processes, 
no more orphaned files.

YOUR AGENT PROVES WHAT IT DID
Cryptographic receipt for every action. Rewind and 
replay any execution. Know exactly what changed, 
why it changed, and verify it was correct.

YOUR AGENTS COMPETE FOR YOU
Same prompt, different sandboxes. Multiple agents 
tackle the same problem in parallel isolation. 
You pick the best diff. Let them compete — 
you judge the results.
```

### How It Compares
```
                     Other Agents      Omega Code
Session memory       Starts from 0     Compounds forever
File cleanup         Hope              Guaranteed
Execution proof      None              Cryptographic
Multi-agent          Sequential        Parallel + isolated
Correctness          Unit tests        32 Lean4 theorems
```

### Waitlist CTA
```
Be first.
[Email input] [Join the waitlist →]
```

---

## /chat — Omega Chat

```
[h1] AI chat with receipts.

Self-hosted. Verified. Powered by Open WebUI with 
the Omega verification stack.

[If live: embedded Open WebUI]
[If not live: branded "coming soon" placeholder with notify-me]
```

---

## /technology

The deep-dive page. For developers who want to understand how it works. Written like a great technical blog post — visual, clear, scroll-driven.

### Hero
```
[h1] How it works.
[body] From wire protocols to formal proofs.
```

### Sections

**1. The Stack** — Interactive layered diagram. Each layer clickable.
```
OMEGA BOOST / OMEGA CODE / OMEGA CHAT
SIGIL — Typed binary wire protocol
TRINITY — Deterministic replay engine  
CONTINUITY — Formal verification (32 theorems, Lean4)
CAS — Content-addressed storage
ALEPH — Typed build system (Dhall, System Fω)
HARDWARE — Blackwell, io_uring, bare metal
```

**2. SIGIL: The Wire Protocol**
- The problem: 650 bytes per token
- The fix: typed binary frames, ~1.5 bytes
- State machine diagram
- Compression ratios per provider

**3. Trinity: The Replay Engine**
- Carmack's Quake III architecture applied to AI agents
- Deterministic simulation wrapping non-deterministic inference
- Event sourcing with io_uring
- "The execution is non-deterministic. The verification is not."

**4. Continuity: Formal Verification**
- 32 theorems, 0 sorry, 9,000 lines Lean4
- Key proofs: cache correctness, hermetic builds, attestation soundness
- The main theorem: `continuity_correctness`
- Lean4 code blocks with syntax highlighting

**5. Content-Addressed Storage**
- Hash is identity
- The attestation graph
- The coeffect algebra

**6. Open Research**
Links to Continuity gist, SIGIL spec, Straylight Cube, academic refs.

---

## /use-cases/coding-agents

```
[h1] Make Cursor, Claude Code, and every AI coding tool 
     dramatically more reliable.

[body] Your agent fails 30-40% of complex tool calls. 
Not because it's wrong — because the plumbing leaks. 
Omega fixes the plumbing.

[Metrics] 30-40% → <1% failure rate
[Metrics] 650 → 1.5 bytes per token  
[Metrics] 0% → 100% session retention (with Omega Code)

[Logo grid: all compatible coding tools]

[Two CTAs:]
Omega Boost: fix your existing tools now → 
Omega Code: the agent that never forgets →
```

## /use-cases/enterprise-agents

```
[h1] AI agents your compliance team will sign off on.

[body] When you need to prove what happened — to auditors, 
regulators, or your board — you need more than logs.

Cryptographic receipts. Deterministic replay. 
Formal verification. Machine-checkable attestations.

[Industries: Finance · Healthcare · Legal · Government · Defense]
```

## /use-cases/safety-critical

```
[h1] When "it probably works" isn't good enough.

[body] 32 theorems in Lean4. 0 sorry. The system is 
mathematically proven correct — not tested, proven.

For aerospace, medical devices, autonomous vehicles, 
and any domain where formal verification is required.

"The execution is non-deterministic. 
 The verification is not."
```

---

## /about

```
[h1] We build the infrastructure for correct AI.

[statement]
"The models improve every quarter. The infrastructure 
hasn't changed since 2021. That's what we fix."

[Principles — 2x2 grid]

CORRECT BY CONSTRUCTION     ANTI-WASTE
32 theorems, not 32,000     650 bytes for one token
unit tests.                 is waste. We don't waste.

PERMANENT                   OPEN
Content-addressed.          MIT Licensed. The 
Attested. Archival.         infrastructure should
                            be a public good.

[The name]
Omega (ω) — the end state. Where sequences converge. 
Where obligations resolve. Where the result is saved.

[Team section]
[Company: Straylight Infrastructure × Omega Products, San Juan, PR]
```

---

# PART FIVE: NAVIGATION

## Header (fixed, blur backdrop)
```
[ω Omega]       Products ▾   Technology   Use Cases ▾   About   Docs    [Get Started →]
```
Products: Omega Boost (Available), Omega Code (Coming soon), Omega Chat (Beta)
Use Cases: Coding Agents, Enterprise Agents, Safety-Critical

SVG omega glyph from brand guide, NOT unicode. `backdrop-filter: blur(16px)`, bg-base at 80%.

## Footer
```
[ω Omega]                                              the result is saved

Products          Technology        Company           Community
Omega Boost       How It Works      About             GitHub
Omega Code        SIGIL Protocol    Blog              Discord
Omega Chat        Verification      Careers           Twitter
Pricing           Research          Press

© 2026 Straylight Software · MIT Licensed
```

---

# PART SIX: LOGOS

## Source real SVG logos for these products:

**Coding Tools (32-40px height):**
Cursor, Cline, OpenCode, Aider, Continue, OpenHands, Claude Code, GitHub Copilot, Windsurf

**Providers (24-28px height):**
Anthropic, OpenAI, Google, DeepSeek, Fireworks, Together, Baseten, Groq

**Display rules:**
- Real SVGs from their GitHub repos, brand pages, or public assets
- Render in single color matching `var(--text-low)` 
- Hover: transition to `var(--text-secondary)`
- Text fallback if SVG unavailable: product name in JetBrains Mono
- All logos link to relevant compatibility docs or the product's homepage
- On homepage: infinite-scroll ticker component
- On product pages: static grid

---

# PART SEVEN: CURSOR RULES

## .cursor/rules/omega-design-system.mdc

```
# Omega Design System

## Non-negotiable
- Radix Sand colors only. No pure black/white.
- Inter + JetBrains Mono only. No other fonts.
- Dark mode default. Light mode secondary.
- Green = correct/working. Red = broken/error. Nothing else.

## Layout
- Max width: 1200px. Narrow: 720px.
- Section padding: clamp(64px, 12vh, 128px) vertical
- Content padding: clamp(16px, 4vw, 24px) horizontal

## Components
- Cards: .glass-card (--bg-subtle, --border-subtle, 16px radius)
- Code: .code-block (--bg-element, JetBrains Mono 13px, copy btn)
- Labels: .section-label (mono 12px uppercase, --text-low)
- Buttons: .btn-primary (solid) / .btn-secondary (outlined)
- Install: .install-block (large terminal command, glass bg)

## Motion
- Reveals: translateY(16px), 0.6s, ease-out
- Stagger: 60ms between children
- Metric count-up on scroll-into-view
- Respect prefers-reduced-motion
- No auto-playing animations

## Copy Rules
- NEVER use: blazingly fast, revolutionary, seamless, next-gen, best in class
- ALWAYS lead with customer benefit, not feature description
- ALWAYS use specific numbers
- Product names: "Omega Boost" not "ω Boost"
- "the result is saved" always lowercase
```

## .cursor/rules/omega-copy-guide.mdc

```
# Omega Copy Guide

## The one rule
Every sentence must answer: "What does the customer GET?"
If it doesn't, delete it.

## Voice
- Confident, not arrogant
- Specific, not superlative  
- Developer-to-developer, not marketing-to-developer
- Short sentences. Short paragraphs. Lots of whitespace.

## Homepage flow
1. Hook: what you get (5 seconds)
2. Proof: metrics showing the improvement
3. Evidence: before/after with real code
4. Ease: 3 steps to install
5. Depth: technical foundations (for curious developers)
6. Products: what to try, what's coming
7. Close: CTA

## Product page flow
1. What you get
2. Social proof (logos of compatible tools)
3. How it helps (benefits, not features)
4. How it works (simple)
5. Technical detail (for the curious)
6. Install / CTA

## Never explain Omega's architecture on the homepage.
The homepage sells benefits. /technology explains the architecture.
```

---

# PART EIGHT: FILE STRUCTURE

```
app/
├── globals.css                         ← Design system
├── layout.tsx                          ← Root layout, fonts, nav, footer
├── page.tsx                            ← Homepage
├── boost/page.tsx                      ← Omega Boost
├── code/page.tsx                       ← Omega Code  
├── chat/page.tsx                       ← Omega Chat
├── technology/page.tsx                 ← Tech deep-dive
├── about/page.tsx                      ← About
├── pricing/page.tsx                    ← "Free. MIT Licensed."
├── use-cases/
│   ├── coding-agents/page.tsx
│   ├── enterprise-agents/page.tsx
│   └── safety-critical/page.tsx
└── blog/page.tsx                       ← Blog index

components/
├── layout/
│   ├── NavHeader.tsx                   ← Fixed header, dropdowns, mobile
│   └── Footer.tsx                      ← Full footer
├── ui/
│   ├── GlassCard.tsx
│   ├── CodeBlock.tsx
│   ├── SectionLabel.tsx
│   ├── SectionReveal.tsx               ← IntersectionObserver reveal
│   ├── StaggerGroup.tsx                ← Staggers children
│   ├── MetricDisplay.tsx               ← Large number + count-up
│   ├── MetricGrid.tsx                  ← 2x2 grid of MetricDisplays
│   ├── LogoTicker.tsx                  ← Infinite horizontal scroll
│   ├── LogoGrid.tsx                    ← Static grid
│   ├── InstallBlock.tsx                ← Terminal command + copy
│   ├── BeforeAfter.tsx                 ← Side-by-side code comparison
│   ├── TabGroup.tsx                    ← Tabbed content switcher
│   ├── StackDiagram.tsx                ← Interactive layer diagram
│   ├── StepFlow.tsx                    ← 3-step horizontal flow
│   ├── ComparisonTable.tsx             ← Before/after table
│   ├── OmegaSymbol.tsx                 ← SVG omega + optional pulse
│   ├── StatusBadge.tsx                 ← Available/Coming/Beta
│   ├── BtnPrimary.tsx
│   └── BtnSecondary.tsx
├── sections/home/
│   ├── HookSection.tsx                 ← Section 1: the 5-second hook
│   ├── ProofSection.tsx                ← Section 2: metric grid
│   ├── ExperienceSection.tsx           ← Section 3: before/after tabs
│   ├── HowSection.tsx                  ← Section 4: 3 steps
│   ├── DepthSection.tsx                ← Section 5: tech foundations
│   ├── ProductsSection.tsx             ← Section 6: product cards
│   └── CloseSection.tsx                ← Section 7: final CTA
└── icons/
    ├── OmegaGlyph.tsx                  ← SVG path from brand guide
    └── OmegaLockup.tsx                 ← Full ω Omega

public/logos/
├── cursor.svg
├── cline.svg
├── opencode.svg
├── aider.svg
├── continue.svg
├── openhands.svg
├── claude-code.svg
├── copilot.svg
├── windsurf.svg
├── anthropic.svg
├── openai.svg
├── google.svg
├── deepseek.svg
├── fireworks.svg
├── together.svg
├── baseten.svg
├── groq.svg
└── openwebui.svg

.cursor/rules/
├── omega-design-system.mdc
└── omega-copy-guide.mdc
```

---

# PART NINE: SEO

```html
<title>Omega — Make Your AI Coding Agent 10x More Reliable</title>
<meta name="description" content="Drop-in upgrade for Cursor, Claude Code, 
OpenCode, Cline, and every AI coding tool. 433x wire compression. 0% tool call 
syntax errors. One command. Free. MIT Licensed." />

<!-- /boost -->
<title>Omega Boost — Fix Every AI Coding Tool You Already Use</title>
<meta name="description" content="BYOK proxy that gives Cursor, Cline, OpenCode, 
and every AI tool typed tool framing, 433x compression, and normalized provider 
behavior. Free forever." />

<!-- /code -->
<title>Omega Code — The Coding Agent That Never Forgets</title>
<meta name="description" content="Persistent memory. Verified execution. The 
coding agent that remembers your codebase and finishes what it starts." />

<!-- /technology -->
<title>How Omega Works — From Wire Protocol to Formal Proofs</title>
<meta name="description" content="SIGIL typed protocol. Trinity deterministic 
replay. 32 Lean4 theorems. The complete Omega architecture." />
```

Organization, Product, FAQ, BreadcrumbList schemas on relevant pages.

---

# PART TEN: PRIORITY

## Week 1
1. globals.css (full design system)
2. NavHeader + Footer
3. Homepage (all 7 sections)  
4. Core UI components (GlassCard, CodeBlock, SectionReveal, MetricDisplay, LogoTicker, InstallBlock, BeforeAfter)
5. Logo sourcing

## Week 2
6. Omega Boost page
7. Technology page
8. Omega Code page + waitlist
9. Omega Chat page
10. About page

## Week 3
11. Use case pages (3)
12. Pricing page
13. Blog template
14. SEO + structured data
15. Performance pass
16. Mobile responsiveness
17. Light mode

---

*the result is saved*
