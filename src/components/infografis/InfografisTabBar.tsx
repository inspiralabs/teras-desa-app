"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function InfografisTabBar({
  tabs,
  active,
  onChange,
}: {
  tabs: readonly { id: string; label: string }[];
  active: string;
  onChange: (id: string) => void; // tab id from INFOGRAFIS_TABS
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [active]);

  return (
    <div
      className="sticky top-16 z-20 -mx-4 border-b border-mid-gray/30 bg-white/95 px-4 py-3 backdrop-blur md:top-[4.5rem] md:-mx-6 md:px-6"
      role="tablist"
      aria-label="Kategori infografis"
    >
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              ref={isActive ? activeRef : undefined}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => onChange(tab.id)}
              className={cn(
                "shrink-0 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                "min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                isActive
                  ? "bg-primary text-white shadow-sm"
                  : "border border-primary/20 text-primary hover:bg-light"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
