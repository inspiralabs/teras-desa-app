"use client";

import { toast } from "sonner";
import { DESA } from "@/lib/constants";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";

export default function KontakPage() {
  return (
    <PageContentBoundary>
      <PageHero
        title="Kontak"
        description="Hubungi Pemerintah Desa Bojongkulur atau kirim pesan melalui formulir."
      />
      <SectionShell className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <SectionCard className="text-dark-gray">
              <h2 className="font-bold text-primary">Alamat & Kontak</h2>
              <p className="mt-4">{DESA.alamat}</p>
              <p className="mt-2">Kode Wilayah: {DESA.kodeWilayah}</p>
              <p className="mt-2">{DESA.telepon}</p>
              <p>{DESA.email}</p>
              <p className="mt-2 text-sm">Jam pelayanan: {DESA.jamPelayanan}</p>
            </SectionCard>
          </FadeIn>
          <FadeIn>
            <SectionCard>
              <h2 className="font-bold text-primary">Hubungi Kami</h2>
              <form
                className="mt-4 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success("Pesan terkirim. Terima kasih telah menghubungi kami.");
                }}
              >
                <input
                  className="w-full rounded-lg border border-mid-gray px-3 py-2 text-sm"
                  placeholder="Nama lengkap"
                  required
                />
                <input
                  className="w-full rounded-lg border border-mid-gray px-3 py-2 text-sm"
                  type="email"
                  placeholder="Email"
                  required
                />
                <textarea
                  className="w-full rounded-lg border border-mid-gray px-3 py-2 text-sm"
                  rows={4}
                  placeholder="Pesan"
                  required
                />
                <Button type="submit">Kirim</Button>
              </form>
            </SectionCard>
          </FadeIn>
        </div>
      </SectionShell>
    </PageContentBoundary>
  );
}
