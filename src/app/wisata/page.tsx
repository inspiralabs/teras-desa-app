"use client";

import { useState } from "react";
import { toast } from "sonner";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";

export default function WisataPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <PageContentBoundary>
      <PageHero
        title="Wisata Desa"
        description="Susur Sungai Cikeas — pengalaman wisata alam Desa Bojongkulur."
      />
      <SectionShell className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <SectionCard>
              <h2 className="text-xl font-bold text-primary">Informasi Wisata</h2>
              <ul className="mt-4 space-y-2 text-sm text-dark-gray">
                <li>Rute: titik keberangkatan hingga akhir susur sungai</li>
                <li>Kapasitas: maks. 10 orang per perahu</li>
                <li>Jadwal operasional: 08.00–16.00 WIB</li>
                <li>Fasilitas: pelampung, pemandu lokal</li>
              </ul>
            </SectionCard>
          </FadeIn>

          <FadeIn>
            <SectionCard>
              <h2 className="text-xl font-bold text-primary">Formulir Booking</h2>
              <form
                className="mt-4 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!agreed) {
                    toast.error("Anda harus menyetujui syarat dan ketentuan");
                    return;
                  }
                  toast.success("Booking berhasil (mock). Konfirmasi WA menyusul.");
                }}
              >
                <input
                  className="w-full rounded-lg border border-mid-gray px-3 py-2 text-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                  placeholder="Nama lengkap"
                  required
                />
                <input
                  className="w-full rounded-lg border border-mid-gray px-3 py-2 text-sm"
                  type="date"
                  required
                />
                <input
                  className="w-full rounded-lg border border-mid-gray px-3 py-2 text-sm"
                  type="tel"
                  placeholder="Nomor telepon"
                  required
                />
                <label className="flex items-start gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                  />
                  Saya setuju dengan syarat dan ketentuan wisata
                </label>
                <Button type="submit" className="w-full">
                  Kirim Booking
                </Button>
              </form>
            </SectionCard>
          </FadeIn>
        </div>
      </SectionShell>
    </PageContentBoundary>
  );
}
