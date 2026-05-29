"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { IMAGES } from "@/lib/images";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CarouselArrow, CarouselDots } from "@/components/ui/CarouselControls";
import { FadeIn } from "@/components/motion/FadeIn";
import { galeriItems } from "@/lib/mock-data/galeri";

export function GaleriSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <SectionShell variant="muted">
      <FadeIn>
        <SectionHeader
          title="Galeri Desa"
          subtitle="Dokumentasi kegiatan, fasilitas, dan informasi untuk masyarakat Desa Bojongkulur."
        />
        <SectionCard className="relative p-4 md:p-6">
          <div className="overflow-hidden rounded-xl" ref={emblaRef}>
            <div className="flex gap-4">
              {galeriItems.map((item) => (
                <div
                  key={item.id}
                  className="relative min-w-0 flex-[0_0_85%] md:flex-[0_0_70%]"
                >
                  <div className="relative aspect-video overflow-hidden rounded-xl shadow-[var(--shadow-card)]">
                    <SafeImage
                      src={item.gambar}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 85vw, 70vw"
                      fallbackSrc={IMAGES.hero[0]}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="font-semibold text-white">{item.judul}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <CarouselArrow
              direction="prev"
              onClick={() => emblaApi?.scrollPrev()}
            />
            <CarouselDots
              count={galeriItems.length}
              selected={selected}
              onSelect={(i) => emblaApi?.scrollTo(i)}
            />
            <CarouselArrow
              direction="next"
              onClick={() => emblaApi?.scrollNext()}
            />
          </div>
        </SectionCard>
      </FadeIn>
    </SectionShell>
  );
}
