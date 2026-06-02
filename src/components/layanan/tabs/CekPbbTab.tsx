"use client";

import { useState } from "react";
import { ExternalLink, Printer } from "lucide-react";
import { toast } from "sonner";
import { DataTable } from "@/components/ui/DataTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  PBB_REDIRECT_URL,
  spptMockByNop,
  type SpptRow,
} from "@/lib/mock-data/layanan";
import { formatRupiah, inputClassName } from "@/lib/layanan-utils";

export function CekPbbTab() {
  const [nop, setNop] = useState("");
  const [rows, setRows] = useState<SpptRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCek = () => {
    const trimmed = nop.trim();
    if (!trimmed) {
      setError("Masukkan Nomor Objek Pajak (NOP) terlebih dahulu.");
      setRows(null);
      return;
    }
    const data = spptMockByNop[trimmed];
    if (!data) {
      setRows(null);
      setError(
        "NOP tidak ditemukan. Periksa kembali nomor Anda atau lakukan verifikasi lanjutan di situs Kabupaten Bogor."
      );
      return;
    }
    setError(null);
    setRows(data);
    toast.success("Data SPPT ditemukan.");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold text-primary">
            Cek Pajak Bumi & Bangunan (PBB)
          </h3>
          <p className="mt-1 text-sm text-dark-gray">
            Masukkan Nomor Objek Pajak (NOP) untuk melihat informasi SPPT tahun
            berjalan dan tahun-tahun sebelumnya.
          </p>
          <label htmlFor="nop" className="mt-4 block text-sm font-medium">
            Nomor Objek Pajak (NOP)
          </label>
          <input
            id="nop"
            className={`${inputClassName} mt-2 max-w-lg`}
            value={nop}
            onChange={(e) => setNop(e.target.value)}
            placeholder="Contoh: 320102000100010001"
          />
          {error && (
            <p className="mt-2 text-sm text-error" role="alert">
              {error}
            </p>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            <Button type="button" onClick={handleCek}>
              Cek Sekarang
            </Button>
            <Button asChild variant="secondary">
              <a href={PBB_REDIRECT_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Verifikasi di Kab. Bogor
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {rows && (
        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-semibold text-primary">Data SPPT</h3>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => toast.info("Pratinjau cetak SPPT (mock)")}
            >
              <Printer className="h-4 w-4" />
              Cetak Dokumen SPPT
            </Button>
          </div>
          <DataTable
            rows={rows}
            minWidth={800}
            columns={[
              { key: "tahun", header: "Tahun", cell: (r) => r.tahun },
              {
                key: "ketetapan",
                header: "Ketetapan",
                cell: (r) => formatRupiah(r.ketetapan),
              },
              {
                key: "denda",
                header: "Denda",
                cell: (r) => formatRupiah(r.denda),
              },
              {
                key: "nilaiBayar",
                header: "Nilai Bayar",
                cell: (r) => formatRupiah(r.nilaiBayar),
              },
              {
                key: "sisaBayar",
                header: "Sisa Bayar",
                cell: (r) => formatRupiah(r.sisaBayar),
              },
              {
                key: "jatuhTempo",
                header: "Jatuh Tempo",
                cell: (r) =>
                  new Intl.DateTimeFormat("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(r.jatuhTempo)),
              },
            ]}
          />
        </div>
      )}
    </div>
  );
}
