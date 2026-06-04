"use client";

import Link from "next/link";
import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { toast } from "sonner";
import { DESA } from "@/lib/constants";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";

const WA_NUMBER = "62827171919";

type KontakItem = {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const kontakItems: KontakItem[] = [
  {
    icon: MapPin,
    label: "Alamat Kantor",
    value: DESA.alamat,
    href: DESA.mapsUrl,
    external: true,
  },
  {
    icon: Phone,
    label: "Telepon",
    value: DESA.telepon,
    href: `tel:${DESA.telepon.replace(/\D/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: DESA.email,
    href: `mailto:${DESA.email}`,
  },
  {
    icon: Clock,
    label: "Jam Pelayanan",
    value: DESA.jamPelayanan,
  },
];

export function KontakPageContent() {
  return (
    <PageContentBoundary>
      <PageHero
        title="Kontak"
        description="Hubungi Pemerintah Desa Bojongkulur — kami siap membantu layanan dan informasi desa."
      />

      <SectionShell className="pt-0">
        <FadeIn>
          <div className="overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-primary via-primary to-secondary p-5 text-white shadow-[var(--shadow-card-hover)] md:p-6">
            <p className="text-sm font-medium text-white/85">
              Pusat layanan informasi desa
            </p>
            <h2 className="mt-1 text-xl font-bold md:text-2xl">Desa {DESA.nama}</h2>
            <p className="mt-1 text-sm text-white/90">
              Kec. {DESA.kecamatan}, Kab. {DESA.kabupaten}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                asChild
                variant="accent"
                size="sm"
                className="gap-2 font-semibold text-primary"
              >
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo, saya ingin bertanya layanan desa.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-white/40 bg-white/10 text-white hover:bg-white/20"
              >
                <a href={DESA.mapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin className="h-4 w-4" />
                  Google Maps
                </a>
              </Button>
            </div>
          </div>
        </FadeIn>

        <div className="mt-6 grid gap-5 lg:grid-cols-2 lg:items-stretch">
          <FadeIn className="flex min-h-0">
            <div className="flex w-full flex-col gap-4">
              <div className="grid gap-3 sm:grid-cols-2">
                {kontakItems.map(({ icon: Icon, label, value, href, external }) => (
                  <SectionCard
                    key={label}
                    className="flex gap-3 border-primary/10 p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-dark-gray">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className="mt-0.5 block text-sm font-medium leading-snug text-primary hover:text-secondary"
                        >
                          {value}
                          {external ? (
                            <ExternalLink className="ml-1 inline h-3 w-3" />
                          ) : null}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium text-primary">
                          {value}
                        </p>
                      )}
                    </div>
                  </SectionCard>
                ))}
              </div>

              <SectionCard className="flex min-h-0 flex-1 flex-col overflow-hidden p-0">
                <div className="shrink-0 border-b border-mid-gray/25 bg-light px-4 py-2.5">
                  <h2 className="text-sm font-bold text-primary">Lokasi Kantor Desa</h2>
                </div>
                <div className="relative min-h-[200px] flex-1 lg:min-h-[220px]">
                  <iframe
                    title="Peta Kantor Desa Bojongkulur"
                    src={DESA.mapsEmbed}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </SectionCard>
            </div>
          </FadeIn>

          <FadeIn className="flex min-h-0">
            <SectionCard className="flex h-full w-full flex-col">
              <h2 className="text-lg font-bold text-primary">Hubungi Kami</h2>
              <p className="mt-1 text-sm text-dark-gray">
                Isi formulir — tim desa menindaklanjuti pada jam pelayanan.
              </p>
              <form
                className="mt-5 flex flex-1 flex-col gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success(
                    "Pesan terkirim. Terima kasih telah menghubungi kami."
                  );
                }}
              >
                <div>
                  <label
                    htmlFor="kontak-nama"
                    className="text-sm font-medium text-primary"
                  >
                    Nama lengkap
                  </label>
                  <input
                    id="kontak-nama"
                    className="mt-1 h-10 w-full rounded-lg border border-mid-gray/50 px-3 text-sm focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/25"
                    placeholder="Nama sesuai KTP"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="kontak-email"
                    className="text-sm font-medium text-primary"
                  >
                    Email
                  </label>
                  <input
                    id="kontak-email"
                    type="email"
                    className="mt-1 h-10 w-full rounded-lg border border-mid-gray/50 px-3 text-sm focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/25"
                    placeholder="nama@email.com"
                    required
                  />
                </div>
                <div className="flex min-h-0 flex-1 flex-col">
                  <label
                    htmlFor="kontak-pesan"
                    className="text-sm font-medium text-primary"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="kontak-pesan"
                    className="mt-1 min-h-[88px] flex-1 w-full resize-none rounded-lg border border-mid-gray/50 px-3 py-2 text-sm focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/25 lg:min-h-[100px]"
                    rows={3}
                    placeholder="Tuliskan pertanyaan atau laporan Anda..."
                    required
                  />
                </div>
                <Button type="submit" className="mt-1 w-full shrink-0">
                  Kirim Pesan
                </Button>
              </form>
              <p className="mt-3 shrink-0 text-center text-xs text-dark-gray">
                Respons cepat?{" "}
                <Link
                  href={`https://wa.me/${WA_NUMBER}`}
                  className="font-medium text-secondary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </Link>
              </p>
            </SectionCard>
          </FadeIn>
        </div>
      </SectionShell>
    </PageContentBoundary>
  );
}
