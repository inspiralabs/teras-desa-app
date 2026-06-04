"use client";

import dynamic from "next/dynamic";
import { MapPin, Ruler } from "lucide-react";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell } from "@/components/ui/SectionShell";
import { PageGaleriCarousel } from "@/components/ui/PageGaleriCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { DesaProfilSection } from "@/components/desa-kami/DesaProfilSection";
import { OrgChart } from "@/components/desa-kami/OrgChart";
import {
  BATAS_WILAYAH,
  DESA_GPS,
  KANTOR_DESA_GALERI,
  SEJARAH_DESA,
  SOTK_BPD,
  SOTK_PEMDES,
  TABEL_LUAS,
  TIMELINE_KADES,
  VISI_MISI,
} from "@/lib/mock-data/desa-kami";

const DesaKamiMap = dynamic(
  () => import("@/components/desa-kami/DesaKamiMap").then((m) => m.DesaKamiMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-[min(280px,50vh)] animate-pulse rounded-xl bg-light-gray md:h-[400px]" />
    ),
  }
);

const GALERI_KANTOR = KANTOR_DESA_GALERI.map((src, i) => ({
  id: String(i + 1),
  gambar: src,
  alt: `Kantor Desa Bojongkulur ${i + 1}`,
  judul:
    i === 0
      ? "Kantor Desa Bojongkulur — pusat pelayanan administrasi warga"
      : `Kantor Desa Bojongkulur ${i + 1}`,
}));

export function DesaKamiProfilPage() {
  return (
    <PageContentBoundary>
      <PageHero
        title="Profil Desa"
        description="Profil lengkap Desa Bojongkulur — wilayah, sejarah, visi-misi, dan struktur organisasi pemerintahan desa."
      />

      <SectionShell className="pt-0">
        <div className="flex flex-col gap-6 md:gap-8">
          {/* 1. Galeri kantor desa */}
          <DesaProfilSection
            title="Galeri Kantor Desa"
            description="Dokumentasi gedung dan lingkungan kantor Desa Bojongkulur."
          >
            <PageGaleriCarousel items={GALERI_KANTOR} />
          </DesaProfilSection>

          {/* 2. Peta & data wilayah */}
          <DesaProfilSection
            id="wilayah"
            title="Peta & Wilayah Desa"
            description="Letak geografis, luas lahan, dan batas administrasi Desa Bojongkulur."
          >
            <div className="mb-4 inline-flex rounded-lg bg-accent/20 px-4 py-2 text-sm font-semibold text-primary">
              Klasifikasi: {DESA_GPS.klasifikasi}
            </div>
            <DesaKamiMap />

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="flex gap-3 rounded-xl border border-primary/15 bg-gradient-to-br from-primary/5 to-white p-4 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-dark-gray">
                    Koordinat GPS (pusat desa)
                  </p>
                  <p className="mt-1 font-mono text-sm font-semibold text-primary">
                    {DESA_GPS.label}
                  </p>
                  <a
                    href="https://maps.app.goo.gl/caM2yqrXHX57BzVa7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-medium text-secondary hover:underline"
                  >
                    Buka di Google Maps
                  </a>
                </div>
              </div>
              <div className="flex gap-3 rounded-xl border border-secondary/20 bg-gradient-to-br from-secondary/5 to-white p-4 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                  <Ruler className="h-5 w-5 text-secondary" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-dark-gray">
                    Luas Wilayah
                  </p>
                  <p className="mt-1 text-2xl font-bold text-primary tabular-nums">
                    {DESA_GPS.luasHa.toLocaleString("id-ID", {
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <p className="text-xs text-dark-gray">hektar (Bestie 2024)</p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto rounded-xl border border-mid-gray/30">
              <table className="w-full min-w-[320px] text-left text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 font-semibold">Jenis Lahan</th>
                    <th className="px-4 py-3 font-semibold">Luas (Ha)</th>
                    <th className="px-4 py-3 font-semibold">Persentase</th>
                  </tr>
                </thead>
                <tbody>
                  {TABEL_LUAS.map((row) => (
                    <tr
                      key={row.jenis}
                      className="border-b border-mid-gray/20 even:bg-light-gray/50"
                    >
                      <td className="px-4 py-3 text-primary">{row.jenis}</td>
                      <td className="px-4 py-3 text-dark-gray">{row.ha}</td>
                      <td className="px-4 py-3 text-dark-gray">{row.persen}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-xl border border-primary/20 bg-light p-4 md:p-6">
              <h3 className="text-base font-bold text-primary md:text-lg">
                Batas Wilayah Desa
              </h3>
              <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                {(
                  [
                    ["Utara", BATAS_WILAYAH.utara],
                    ["Timur", BATAS_WILAYAH.timur],
                    ["Selatan", BATAS_WILAYAH.selatan],
                    ["Barat", BATAS_WILAYAH.barat],
                  ] as const
                ).map(([arah, nilai]) => (
                  <div
                    key={arah}
                    className="rounded-lg border border-mid-gray/25 bg-white px-4 py-3"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wide text-secondary">
                      {arah}
                    </dt>
                    <dd className="mt-1 text-sm leading-snug text-dark-gray">{nilai}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </DesaProfilSection>

          {/* 3. Sejarah & timeline */}
          <DesaProfilSection
            id="sejarah"
            title="Sejarah Desa"
            description="Asal-usul dan perkembangan Desa Bojongkulur."
          >
            <p className="leading-relaxed text-dark-gray">{SEJARAH_DESA}</p>
            <h3 className="mt-8 text-lg font-semibold text-primary">
              Timeline Kepala Desa
            </h3>
            <ol className="mt-4 space-y-4 border-l-2 border-primary/25 pl-5 md:pl-6">
              {TIMELINE_KADES.map((t) => (
                <li key={t.tahun} className="relative">
                  <span
                    className="absolute -left-[1.4rem] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-white md:-left-[1.55rem]"
                    aria-hidden
                  />
                  <p className="text-sm font-bold text-primary">{t.tahun}</p>
                  <p className="text-sm text-dark-gray">{t.nama}</p>
                </li>
              ))}
            </ol>
          </DesaProfilSection>

          {/* 4. Visi & Misi */}
          <DesaProfilSection id="visi-misi" title="Visi & Misi Desa">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-0 bg-gradient-to-br from-primary to-secondary text-white shadow-[var(--shadow-card-hover)]">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-accent">
                    Visi
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/95 md:text-base">
                    {VISI_MISI.visi}
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-primary/15 shadow-[var(--shadow-card)]">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-primary">
                    Misi
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {VISI_MISI.misi.map((m, i) => (
                      <li key={m} className="flex gap-3 text-sm text-dark-gray">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                          {i + 1}
                        </span>
                        <span className="pt-0.5 leading-relaxed">{m}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </DesaProfilSection>

          {/* 5. SOTK Pemerintah Desa */}
          <DesaProfilSection
            id="sotk"
            title="Struktur Organisasi Pemerintah Desa"
            description="Susunan organisasi tata kerja (SOTK) beserta foto perangkat desa — data mock."
          >
            <OrgChart nodes={SOTK_PEMDES} title="Pemerintah Desa" />
          </DesaProfilSection>

          {/* 6. BPD */}
          <DesaProfilSection
            id="bpd"
            title="Struktur Badan Permusyawaratan Desa (BPD)"
            description="Susunan anggota BPD Desa Bojongkulur — data mock."
          >
            <OrgChart nodes={SOTK_BPD} title="BPD" />
          </DesaProfilSection>
        </div>
      </SectionShell>
    </PageContentBoundary>
  );
}
