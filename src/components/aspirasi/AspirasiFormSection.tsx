"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PrivacyNotice } from "@/components/ui/PrivacyNotice";
import {
  WisataFormField,
  wisataInputClass,
} from "@/components/wisata/WisataFormField";

const KATEGORI = [
  "Infrastruktur",
  "Pelayanan",
  "Sosial",
  "Ekonomi",
  "Lingkungan",
  "Lainnya",
] as const;

export function AspirasiFormSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
      <form
        className="space-y-5 rounded-2xl border border-mid-gray/35 bg-white p-5 shadow-[var(--shadow-card)] md:p-6"
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Aspirasi berhasil dikirim.");
        }}
      >
        <div>
          <h2 className="text-xl font-bold text-primary">Form Aspirasi Warga</h2>
          <p className="mt-1 text-sm text-dark-gray">
            Lengkapi data berikut. Aspirasi masuk antrian moderasi admin desa.
          </p>
        </div>

        <WisataFormField label="NIK (16 digit)" id="aspirasi-nik">
          <input
            id="aspirasi-nik"
            className={wisataInputClass()}
            placeholder="Contoh: 3201012345670001"
            inputMode="numeric"
            maxLength={16}
            pattern="[0-9]{16}"
            required
          />
          <div className="mt-2">
            <PrivacyNotice />
          </div>
        </WisataFormField>

        <div className="grid gap-5 sm:grid-cols-2">
          <WisataFormField label="Nama lengkap" id="aspirasi-nama">
            <input
              id="aspirasi-nama"
              className={wisataInputClass()}
              autoComplete="name"
              required
            />
          </WisataFormField>
          <WisataFormField label="Nomor telepon" id="aspirasi-telp">
            <input
              id="aspirasi-telp"
              type="tel"
              inputMode="numeric"
              className={wisataInputClass()}
              placeholder="08xxxxxxxxxx"
              pattern="[0-9]{10,15}"
              required
            />
          </WisataFormField>
        </div>

        <WisataFormField label="Kategori aspirasi" id="aspirasi-kategori">
          <select
            id="aspirasi-kategori"
            className={wisataInputClass()}
            required
            defaultValue=""
          >
            <option value="" disabled>
              Pilih kategori
            </option>
            {KATEGORI.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </WisataFormField>

        <WisataFormField label="Pesan / saran / keluhan" id="aspirasi-pesan">
          <textarea
            id="aspirasi-pesan"
            className={wisataInputClass()}
            rows={5}
            maxLength={1000}
            placeholder="Tuliskan aspirasi Anda secara jelas (maks. 1000 karakter)"
            required
          />
        </WisataFormField>

        <Button type="submit" className="w-full sm:w-auto">
          Kirim Aspirasi
        </Button>
      </form>

      <aside className="rounded-2xl border border-primary/15 bg-light p-5 text-sm text-dark-gray">
        <h3 className="font-bold text-primary">Panduan pengisian</h3>
        <ul className="mt-3 list-inside list-disc space-y-2 leading-relaxed">
          <li>Pastikan NIK sesuai KTP-el.</li>
          <li>Pilih kategori yang paling mendekati topik aspirasi.</li>
          <li>Hindari data pribadi orang lain tanpa izin.</li>
          <li>Status dapat dicek di tab Cek Status setelah dikirim.</li>
        </ul>
      </aside>
    </div>
  );
}
