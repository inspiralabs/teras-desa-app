"use client";

import { useMemo, useRef, useState } from "react";
import { Eye, FilePlus, Search, Upload } from "lucide-react";
import { toast } from "sonner";
import { AnimatedModal } from "@/components/motion/AnimatedModal";
import { DataTable } from "@/components/ui/DataTable";
import { PrivacyNotice } from "@/components/ui/PrivacyNotice";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  dokumenPengajuan,
  JENIS_DOKUMEN,
  STATUS_DOKUMEN_OPTIONS,
  type DokumenPengajuan,
  type StatusDokumen,
} from "@/lib/mock-data/layanan";
import {
  formatTanggalWaktu,
  inputClassName,
  statusDokumenVariant,
} from "@/lib/layanan-utils";

export function AdminKependudukanTab() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusDokumen | "">("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [preview, setPreview] = useState<DokumenPengajuan | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return dokumenPengajuan.filter((row) => {
      const matchSearch =
        !q ||
        row.nama.toLowerCase().includes(q) ||
        row.jenis.toLowerCase().includes(q);
      const matchStatus = !statusFilter || row.status === statusFilter;
      const rowDate = row.updated.slice(0, 10);
      const matchFrom = !dateFrom || rowDate >= dateFrom;
      const matchTo = !dateTo || rowDate <= dateTo;
      return matchSearch && matchStatus && matchFrom && matchTo;
    });
  }, [search, statusFilter, dateFrom, dateTo]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-primary">
            Administrasi Kependudukan
          </h3>
          <p className="mt-1 text-sm text-dark-gray">
            Daftar pengajuan dokumen kependudukan. Data NIK tidak ditampilkan
            demi privasi warga.
          </p>
        </div>
        <Button
          type="button"
          variant="accent"
          className="shrink-0 gap-2"
          onClick={() => setFormOpen(true)}
        >
          <FilePlus className="h-4 w-4" />
          Pembuatan Dokumen
        </Button>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-end">
        <div className="relative w-full lg:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-dark-gray" />
          <input
            className={`${inputClassName} pl-10`}
            placeholder="Cari nama pemohon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Cari nama pemohon"
          />
        </div>
        <select
          className={`${inputClassName} lg:w-56`}
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value as StatusDokumen | "")
          }
          aria-label="Filter status"
        >
          <option value="">Semua Status</option>
          {STATUS_DOKUMEN_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <input
          type="date"
          className={`${inputClassName} lg:w-44`}
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          aria-label="Filter tanggal dari"
        />
        <input
          type="date"
          className={`${inputClassName} lg:w-44`}
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
          aria-label="Filter tanggal sampai"
        />
      </div>

      <DataTable
        rows={filtered}
        minWidth={760}
        emptyMessage="Tidak ada pengajuan yang cocok dengan filter."
        columns={[
          { key: "no", header: "No.", cell: (row) => row.no },
          {
            key: "updated",
            header: "Waktu Diperbarui",
            cell: (row) => formatTanggalWaktu(row.updated),
          },
          { key: "nama", header: "Nama", cell: (row) => row.nama },
          {
            key: "jenis",
            header: "Jenis Dokumen",
            cell: (row) => row.jenis,
          },
          {
            key: "status",
            header: "Status",
            cell: (row) => (
              <Badge variant={statusDokumenVariant(row.status)}>
                {row.status}
              </Badge>
            ),
          },
          {
            key: "pratinjau",
            header: "Pratinjau",
            cell: (row) => (
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="gap-1"
                onClick={() => setPreview(row)}
              >
                <Eye className="h-3.5 w-3.5" />
                Pratinjau
              </Button>
            ),
          },
        ]}
      />

      <AnimatedModal
        open={formOpen}
        onClose={() => setFormOpen(false)}
        title="Pengajuan Pembuatan Dokumen"
        className="max-w-lg"
      >
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success(
              "Pengajuan berhasil dicatat. Anda akan mendapat notifikasi saat berkas diproses."
            );
            setFormOpen(false);
          }}
        >
          <div>
            <label htmlFor="nik-form" className="text-sm font-medium">
              NIK
            </label>
            <input
              id="nik-form"
              className={inputClassName}
              maxLength={16}
              inputMode="numeric"
              pattern="\d{16}"
              placeholder="16 digit NIK"
              required
            />
          </div>
          <div>
            <label htmlFor="nama-form" className="text-sm font-medium">
              Nama Lengkap
            </label>
            <input
              id="nama-form"
              className={inputClassName}
              placeholder="Sesuai KTP"
              required
            />
          </div>
          <div>
            <label htmlFor="wa-form" className="text-sm font-medium">
              Nomor Handphone (WhatsApp)
            </label>
            <input
              id="wa-form"
              className={inputClassName}
              type="tel"
              placeholder="08xxxxxxxxxx"
              required
            />
          </div>
          <div>
            <label htmlFor="email-form" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email-form"
              className={inputClassName}
              type="email"
              placeholder="nama@email.com"
            />
          </div>
          <div>
            <label htmlFor="jenis-form" className="text-sm font-medium">
              Pilih Jenis Dokumen
            </label>
            <select id="jenis-form" className={inputClassName} required>
              <option value="">— Pilih jenis dokumen —</option>
              {JENIS_DOKUMEN.map((j) => (
                <option key={j} value={j}>
                  {j}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Upload Berkas Persyaratan</label>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="mt-2 flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-mid-gray/60 bg-light-gray/40 px-4 py-6 transition hover:border-secondary hover:bg-light"
            >
              <Upload className="h-7 w-7 text-secondary" />
              <span className="mt-2 text-sm font-medium text-primary">
                Klik untuk unggah berkas
              </span>
              <span className="mt-1 text-xs text-dark-gray">
                JPG, PNG, atau PDF — maks. 2MB
              </span>
            </button>
            <input
              ref={fileRef}
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              className="hidden"
              onChange={() => toast.info("Berkas terpilih (mock)")}
            />
          </div>
          <PrivacyNotice />
          <div className="flex gap-2 pt-2">
            <Button type="submit" className="flex-1">
              Kirim Pengajuan
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => setFormOpen(false)}
            >
              Batal
            </Button>
          </div>
        </form>
      </AnimatedModal>

      <AnimatedModal
        open={!!preview}
        onClose={() => setPreview(null)}
        title="Pratinjau Pengajuan"
        className="max-w-md"
      >
        {preview && (
          <div className="space-y-3 text-sm">
            <p>
              <span className="font-medium text-primary">Nama:</span>{" "}
              {preview.nama}
            </p>
            <p>
              <span className="font-medium text-primary">Jenis Dokumen:</span>{" "}
              {preview.jenis}
            </p>
            <p>
              <span className="font-medium text-primary">Status:</span>{" "}
              <Badge variant={statusDokumenVariant(preview.status)}>
                {preview.status}
              </Badge>
            </p>
            <p>
              <span className="font-medium text-primary">Diperbarui:</span>{" "}
              {formatTanggalWaktu(preview.updated)}
            </p>
            {preview.status === "Selesai" && (
              <p className="rounded-lg bg-light p-3 text-dark-gray">
                Dokumen siap diambil di kantor Desa Bojongkulur. Bawa KTP asli
                dan surat pengantar RT/RW.
              </p>
            )}
          </div>
        )}
      </AnimatedModal>
    </div>
  );
}
