"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { PageGaleriCarousel } from "@/components/ui/PageGaleriCarousel";
import { InfografisTabBar } from "@/components/infografis/InfografisTabBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { AspirasiParticipationBlock } from "@/components/aspirasi/AspirasiParticipationBlock";
import { AspirasiFormSection } from "@/components/aspirasi/AspirasiFormSection";
import {
  aspirasiByNik,
  pollingAktif,
} from "@/lib/mock-data/polling-aspirasi";
import { POLLING_HERO_SLIDES } from "@/lib/mock-data/polling-media";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "polling", label: "Polling Aktif" },
  { id: "aspirasi", label: "Form Aspirasi" },
  { id: "status", label: "Cek Status" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const GALERI_POLLING = POLLING_HERO_SLIDES.map((s) => ({
  id: s.id,
  gambar: s.src,
  judul: s.caption,
  alt: s.alt,
}));

function statusVariant(
  status: string
): "default" | "success" | "warning" | "error" {
  if (status === "Selesai") return "success";
  if (status === "Diproses") return "warning";
  if (status === "Ditolak") return "error";
  return "default";
}

export function PollingAspirasiPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [tab, setTab] = useState<TabId>(() =>
    TABS.some((t) => t.id === tabParam) ? (tabParam as TabId) : TABS[0].id
  );
  const [nikVote, setNikVote] = useState("");
  const [selectedOpsi, setSelectedOpsi] = useState<string | null>(null);
  const [cekNik, setCekNik] = useState("");
  const [hasilCek, setHasilCek] = useState<
    (typeof aspirasiByNik)[string] | null
  >(null);

  useEffect(() => {
    if (tabParam && TABS.some((t) => t.id === tabParam)) {
      setTab(tabParam as TabId);
    }
  }, [tabParam]);

  const onTabChange = (id: string) => {
    if (!TABS.some((t) => t.id === id)) return;
    setTab(id as TabId);
    router.replace(`/polling-aspirasi?tab=${id}`, { scroll: false });
  };

  const poll = pollingAktif[0];
  const totalSuara = Object.values(poll.hasil).reduce((a, b) => a + b, 0);

  return (
    <PageContentBoundary>
      <PageHero
        title="Polling & Aspirasi"
        description="Kanal partisipasi aktif warga — voting publik, penyampaian aspirasi, dan pelacakan status."
      />

      <SectionShell className="pt-0">
        <FadeIn>
          <SectionCard className="p-4 md:p-6">
            <div className="mt-4">
              <PageGaleriCarousel items={GALERI_POLLING} />
            </div>
          </SectionCard>
        </FadeIn>
      </SectionShell>

      <SectionShell className="pt-0">
        <FadeIn>
          <AspirasiParticipationBlock onKirimAspirasi={() => onTabChange("aspirasi")} />
        </FadeIn>
      </SectionShell>

      <SectionShell className="pt-0">
        <InfografisTabBar tabs={TABS} active={tab} onChange={onTabChange} />

        <div className="mt-6 md:mt-8">
          {tab === "polling" && (
            <FadeIn>
              <SectionCard>
                <h2 className="text-xl font-bold text-primary">{poll.judul}</h2>
                <p className="mt-1 text-sm text-dark-gray">
                  Periode: {poll.mulai} s/d {poll.berakhir}
                </p>

                <div className="mt-6 max-w-lg">
                  <label className="text-sm font-medium text-primary">
                    NIK pemilih (16 digit)
                  </label>
                  <input
                    className="mt-1.5 w-full rounded-lg border border-mid-gray/50 px-3 py-2.5 text-sm focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/25"
                    placeholder="NIK untuk validasi suara"
                    value={nikVote}
                    onChange={(e) =>
                      setNikVote(e.target.value.replace(/\D/g, "").slice(0, 16))
                    }
                  />
                </div>

                <div className="mt-6 space-y-3">
                  {poll.opsi.map((opsi) => (
                    <label
                      key={opsi}
                      className={cn(
                        "flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition",
                        selectedOpsi === opsi
                          ? "border-primary bg-light"
                          : "border-mid-gray/40 hover:border-primary/25 hover:bg-light-gray/50"
                      )}
                    >
                      <input
                        type="radio"
                        name="polling"
                        checked={selectedOpsi === opsi}
                        onChange={() => setSelectedOpsi(opsi)}
                      />
                      <span className="flex-1 text-sm font-medium text-primary">
                        {opsi}
                      </span>
                      <span className="text-xs text-dark-gray">
                        {poll.hasil[opsi]} suara (
                        {Math.round((poll.hasil[opsi] / totalSuara) * 100)}%)
                      </span>
                    </label>
                  ))}
                </div>
                <Button
                  className="mt-6"
                  disabled={!selectedOpsi || nikVote.length !== 16}
                  onClick={() =>
                    toast.success(
                      "Suara Anda tercatat. Terima kasih atas partisipasinya."
                    )
                  }
                >
                  Kirim Suara
                </Button>
              </SectionCard>
            </FadeIn>
          )}

          {tab === "aspirasi" && (
            <FadeIn>
              <AspirasiFormSection />
            </FadeIn>
          )}

          {tab === "status" && (
            <FadeIn>
              <SectionCard>
                <h2 className="text-xl font-bold text-primary">Cek Status Aspirasi</h2>
                <p className="mt-1 text-sm text-dark-gray">
                  Lacak proses aspirasi Anda dengan nomor tiket.
                </p>
                <div className="mt-6 flex max-w-xl flex-col gap-2 sm:flex-row">
                  <input
                    className="flex-1 rounded-lg border border-mid-gray/50 px-3 py-2.5 text-sm"
                    placeholder="16 digit NIK"
                    value={cekNik}
                    onChange={(e) =>
                      setCekNik(e.target.value.replace(/\D/g, "").slice(0, 16))
                    }
                  />
                  <Button
                    type="button"
                    className="shrink-0"
                    onClick={() => {
                      const rows = aspirasiByNik[cekNik] ?? null;
                      setHasilCek(rows);
                      if (!rows?.length) {
                        toast.info("Tidak ada aspirasi ditemukan untuk NIK ini.");
                      }
                    }}
                  >
                    Cek Status
                  </Button>
                </div>

                {hasilCek && hasilCek.length > 0 && (
                  <div className="mt-6 overflow-x-auto rounded-xl border border-mid-gray/30">
                    <table className="w-full min-w-[520px] text-left text-sm">
                      <thead>
                        <tr className="bg-primary text-white">
                          <th className="px-3 py-2">No. Tiket</th>
                          <th className="px-3 py-2">Kategori</th>
                          <th className="px-3 py-2">Tanggal</th>
                          <th className="px-3 py-2">Status</th>
                          <th className="px-3 py-2">Catatan</th>
                        </tr>
                      </thead>
                      <tbody>
                        {hasilCek.map((row) => (
                          <tr
                            key={row.noTiket}
                            className="border-b border-mid-gray/30"
                          >
                            <td className="px-3 py-2">{row.noTiket}</td>
                            <td className="px-3 py-2">{row.kategori}</td>
                            <td className="px-3 py-2">{row.tanggal}</td>
                            <td className="px-3 py-2">
                              <Badge variant={statusVariant(row.status)}>
                                {row.status}
                              </Badge>
                            </td>
                            <td className="px-3 py-2 text-dark-gray">
                              {row.catatan}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </SectionCard>
            </FadeIn>
          )}
        </div>
      </SectionShell>
    </PageContentBoundary>
  );
}
