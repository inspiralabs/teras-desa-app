"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  beritaTerbaru,
  beritaTerpopuler,
  formatBeritaDate,
} from "@/lib/mock-data/berita";
import { cn } from "@/lib/utils";

export function BeritaTerkiniSection() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [tab, setTab] = useState<"terbaru" | "populer">("terbaru");
  const featured = beritaTerbaru[featuredIndex];
  const list = tab === "terbaru" ? beritaTerbaru : beritaTerpopuler;

  return (
    <SectionShell>
      <FadeIn>
        <SectionHeader
          title="Berita Terkini"
          subtitle="Informasi terbaru seputar kegiatan dan program pemerintah desa."
          href="/kegiatan"
          linkLabel="Lihat Semua Berita"
        />
        <div className="grid gap-6 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <SectionCard className="max-h-[420px] overflow-y-auto p-0">
              <div className="bg-primary px-4 py-3 text-sm font-semibold text-white">
                Artikel Terbaru
              </div>
              <ul className="divide-y divide-mid-gray/30">
                {beritaTerbaru.map((b) => (
                  <li key={b.id}>
                    <Link
                      href={`/kegiatan/${b.slug}`}
                      className="flex gap-3 p-3 transition hover:bg-light-gray/50"
                    >
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={b.gambar}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-dark-gray">{b.kategori}</p>
                        <p className="line-clamp-2 text-sm font-medium text-primary">
                          {b.judul}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionCard>
          </aside>

          <div className="lg:col-span-5">
            <SectionCard className="overflow-hidden p-0">
              <div className="relative aspect-[4/3] min-h-[280px]">
                <Image
                  src={featured.gambar}
                  alt={featured.judul}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Badge className="mb-2 bg-accent text-white">{featured.kategori}</Badge>
                  <h3 className="text-xl font-bold leading-tight md:text-2xl">
                    {featured.judul}
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    {formatBeritaDate(featured.tanggal)}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-4 border-white text-white hover:bg-white/10"
                  >
                    <Link href={`/kegiatan/${featured.slug}`}>Baca Selengkapnya</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 border-t px-4 py-2">
                <button
                  type="button"
                  onClick={() =>
                    setFeaturedIndex((i) => (i - 1 + beritaTerbaru.length) % beritaTerbaru.length)
                  }
                  className="rounded-lg p-2 hover:bg-light-gray"
                  aria-label="Berita sebelumnya"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-xs text-dark-gray">
                  {featuredIndex + 1} dari {beritaTerbaru.length}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setFeaturedIndex((i) => (i + 1) % beritaTerbaru.length)
                  }
                  className="rounded-lg p-2 hover:bg-light-gray"
                  aria-label="Berita berikutnya"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </SectionCard>
          </div>

          <div className="lg:col-span-4">
            <SectionCard>
              <div className="flex border-b border-mid-gray/40">
                {(["terbaru", "populer"] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTab(t)}
                    className={cn(
                      "flex-1 pb-3 text-sm font-semibold uppercase tracking-wide transition",
                      tab === t
                        ? "border-b-2 border-primary text-primary"
                        : "text-dark-gray hover:text-primary"
                    )}
                  >
                    {t === "terbaru" ? "Terbaru" : "Terpopuler"}
                  </button>
                ))}
              </div>
              <ul className="mt-4 space-y-4">
                {list.map((b) => (
                  <li key={b.id}>
                    <Link
                      href={`/kegiatan/${b.slug}`}
                      className="group flex gap-3"
                    >
                      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg shadow-sm">
                        <Image
                          src={b.gambar}
                          alt=""
                          fill
                          className="object-cover transition group-hover:scale-105"
                          sizes="80px"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-primary group-hover:underline line-clamp-2">
                          {b.judul}
                        </p>
                        <p className="mt-1 text-xs text-dark-gray">
                          {b.kategori} | {formatBeritaDate(b.tanggal)}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionCard>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
