"use client";

import { toast } from "sonner";
import { Download } from "lucide-react";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";

const PRODUK_HUKUM = [
  {
    subjek: "Tata Ruang",
    judul: "Perdes Rencana Detail Tata Ruang Desa",
    jenis: "Perdes",
    tahun: "2024",
    nomor: "05/2024",
    status: "Berlaku",
  },
  {
    subjek: "Keuangan",
    judul: "Perdes APBDes Tahun Anggaran 2026",
    jenis: "Perdes",
    tahun: "2026",
    nomor: "02/2026",
    status: "Berlaku",
  },
  {
    subjek: "Organisasi",
    judul: "Perdes Struktur Organisasi Pemerintah Desa",
    jenis: "Perdes",
    tahun: "2025",
    nomor: "08/2025",
    status: "Berlaku",
  },
];

export default function ProdukHukumPage() {
  return (
    <PageContentBoundary>
      <PageHero
        title="Produk Hukum"
        description="Peraturan dan keputusan resmi Pemerintah Desa Bojongkulur (mock data)."
      />
      <SectionShell className="pt-0">
        <FadeIn>
          <SectionCard>
            <div className="mb-4 grid gap-3 sm:grid-cols-3">
              <input
                className="rounded-lg border border-mid-gray px-3 py-2 text-sm"
                placeholder="Cari judul..."
              />
              <select className="rounded-lg border border-mid-gray px-3 py-2 text-sm">
                <option value="">Semua jenis</option>
                <option value="Perdes">Perdes</option>
                <option value="SK Kades">SK Kades</option>
              </select>
              <select className="rounded-lg border border-mid-gray px-3 py-2 text-sm">
                <option value="">Semua tahun</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-3 py-2">Subjek</th>
                    <th className="px-3 py-2">Judul</th>
                    <th className="px-3 py-2">Jenis</th>
                    <th className="px-3 py-2">Tahun</th>
                    <th className="px-3 py-2">Nomor</th>
                    <th className="px-3 py-2">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUK_HUKUM.map((row) => (
                    <tr key={row.nomor} className="border-b border-mid-gray/30">
                      <td className="px-3 py-2">{row.subjek}</td>
                      <td className="px-3 py-2 font-medium">{row.judul}</td>
                      <td className="px-3 py-2">{row.jenis}</td>
                      <td className="px-3 py-2">{row.tahun}</td>
                      <td className="px-3 py-2">{row.nomor}</td>
                      <td className="px-3 py-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="gap-1"
                          onClick={() => toast.info("Unduh PDF — mock")}
                        >
                          <Download className="h-4 w-4" />
                          PDF
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        </FadeIn>
      </SectionShell>
    </PageContentBoundary>
  );
}
