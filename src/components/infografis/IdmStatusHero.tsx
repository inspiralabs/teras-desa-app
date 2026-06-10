import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const STATUS_STYLES = {
  Mandiri: "bg-primary text-white",
  Maju: "bg-secondary text-white",
  Berkembang: "bg-accent text-primary",
  Tertinggal: "bg-error text-white",
} as const;

export function IdmStatusHero({
  skor,
  tahun,
  status,
  delta,
}: {
  skor: number;
  tahun: string;
  status: keyof typeof STATUS_STYLES;
  delta: number;
}) {
  const pct = Math.min(100, Math.max(0, skor * 100));

  return (
    <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 to-light p-5 md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-dark-gray">
            Indeks Desa Membangun {tahun}
          </p>
          <p className="mt-1 text-3xl font-bold text-primary">{skor.toFixed(3)}</p>
          <p className="mt-1 flex items-center gap-1 text-sm text-dark-gray">
            <TrendingUp className="h-4 w-4 text-success" aria-hidden />
            +{delta.toFixed(3)} vs tahun lalu
          </p>
        </div>
        <span
          className={cn(
            "rounded-full px-3 py-1 text-sm font-bold",
            STATUS_STYLES[status]
          )}
        >
          {status}
        </span>
      </div>
      <div
        className="mt-4 h-2 overflow-hidden rounded-full bg-mid-gray/30"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Skor IDM ${pct.toFixed(0)} persen`}
      >
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
