"use client";

import { useState, useCallback } from "react";
import { Button } from "@radix-ui/themes";

interface CopyButtonProps {
  text: string;
  label?: string;
  size?: "1" | "2" | "3" | "4";
}

export function CopyButton({ text, label = "Copy", size = "2" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }, [text]);

  return (
    <Button
      size={size}
      variant="soft"
      aria-label={copied ? "Copied" : label}
      onClick={handleCopy}
    >
      {copied ? "Copied" : "Copy"}
    </Button>
  );
}
