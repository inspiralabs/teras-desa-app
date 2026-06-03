"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { IMAGES } from "@/lib/images";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { CarouselArrow, CarouselDots } from "@/components/ui/CarouselControls";
import { cn } from "@/lib/utils";

export type HeroSlide = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

export function HeroCarousel({
  slides,
  className,
  aspectClass = "aspect-video",
}: {
  slides: HeroSlide[];
  className?: string;
  aspectClass?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
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

  if (slides.length === 0) return null;

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-0 flex-[0_0_100%]">
              <div
                className={cn(
                  "relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)]",
                  aspectClass
                )}
              >
                <SafeImage
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  fallbackSrc={IMAGES.hero[0]}
                />
                {slide.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                    <p className="text-sm font-semibold text-white md:text-base">
                      {slide.caption}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {slides.length > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <CarouselArrow
            direction="prev"
            onClick={() => emblaApi?.scrollPrev()}
          />
          <CarouselDots
            count={slides.length}
            selected={selected}
            onSelect={(i) => emblaApi?.scrollTo(i)}
          />
          <CarouselArrow
            direction="next"
            onClick={() => emblaApi?.scrollNext()}
          />
        </div>
      )}
    </div>
  );
}
