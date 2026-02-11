import type { Metadata } from "next";
import { InstallBlock } from "@/components/ui/InstallBlock";

export const metadata: Metadata = {
  title: "OmegaCode Pricing — Free. Forever. MIT Licensed.",
  description:
    "OmegaCode is free and open source. MIT Licensed. No usage limits. No telemetry.",
};

export default function PricingPage() {
  return (
    <div
      style={{
        paddingTop: 56,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "var(--space-10) var(--space-5)",
        gap: "var(--space-6)",
      }}
    >
      <h1 className="type-h1">Free. Forever. MIT Licensed.</h1>
      <p className="type-body" style={{ maxWidth: "480px" }}>
        OmegaCode is open source. No usage limits. No telemetry. No signup.
        Your API keys never leave your machine.
      </p>
      <InstallBlock />
    </div>
  );
}
