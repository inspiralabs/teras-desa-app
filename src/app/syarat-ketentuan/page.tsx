import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";

export const metadata = { title: "Syarat & Ketentuan" };

export default function SyaratKetentuanPage() {
  return (
    <PageContentBoundary>
      <PageHero title="Syarat & Ketentuan" />
      <SectionShell className="pt-0">
        <SectionCard className="prose prose-sm max-w-none text-dark-gray">
          <p>
            Dengan menggunakan website SIGAP DESA, Anda setuju menggunakan layanan
            ini secara bertanggung jawab dan hanya untuk keperluan yang sah
            terkait layanan publik desa.
          </p>
          <p className="mt-4">
            Informasi yang disampaikan harus benar. Penyalahgunaan formulir
            aspirasi, polling, atau pengajuan surat dapat ditindak sesuai
            peraturan yang berlaku.
          </p>
        </SectionCard>
      </SectionShell>
    </PageContentBoundary>
  );
}
