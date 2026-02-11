"use client";

import { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabGroupProps {
  tabs: Tab[];
  className?: string;
}

export function TabGroup({ tabs, className = "" }: TabGroupProps) {
  const [active, setActive] = useState(0);

  return (
    <div className={className}>
      <div className="tab-group-tabs">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`tab-group-tab ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[active]?.content}</div>
    </div>
  );
}
