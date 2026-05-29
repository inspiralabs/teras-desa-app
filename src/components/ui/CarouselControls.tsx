"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CarouselArrow({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-md transition hover:bg-light disabled:opacity-40",
        direction === "prev" ? "border-primary/30 text-primary" : "border-mid-gray text-dark-gray"
      )}
      aria-label={direction === "prev" ? "Slide sebelumnya" : "Slide berikutnya"}
    >
      {direction === "prev" ? (
        <ChevronLeft className="h-5 w-5" />
      ) : (
        <ChevronRight className="h-5 w-5" />
      )}
    </button>
  );
}

export function CarouselDots({
  count,
  selected,
  onSelect,
}: {
  count: number;
  selected: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onSelect(i)}
          className={cn(
            "h-2.5 w-2.5 rounded-full transition",
            i === selected
              ? "bg-primary scale-110"
              : "border-2 border-primary bg-transparent"
          )}
          aria-label={`Slide ${i + 1}`}
        />
      ))}
    </div>
  );
}
