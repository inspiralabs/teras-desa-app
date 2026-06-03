"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function pageNumbers(current: number, total: number): number[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const set = new Set([1, total, current, current - 1, current + 1]);
  return [...set].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
  className,
}: {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}) {
  if (totalPages <= 1) return null;

  const nums = pageNumbers(page, totalPages);

  return (
    <nav
      className={cn(
        "flex flex-wrap items-center justify-center gap-1.5",
        className
      )}
      aria-label="Navigasi halaman"
    >
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-mid-gray/40 text-primary transition hover:bg-light disabled:opacity-40"
        aria-label="Halaman sebelumnya"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      {nums.map((p, i) => (
        <span key={p} className="flex items-center gap-1.5">
          {i > 0 && nums[i - 1] !== p - 1 ? (
            <span className="px-0.5 text-dark-gray" aria-hidden>
              …
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => onPageChange(p)}
            className={cn(
              "min-h-10 min-w-10 rounded-lg px-3 text-sm font-medium transition",
              page === p
                ? "bg-primary text-white"
                : "border border-mid-gray/40 text-primary hover:bg-light"
            )}
            aria-current={page === p ? "page" : undefined}
          >
            {p}
          </button>
        </span>
      ))}
      <button
        type="button"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-mid-gray/40 text-primary transition hover:bg-light disabled:opacity-40"
        aria-label="Halaman berikutnya"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}

export function paginateItems<T>(items: T[], page: number, perPage: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    totalPages,
    safePage,
  };
}
