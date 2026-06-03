"use client";

import { useState } from "react";
import { toast } from "sonner";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { TabShell } from "@/components/ui/TabShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { PrivacyNotice } from "@/components/ui/PrivacyNotice";
import {
  aspirasiByNik,
  pollingAktif,
} from "@/lib/mock-data/polling-aspirasi";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "polling", label: "Polling Aktif" },
  { id: "aspirasi", label: "Form Aspirasi" },
  { id: "status", label: "Cek Status Aspirasi" },
] as const;

function statusVariant(
  status: string
): "default" | "success" | "warning" | "error" {
  if (status === "Selesai") return "success";
  if (status === "Diproses") return "warning";
  if (status === "Ditolak") return "error";
  return "default";
}

export default function PollingAspirasiPage() {
  const [tab, setTab] = useState<string>(TABS[0].id);
  const [nikVote, setNikVote] = useState("");
  const [selectedOpsi, setSelectedOpsi] = useState<string | null>(null);
  const [cekNik, setCekNik] = useState("");
  const [hasilCek, setHasilCek] = useState<
    (typeof aspirasiByNik)[string] | null
  >(null);

  const poll = pollingAktif[0];
  const totalSuara = Object.values(poll.hasil).reduce((a, b) => a + b, 0);

  return (
    <PageContentBoundary>
      <PageHero
        title="Polling & Aspirasi"
        description="Kanal partisipasi aktif warga — voting publik dan penyampaian aspirasi dengan tracking status."
      />
      <SectionShell className="pt-0">
        <TabShell tabs={TABS} active={tab} onChange={setTab} />

        {tab === "polling" && (
          <FadeIn>
            <SectionCard className="mt-8">
              <h2 className="font-bold text-primary">{poll.judul}</h2>
              <p className="mt-1 text-sm text-dark-gray">
                Periode: {poll.mulai} s/d {poll.berakhir}
              </p>

              <div className="mt-6 space-y-3">
                <input
                  className="w-full max-w-md rounded-lg border border-mid-gray px-3 py-2 text-sm"
                  placeholder="NIK (16 digit) untuk validasi suara"
                  value={nikVote}
                  onChange={(e) =>
                    setNikVote(e.target.value.replace(/\D/g, "").slice(0, 16))
                  }
                />
                {poll.opsi.map((opsi) => (
                  <label
                    key={opsi}
                    className={cn(
                      "flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition",
                      selectedOpsi === opsi
                        ? "border-primary bg-light"
                        : "border-mid-gray/40 hover:bg-light-gray"
                    )}
                  >
                    <input
                      type="radio"
                      name="polling"
                      checked={selectedOpsi === opsi}
                      onChange={() => setSelectedOpsi(opsi)}
                    />
                    <span className="text-sm font-medium">{opsi}</span>
                    <span className="ml-auto text-xs text-dark-gray">
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
                  toast.success("Suara Anda tercatat. Terima kasih atas partisipasinya.")
                }
              >
                Kirim Suara
              </Button>
            </SectionCard>
          </FadeIn>
        )}

        {tab === "aspirasi" && (
          <FadeIn>
            <SectionCard className="mt-8">
              <h2 className="font-bold text-primary">Form Aspirasi Warga</h2>
              <form
                className="mt-4 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success("Aspirasi berhasil dikirim.");
                }}
              >
                <div>
                  <input
                    className="w-full rounded-lg border border-mid-gray px-3 py-2 text-sm"
                    placeholder="NIK (16 digit)"
                    inputMode="numeric"
                    maxLength={16}
                    required
                  />
                  <PrivacyNotice />
                </div>
                <input
                  className="w-full rounded-lg border border-mid-gray px-3 py-2 text-sm"
                  placeholder="Nama lengkap"
                  required
                />
                <select
                  className="w-full rounded-lg border border-mid-gray px-3 py-2 text-sm"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Kategori aspirasi
                  </option>
                  {[
                    "Infrastruktur",
                    "Pelayanan",
                    "Sosial",
                    "Ekonomi",
                    "Lingkungan",
                    "Lainnya",
                  ].map((k) => (
                    <option key={k} value={k}>
                      {k}
                    </option>
                  ))}
                </select>
                <textarea
                  className="w-full rounded-lg border border-mid-gray px-3 py-2 text-sm"
                  rows={4}
                  maxLength={1000}
                  placeholder="Pesan / kritik / saran (maks. 1000 karakter)"
                  required
                />
                <Button type="submit">Kirim Aspirasi</Button>
              </form>
            </SectionCard>
          </FadeIn>
        )}

        {tab === "status" && (
          <FadeIn>
            <SectionCard className="mt-8">
              <h2 className="font-bold text-primary">Cek Status Aspirasi</h2>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <input
                  className="flex-1 rounded-lg border border-mid-gray px-3 py-2 text-sm"
                  placeholder="Masukkan 16 digit NIK"
                  value={cekNik}
                  onChange={(e) =>
                    setCekNik(e.target.value.replace(/\D/g, "").slice(0, 16))
                  }
                />
                <Button
                  type="button"
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
                <div className="mt-6 overflow-x-auto">
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
                        <tr key={row.noTiket} className="border-b border-mid-gray/30">
                          <td className="px-3 py-2">{row.noTiket}</td>
                          <td className="px-3 py-2">{row.kategori}</td>
                          <td className="px-3 py-2">{row.tanggal}</td>
                          <td className="px-3 py-2">
                            <Badge variant={statusVariant(row.status)}>
                              {row.status}
                            </Badge>
                          </td>
                          <td className="px-3 py-2 text-dark-gray">{row.catatan}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-2 text-xs text-dark-gray sm:hidden">
                    Geser ke kanan untuk melihat selengkapnya ›
                  </p>
                </div>
              )}
            </SectionCard>
          </FadeIn>
        )}
      </SectionShell>
    </PageContentBoundary>
  );
}
