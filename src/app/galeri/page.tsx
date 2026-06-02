"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell } from "@/components/ui/SectionShell";
import { FadeIn } from "@/components/motion/FadeIn";
import { galeriItems } from "@/lib/mock-data/galeri";
import { AnimatePresence, m } from "motion/react";

export default function GaleriPage() {
  const [lightbox, setLightbox] = useState<(typeof galeriItems)[number] | null>(
    null
  );

  return (
    <PageContentBoundary>
      <PageHero
        title="Galeri"
        description="Foto kegiatan desa, layanan, dan promosi wisata Desa Bojongkulur."
      />
      <SectionShell className="pt-0">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galeriItems.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.05}>
              <button
                type="button"
                className="group relative aspect-video w-full overflow-hidden rounded-xl shadow-[var(--shadow-card)]"
                onClick={() => setLightbox(item)}
              >
                <Image
                  src={item.gambar}
                  alt={item.alt}
                  fill
                  className="object-cover transition group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-left text-sm font-medium text-white">
                    {item.judul}
                  </p>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </SectionShell>

      <AnimatePresence>
        {lightbox && (
          <m.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white"
              onClick={() => setLightbox(null)}
              aria-label="Tutup"
            >
              <X className="h-6 w-6" />
            </button>
            <m.div
              className="relative max-h-[85vh] max-w-4xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.gambar}
                alt={lightbox.alt}
                width={1200}
                height={675}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
              />
              <p className="mt-3 text-center text-white">{lightbox.judul}</p>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </PageContentBoundary>
  );
}
