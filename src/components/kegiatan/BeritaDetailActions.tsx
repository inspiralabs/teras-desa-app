"use client";

import { useState } from "react";
import { Heart, Share2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import type { Berita } from "@/lib/mock-data/berita";
import { beritaTerbaru } from "@/lib/mock-data/berita";
import Link from "next/link";

export function BeritaDetailActions({ berita }: { berita: Berita }) {
  const [liked, setLiked] = useState(false);
  const [komentar, setKomentar] = useState("");

  const terkait = beritaTerbaru
    .filter((b) => b.id !== berita.id && b.kategori === berita.kategori)
    .slice(0, 3);

  const share = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      void navigator.share({ title: berita.judul, url }).catch(() => {});
    } else {
      void navigator.clipboard.writeText(url);
      toast.success("Link artikel disalin");
    }
  };

  return (
    <div className="mt-8 space-y-8">
      <div className="flex flex-wrap gap-3">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={() => {
            setLiked((l) => !l);
            toast.success(liked ? "Suka dibatalkan" : "Terima kasih atas apresiasi Anda");
          }}
        >
          <Heart className={liked ? "fill-error text-error h-4 w-4" : "h-4 w-4"} />
          Suka
        </Button>
        <Button type="button" variant="outline" size="sm" className="gap-2" onClick={share}>
          <Share2 className="h-4 w-4" />
          Bagikan
        </Button>
        <Button type="button" variant="outline" size="sm" asChild>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(berita.judul)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WA
          </a>
        </Button>
      </div>

      <div>
        <h2 className="flex items-center gap-2 text-lg font-bold text-primary">
          <MessageCircle className="h-5 w-5" />
          Komentar
        </h2>
        <textarea
          className="mt-3 w-full rounded-lg border border-mid-gray px-3 py-2 text-sm"
          rows={3}
          placeholder="Tulis komentar..."
          value={komentar}
          onChange={(e) => setKomentar(e.target.value)}
        />
        <Button
          type="button"
          className="mt-2"
          size="sm"
          onClick={() => {
            setKomentar("");
            toast.success("Komentar dikirim (mock)");
          }}
        >
          Kirim Komentar
        </Button>
      </div>

      {terkait.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-primary">Artikel Terkait</h2>
          <ul className="mt-3 space-y-2">
            {terkait.map((b) => (
              <li key={b.id}>
                <Link
                  href={`/kegiatan/${b.slug}`}
                  className="text-sm font-medium text-secondary hover:underline"
                >
                  {b.judul}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
