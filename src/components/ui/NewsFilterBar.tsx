"use client";

import { cn } from "@/lib/utils";

export function NewsFilterBar({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-xl border border-mid-gray/30 bg-light/50 p-4 sm:flex-row sm:flex-wrap sm:items-end",
        className
      )}
    >
      {children}
    </div>
  );
}

