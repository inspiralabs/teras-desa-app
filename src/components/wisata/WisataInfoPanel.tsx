"use client";

import Link from "next/link";
import {
  Clock,
  ExternalLink,
  MapPin,
  Ship,
  Star,
  Ticket,
  Users,
} from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { WISATA_INFO } from "@/lib/mock-data/wisata";

const FACTS = [
  {
    icon: MapPin,
    label: "Rute",
    value: `${WISATA_INFO.titikAwal} → ${WISATA_INFO.titikAkhir}`,
  },
  {
    icon: Users,
    label: "Kapasitas",
    value: `${WISATA_INFO.kapasitasPerSlot} orang/slot · ${WISATA_INFO.jumlahPerahu} perahu`,
  },
  { icon: Clock, label: "Jadwal", value: WISATA_INFO.jadwal },
  {
    icon: Ticket,
    label: "Harga",
    value: `Rp ${WISATA_INFO.hargaTiket.toLocaleString("id-ID")} / orang`,
  },
  {
    icon: Ship,
    label: "Fasilitas",
    value: WISATA_INFO.fasilitas.join(" · "),
  },
] as const;

export function WisataInfoPanel() {
  return (
    <FadeIn>
      <article className="overflow-hidden rounded-2xl border border-mid-gray/35 bg-white shadow-[var(--shadow-card)]">
        <div className="border-b border-primary/10 bg-gradient-to-r from-primary/8 via-light to-transparent px-5 py-5 md:px-6">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-bold text-primary md:text-2xl">
              {WISATA_INFO.nama}
            </h2>
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-sm shadow-sm">
                <Star className="h-4 w-4 fill-accent text-accent" aria-hidden />
                <span className="font-bold text-primary">{WISATA_INFO.rating}</span>
                <span className="text-dark-gray">
                  Website ({WISATA_INFO.jumlahUlasan})
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-white px-3 py-1 text-sm">
                <Star className="h-4 w-4 fill-[#4285F4] text-[#4285F4]" aria-hidden />
                <span className="font-bold text-primary">
                  {WISATA_INFO.googleRating}
                </span>
                <span className="text-dark-gray">
                  Google ({WISATA_INFO.googleReviewCount})
                </span>
              </div>
            </div>
          </div>
          <Link
            href={WISATA_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-primary"
          >
            Lihat & tulis ulasan di Google Maps
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
          <p className="mt-1 text-xs text-dark-gray">
            Sinkron otomatis rating Google memerlukan Google Places API di
            backend (fase integrasi berikutnya).
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-dark-gray">
            Wisata susur sungai dengan pemandu lokal desa — aman untuk keluarga
            dan rombongan kecil.
          </p>
        </div>

        <div className="space-y-6 p-5 md:p-6">
          <ul className="grid gap-3 sm:grid-cols-2">
            {FACTS.map(({ icon: Icon, label, value }) => (
              <li
                key={label}
                className="flex gap-3 rounded-xl border border-mid-gray/25 bg-light/60 p-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                    {label}
                  </p>
                  <p className="mt-0.5 text-sm leading-snug text-dark-gray">{value}</p>
                </div>
              </li>
            ))}
          </ul>

          <div>
            <p className="mb-2 text-sm font-semibold text-primary">Peta rute</p>
            <div className="overflow-hidden rounded-xl border border-mid-gray/30">
              <iframe
                title="Peta rute wisata Susur Sungai Cikeas"
                src={WISATA_INFO.mapsEmbed}
                className="h-44 w-full border-0 md:h-48"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-primary">Video</p>
            <div className="aspect-video w-full min-h-[240px] overflow-hidden rounded-xl border border-mid-gray/30 md:min-h-[320px] lg:min-h-[360px]">
              <iframe
                title="Video wisata Susur Sungai Cikeas"
                src={`https://www.youtube.com/embed/${WISATA_INFO.youtubeId}`}
                className="h-full w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
