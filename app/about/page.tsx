import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About OmegaCode — We build the infrastructure for correct AI",
  description:
    "OmegaCode builds the infrastructure for correct AI. Founded by Harrison Hines. Based in San Juan, PR.",
};

export default function AboutPage() {
  return <AboutContent />;
}
