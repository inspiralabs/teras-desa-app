"use client";

import { useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "sonner";
import { DataTable } from "@/components/ui/DataTable";
import { PrivacyNotice } from "@/components/ui/PrivacyNotice";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  nikManfaatRegistry,
  penerimaManfaatSummary,
  penerimaManfaatTable,
} from "@/lib/mock-data/layanan";
import { inputClassName } from "@/lib/layanan-utils";

export function PenerimaManfaatTab() {
  const [nik, setNik] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleCek = () => {
    if (nik.length !== 16) {
      setResult("Tidak ditemukan");
      toast.error("NIK tidak ditemukan dalam data penerima manfaat.");
      return;
    }
    const program = nikManfaatRegistry[nik];
    if (program) {
      setResult(`NIK Anda terdaftar sebagai penerima ${program}`);
      toast.success(`Terdaftar sebagai penerima ${program}`);
    } else {
      setResult("Tidak ditemukan");
      toast.error("NIK tidak ditemukan dalam data penerima manfaat.");
    }
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold text-primary">
            Grafik Penerima Manfaat
          </h3>
          <p className="mt-1 text-sm text-dark-gray">
            Ringkasan penerima bantuan sosial desa: BPNT, PKH, dan BLT-DD.
          </p>
          <div className="mt-6 h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={penerimaManfaatSummary} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <XAxis dataKey="program" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(value) => [`${value} KK`, "Jumlah"]}
                  contentStyle={{ borderRadius: 8, fontSize: 13 }}
                />
                <Bar dataKey="jumlah" fill="#1B4F72" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div>
        <h3 className="mb-4 text-lg font-semibold text-primary">
          Daftar Penerima Bantuan Sosial
        </h3>
        <DataTable
          rows={penerimaManfaatTable}
          minWidth={560}
          columns={[
            { key: "no", header: "No.", cell: (r) => r.no },
            { key: "nama", header: "Nama", cell: (r) => r.nama },
            { key: "program", header: "Program", cell: (r) => r.program },
            { key: "dusun", header: "Dusun", cell: (r) => r.dusun },
          ]}
        />
        <p className="mt-2 text-xs text-dark-gray">
          Data ditampilkan sebagian untuk transparansi. NIK lengkap tidak
          dipublikasikan sesuai kebijakan privasi.
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold text-primary">
            Cek Status Penerima Manfaat
          </h3>
          <p className="mt-1 text-sm text-dark-gray">
            Masukkan NIK Anda untuk mengetahui apakah terdaftar dalam program
            bantuan sosial desa.
          </p>
          <label htmlFor="nik-manfaat" className="mt-4 block text-sm font-medium">
            NIK (16 digit)
          </label>
          <input
            id="nik-manfaat"
            className={`${inputClassName} mt-2 max-w-md`}
            maxLength={16}
            inputMode="numeric"
            value={nik}
            onChange={(e) => {
              setNik(e.target.value.replace(/\D/g, ""));
              setResult(null);
            }}
          />
          <PrivacyNotice />
          <Button type="button" className="mt-4" onClick={handleCek}>
            Cek Status
          </Button>
          {result && (
            <p
              className={`mt-4 rounded-lg px-4 py-3 text-sm ${
                result === "Tidak ditemukan"
                  ? "bg-error/10 text-error"
                  : "bg-success/10 text-success"
              }`}
              role="status"
            >
              {result === "Tidak ditemukan"
                ? "NIK tidak ditemukan dalam data penerima manfaat desa."
                : result}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
