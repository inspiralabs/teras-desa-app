import { FadeIn } from "@/components/motion/FadeIn";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { Card, CardContent } from "@/components/ui/card";
import { DESA } from "@/lib/constants";

export const metadata = { title: "Desa Kami" };

export default function DesaKamiPage() {
  return (
    <PageContentBoundary>
      <PageHero
        title="Desa Kami"
        description={`Profil, visi-misi, dan struktur Pemerintah Desa ${DESA.nama}.`}
      />
      <SectionShell className="pt-0" innerClassName="space-y-6">
        <FadeIn>
          <SectionCard>
            <h2 className="text-2xl font-bold text-primary">Profil</h2>
            <p className="mt-4 leading-relaxed text-dark-gray">
              Desa Bojongkulur terletak di Kecamatan Gunung Putri, Kabupaten Bogor,
              Provinsi Jawa Barat. Desa ini memiliki potensi wisata, UMKM, dan
              kepadatan penduduk yang terus berkembang. SIGAP DESA hadir untuk
              mendekatkan layanan administrasi dan informasi kepada seluruh warga.
            </p>
          </SectionCard>
        </FadeIn>

        <FadeIn>
          <Card className="border-0 bg-primary text-white shadow-[var(--shadow-card-hover)]">
            <CardContent className="py-8">
              <h2 className="text-xl font-bold">Visi</h2>
              <p className="mt-2 text-white/90">
                Desa Bojongkulur yang maju, mandiri, dan sejahtera melalui tata
                kelola pemerintahan yang baik dan partisipasi aktif warga.
              </p>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn>
          <SectionCard>
            <h2 className="text-2xl font-bold text-primary">Misi</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-dark-gray">
              <li>Meningkatkan kualitas pelayanan publik yang transparan dan akuntabel.</li>
              <li>Memberdayakan ekonomi warga melalui UMKM dan potensi wisata.</li>
              <li>Mewujudkan tata kelola desa berbasis data dan partisipasi masyarakat.</li>
            </ol>
          </SectionCard>
        </FadeIn>

        <FadeIn>
          <SectionCard>
            <h2 className="text-2xl font-bold text-primary">Struktur Organisasi</h2>
            <p className="mb-4 text-sm text-dark-gray md:hidden">
              Geser ke kanan untuk melihat selengkapnya ›
            </p>
            <div className="overflow-x-auto">
              <div className="flex min-w-[600px] flex-col items-center gap-4 py-4">
                <Card className="w-48 text-center shadow-[var(--shadow-card)]">
                  <CardContent className="pt-4">
                    <p className="font-bold text-primary">{DESA.kepalaDesa}</p>
                    <p className="text-sm">Kepala Desa</p>
                  </CardContent>
                </Card>
                <Card className="w-48 text-center shadow-[var(--shadow-card)]">
                  <CardContent className="pt-4">
                    <p className="font-bold">Sekretaris Desa</p>
                    <p className="text-sm text-dark-gray">Sekretaris</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </SectionCard>
        </FadeIn>
      </SectionShell>
    </PageContentBoundary>
  );
}
