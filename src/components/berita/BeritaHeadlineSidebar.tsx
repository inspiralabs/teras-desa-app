"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SectionCard } from "@/components/ui/SectionShell";
import { formatBeritaDate, type Berita } from "@/lib/mock-data/berita";
import { cn } from "@/lib/utils";

export type BeritaSidebarTab = "terbaru" | "populer";

export function BeritaHeadlineSidebar({
  tab,
  onTabChange,
  items,
  activeId,
  onItemClick,
  footerHref = "/kegiatan",
  footerLabel,
  tabOrder = ["populer", "terbaru"],
}: {
  tab: BeritaSidebarTab;
  onTabChange: (tab: BeritaSidebarTab) => void;
  items: Berita[];
  activeId?: string;
  onItemClick?: (berita: Berita) => void;
  footerHref?: string;
  footerLabel?: string;
  tabOrder?: readonly BeritaSidebarTab[];
}) {
  const panelTitle = tab === "populer" ? "Terpopuler" : "Terbaru";
  const footerText =
    footerLabel ??
    (tab === "populer" ? "Terpopuler lainnya" : "Lihat semua berita");

  return (
    <SectionCard className="flex min-w-0 flex-col overflow-hidden border-mid-gray/35 bg-white p-0 shadow-[var(--shadow-card)]">
      <div
        className="grid shrink-0 grid-cols-2 gap-1 border-b border-mid-gray/25 bg-light/80 p-1.5 sm:p-2"
        role="tablist"
        aria-label="Filter berita"
      >
        {tabOrder.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={tab === t}
            onClick={() => onTabChange(t)}
            className={cn(
              "min-h-11 rounded-md py-2.5 text-[11px] font-bold uppercase tracking-wide transition touch-manipulation sm:min-h-10 sm:py-2",
              tab === t
                ? "bg-white text-primary shadow-sm"
                : "text-dark-gray hover:text-primary"
            )}
          >
            {t === "terbaru" ? "Terbaru" : "Terpopuler"}
          </button>
        ))}
      </div>

      <ul className="divide-y divide-mid-gray/20" role="tabpanel">
        {items.map((b, index) => {
          const isActive = activeId === b.id;
          const isPopuler = tab === "populer";

          return (
            <li key={b.id}>
              <Link
                href={`/kegiatan/${b.slug}`}
                onClick={() => onItemClick?.(b)}
                className={cn(
                  "group flex min-h-[44px] gap-2.5 px-3 py-3 transition touch-manipulation sm:gap-3 sm:px-4",
                  isActive ? "bg-primary/[0.06]" : "hover:bg-light-gray/50"
                )}
              >
                {isPopuler ? (
                  <span
                    className="w-7 shrink-0 text-xl font-bold leading-none text-mid-gray/50 tabular-nums sm:w-8 sm:text-2xl"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                ) : (
                  <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-md sm:h-14 sm:w-[4.5rem]">
                    <Image
                      src={b.gambar}
                      alt=""
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 64px, 72px"
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p
                    className={cn(
                      "line-clamp-3 text-sm font-bold leading-snug text-primary group-hover:text-secondary",
                      isActive && "text-secondary"
                    )}
                  >
                    {b.judul}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-accent">
                    {b.kategori}
                  </p>
                  {!isPopuler ? (
                    <p className="mt-0.5 text-[11px] text-dark-gray">
                      {formatBeritaDate(b.tanggal)}
                    </p>
                  ) : null}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="shrink-0 border-t border-mid-gray/25 px-3 py-3 sm:px-4">
        <Link
          href={footerHref}
          className="inline-flex min-h-10 items-center gap-0.5 text-xs font-bold text-secondary touch-manipulation hover:underline sm:min-h-0"
        >
          {footerText}
          <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
        </Link>
      </div>
    </SectionCard>
  );
}
