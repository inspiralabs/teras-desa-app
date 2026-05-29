"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DESA, HERO_TAGLINE, POPULAR_SEARCH_LINKS } from "@/lib/constants";
import { FadeIn } from "@/components/motion/FadeIn";
import { HeroCarousel } from "./HeroCarousel";

export function HeroSection() {
  return (
    <section className="relative min-h-[440px] overflow-hidden text-white md:min-h-[500px]">
      <HeroCarousel />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-wide text-white/80">
            {DESA.kecamatan}, Kab. {DESA.kabupaten}
          </p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl lg:text-5xl">
            Desa {DESA.nama}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/95">{HERO_TAGLINE}</p>

          <form
            className="mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
            role="search"
          >
            <label htmlFor="hero-search" className="sr-only">
              Cari layanan atau informasi
            </label>
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-dark-gray" />
              <input
                id="hero-search"
                type="search"
                placeholder="Cari layanan, berita, atau agenda..."
                className="w-full rounded-lg border-0 bg-white/95 py-3.5 pl-12 pr-4 text-foreground shadow-lg ring-2 ring-white/30 backdrop-blur-md placeholder:text-dark-gray focus:outline-none focus:ring-primary/40"
              />
            </div>
            <Button type="submit" variant="accent" className="shrink-0 shadow-lg">
              Cari
            </Button>
          </form>

          <div className="mt-6">
            <p className="text-sm text-white/80">
              Pencarian populer di Desa Bojongkulur
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {POPULAR_SEARCH_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-none border border-white/40 bg-transparent px-3 py-1.5 text-sm text-white transition hover:bg-white/15"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
