"use client";

import Link from "next/link";
import { Megaphone, ShieldCheck, TrendingUp } from "lucide-react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ASPIRASI_BULAN_INI,
  ASPIRASI_STATISTIK,
} from "@/lib/mock-data/statistik";

export function AspirasiParticipationBlock({
  onKirimAspirasi,
  compact,
}: {
  onKirimAspirasi?: () => void;
  compact?: boolean;
}) {
  const total = ASPIRASI_STATISTIK.reduce((s, x) => s + x.value, 0);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-primary via-primary to-secondary p-5 shadow-[var(--shadow-card-hover)] md:p-6">
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/20 blur-2xl"
        aria-hidden
      />
      <div
        className={cn(
          "relative grid gap-6",
          compact ? "lg:grid-cols-[1fr_220px]" : "lg:grid-cols-[1fr_260px] lg:items-center"
        )}
      >
        <div className="text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            <Megaphone className="h-3.5 w-3.5" />
            Suara Anda Penting
          </div>
          <h2 className="mt-3 text-xl font-bold md:text-2xl">Statistik Aspirasi Warga</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/90">
            Ringkasan status aspirasi yang masuk — diterima, sedang diproses, dan
            selesai ditindaklanjuti.
          </p>
          <p className="mt-2 flex items-center gap-2 text-xs text-white/75">
            <ShieldCheck className="h-4 w-4 shrink-0 text-accent" />
            Data NIK dilindungi dan tidak dipublikasikan.
          </p>
          <div className="mt-4 inline-flex max-w-full items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm text-white/90">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/15">
              <TrendingUp className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
            </span>
            <span>
              <span className="font-semibold text-accent">
                {ASPIRASI_BULAN_INI.ditindaklanjuti}
              </span>{" "}
              ditindaklanjuti · {ASPIRASI_BULAN_INI.bulan}
            </span>
          </div>
          <ul className="mt-4 flex flex-wrap gap-3 text-xs text-white/85">
            {ASPIRASI_STATISTIK.map((s) => (
              <li
                key={s.name}
                className="rounded-md bg-white/10 px-2.5 py-1.5"
              >
                <span className="font-semibold text-white">{s.name}:</span>{" "}
                {s.value} ({Math.round((s.value / total) * 100)}%)
              </li>
            ))}
          </ul>
          {onKirimAspirasi ? (
            <Button
              variant="accent"
              className="mt-4 gap-1.5"
              onClick={onKirimAspirasi}
            >
              Kirim Aspirasi
            </Button>
          ) : (
            <Button variant="accent" className="mt-4" asChild>
              <Link href="/polling-aspirasi?tab=aspirasi">Kirim Aspirasi</Link>
            </Button>
          )}
        </div>

        <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
          <p className="text-center text-xs font-semibold text-white">
            Distribusi status (mock)
          </p>
          <div className="mt-2 h-44 w-full md:h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[...ASPIRASI_STATISTIK]}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={36}
                  outerRadius={64}
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
                  wrapperStyle={{ fontSize: 10, color: "#fff" }}
                  formatter={(value) => (
                    <span style={{ color: "rgba(255,255,255,0.9)" }}>{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
