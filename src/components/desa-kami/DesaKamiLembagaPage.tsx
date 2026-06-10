"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell } from "@/components/ui/SectionShell";
import { FadeIn } from "@/components/motion/FadeIn";
import { LembagaDetailModal } from "@/components/desa-kami/LembagaDetailModal";
import { LEMBAGA_DESA_ALL, type LembagaDesa } from "@/lib/mock-data/desa-kami";
import { cn } from "@/lib/utils";

export function DesaKamiLembagaPage() {
  const [selected, setSelected] = useState<LembagaDesa | null>(null);

  return (
    <PageContentBoundary>
      <PageHero
        title="Lembaga Desa"
        description="Direktori lembaga kemasyarakatan dan pembinaan di Desa Bojongkulur. Ketuk kartu untuk detail lengkap."
      />
      <SectionShell className="pt-0">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LEMBAGA_DESA_ALL.map((l) => (
            <FadeIn key={l.id}>
              <button
                type="button"
                onClick={() => setSelected(l)}
                className={cn(
                  "group flex h-full w-full flex-col rounded-2xl border border-mid-gray/35 bg-white p-4 text-left",
                  "shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-primary/30",
                  "hover:shadow-[var(--shadow-card-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                )}
              >
                <div className="flex items-start gap-3">
                  <Image
                    src={l.logo}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-bold leading-snug text-primary group-hover:text-secondary">
                      {l.nama}
                    </p>
                    <p className="mt-0.5 text-xs text-dark-gray">{l.singkatan}</p>
                  </div>
                </div>
                <p className="mt-3 line-clamp-2 flex-1 text-xs leading-relaxed text-dark-gray">
                  {l.deskripsi}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-secondary">
                  Lihat detail
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </span>
              </button>
            </FadeIn>
          ))}
        </div>
      </SectionShell>

      <LembagaDetailModal
        lembaga={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </PageContentBoundary>
  );
}
