"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { m, AnimatePresence } from "motion/react";
import { LayananServiceGrid } from "@/components/layanan/LayananServiceGrid";
import { SectionSkeleton } from "@/components/ui/SectionSkeleton";
import { Button } from "@/components/ui/button";
import { LAYANAN_CARDS, isLayananTabId, type LayananCardId } from "@/lib/layanan-cards";
import { AdminKependudukanTab } from "@/components/layanan/tabs/AdminKependudukanTab";
import { UmkmDesaTab } from "@/components/layanan/tabs/UmkmDesaTab";
import { KesehatanTab } from "@/components/layanan/tabs/KesehatanTab";
import { CekPbbTab } from "@/components/layanan/tabs/CekPbbTab";
import { PenerimaManfaatTab } from "@/components/layanan/tabs/PenerimaManfaatTab";
import { AhliWarisTab } from "@/components/layanan/tabs/AhliWarisTab";

const TAB_CONTENT: Record<LayananCardId, ReactNode> = {
  ktp: <AdminKependudukanTab />,
  umkm: <UmkmDesaTab />,
  kesehatan: <KesehatanTab />,
  pbb: <CekPbbTab />,
  manfaat: <PenerimaManfaatTab />,
  "ahli-waris": <AhliWarisTab />,
};

const LOAD_MS = 480;

export function LayananShell() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const activeTab = isLayananTabId(tabParam) ? tabParam : null;

  const [loading, setLoading] = useState(!!activeTab);
  const [selectingId, setSelectingId] = useState<LayananCardId | null>(null);

  useEffect(() => {
    if (!activeTab) {
      setLoading(false);
      setSelectingId(null);
      return;
    }
    setLoading(true);
    const timer = window.setTimeout(() => setLoading(false), LOAD_MS);
    return () => window.clearTimeout(timer);
  }, [activeTab]);

  const openService = useCallback(
    (id: LayananCardId) => {
      setSelectingId(id);
      window.setTimeout(() => {
        router.push(`/layanan?tab=${id}`, { scroll: false });
      }, 220);
    },
    [router]
  );

  const backToGrid = useCallback(() => {
    router.push("/layanan", { scroll: false });
  }, [router]);

  if (!activeTab) {
    return (
      <div>
        <LayananServiceGrid onSelect={openService} selectingId={selectingId} />
      </div>
    );
  }

  const activeLabel =
    LAYANAN_CARDS.find((c) => c.id === activeTab)?.label ?? "Layanan";

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="gap-1.5 px-2 text-primary"
          onClick={backToGrid}
        >
          <ArrowLeft className="h-4 w-4" />
          Semua Layanan
        </Button>
        <span className="hidden h-4 w-px bg-mid-gray/50 sm:block" aria-hidden />
        <h2 className="text-lg font-semibold text-primary">{activeLabel}</h2>
      </div>

      <AnimatePresence mode="wait">
        {loading ? (
          <m.div
            key={`loading-${activeTab}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <SectionSkeleton variant="layanan-detail" />
          </m.div>
        ) : (
          <m.div
            key={`content-${activeTab}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {TAB_CONTENT[activeTab]}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
