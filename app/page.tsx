import { HookSection } from "@/components/sections/home/HookSection";
import { ProofSection } from "@/components/sections/home/ProofSection";
import { ExperienceSection } from "@/components/sections/home/ExperienceSection";
import { HowSection } from "@/components/sections/home/HowSection";
import { DepthSection } from "@/components/sections/home/DepthSection";
import { FeaturesSection } from "@/components/sections/home/FeaturesSection";
import { CloseSection } from "@/components/sections/home/CloseSection";

export default function HomePage() {
  return (
    <>
      <HookSection />
      <ProofSection />
      <ExperienceSection />
      <HowSection />
      <DepthSection />
      <FeaturesSection />
      <CloseSection />
    </>
  );
}
