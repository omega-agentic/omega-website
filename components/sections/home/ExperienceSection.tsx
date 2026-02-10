"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { TabGroup } from "@/components/ui/TabGroup";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { SectionReveal } from "@/components/ui/SectionReveal";

const WIRE_PROTOCOL = {
  before: {
    label: "Before — Raw SSE",
    code: `data: {"id":"chatcmpl-cf31b079","choices":[{"index":0,"delta":{"content":" const","function_call":null,"tool_calls":[],"role":"assistant","refusal":null}}],"created":1770306640,"model":"moonshotai/Kimi-K2.5","service_tier":null,"system_fingerprint":null,"object":"chat.completion.chunk","usage":null}`,
    footer: "650 bytes per token",
  },
  after: {
    label: "After — SIGIL frame",
    code: `[0x2A]

1 byte. The token "const".
Nothing else.`,
    footer: "1.5 bytes avg per token",
  },
};

const TOOL_CALLS = {
  before: {
    label: "Before — Broken JSON",
    code: `{"tool_calls":[{"function":{"name":"edit_file",
"arguments":"{\\"path\\":\\"src/index.ts\\",
\\"content\\":\\"const x = 1;\\"}"}}]}

// Except sometimes:
// - arguments is a string, not object
// - name is missing
// - partial JSON that never closes
// - different structure per provider`,
    footer: "4 different formats across providers",
  },
  after: {
    label: "After — Typed frame",
    code: `{
  tool: "edit_file",
  args: {
    path: "src/index.ts",
    content: "const x = 1;"
  },
  complete: true
}`,
    footer: "One format. Always complete. Always valid.",
  },
};

const STREAMING = {
  before: {
    label: "Before — Fragmented bytes",
    code: `chunk: "{"
chunk: "tool"
chunk: "_ca"
chunk: "lls"
chunk: "\":["
// ...47 more chunks
// Your parser: ¯\\_(ツ)_/¯`,
    footer: "Chunks split mid-token, mid-key, mid-value",
  },
  after: {
    label: "After — Semantic frames",
    code: `frame: { type: "token", value: "const" }
frame: { type: "tool_start", name: "edit_file" }
frame: { type: "tool_arg", key: "path", value: "src/index.ts" }
frame: { type: "tool_end", complete: true }`,
    footer: "Complete semantic units. No reassembly needed.",
  },
};

export function ExperienceSection() {
  return (
    <section className="section-movement" style={{ background: "var(--bg-subtle)" }}>
      <div className="container">
        <SectionReveal>
          <div style={{ marginBottom: "var(--space-6)" }}>
            <SectionLabel>BEFORE → AFTER</SectionLabel>
          </div>
          <h2 className="type-h2" style={{ marginBottom: "var(--space-7)", maxWidth: "600px" }}>
            Same tools. Same models. Better results.
          </h2>
        </SectionReveal>

        <SectionReveal>
          <TabGroup
            tabs={[
              {
                label: "Wire Protocol",
                content: <BeforeAfter before={WIRE_PROTOCOL.before} after={WIRE_PROTOCOL.after} />,
              },
              {
                label: "Tool Calls",
                content: <BeforeAfter before={TOOL_CALLS.before} after={TOOL_CALLS.after} />,
              },
              {
                label: "Streaming",
                content: <BeforeAfter before={STREAMING.before} after={STREAMING.after} />,
              },
            ]}
          />
        </SectionReveal>

        <SectionReveal>
          <p
            className="type-body"
            style={{
              maxWidth: "var(--narrow)",
              margin: "var(--space-6) auto 0",
              textAlign: "center",
            }}
          >
            That&apos;s real. Every token from every provider is wrapped in ~650 bytes
            of redundant JSON. OmegaCode strips it to the essential signal. Your tools
            respond faster. Your models focus on your code, not on parsing brackets.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
