import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";

export const metadata = { title: "Kebijakan Privasi" };

export default function KebijakanPrivasiPage() {
  return (
    <PageContentBoundary>
      <PageHero title="Kebijakan Privasi" />
      <SectionShell className="pt-0">
        <SectionCard className="prose prose-sm max-w-none text-dark-gray">
          <p>
            Pemerintah Desa Bojongkulur berkomitmen melindungi data pribadi warga
            yang disampaikan melalui SIGAP DESA. NIK, nomor telepon, dan data
            sensitif lainnya dienkripsi dan tidak dipublikasikan.
          </p>
          <p className="mt-4">
            Data hanya digunakan untuk keperluan pelayanan administrasi, aspirasi,
            dan komunikasi resmi dari pemerintah desa.
          </p>
        </SectionCard>
      </SectionShell>
    </PageContentBoundary>
  );
}
