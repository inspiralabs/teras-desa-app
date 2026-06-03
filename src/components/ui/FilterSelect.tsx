"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FilterSelect({
  label,
  value,
  onChange,
  options,
  className,
  id,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly { value: string; label: string }[];
  className?: string;
  id?: string;
}) {
  const selectId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={cn("flex w-full min-w-0 flex-col gap-1.5 sm:w-auto sm:min-w-[180px]", className)}>
      <label htmlFor={selectId} className="text-xs font-semibold text-primary">
        {label}
      </label>
      <div className="relative">
        <select
          id={selectId}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "h-11 w-full cursor-pointer appearance-none rounded-lg border border-mid-gray/50",
            "bg-white py-2 pl-3 pr-10 text-sm font-medium text-primary shadow-sm",
            "transition-colors hover:border-primary/40",
            "focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/25"
          )}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-dark-gray"
          aria-hidden
        />
      </div>
    </div>
  );
}
