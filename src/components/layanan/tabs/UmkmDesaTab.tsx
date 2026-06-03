"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageCircle, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  UMKM_KATEGORI,
  UMKM_PAGE_SIZE,
  umkmProdukList,
  umkmTokoList,
  type UmkmToko,
} from "@/lib/mock-data/umkm";
import { UmkmTokoDetailModal } from "@/components/layanan/UmkmTokoDetailModal";
import { formatRupiah, inputClassName, isUmkmOpen } from "@/lib/layanan-utils";
import { cn } from "@/lib/utils";

export function UmkmDesaTab() {
  const [kategori, setKategori] = useState<string>("Semua");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [tokoModal, setTokoModal] = useState<UmkmToko | null>(null);

  const openToko = (tokoId: string) => {
    const t = umkmTokoList.find((x) => x.id === tokoId);
    if (t) setTokoModal(t);
  };

  const produkTokoModal = tokoModal
    ? umkmProdukList.filter((p) => p.tokoId === tokoModal.id)
    : [];

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return umkmProdukList.filter((p) => {
      const matchKategori = kategori === "Semua" || p.kategori === kategori;
      const matchSearch =
        !q ||
        p.namaToko.toLowerCase().includes(q) ||
        p.namaProduk.toLowerCase().includes(q);
      return matchKategori && matchSearch;
    });
  }, [kategori, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / UMKM_PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (safePage - 1) * UMKM_PAGE_SIZE,
    safePage * UMKM_PAGE_SIZE
  );

  const resetPage = () => setPage(1);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-primary">UMKM Desa</h3>
        <p className="mt-1 text-sm text-dark-gray">
          Katalog produk UMKM Bojongkulur — {umkmProdukList.length} produk dari{" "}
          {new Set(umkmProdukList.map((p) => p.tokoId)).size} toko.
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-dark-gray" />
          <input
            className={`${inputClassName} pl-10`}
            placeholder="Cari nama toko atau produk..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              resetPage();
            }}
            aria-label="Cari UMKM"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {UMKM_KATEGORI.map((kat) => (
            <button
              key={kat}
              type="button"
              onClick={() => {
                setKategori(kat);
                resetPage();
              }}
              className={cn(
                "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                kategori === kat
                  ? "bg-primary text-white"
                  : "border border-primary/20 text-primary hover:bg-light"
              )}
            >
              {kat}
            </button>
          ))}
        </div>
      </div>

      {pageItems.length === 0 ? (
        <p className="rounded-lg border border-dashed border-mid-gray/60 px-4 py-12 text-center text-sm text-dark-gray">
          Tidak ada produk yang cocok dengan filter pencarian.
        </p>
      ) : (
        <>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {pageItems.map((p) => {
              const buka = isUmkmOpen(p.bukaJam, p.tutupJam);
              return (
                <article
                  key={p.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-mid-gray/30 bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="relative aspect-square bg-light-gray">
                    <Image
                      src={p.gambar}
                      alt={p.namaProduk}
                      fill
                      className="object-cover transition group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    {buka && (
                      <Badge
                        variant="success"
                        className="absolute left-2 top-2 text-[10px] shadow-sm"
                      >
                        Buka Sekarang
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-3">
                    <Badge className="w-fit text-[10px]">{p.kategori}</Badge>
                    <p className="mt-1.5 line-clamp-2 text-sm font-semibold text-primary">
                      {p.namaProduk}
                    </p>
                    <button
                      type="button"
                      onClick={() => openToko(p.tokoId)}
                      className="mt-0.5 text-left text-xs font-medium text-secondary underline-offset-2 hover:text-primary hover:underline"
                    >
                      {p.namaToko}
                    </button>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-dark-gray">
                      {p.deskripsi}
                    </p>
                    <p className="mt-2 text-sm font-bold text-accent">
                      {p.harga === 0 ? "Gratis" : formatRupiah(p.harga)}
                    </p>
                    <Button
                      asChild
                      variant="whatsapp"
                      className="mt-auto w-full pt-3"
                      size="sm"
                    >
                      <a
                        href={`https://wa.me/${p.whatsapp}?text=${encodeURIComponent(`Halo ${p.namaToko}, saya tertarik dengan ${p.namaProduk}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 pt-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={safePage <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                <ChevronLeft className="h-4 w-4" />
                Sebelumnya
              </Button>
              <span className="text-sm text-dark-gray">
                Halaman {safePage} dari {totalPages}
              </span>
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={safePage >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              >
                Selanjutnya
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </>
      )}
      <UmkmTokoDetailModal
        toko={tokoModal}
        produk={produkTokoModal}
        open={!!tokoModal}
        onClose={() => setTokoModal(null)}
      />
    </div>
  );
}
