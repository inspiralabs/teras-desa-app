"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Home, UserRound, UserRoundCheck } from "lucide-react";
import { m, useInView } from "motion/react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { STATISTIK_DESA } from "@/lib/mock-data/statistik";

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}

function StatCard({
  icon: Icon,
  label,
  target,
  active,
}: {
  icon: typeof Users;
  label: string;
  target: number;
  active: boolean;
}) {
  const count = useCountUp(target, active);

  return (
    <div className="rounded-2xl border border-mid-gray/30 bg-white p-6 text-center shadow-[var(--shadow-card)]">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-light">
        <Icon className="h-6 w-6 text-primary" aria-hidden />
      </div>
      <p className="mt-4 text-3xl font-bold tabular-nums text-primary md:text-4xl">
        {count.toLocaleString("id-ID")}
      </p>
      <p className="mt-2 text-sm font-medium text-dark-gray">{label}</p>
    </div>
  );
}

export function CounterStatistikSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionShell>
      <FadeIn>
        <SectionHeader
          title="Statistik Desa"
          subtitle={`Data kependudukan Desa Bojongkulur — Per ${STATISTIK_DESA.diperbarui}`}
        />
        <m.div
          ref={ref}
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <StatCard
            icon={Users}
            label="Total Penduduk"
            target={STATISTIK_DESA.totalPenduduk}
            active={inView}
          />
          <StatCard
            icon={Home}
            label="Kepala Keluarga"
            target={STATISTIK_DESA.kepalaKeluarga}
            active={inView}
          />
          <StatCard
            icon={UserRound}
            label="Laki-laki"
            target={STATISTIK_DESA.lakiLaki}
            active={inView}
          />
          <StatCard
            icon={UserRoundCheck}
            label="Perempuan"
            target={STATISTIK_DESA.perempuan}
            active={inView}
          />
        </m.div>
      </FadeIn>
    </SectionShell>
  );
}
