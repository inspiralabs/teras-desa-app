import Link from "next/link";
import Image from "next/image";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/images";

export const metadata = {
  title: "Halaman Tidak Ditemukan",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <Image
        src={IMAGES.pageNotFound}
        alt="Ilustrasi halaman tidak ditemukan"
        width={320}
        height={212}
        className="h-auto w-full max-w-xs md:max-w-sm"
        priority
      />
      <h1 className="mt-4 text-2xl font-bold text-primary md:text-3xl">
        Halaman Tidak Ditemukan
      </h1>
      <p className="mt-3 max-w-md text-dark-gray">
        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        Silakan kembali ke beranda atau gunakan menu navigasi.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild variant="primary" className="gap-2">
          <Link href="/">
            <Home className="h-4 w-4" />
            Beranda
          </Link>
        </Button>
        <Button asChild variant="outline" className="gap-2">
          <Link href="/layanan">
            <ArrowLeft className="h-4 w-4" />
            Layanan Publik
          </Link>
        </Button>
      </div>
    </div>
  );
}
