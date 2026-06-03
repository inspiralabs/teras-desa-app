"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { FileText, Eye, Download } from "lucide-react";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { CarouselArrow, CarouselDots } from "@/components/ui/CarouselControls";
import { FadeIn } from "@/components/motion/FadeIn";
import { publikasiList } from "@/lib/mock-data/publikasi";
import { formatBeritaDate } from "@/lib/mock-data/berita";

export function PublikasiSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    setSnapCount(emblaApi.scrollSnapList().length);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <SectionShell>
      <FadeIn>
        <SectionHeader
          title="Publikasi Desa"
          subtitle="Menyajikan publikasi kinerja dan perencanaan Pemerintah Desa Bojongkulur."
          href="/infografis"
          linkLabel="Lihat Semua Laporan"
        />
        <SectionCard className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {publikasiList.map((doc) => (
                <article
                  key={doc.id}
                  className="min-w-0 flex-[0_0_85%] rounded-xl border border-mid-gray/30 bg-light-gray/30 p-5 shadow-sm sm:flex-[0_0_48%] lg:flex-[0_0_32%]"
                >
                  <div className="flex h-24 items-center justify-center rounded-lg bg-white">
                    <FileText className="h-12 w-12 text-error" strokeWidth={1.5} />
                  </div>
                  <p className="mt-3 text-xs text-dark-gray">{doc.kategori}</p>
                  <h3 className="mt-1 font-bold text-primary line-clamp-2">
                    {doc.judul}
                  </h3>
                  <p className="mt-1 text-xs text-dark-gray">
                    {formatBeritaDate(doc.tanggal)}
                  </p>
                  <p className="mt-2 text-sm text-dark-gray line-clamp-2">
                    {doc.deskripsi}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 gap-1" asChild>
                      <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="h-4 w-4" />
                        Lihat
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 gap-1" asChild>
                      <a href={doc.fileUrl} download>
                        <Download className="h-4 w-4" />
                        Unduh
                      </a>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <CarouselArrow direction="prev" onClick={() => emblaApi?.scrollPrev()} />
            <CarouselDots
              count={Math.max(1, snapCount)}
              selected={selected}
              onSelect={(i) => emblaApi?.scrollTo(i)}
            />
            <CarouselArrow direction="next" onClick={() => emblaApi?.scrollNext()} />
          </div>
        </SectionCard>
      </FadeIn>
    </SectionShell>
  );
}
