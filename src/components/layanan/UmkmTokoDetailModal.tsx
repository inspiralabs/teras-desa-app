"use client";

import Image from "next/image";
import { Clock, MapPin, MessageCircle } from "lucide-react";
import { AnimatedModal } from "@/components/motion/AnimatedModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { UmkmProduk, UmkmToko } from "@/lib/mock-data/umkm";
import { formatRupiah, isUmkmOpen } from "@/lib/layanan-utils";

export function UmkmTokoDetailModal({
  toko,
  produk,
  open,
  onClose,
}: {
  toko: UmkmToko | null;
  produk: UmkmProduk[];
  open: boolean;
  onClose: () => void;
}) {
  if (!toko) return null;

  const buka = isUmkmOpen(toko.bukaJam, toko.tutupJam);
  const mapsUrl = `https://www.google.com/maps?q=${toko.lat},${toko.lng}`;
  const embedUrl = `https://maps.google.com/maps?q=${toko.lat},${toko.lng}&hl=id&z=15&output=embed`;

  return (
    <AnimatedModal
      open={open}
      onClose={onClose}
      title={toko.namaToko}
      className="max-w-2xl"
    >
      <div className="relative -mt-2 mb-4 aspect-video overflow-hidden rounded-lg">
        <Image
          src={toko.gambarToko}
          alt={toko.namaToko}
          fill
          className="object-cover"
          sizes="600px"
        />
        {buka && (
          <Badge variant="success" className="absolute left-2 top-2">
            Buka Sekarang
          </Badge>
        )}
      </div>

      <Badge className="mb-2">{toko.kategori}</Badge>
      <p className="text-sm font-medium text-secondary">{toko.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-dark-gray">
        {toko.deskripsi}
      </p>

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-dark-gray">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-4 w-4 text-primary" />
          {toko.bukaJam} – {toko.tutupJam} WIB
        </span>
        <span className="inline-flex items-start gap-1.5">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          {toko.alamat}
        </span>
      </div>

      <div className="mt-4 overflow-hidden rounded-lg border border-mid-gray/30">
        <iframe
          title={`Lokasi ${toko.namaToko}`}
          src={embedUrl}
          className="h-48 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-light px-3 py-2 text-center text-xs font-medium text-primary hover:underline"
        >
          Buka di Google Maps
        </a>
      </div>

      <h3 className="mt-6 text-sm font-bold text-primary">
        Semua Produk ({produk.length})
      </h3>
      <ul className="mt-3 max-h-52 space-y-2 overflow-y-auto">
        {produk.map((p) => (
          <li
            key={p.id}
            className="flex items-center justify-between gap-3 rounded-lg border border-mid-gray/20 px-3 py-2 text-sm"
          >
            <span className="line-clamp-1 font-medium text-primary">
              {p.namaProduk}
            </span>
            <span className="shrink-0 font-semibold text-accent">
              {p.harga === 0 ? "Gratis" : formatRupiah(p.harga)}
            </span>
          </li>
        ))}
      </ul>

      <Button asChild variant="whatsapp" className="mt-6 w-full" size="lg">
        <a
          href={`https://wa.me/${toko.whatsapp}?text=${encodeURIComponent(`Halo ${toko.namaToko}, saya ingin bertanya tentang produk Anda.`)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-5 w-5" />
          Hubungi via WhatsApp
        </a>
      </Button>
    </AnimatedModal>
  );
}
