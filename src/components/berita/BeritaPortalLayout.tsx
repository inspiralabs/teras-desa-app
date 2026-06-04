"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SectionCard } from "@/components/ui/SectionShell";
import { CarouselArrow, CarouselDots } from "@/components/ui/CarouselControls";
import { Pagination } from "@/components/ui/Pagination";
import { BeritaHeadlineSlide } from "@/components/berita/BeritaHeadlineSlide";
import { BeritaGridTile } from "@/components/berita/BeritaGridTile";
import {
  BeritaHeadlineSidebar,
  type BeritaSidebarTab,
} from "@/components/berita/BeritaHeadlineSidebar";
import type { Berita } from "@/lib/mock-data/berita";

const SIDEBAR_LIMIT = 4;
const AUTOPLAY_MS = 4500;

export type BeritaPortalLayoutProps = {
  headlineItems: Berita[];
  /** Grid tetap — tidak berubah saat carousel bergeser */
  gridItems: Berita[];
  terbaruSidebarItems: Berita[];
  populerSidebarItems: Berita[];
  headlineBadge?: string;
  gridTitle?: string;
  emptyMessage?: string;
  enableAutoplay?: boolean;
  pagination?: {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
};

export function BeritaPortalLayout({
  headlineItems,
  gridItems,
  terbaruSidebarItems,
  populerSidebarItems,
  headlineBadge = "Headline",
  gridTitle = "Berita lainnya",
  emptyMessage = "Tidak ada berita untuk ditampilkan.",
  enableAutoplay = true,
  pagination,
}: BeritaPortalLayoutProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tab, setTab] = useState<BeritaSidebarTab>("populer");

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: headlineItems.length > 1, align: "start", duration: 28 },
    enableAutoplay && headlineItems.length > 1
      ? [Autoplay({ delay: AUTOPLAY_MS, stopOnInteraction: false })]
      : []
  );

  const featured = headlineItems[selectedIndex];

  const tabList =
    tab === "terbaru"
      ? terbaruSidebarItems.slice(0, SIDEBAR_LIMIT)
      : populerSidebarItems.slice(0, SIDEBAR_LIMIT);

  const onCarouselSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    setSelectedIndex(0);
    emblaApi?.scrollTo(0, true);
  }, [headlineItems, emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onCarouselSelect);
    onCarouselSelect();
    return () => {
      emblaApi.off("select", onCarouselSelect);
    };
  }, [emblaApi, onCarouselSelect]);

  const goToBerita = (b: Berita) => {
    if (tab !== "terbaru") return;
    const idx = headlineItems.findIndex((x) => x.id === b.id);
    if (idx >= 0) emblaApi?.scrollTo(idx);
  };

  if (headlineItems.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-dark-gray">{emptyMessage}</p>
    );
  }

  return (
    <div className="grid min-w-0 gap-5 md:grid-cols-12 md:gap-6 md:items-start">
      <div className="min-w-0 space-y-4 md:col-span-8">
        <SectionCard className="overflow-hidden border-mid-gray/35 bg-white p-2 shadow-[var(--shadow-card)] sm:p-4">
          <div
            className="-mx-0.5 overflow-hidden rounded-lg touch-pan-y sm:mx-0"
            ref={emblaRef}
          >
            <div className="flex">
              {headlineItems.map((b) => (
                <BeritaHeadlineSlide
                  key={b.id}
                  berita={b}
                  badgeLabel={headlineBadge}
                />
              ))}
            </div>
          </div>

          {headlineItems.length > 1 ? (
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2 border-t border-mid-gray/20 pt-3 sm:mt-3 sm:justify-end">
              {headlineItems.length <= 8 ? (
                <CarouselDots
                  count={headlineItems.length}
                  selected={selectedIndex}
                  onSelect={(i) => emblaApi?.scrollTo(i)}
                />
              ) : null}
            </div>
          ) : null}
        </SectionCard>

        {gridItems.length > 0 ? (
          <div className="min-w-0">
            <div className="mb-3 flex items-center gap-2 px-0.5">
              <span className="h-5 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
              <h3 className="text-sm font-bold text-primary">{gridTitle}</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {gridItems.map((b) => (
                <BeritaGridTile key={b.id} berita={b} />
              ))}
            </div>
            {pagination && pagination.totalPages > 1 ? (
              <Pagination
                className="mt-6"
                page={pagination.page}
                totalPages={pagination.totalPages}
                onPageChange={pagination.onPageChange}
              />
            ) : null}
          </div>
        ) : null}
      </div>

      <aside
        className="min-w-0 md:col-span-4 lg:sticky lg:top-24 lg:self-start"
        aria-label="Terpopuler dan terbaru"
      >
        <BeritaHeadlineSidebar
          tab={tab}
          onTabChange={setTab}
          items={tabList}
          activeId={tab === "terbaru" && featured ? featured.id : undefined}
          onItemClick={goToBerita}
          tabOrder={["populer", "terbaru"]}
        />
      </aside>
    </div>
  );
}
