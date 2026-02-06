# ω Omega — Secondary Pages: Technology, About, Code Preview

---

## 1. Technology Page

**URL:** omega.ms/technology  
**Purpose:** The intellectual deep dive. For developers who want to understand *how* and *why*.  
**Tone:** Philosopher + Mathematician registers. Unhurried. Earned.

---

### 1.1 Hero

```
[H1 — Outfit Light 300, 56-72px]
Built from first principles.
Proven correct.

[body — 18px, muted, max-width 560px]
Omega isn't built on the current stack. It's a new 
foundation — derived from math, verified in Lean4, 
running on hardware we own.
```

---

### 1.2 SIGIL — The Protocol

```
[section label]
THE PROTOCOL

[H2]
SIGIL: Structured Interchange with Guaranteed Identity Layer

[body]
Most protocols are designed by enumerating features. 
SIGIL is derived from the actual distribution of messages —
Shannon and Huffman applied to LLM inference traffic.

~95% of messages are token continuations. The wire format 
reflects this: the most common operation is the cheapest. 
Hot tokens encode in 1-2 bytes. Control frames mark 
semantic boundaries. The parser always knows which state 
it's in.

[comparison table]
                     SSE/JSON (current)    SIGIL
Bytes per token      ~650                  ~1.5
Tool call parsing    Text matching         State machine
Syntax errors        ~15%                  0%
Streaming            Splits anywhere       Semantic frames
Byte order           Big-endian            Little-endian (zero-copy)
Schema               Implicit              Content-addressed

[code block — the wire format]
0xxxxxxx  = hot token (ID in 7 bits)    — MOST COMMON
10xxxxxx  = extended token (varint)
1100xxxx  = stream control:
    0xC0 = CHUNK_END
    0xC1 = TOOL_CALL_START
    0xC2 = TOOL_CALL_END
    0xC3 = THINK_START
    0xC4 = THINK_END
    0xC5 = CODE_BLOCK_START
    0xC6 = CODE_BLOCK_END
    0xCF = STREAM_END

[body]
Every model ships with a tokenizer. None ship with a 
specification. SIGIL changes that: typed tokenizer 
contracts, content-addressed schemas, test vectors 
that the model must pass. Type error at load time — 
not garbage output in production.
```

---

### 1.3 The Continuity Stack

```
[section label]
THE STACK

[H2]
Every layer. Verified.

[body]
Omega products run on the Continuity stack — infrastructure
designed from formal foundations up. Content-addressed storage. 
Cryptographic attestation. Typed derivations. Coeffect-indexed 
builds. Each layer proven correct independently, then composed.

[stack diagram — clean, layered]

─────────────────────────────────────────────
PRODUCTS    Omega Boost · Omega Code · Omega SDK
─────────────────────────────────────────────
PROTOCOL    SIGIL — typed frames, deterministic tool calls
─────────────────────────────────────────────
BUILD       Armitage — STM orchestration, DICE computation
            Dhall — System Fω config (total, decidable)
─────────────────────────────────────────────
MEMORY      freeside — content-addressed store
            Hash is identity. Same content → same path.
─────────────────────────────────────────────
COMPUTE     isospin-microvm — GPU passthrough for Firecracker
            Blackwell hardware — 1397 TFLOPS FP4 measured
─────────────────────────────────────────────
PROOFS      villa-straylight — Lean4, 32+ theorems, 0 sorry
            Compiles against mathlib 4.26
─────────────────────────────────────────────

[body]
The coeffect algebra tracks what each computation requires 
from the environment — network access, authentication, 
sandbox isolation, specific environment variables. 
Every requirement is explicit. Every discharge is attested. 
Cache invalidation isn't hard when the cache key includes 
everything the computation actually depends on.
```

---

### 1.4 Content-Addressed Everything

```
[section label]
IDENTITY

[H2]
Hash is identity.

[body]
A file path tells you nothing about whether the file 
changed, whether it matches someone else's, or whether 
it's safe to cache. A content hash tells you everything.

Same content → same hash → same path.
Different content → different hash → different path.

Caching is trivial. Tampering is detectable. 
Deduplication is automatic. Sharing is global.

This extends to everything in the stack: model weights, 
tokenizer specs, tool format grammars, build outputs, 
attestation chains. If the hashes match, the behavior 
matches. No version negotiation.
```

---

### 1.5 Formal Verification

```
[section label]
PROOF

[H2]
32 theorems. 0 sorry.

[body]
The Continuity stack is formally verified in Lean4.
Not "tested" — proven. The type checker doesn't care 
if the code was written by a human or a model. 
rfl either holds or it doesn't.

Key theorems:

• Cache correctness: same coset → same outputs
• Build hermeticity: builds only access declared inputs
• Attestation soundness: signatures are unforgeable
• Obligation resolution: every opened resource is closed
• Prevention sufficiency: any single lever breaks the failure conjunction

The proofs compile against mathlib 4.26.
The axioms are standard cryptographic assumptions 
that every bank and government relies on today.

Trust distance:
  kernel   — 0: rfl, Lean's type theory
  crypto   — 1: + SHA256, ed25519
  os       — 2: + namespaces, syscalls
  toolchain — 3: + compilers
  consensus — 4: + human agreement

All core theorems proven at distance ≤ crypto.
```

---

### 1.6 Why Now

```
[section label]
TIMING

[H2]
Choices dominate resources.

[body]
The largest AI labs have extraordinary resources and 
thousands of talented engineers. But every architectural 
choice has been made — the API format, the tokenizer 
contracts, the serving stack, the customer integrations 
that depend on all of it.

Changing the wire protocol means changing every integration.
Changing tokenizer contracts means changing every fine-tune.
Moving Python from the hot path means changing every workflow.

These aren't failures of intelligence or effort. 
They're the natural consequence of building at scale 
with paying customers. The choices that got them here 
are the choices that keep them here.

We're building without that constraint. Different 
starting point, different choices, different outcomes.

The capability frontier advances every month. 
The deployment infrastructure is where the 
compounding gains are. That's where we build.
```

---

### 1.7 Research & Papers

```
[section label]
RESEARCH

[H2]
The work, in full.

[Four linked items — title + one-line description + link]

The Continuity Project — The First Year
Full technical specification. Lean4 proofs. The thesis.
→ gist link

SIGIL Executive Summary
Protocol specification and strategic landscape.
→ gist link

The Compounding Advantage
Op-ed on tool-augmented agents vs. raw LLM access.
Written by Kimi K2.5. Cryptographically attested.
→ gist link

Straylight Cube: The Triptych
24 theorems. 9 axioms. 1 intentional sorry.
The formal proof, visualized.
→ straylight.software/cube
```

---

## 2. About Page

**URL:** omega.ms/about  
**Purpose:** Company, mission, team.  
**Tone:** Builder + Philosopher. Warm, direct.

---

### 2.1 Copy

```
[H1 — Outfit Light 300, 56px]
We build the foundation.

[body — 18px, muted, max-width 600px]
Omega is built by Straylight Infrastructure.

Intelligent agents are here — coding, building, 
shipping. The models behind them advance every month. 
The infrastructure underneath hasn't kept pace.

We're building that infrastructure. Memory that 
compounds. Execution that's provable. A wire protocol 
that works. Formally verified in Lean4. Running on 
hardware we own. Shipping from San Juan.

[divider]

[H2]
What we believe.

[body — structured as short paragraphs, not bullets]
Choices matter more than resources. The right 
architecture with modest resources outperforms the 
wrong architecture with unlimited resources. We choose 
carefully and build from first principles.

Waste nothing. Every byte, every millisecond, every 
watt, every word. Our domain is omega.ms — millisecond.
Under 1ms overhead for everything we ship. This isn't 
a performance target. It's a design philosophy.

Prove it or don't say it. We use formal verification 
not because it's fashionable but because it's the only 
way to make claims that are actually checkable. 
32 theorems, 0 sorry. The proofs are public.

Build to last. The brand aesthetic is "expensive paper" — 
permanent, precise, archival. Not a SaaS dashboard. 
Something worth preserving. Every decision should feel 
inevitable.

[divider]

[H2]
Team

Harrison Hines — Founder
[2-3 sentence bio placeholder]
[photo placeholder]

[divider]

[Company details — mono, muted]
Straylight Infrastructure
San Juan, Puerto Rico

harrison@omega.ms
GitHub · X · Discord

[sign-off]
the result is saved
```

---

## 3. Omega Code Preview Page

**URL:** omega.ms/code  
**Purpose:** Build anticipation. Capture waitlist emails.  
**Tone:** Philosopher + Builder. Visionary but grounded.

---

### 3.1 Hero

```
[eyebrow — mono, muted]
OMEGA CODE · COMING SOON

[H1 — Outfit Light 300, 56-72px]
Your coding agent,
but it never forgets.

[body — 18px, muted, max-width 560px]
Omega Code is the coding agent rebuilt on the 
corrected stack. Persistent memory. Obligation tracking. 
Cryptographic attestation. Parallel agents in sandboxes.

[CTA]
[Join the waitlist →]

[small — mono, muted]
npx omega-code — coming Q1 2026
```

---

### 3.2 The Five Differences

```
[section label]
WHAT'S DIFFERENT

[Five blocks — each with a label + description]

MEMORY (CAS)
Content-addressed storage. Unlimited. Permanent.
Day 1: learns your architecture.
Day 30: knows patterns you forgot you wrote.
Day 100: understands your codebase better than you do.
Every session compounds on every session before it.

OBLIGATIONS (LEDGER)
Every file opened gets closed. Every process spawned 
gets joined. Every network connection terminated.
Tool calls don't silently fail. If it doesn't 
resolve, it doesn't attest. Resources are tracked 
at the type level.

RECEIPTS (ATTESTATION)
Cryptographic proof of every action. Know exactly 
what the agent did, when, and why. The attestation 
chain is tamper-evident. Audit any session. 
Reproduce any result.

PARALLEL AGENTS
Multiple agents working the same task simultaneously 
in sandboxed environments. Copy-on-write filesystems. 
Each explores a different approach. You pick the 
best diff. The others are discarded cleanly.

MICROSECOND RENDERING
Built in Haskell on Brick. The rendering loop runs 
in microseconds. The terminal is a first-class 
interface, not a web browser pretending to be one.
```

---

### 3.3 The Gap

```
[H2]
The gap.

[body]
200K+ GitHub stars across the major coding agents. 
The demand is real. Developers want agents that work.

None of them have persistent memory.
Every session starts from zero.

One command changes that.

$ npx omega-code
```

---

### 3.4 Waitlist CTA

```
[H2]
Get early access.

[email capture — simple input + button]
[your@email.com]  [Join →]

[muted — below]
We'll email you once. When it's ready.
Nothing else. No newsletter. No spam.
We don't waste your time either.
```

---

### 3.5 Bridge to Boost

```
[section — subtle, lower on page]

While you wait — Omega Boost is available now.
The drop-in proxy that fixes the wire protocol 
your current tools run on. Same foundation.
Shipping today.

[CTA]
[Try Omega Boost →]       npx omega-boost
```

---

## 4. Blog Post (Launch)

**URL:** omega.ms/blog/wire-protocol  
**Title:** "650 Bytes Per Token"  
**Purpose:** The HN submission. Explains the problem, shows the data, introduces Boost as the fix.

### Outline:

```
1. The discovery
   - "I found out this morning that the wire protocol is the worst part."
   - Show the actual SSE dump. 650 bytes for " const".
   
2. The math
   - What the distribution actually looks like (~95% token continuations)
   - What a wire format derived from the distribution looks like
   - The compression: 650 → 1.5

3. The tool call problem
   - Provider comparison table
   - "The Megaparsec grammar for Qwen3 is hundreds of lines. Still incomplete."
   - What typed framing looks like

4. Why it hasn't been fixed
   - Choices dominate resources (respectful framing)
   - The format emerged from rapid iteration and served its purpose
   - Now agents need something different

5. The fix
   - Omega Boost: drop-in proxy, zero config
   - Show the benchmark output
   - npx omega-boost

6. What's next
   - SIGIL protocol
   - Omega Code
   - The end state

[sign-off]
the result is saved
```

**Notes:**
- Write this as a technical essay, not a product announcement
- Lead with the problem and the data, not the product
- The product emerges naturally as the answer to the problem shown
- Respectful of everyone in the ecosystem throughout
- Let HN discover the product from the essay

---

*ω Omega · Secondary Pages Spec · 2026*

the result is saved
