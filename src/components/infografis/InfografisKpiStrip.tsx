import { Activity, ExternalLink, Home, MapPinned, Users } from "lucide-react";
import { BESTIE_KONDISI_UMUM, BESTIE_META } from "@/lib/mock-data/bestie-prodeskel";
import { cn } from "@/lib/utils";

const items = [
  {
    label: "Luas Wilayah",
    value: BESTIE_KONDISI_UMUM.luasHa.toLocaleString("id-ID", {
      maximumFractionDigits: 2,
    }),
    unit: "hektar",
    Icon: MapPinned,
    accent: "from-primary/10 to-primary/5 border-primary/20",
    iconBg: "bg-primary/15 text-primary",
  },
  {
    label: "Jumlah Keluarga",
    value: BESTIE_KONDISI_UMUM.jumlahKeluarga.toLocaleString("id-ID"),
    unit: "Kepala Keluarga",
    Icon: Home,
    accent: "from-secondary/10 to-secondary/5 border-secondary/25",
    iconBg: "bg-secondary/15 text-secondary",
  },
  {
    label: "Jumlah Penduduk",
    value: BESTIE_KONDISI_UMUM.jumlahPenduduk.toLocaleString("id-ID"),
    unit: "jiwa",
    Icon: Users,
    accent: "from-accent/15 to-accent/5 border-accent/30",
    iconBg: "bg-accent/20 text-primary",
  },
  {
    label: "Kepadatan Penduduk",
    value: BESTIE_KONDISI_UMUM.kepadatan.toLocaleString("id-ID", {
      maximumFractionDigits: 2,
    }),
    unit: "jiwa / hektar",
    Icon: Activity,
    accent: "from-light to-white border-mid-gray/30",
    iconBg: "bg-light text-primary",
  },
] as const;

export function InfografisKpiStrip() {
  return (
    <section
      className="mb-6 overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-white via-light/80 to-light shadow-[var(--shadow-card)]"
      aria-labelledby="kondisi-umum-heading"
    >
      <div className="border-b border-primary/10 bg-primary px-4 py-4 md:px-6 md:py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-white/80">
              Kondisi Umum Wilayah
            </p>
            <h2
              id="kondisi-umum-heading"
              className="mt-1 text-lg font-bold text-white md:text-xl"
            >
              Desa Bojongkulur
            </h2>
          </div>
          <span className="inline-flex w-fit items-center rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">
            {BESTIE_META.klasifikasi}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-4 md:p-6">
        {items.map((item) => (
          <article
            key={item.label}
            className={cn(
              "flex gap-3 rounded-xl border bg-gradient-to-br p-4 transition-shadow hover:shadow-md",
              item.accent
            )}
          >
            <span
              className={cn(
                "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                item.iconBg
              )}
              aria-hidden
            >
              <item.Icon className="h-5 w-5" strokeWidth={2} />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-medium text-dark-gray">{item.label}</p>
              <p className="mt-1 text-2xl font-bold leading-none text-primary tabular-nums md:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 text-xs text-dark-gray/90">{item.unit}</p>
            </div>
          </article>
        ))}
      </div>

      <footer className="flex flex-col gap-2 border-t border-mid-gray/20 bg-light-gray/40 px-4 py-3 text-xs text-dark-gray sm:flex-row sm:items-center sm:justify-between md:px-6">
        <p>
          <span className="font-semibold text-primary">Sumber:</span>{" "}
          {BESTIE_META.sumber}
        </p>
        <a
          href={BESTIE_META.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-secondary hover:underline"
        >
          Bestie Kab. Bogor
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
      </footer>
    </section>
  );
}
