import { HeroMovement } from "@/components/sections/HeroMovement";
import { CompatibilitySection } from "@/components/sections/CompatibilitySection";
import { ProblemMovement } from "@/components/sections/ProblemMovement";
import { ThesisMovement } from "@/components/sections/ThesisMovement";
import { ProductsMovement } from "@/components/sections/ProductsMovement";
import { ResolutionMovement } from "@/components/sections/ResolutionMovement";

export default function Home() {
  return (
    <main>
      <HeroMovement />
      <CompatibilitySection />
      <ProblemMovement />
      <ThesisMovement />
      <ProductsMovement />
      <ResolutionMovement />
    </main>
  );
}
