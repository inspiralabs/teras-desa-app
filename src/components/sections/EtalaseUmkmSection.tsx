"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { umkmProdukList } from "@/lib/mock-data/umkm";
import { formatRupiah, isUmkmOpen } from "@/lib/layanan-utils";

const PREVIEW = umkmProdukList.slice(0, 6);
const TICKER_ITEMS = [...PREVIEW, ...PREVIEW];

function UmkmPreviewCard({
  produk,
}: {
  produk: (typeof PREVIEW)[number];
}) {
  const open = isUmkmOpen(produk.bukaJam, produk.tutupJam);

  return (
    <div className="w-[220px] shrink-0 overflow-hidden rounded-xl border border-mid-gray/30 bg-white shadow-[var(--shadow-card)]">
      <div className="relative aspect-square">
        <Image
          src={produk.gambar}
          alt={produk.namaProduk}
          fill
          className="object-cover"
          sizes="220px"
        />
        {open && (
          <Badge className="absolute left-2 top-2 bg-success text-white">
            Buka Sekarang
          </Badge>
        )}
      </div>
      <div className="p-3">
        <p className="truncate text-xs text-dark-gray">{produk.namaToko}</p>
        <p className="truncate text-sm font-semibold text-primary">
          {produk.namaProduk}
        </p>
        <p className="mt-1 text-xs font-medium text-accent">
          {formatRupiah(produk.harga)}
        </p>
        <a
          href={`https://wa.me/${produk.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg bg-whatsapp py-2 text-xs font-medium text-white transition hover:opacity-90"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export function EtalaseUmkmSection() {
  return (
    <SectionShell variant="muted">
      <FadeIn>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            title="Etalase UMKM"
            subtitle="Produk unggulan dari pelaku UMKM Desa Bojongkulur"
          />
          <Button asChild variant="secondary" size="sm">
            <Link href="/layanan?tab=umkm">Lihat Semua UMKM</Link>
          </Button>
        </div>

        <div className="relative mt-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-light-gray to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-light-gray to-transparent" />
          <div className="flex w-max animate-[ticker_40s_linear_infinite] gap-4 hover:[animation-play-state:paused]">
            {TICKER_ITEMS.map((produk, i) => (
              <UmkmPreviewCard key={`${produk.id}-${i}`} produk={produk} />
            ))}
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
