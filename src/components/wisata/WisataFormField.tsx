"use client";

import { cn } from "@/lib/utils";

export function WisataFormField({
  label,
  id,
  error,
  children,
  hint,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium text-primary">
        {label}
      </label>
      {children}
      {hint && !error ? (
        <p className="text-xs text-dark-gray">{hint}</p>
      ) : null}
      {error ? (
        <p className="text-xs font-medium text-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const wisataInputClass = (hasError?: boolean) =>
  cn(
    "w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-primary transition",
    "placeholder:text-mid-gray focus:outline-none focus:ring-2 focus:ring-secondary/30",
    hasError
      ? "border-error focus:border-error"
      : "border-mid-gray/50 focus:border-secondary"
  );
