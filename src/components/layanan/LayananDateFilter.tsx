"use client";

import { cn } from "@/lib/utils";
import { inputClassName } from "@/lib/layanan-utils";

const dateInputClass = cn(
  inputClassName,
  "block min-h-11 w-full text-base md:text-sm",
  "[color-scheme:light]",
  "[&::-webkit-date-and-time-value]:min-h-[1.25rem]"
);

export function LayananDateFilter({
  label,
  value,
  onChange,
  id,
  max,
  min,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  id: string;
  max?: string;
  min?: string;
}) {
  return (
    <label htmlFor={id} className="flex w-full min-w-0 flex-col gap-1 lg:w-48">
      <span className="text-xs font-medium text-dark-gray">{label}</span>
      <input
        id={id}
        type="date"
        className={dateInputClass}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        max={max}
        aria-label={label}
      />
    </label>
  );
}
