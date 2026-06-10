import { redirect } from "next/navigation";
import { DesaKamiProfilPage } from "@/components/desa-kami/DesaKamiProfilPage";

export const metadata = {
  title: "Profil Desa",
  description: "Profil Desa Bojongkulur — wilayah, sejarah, visi-misi, dan struktur organisasi.",
};

const TAB_REDIRECTS: Record<string, string> = {
  lembaga: "/lembaga-desa",
  "produk-hukum": "/produk-hukum",
  apbdes: "/apbdes",
  profil: "/desa-kami",
};

export default async function DesaKamiPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  if (tab && TAB_REDIRECTS[tab] && tab !== "profil") {
    redirect(TAB_REDIRECTS[tab]);
  }

  return <DesaKamiProfilPage />;
}
