"use client";

import { useState } from "react";
import { Megaphone, Search, ShieldCheck, ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { AspirasiModal } from "@/components/floating/AspirasiModal";

export function AspirasiSection() {
  const [open, setOpen] = useState(false);
  const [cekNik, setCekNik] = useState("");

  return (
    <SectionShell variant="muted">
      <FadeIn>
        <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-primary via-primary to-secondary p-6 shadow-[var(--shadow-card-hover)] md:p-8">
          <div
            className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-accent/20 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-white/10 blur-xl"
            aria-hidden
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                <Megaphone className="h-3.5 w-3.5" />
                Suara Anda Penting
              </div>
              <h2 className="mt-4 text-2xl font-bold md:text-3xl">Aspirasi Warga</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90 md:text-base">
                Sampaikan keluhan, masukan, atau laporan terkait pelayanan dan
                kondisi lingkungan desa. Partisipasi Anda membantu pemerintah desa
                lebih responsif.
              </p>
              <p className="mt-3 flex items-center gap-2 text-xs text-white/75">
                <ShieldCheck className="h-4 w-4 shrink-0 text-accent" />
                Data NIK Anda dilindungi dan tidak dipublikasikan.
              </p>
            </div>

            <Button
              variant="accent"
              size="lg"
              className="h-12 w-full gap-2 px-8 text-base shadow-lg lg:w-auto"
              onClick={() => setOpen(true)}
            >
              Kirim Aspirasi
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="relative mt-8 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm md:p-5">
            <label
              htmlFor="cek-nik"
              className="text-sm font-semibold text-white"
            >
              Cek status aspirasi dengan NIK
            </label>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <input
                id="cek-nik"
                type="text"
                inputMode="numeric"
                maxLength={16}
                value={cekNik}
                onChange={(e) => setCekNik(e.target.value.replace(/\D/g, ""))}
                placeholder="Masukkan 16 digit NIK"
                className="flex-1 rounded-lg border-0 bg-white px-3 py-2.5 text-sm text-foreground shadow-inner focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button
                type="button"
                className="gap-2 bg-white text-primary hover:bg-white/90 shrink-0"
              >
                <Search className="h-4 w-4" />
                Cek Status
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
      <AspirasiModal open={open} onClose={() => setOpen(false)} />
    </SectionShell>
  );
}
