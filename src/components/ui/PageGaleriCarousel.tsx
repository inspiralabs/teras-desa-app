"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { IMAGES } from "@/lib/images";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { CarouselArrow, CarouselDots } from "@/components/ui/CarouselControls";
import { cn } from "@/lib/utils";

export type PageGaleriItem = {
  id: string;
  gambar: string;
  judul: string;
  alt: string;
};

export function PageGaleriCarousel({
  items,
  className,
}: {
  items: readonly PageGaleriItem[];
  className?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );
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

  if (items.length === 0) return null;

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex gap-4">
          {items.map((item) => (
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
      {items.length > 1 && (
        <div className="mt-6 flex items-center justify-between">
          <CarouselArrow direction="prev" onClick={() => emblaApi?.scrollPrev()} />
          <CarouselDots
            count={items.length}
            selected={selected}
            onSelect={(i) => emblaApi?.scrollTo(i)}
          />
          <CarouselArrow direction="next" onClick={() => emblaApi?.scrollNext()} />
        </div>
      )}
    </div>
  );
}
