"use client";

import { useState } from "react";
import { Megaphone, ShieldCheck, ArrowRight, TrendingUp } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { AspirasiModal } from "@/components/floating/AspirasiModal";
import {
  ASPIRASI_BULAN_INI,
  ASPIRASI_STATISTIK,
} from "@/lib/mock-data/statistik";

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

          <div className="relative grid gap-8 lg:grid-cols-[1fr_280px] lg:items-center">
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

              <div className="mt-6 flex flex-col gap-3 border-t border-white/15 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <div className="inline-flex max-w-full items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm text-white/90">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/15"
                    aria-hidden
                  >
                    <TrendingUp
                      className="h-3.5 w-3.5 text-accent"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                  </span>
                  <span>
                    <span className="font-semibold text-accent">
                      {ASPIRASI_BULAN_INI.ditindaklanjuti}
                    </span>{" "}
                    aspirasi ditindaklanjuti · {ASPIRASI_BULAN_INI.bulan}
                  </span>
                </div>
                <Button
                  variant="accent"
                  className="h-10 shrink-0 gap-1.5 px-5 text-sm shadow-md sm:ml-4"
                  onClick={() => setOpen(true)}
                >
                  Kirim Aspirasi
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-center text-sm font-semibold text-white">
                Statistik Aspirasi (mock)
              </p>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[...ASPIRASI_STATISTIK]}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={70}
                      paddingAngle={2}
                    >
                      {ASPIRASI_STATISTIK.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        borderRadius: 8,
                        border: "none",
                        fontSize: 12,
                      }}
                    />
                    <Legend
                      wrapperStyle={{ fontSize: 11, color: "#fff" }}
                      formatter={(value) => (
                        <span style={{ color: "rgba(255,255,255,0.9)" }}>{value}</span>
                      )}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="relative mt-8 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm md:p-5">
            <label htmlFor="cek-nik" className="text-sm font-semibold text-white">
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
                asChild
                className="gap-2 bg-white text-primary hover:bg-white/90 shrink-0"
              >
                <a href="/polling-aspirasi?tab=status">Cek Status</a>
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
      <AspirasiModal open={open} onClose={() => setOpen(false)} />
    </SectionShell>
  );
}
