import type { Metadata } from "next";
import { TechnologyContent } from "./TechnologyContent";

export const metadata: Metadata = {
  title: "OmegaCode Technology — From wire protocols to formal proofs",
  description:
    "The complete OmegaCode technical stack: SIGIL wire protocol, Trinity replay engine, Continuity formal verification, content-addressed storage.",
};

export default function TechnologyPage() {
  return <TechnologyContent />;
}
