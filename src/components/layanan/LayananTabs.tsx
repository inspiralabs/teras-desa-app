"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { LAYANAN_TABS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { umkmList } from "@/lib/mock-data/umkm";
import { HeartPulse } from "lucide-react";

const DOKUMEN_MOCK = [
  {
    no: 1,
    nama: "Ahmad Wijaya",
    jenis: "Surat Keterangan Domisili",
    status: "Selesai",
    updated: "2026-05-22",
  },
  {
    no: 2,
    nama: "Siti Rahayu",
    jenis: "Surat Keterangan Tidak Mampu",
    status: "Sedang Diproses",
    updated: "2026-05-24",
  },
];

export function LayananTabs() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("tab") ?? "ktp";
  const [active, setActive] = useState(
    LAYANAN_TABS.some((t) => t.id === initial) ? initial : "ktp"
  );
  const [nop, setNop] = useState("");
  const [nikManfaat, setNikManfaat] = useState("");

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto border-b border-mid-gray/40 pb-2">
        {LAYANAN_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={cn(
              "shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              active === tab.id
                ? "bg-primary text-white"
                : "border border-primary/20 text-primary hover:bg-light"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {active === "ktp" && (
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-primary">Pengajuan Dokumen</h3>
                <p className="mt-2 text-sm text-dark-gray">
                  Form pengajuan (mock). Integrasi backend pada Sprint 8.
                </p>
                <Button className="mt-4" onClick={() => toast.success("Pengajuan tercatat (mock)")}>
                  Kirim Pengajuan
                </Button>
              </CardContent>
            </Card>
            <div className="overflow-x-auto">
              <p className="mb-2 text-sm text-dark-gray md:hidden">
                Geser ke kanan untuk melihat selengkapnya ›
              </p>
              <table className="w-full min-w-[600px] text-sm">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="p-3 text-left">No.</th>
                    <th className="p-3 text-left">Nama</th>
                    <th className="p-3 text-left">Jenis Dokumen</th>
                    <th className="p-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {DOKUMEN_MOCK.map((row, i) => (
                    <tr
                      key={row.no}
                      className={i % 2 === 0 ? "bg-light-gray" : "bg-white"}
                    >
                      <td className="p-3">{row.no}</td>
                      <td className="p-3">{row.nama}</td>
                      <td className="p-3">{row.jenis}</td>
                      <td className="p-3">
                        <Badge
                          variant={
                            row.status === "Selesai" ? "success" : "warning"
                          }
                        >
                          {row.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {active === "umkm" && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {umkmList.map((u) => (
              <Card key={u.id}>
                <CardContent className="pt-6">
                  <Badge>{u.kategori}</Badge>
                  <h3 className="mt-2 font-semibold">{u.namaToko}</h3>
                  <Button asChild variant="whatsapp" className="mt-4 w-full" size="sm">
                    <a
                      href={`https://wa.me/${u.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hubungi via WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {active === "kesehatan" && (
          <Card className="text-center">
            <CardContent className="flex flex-col items-center py-16">
              <HeartPulse className="h-16 w-16 text-secondary" />
              <h3 className="mt-4 text-xl font-bold text-primary">
                Fitur akan segera tersedia
              </h3>
              <p className="mt-2 max-w-md text-dark-gray">
                Layanan kesehatan desa sedang disiapkan. Informasi program
                Posyandu dan layanan kesehatan tetap dapat Anda lihat di halaman
                Lembaga Desa.
              </p>
              <Button asChild variant="secondary" className="mt-6">
                <Link href="/lembaga-desa">Lihat Lembaga Desa</Link>
              </Button>
            </CardContent>
          </Card>
        )}

        {active === "pbb" && (
          <Card>
            <CardContent className="pt-6">
              <label className="block text-sm font-medium">Nomor Objek Pajak (NOP)</label>
              <input
                className="mt-2 w-full max-w-md rounded-lg border border-mid-gray px-4 py-3"
                value={nop}
                onChange={(e) => setNop(e.target.value)}
                placeholder="Masukkan NOP"
              />
              <div className="mt-4 flex flex-wrap gap-2">
                <Button
                  onClick={() =>
                    nop
                      ? toast.info("Data SPPT (mock) ditampilkan")
                      : toast.error("NOP tidak ditemukan, periksa kembali nomor Anda")
                  }
                >
                  Cek Sekarang
                </Button>
                <Button asChild variant="secondary">
                  <a
                    href="http://bogorkab.net/cekpbb/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verifikasi di Kab. Bogor
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {active === "manfaat" && (
          <Card>
            <CardContent className="pt-6">
              <label className="block text-sm font-medium">NIK (16 digit)</label>
              <input
                className="mt-2 w-full max-w-md rounded-lg border border-mid-gray px-4 py-3"
                maxLength={16}
                value={nikManfaat}
                onChange={(e) => setNikManfaat(e.target.value.replace(/\D/g, ""))}
              />
              <p className="mt-1 text-xs text-dark-gray">
                Data NIK Anda dilindungi dan tidak dipublikasikan.
              </p>
              <Button
                className="mt-4"
                onClick={() =>
                  nikManfaat.length === 16
                    ? toast.success("NIK Anda terdaftar sebagai penerima BPNT (mock)")
                    : toast.error("NIK tidak ditemukan dalam data penerima manfaat")
                }
              >
                Cek Status
              </Button>
            </CardContent>
          </Card>
        )}

        {active === "ahli-waris" && (
          <div className="grid gap-4 md:grid-cols-2">
            {["Surat Keterangan Ahli Waris", "Formulir Permohonan"].map((t) => (
              <Card key={t}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-primary">{t}</h3>
                  <p className="mt-2 text-sm text-dark-gray">
                    Unduh template, isi, dan serahkan ke balai desa.
                  </p>
                  <Button variant="secondary" className="mt-4" size="sm">
                    Pratinjau PDF
                  </Button>
                  <Button className="mt-2 ml-2" size="sm">
                    Unduh
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
