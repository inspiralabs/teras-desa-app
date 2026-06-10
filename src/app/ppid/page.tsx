"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Download, FileText } from "lucide-react";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { TabShell } from "@/components/ui/TabShell";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { PPID_TABS } from "@/lib/constants";

const DOKUMEN_MOCK: Record<string, { judul: string; tanggal: string }[]> = {
  "dasar-hukum": [
    { judul: "UU No. 14/2008 tentang Keterbukaan Informasi Publik", tanggal: "2008" },
    { judul: "Permendagri tentang Pedoman PPID", tanggal: "2021" },
    { judul: "Perdes tentang PPID Desa Bojongkulur", tanggal: "2024" },
  ],
  berkala: [
    { judul: "Laporan APBDes Semester I 2025", tanggal: "Juli 2025" },
    { judul: "Laporan Penyelenggaraan Pemerintahan Desa (LPPD)", tanggal: "Des 2025" },
  ],
  "serta-merta": [
    { judul: "Pengumuman Tanggap Darurat Banjir", tanggal: "Feb 2026" },
  ],
  "setiap-saat": [
    { judul: "Profil Desa Bojongkulur", tanggal: "Mei 2026" },
    { judul: "Daftar Produk Hukum Desa", tanggal: "Mei 2026" },
  ],
};

function DocList({ items }: { items: { judul: string; tanggal: string }[] }) {
  return (
    <ul className="divide-y divide-mid-gray/30">
      {items.map((doc) => (
        <li
          key={doc.judul}
          className="flex flex-wrap items-center justify-between gap-3 py-4"
        >
          <div className="flex items-start gap-3">
            <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-medium text-primary">{doc.judul}</p>
              <p className="text-xs text-dark-gray">{doc.tanggal}</p>
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="gap-1.5"
            onClick={() => toast.info("Preview PDF — mock data")}
          >
            <Download className="h-4 w-4" />
            Unduh
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default function PpidPage() {
  const [tab, setTab] = useState<string>(PPID_TABS[0].id);
  const [nikPermohonan, setNikPermohonan] = useState("");

  return (
    <PageContentBoundary>
      <PageHero
        title="PPID"
        description="Pejabat Pengelola Informasi dan Dokumentasi — keterbukaan informasi publik sesuai UU KIP."
      />
      <SectionShell className="pt-0">
        <TabShell tabs={PPID_TABS} active={tab} onChange={setTab} />

        <FadeIn key={tab}>
          <SectionCard className="mt-8">
            <DocList items={DOKUMEN_MOCK[tab] ?? []} />
          </SectionCard>
        </FadeIn>

        <SectionCard className="mt-8">
          <h2 className="font-bold text-primary">Permohonan Informasi Online</h2>
          <p className="mt-2 text-sm text-dark-gray">
            Ajukan permohonan dokumen yang belum tersedia di halaman ini.
          </p>
          <form
            className="mt-4 grid gap-3 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Permohonan informasi terkirim. Tim PPID akan menindaklanjuti.");
            }}
          >
            <input
              className="rounded-lg border border-mid-gray px-3 py-2 text-sm sm:col-span-1"
              placeholder="Nama lengkap"
              required
            />
            <input
              className="rounded-lg border border-mid-gray px-3 py-2 text-sm"
              placeholder="NIK (16 digit)"
              inputMode="numeric"
              maxLength={16}
              value={nikPermohonan}
              onChange={(e) =>
                setNikPermohonan(e.target.value.replace(/\D/g, "").slice(0, 16))
              }
              required
            />
            <input
              className="rounded-lg border border-mid-gray px-3 py-2 text-sm sm:col-span-2"
              placeholder="Dokumen yang diminta"
              required
            />
            <textarea
              className="rounded-lg border border-mid-gray px-3 py-2 text-sm sm:col-span-2"
              rows={3}
              placeholder="Alasan permohonan"
              required
            />
            <Button type="submit" className="sm:col-span-2 sm:w-fit">
              Kirim Permohonan
            </Button>
          </form>
        </SectionCard>
      </SectionShell>
    </PageContentBoundary>
  );
}
