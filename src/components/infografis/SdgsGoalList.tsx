import { INFOGRAFIS_META } from "@/lib/mock-data/infografis";

export function SdgsGoalList({
  goals,
}: {
  goals: readonly {
    no: number;
    tujuan: string;
    capaian: number;
    targetNasional: number;
  }[];
}) {
  return (
    <div className="rounded-2xl border border-mid-gray/40 bg-white p-4 shadow-[var(--shadow-card)] md:p-6">
      <p className="text-xs text-dark-gray">
        Sumber: {INFOGRAFIS_META.sumberDefault} · Diperbarui: {INFOGRAFIS_META.diperbarui}
      </p>
      <ul className="mt-4 max-h-[min(70vh,640px)] space-y-4 overflow-y-auto pr-1">
        {goals.map((goal) => (
          <li key={goal.no}>
            <div className="flex items-start justify-between gap-2 text-sm">
              <span className="font-medium text-primary">
                <span className="mr-2 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold">
                  {goal.no}
                </span>
                {goal.tujuan}
              </span>
              <span className="shrink-0 text-right text-xs">
                <span className="font-bold text-primary">{goal.capaian}%</span>
                <span className="block text-dark-gray">Target {goal.targetNasional}%</span>
              </span>
            </div>
            <div className="relative mt-2 h-2.5 overflow-hidden rounded-full bg-light-gray">
              <div
                className="absolute inset-y-0 left-0 rounded-full border-r-2 border-dashed border-mid-gray/60 bg-mid-gray/25"
                style={{ width: `${goal.targetNasional}%` }}
                aria-hidden
              />
              <div
                className="relative h-full rounded-full bg-primary"
                style={{ width: `${goal.capaian}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
