import type { Metadata } from "next";
import { PricingContent } from "./PricingContent";

export const metadata: Metadata = {
  title: "OmegaCode Pricing — Free, open source, forever",
  description:
    "OmegaCode is free and open source. No usage limits, no telemetry, no signup. Your API keys never leave your machine. MIT Licensed.",
};

export default function PricingPage() {
  return <PricingContent />;
}
