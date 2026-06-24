"use client";

import { useState } from "react";
import { AnimatedModal } from "@/components/motion/AnimatedModal";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const EMOJI_OPTIONS = [
  { emoji: "😩", label: "Sangat Tidak Puas" },
  { emoji: "😐", label: "Tidak Puas" },
  { emoji: "😀", label: "Cukup Puas" },
  { emoji: "😍", label: "Puas" },
  { emoji: "🥰", label: "Sangat Puas" },
] as const;

const SKALA_LABELS: Record<number, string> = {
  1: "Sangat Tidak Baik",
  2: "Tidak Baik",
  3: "Baik",
  4: "Sangat Baik",
};

const ASPEK = [
  "Kesesuaian informasi layanan dengan kebutuhan",
  "Kemudahan pencarian informasi",
  "Kemudahan penggunaan",
  "Tampilan antarmuka (desain dan layout halaman)",
] as const;

export function PenilaianModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [foundInfo, setFoundInfo] = useState<"ya" | "tidak" | null>(null);
  const [aspekScores, setAspekScores] = useState<Record<string, number>>({});

  const emojiLabel = EMOJI_OPTIONS.find((e) => e.emoji === selectedEmoji)?.label;

  return (
    <AnimatedModal
      open={open}
      onClose={onClose}
      title="Beri Penilaian"
      className="max-w-lg max-h-[90vh] overflow-y-auto"
    >
      <div className="space-y-6">
        <div>
          <p className="text-sm text-dark-gray">
            Seberapa puas Anda dengan website {SITE_NAME}?
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {EMOJI_OPTIONS.map(({ emoji, label }) => (
              <button
                key={emoji}
                type="button"
                title={label}
                onClick={() => setSelectedEmoji(emoji)}
                className={cn(
                  "flex flex-col items-center rounded-xl border-2 p-2 text-3xl transition",
                  selectedEmoji === emoji
                    ? "border-primary bg-light scale-105"
                    : "border-transparent hover:bg-light-gray"
                )}
              >
                <span aria-hidden>{emoji}</span>
              </button>
            ))}
          </div>
          {emojiLabel && (
            <p className="mt-2 text-center text-sm font-medium text-primary">
              {emojiLabel}
            </p>
          )}
        </div>

        <div>
          <p className="text-sm text-dark-gray">
            Apakah Anda dapat menemukan berita/informasi layanan publik/agenda
            yang Anda cari? <span className="text-error">*</span>
          </p>
          <div className="mt-2 flex gap-2">
            {(["ya", "tidak"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setFoundInfo(v)}
                className={cn(
                  "flex-1 rounded-lg border py-2 text-sm font-medium capitalize transition",
                  foundInfo === v
                    ? "border-primary bg-primary text-white"
                    : "border-mid-gray hover:border-secondary"
                )}
              >
                {v === "ya" ? "Ya" : "Tidak"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm text-dark-gray">
            Kritik dan saran Anda untuk website {SITE_NAME}{" "}
            <span className="text-error">*</span>
          </label>
          <textarea
            className="mt-2 w-full rounded-lg border border-mid-gray px-3 py-2 text-sm"
            rows={3}
            placeholder="Tuliskan masukan Anda..."
            required
          />
        </div>

        <div>
          <label className="text-sm text-dark-gray">
            Fitur apa yang Anda inginkan namun belum tersedia di website{" "}
            {SITE_NAME}? <span className="text-error">*</span>
          </label>
          <textarea
            className="mt-2 w-full rounded-lg border border-mid-gray px-3 py-2 text-sm"
            rows={2}
            placeholder="Contoh: notifikasi status layanan, dll."
            required
          />
        </div>

        <div className="space-y-4">
          <p className="text-sm font-medium text-primary">
            Berikan penilaian berdasarkan aspek berikut (1–4):{" "}
            <span className="font-normal text-dark-gray">
              1 = Sangat Tidak Baik, 4 = Sangat Baik
            </span>
          </p>
          {ASPEK.map((aspek) => (
            <div key={aspek}>
              <p className="text-xs text-dark-gray">{aspek} *</p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {[1, 2, 3, 4].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() =>
                      setAspekScores((s) => ({ ...s, [aspek]: n }))
                    }
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border text-sm font-semibold transition",
                      aspekScores[aspek] === n
                        ? "border-primary bg-primary text-white"
                        : "border-mid-gray hover:border-secondary"
                    )}
                  >
                    {n}
                  </button>
                ))}
                {aspekScores[aspek] != null && (
                  <span className="text-sm font-medium text-secondary">
                    {SKALA_LABELS[aspekScores[aspek]]}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <Button
          className="w-full"
          onClick={() => {
            toast.success("Terima kasih atas penilaian Anda");
            onClose();
          }}
        >
          Kirim Penilaian
        </Button>
      </div>
    </AnimatedModal>
  );
}
