"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Star, ThumbsDown, ThumbsUp } from "lucide-react";
import { toast } from "sonner";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";
import { ULASAN_WISATA } from "@/lib/mock-data/wisata";
import { cn } from "@/lib/utils";

export function WisataReviewsSection() {
  const [ulasan, setUlasan] = useState(ULASAN_WISATA);
  const [ratingBaru, setRatingBaru] = useState(5);
  const [komentarBaru, setKomentarBaru] = useState("");

  const published = ulasan.filter((u) => u.status === "published");

  const kirimUlasan = () => {
    if (!komentarBaru.trim()) {
      toast.error("Isi komentar ulasan");
      return;
    }
    setUlasan((prev) => [
      {
        id: `new-${Date.now()}`,
        nama: "Anda",
        rating: ratingBaru,
        komentar: komentarBaru.trim(),
        tanggal: format(new Date(), "yyyy-MM-dd"),
        likes: 0,
        dislikes: 0,
        status: "pending" as const,
      },
      ...prev,
    ]);
    setKomentarBaru("");
    toast.success("Ulasan masuk antrian moderasi admin (mock)");
  };

  return (
    <FadeIn>
      <section
        id="ulasan"
        className="rounded-2xl border border-mid-gray/35 bg-white p-5 shadow-[var(--shadow-card)] md:p-6"
      >
        <h2 className="text-xl font-bold text-primary">Ulasan Pengunjung</h2>
        <p className="mt-1 text-sm text-dark-gray">
          {published.length} ulasan ditampilkan · moderasi admin
        </p>

        <ul className="mt-5 space-y-3">
          {published.map((u) => (
            <li
              key={u.id}
              className="rounded-xl border border-mid-gray/25 bg-light/40 p-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                  aria-hidden
                >
                  {u.nama
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-primary">{u.nama}</p>
                  <p className="text-xs text-dark-gray">{u.tanggal}</p>
                </div>
                <div className="flex shrink-0" aria-label={`Rating ${u.rating} dari 5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-3.5 w-3.5",
                        i < u.rating ? "fill-accent text-accent" : "text-mid-gray"
                      )}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-dark-gray">
                {u.komentar}
              </p>
              <div className="mt-2 flex gap-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-xs text-dark-gray hover:text-primary"
                >
                  <ThumbsUp className="h-3.5 w-3.5" /> {u.likes}
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-xs text-dark-gray hover:text-primary"
                >
                  <ThumbsDown className="h-3.5 w-3.5" /> {u.dislikes}
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-mid-gray/25 pt-6">
          <h3 className="font-semibold text-primary">Tulis ulasan</h3>
          <div className="mt-2 flex gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setRatingBaru(n)}
                aria-label={`Rating ${n}`}
                className="rounded p-0.5 transition hover:scale-105"
              >
                <Star
                  className={cn(
                    "h-6 w-6",
                    n <= ratingBaru ? "fill-accent text-accent" : "text-mid-gray"
                  )}
                />
              </button>
            ))}
          </div>
          <textarea
            className="mt-3 w-full rounded-lg border border-mid-gray/50 px-3 py-2 text-sm focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/25"
            rows={3}
            placeholder="Ceritakan pengalaman Anda..."
            value={komentarBaru}
            onChange={(e) => setKomentarBaru(e.target.value)}
          />
          <Button type="button" className="mt-3" variant="outline" onClick={kirimUlasan}>
            Kirim Ulasan
          </Button>
          <p className="mt-2 text-xs text-dark-gray">
            Ulasan baru masuk antrian moderasi sebelum ditayangkan.
          </p>
        </div>
      </section>
    </FadeIn>
  );
}
