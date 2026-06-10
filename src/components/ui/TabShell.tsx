"use client";

import { cn } from "@/lib/utils";

export function TabShell({
  tabs,
  active,
  onChange,
}: {
  tabs: readonly { id: string; label: string }[];
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 border-b border-mid-gray/40 pb-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
            active === tab.id
              ? "bg-primary text-white"
              : "border border-primary/20 text-primary hover:bg-light"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
