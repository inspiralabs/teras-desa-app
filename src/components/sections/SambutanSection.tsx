import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { FadeIn } from "@/components/motion/FadeIn";
import { DESA } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const SAMBUTAN_RINGKAS =
  "Assalamu'alaikum warahmatullahi wabarakatuh. Puji syukur kita panjatkan ke hadirat Allah SWT. Sebagai Kepala Desa Bojongkulur, saya mengajak seluruh warga untuk memanfaatkan TERAS Desa sebagai tempat e-layanan dan registrasi administrasi sipil — sekaligus ruang komunikasi dengan pemerintah desa. Mari bersama membangun desa yang lebih transparan dan responsif.";

export function SambutanSection() {
  return (
    <SectionShell>
      <FadeIn>
        <SectionCard>
          <div className="grid gap-8 md:grid-cols-[220px_1fr]">
            <div className="relative mx-auto h-56 w-full max-w-[220px] overflow-hidden rounded-xl shadow-[var(--shadow-card)] md:mx-0 md:h-auto md:min-h-[240px]">
              <Image
                src={IMAGES.kepalaDesa}
                alt={`${DESA.kepalaDesa}, ${DESA.jabatanKepalaDesa}`}
                fill
                className="object-cover object-top"
                sizes="220px"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary md:text-3xl">
                Sambutan Kepala Desa
              </h2>
              <p className="mt-1 font-medium text-secondary">{DESA.kepalaDesa}</p>
              <p className="text-sm text-dark-gray">{DESA.jabatanKepalaDesa}</p>
              <p className="mt-4 leading-relaxed text-dark-gray line-clamp-4">
                {SAMBUTAN_RINGKAS}
              </p>
              <Button asChild variant="outline" className="mt-6">
                <Link href="/desa-kami">Lihat Profil Desa</Link>
              </Button>
            </div>
          </div>
        </SectionCard>
      </FadeIn>
    </SectionShell>
  );
}
