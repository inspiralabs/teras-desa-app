"use client";

import { useRef } from "react";
import { Upload } from "lucide-react";
import { AnimatedModal } from "@/components/motion/AnimatedModal";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const KATEGORI = [
  "Infrastruktur",
  "Pelayanan",
  "Sosial",
  "Ekonomi",
  "Lingkungan",
  "Lainnya",
] as const;

export function AspirasiModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <AnimatedModal open={open} onClose={onClose} title="Aspirasi Warga">
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Aspirasi terkirim (mock)");
          onClose();
        }}
      >
        <div>
          <input
            className="w-full rounded-lg border border-mid-gray px-3 py-2 text-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
            placeholder="NIK (16 digit)"
            maxLength={16}
            inputMode="numeric"
            required
          />
          <p className="mt-1 text-xs text-dark-gray">
            Data NIK Anda dilindungi dan tidak dipublikasikan.
          </p>
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
          {KATEGORI.map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
        <textarea
          className="w-full rounded-lg border border-mid-gray px-3 py-2 text-sm"
          rows={4}
          placeholder="Pesan / kritik / saran (maks. 1000 karakter)"
          maxLength={1000}
          required
        />
        <div>
          <span className="text-sm font-medium text-primary">Unggah Foto</span>
          <p className="text-xs text-dark-gray">
            Opsional — JPG atau PNG, maksimal 2 MB
          </p>
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="mt-2 flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-secondary/60 bg-light/50 px-4 py-8 transition hover:border-primary hover:bg-light"
          >
            <Upload className="h-8 w-8 text-secondary" />
            <span className="text-sm font-medium text-primary">
              Klik untuk memilih foto
            </span>
            <span className="text-xs text-dark-gray">
              atau seret file ke area ini
            </span>
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png"
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file && file.size > 2 * 1024 * 1024) {
                toast.error("Ukuran file maksimal 2 MB");
                e.target.value = "";
              }
            }}
          />
        </div>
        <p className="rounded-lg bg-light-gray/80 px-3 py-2 text-xs text-dark-gray">
          CAPTCHA akan aktif pada integrasi backend.
        </p>
        <Button type="submit" className="w-full">
          Kirim Aspirasi
        </Button>
      </form>
    </AnimatedModal>
  );
}
