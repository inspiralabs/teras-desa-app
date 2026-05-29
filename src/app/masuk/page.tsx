"use client";

import { useState } from "react";
import { toast } from "sonner";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/button";

export default function MasukPage() {
  const [attempts, setAttempts] = useState(0);

  return (
    <PageContentBoundary>
    <SectionShell className="py-16">
      <div className="mx-auto max-w-md">
        <SectionCard>
          <h1 className="text-2xl font-bold text-primary">Masuk</h1>
          <p className="mt-2 text-sm text-dark-gray">
            Akses terbatas untuk Perangkat Desa Bojongkulur
          </p>
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (attempts >= 5) {
                toast.error("Akun dikunci 15 menit karena terlalu banyak percobaan");
                return;
              }
              setAttempts((a) => a + 1);
              toast.error(
                `Username atau password salah. Sisa percobaan: ${5 - attempts - 1}`
              );
            }}
          >
            <input
              className="w-full rounded-lg border border-mid-gray px-3 py-2 text-sm"
              placeholder="Username"
              required
            />
            <input
              className="w-full rounded-lg border border-mid-gray px-3 py-2 text-sm"
              type="password"
              placeholder="Password"
              required
            />
            <Button type="submit" className="w-full">
              Masuk
            </Button>
          </form>
          <button type="button" className="mt-4 text-sm text-secondary hover:underline">
            Lupa Password?
          </button>
        </SectionCard>
      </div>
    </SectionShell>
    </PageContentBoundary>
  );
}
