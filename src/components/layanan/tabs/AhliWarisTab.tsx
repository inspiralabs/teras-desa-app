"use client";

import { useState } from "react";
import { Download, Eye, FileText } from "lucide-react";
import { toast } from "sonner";
import { AnimatedModal } from "@/components/motion/AnimatedModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  templateAhliWaris,
  type TemplateAhliWaris,
} from "@/lib/mock-data/layanan";

export function AhliWarisTab() {
  const [preview, setPreview] = useState<TemplateAhliWaris | null>(null);

  return (
    <div className="space-y-6">
      <Card className="border-secondary/30 bg-light/40">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-primary">Cara Pengisian & Penyerahan</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-dark-gray">
            <li>Unduh template surat yang sesuai kebutuhan Anda.</li>
            <li>Isi formulir lengkap dengan data ahli waris dan almarhum/almarhumah.</li>
            <li>Siapkan fotokopi KTP/KK seluruh ahli waris dan akta kematian.</li>
            <li>Serahkan berkas yang sudah ditandatangani ke balai desa pada jam pelayanan.</li>
            <li>Petugas desa akan memverifikasi dan menerbitkan surat resmi setelah lengkap.</li>
          </ol>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {templateAhliWaris.map((tpl) => (
          <Card key={tpl.id} className="flex flex-col">
            <CardContent className="flex flex-1 flex-col pt-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-light text-primary">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-primary">{tpl.judul}</h3>
              <p className="mt-2 flex-1 text-sm text-dark-gray">{tpl.deskripsi}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="gap-1"
                  onClick={() => setPreview(tpl)}
                >
                  <Eye className="h-3.5 w-3.5" />
                  Pratinjau PDF
                </Button>
                <Button
                  type="button"
                  size="sm"
                  className="gap-1"
                  onClick={() =>
                    toast.success(`${tpl.fileName} siap diunduh (mock)`)
                  }
                >
                  <Download className="h-3.5 w-3.5" />
                  Unduh
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AnimatedModal
        open={!!preview}
        onClose={() => setPreview(null)}
        title={preview?.judul}
        className="max-w-lg"
      >
        {preview && (
          <div className="space-y-4">
            <div className="flex aspect-[3/4] items-center justify-center rounded-lg border border-dashed border-mid-gray bg-light-gray/60 p-6 text-center">
              <div>
                <FileText className="mx-auto h-12 w-12 text-secondary" />
                <p className="mt-3 text-sm font-medium text-primary">
                  Pratinjau {preview.fileName}
                </p>
                <p className="mt-1 text-xs text-dark-gray">
                  Dokumen PDF resmi desa akan tersedia setelah integrasi backend.
                </p>
              </div>
            </div>
            <p className="text-sm text-dark-gray">{preview.deskripsi}</p>
            <Button
              className="w-full gap-1"
              onClick={() => toast.success(`${preview.fileName} diunduh (mock)`)}
            >
              <Download className="h-4 w-4" />
              Unduh Template
            </Button>
          </div>
        )}
      </AnimatedModal>
    </div>
  );
}
