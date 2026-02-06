"use client";

import {
  Section,
  Container,
  Heading,
  Text,
  Grid,
  Separator,
} from "@radix-ui/themes";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { ProductCard } from "@/components/ui/ProductCard";
import { AnimatedStatBlock } from "@/components/ui/AnimatedStatBlock";
import { AnimatedTerminal } from "@/components/ui/AnimatedTerminal";

export function ProductsMovement() {
  return (
    <Section size="3" id="products" className="section-movement">
      <Container size="3">
        <StaggerReveal
          delayChildren={0}
          staggerChildren={0.08}
          duration={0.5}
        >
          <div>
            <SectionLabel>Products</SectionLabel>
          </div>
          <Heading
            size="8"
            weight="light"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "var(--gray-12)",
            }}
          >
            The stack, shipping in layers.
          </Heading>
          <Text
            as="p"
            size="3"
            style={{
              color: "var(--gray-11)",
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              lineHeight: 1.7,
              maxWidth: "520px",
              marginTop: "var(--space-2)",
            }}
          >
            Each product moves closer to the end state. Boost fixes the wire.
            Code fixes the agent. The foundation gets stronger underneath both.
          </Text>
        </StaggerReveal>

        {/* Product cards */}
        <Grid
          columns={{ initial: "1", md: "2" }}
          gap="4"
          style={{ marginTop: "var(--space-7)" }}
        >
          <ProductCard
            variant="primary"
            badge="AVAILABLE"
            title={"\u03c9 Boost"}
            subtitle="The drop-in proxy that fixes the wire."
            body="Intercepts the SSE/JSON protocol from any LLM provider and emits clean, typed frames. Tool calls arrive complete. Streaming is deterministic."
            subtext="One install. Zero config."
            terminal={
              <AnimatedTerminal
                content="$ npx omega-boost"
                copyText="npx omega-boost"
                mode="typing"
                delayMs={50}
              />
            }
            ctas={[{ label: "Get started", href: "/boost" }]}
          />
          <ProductCard
            variant="secondary"
            badge="COMING SOON"
            title={"\u03c9 Code"}
            subtitle="The coding agent that never forgets."
            body="Persistent memory that compounds across sessions. Obligation tracking \u2014 every file opened gets closed, every process joined. Cryptographic attestation of every action."
            subtext="Built in Haskell. Renders in microseconds."
            singleCta={{ label: "Join the waitlist", href: "/code" }}
          />
        </Grid>

        {/* Stats */}
        <Separator size="4" style={{ margin: "var(--space-8) 0" }} />
        <Grid columns={{ initial: "2", sm: "4" }} gap="6">
          <AnimatedStatBlock
            value="650 → 1.5"
            caption="Wire protocol compression"
          />
          <AnimatedStatBlock
            value="32 theorems"
            caption="Lean4 verified formal proofs"
          />
          <AnimatedStatBlock
            value="123k LOC"
            caption="Production-grade kept code"
          />
          <AnimatedStatBlock value="<1ms" caption="Proxy latency added" />
        </Grid>
      </Container>
    </Section>
  );
}
