"use client";

import { Download, Printer } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { INFOGRAFIS_META } from "@/lib/mock-data/infografis";

export function ChartCard({
  title,
  subtitle,
  children,
  sumber = INFOGRAFIS_META.sumberDefault,
  diperbarui = INFOGRAFIS_META.diperbarui,
  className,
  chartClassName,
  fullWidth,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  sumber?: string;
  diperbarui?: string;
  className?: string;
  chartClassName?: string;
  fullWidth?: boolean;
}) {
  const exportLabel = `Unduh PDF — ${title}`;

  return (
    <article
      className={cn(
        "rounded-2xl border border-mid-gray/40 bg-white p-4 shadow-[var(--shadow-card)] md:p-6",
        fullWidth && "lg:col-span-2",
        className
      )}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-bold text-primary md:text-lg">{title}</h3>
          {subtitle ? (
            <p className="mt-0.5 text-xs text-dark-gray md:text-sm">{subtitle}</p>
          ) : null}
        </div>
        <div className="flex shrink-0 gap-1">
          <button
            type="button"
            onClick={() => toast.info(`${exportLabel} — mock`)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-mid-gray/40 text-primary transition hover:border-primary/30 hover:bg-light"
            aria-label={exportLabel}
          >
            <Download className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-mid-gray/40 text-primary transition hover:border-primary/30 hover:bg-light"
            aria-label={`Cetak — ${title}`}
          >
            <Printer className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className={cn("mt-4 w-full min-w-0", chartClassName)}>{children}</div>

      <footer className="mt-4 border-t border-mid-gray/25 pt-3 text-xs text-dark-gray">
        <p>
          <span className="font-semibold text-primary">Sumber:</span> {sumber}
        </p>
        <p className="mt-0.5">
          <span className="font-semibold text-primary">Diperbarui:</span> {diperbarui}
        </p>
      </footer>
    </article>
  );
}
