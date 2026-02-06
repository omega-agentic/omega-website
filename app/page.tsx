import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemStats } from "@/components/sections/ProblemStats";
import { Pillars } from "@/components/sections/Pillars";
import { Benchmarks } from "@/components/sections/Benchmarks";
import { InstallCTA } from "@/components/sections/InstallCTA";
import { SectionReveal } from "@/components/ui/SectionReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionReveal>
          <ProblemStats />
        </SectionReveal>
        <SectionReveal>
          <Pillars />
        </SectionReveal>
        <SectionReveal>
          <Benchmarks />
        </SectionReveal>
        <SectionReveal>
          <InstallCTA />
        </SectionReveal>
        <Footer />
      </main>
    </>
  );
}
