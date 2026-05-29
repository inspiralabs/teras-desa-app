import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { DESA } from "@/lib/constants";

/** Placeholder statis (SSR) — tampil via CSS saat html.splash-active */
export function SplashPlaceholder() {
  return (
    <div
      id="sigap-splash-placeholder"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
      aria-hidden
    >
      <div className="flex flex-col items-center px-6 text-center">
        <Image
          src={IMAGES.lambangKabupaten}
          alt=""
          width={72}
          height={72}
          className="rounded-full"
          priority
        />
        <p className="mt-4 text-xl font-bold text-primary">SIGAP DESA</p>
        <p className="mt-1 text-sm text-dark-gray">
          Desa {DESA.nama} · Kab. {DESA.kabupaten}
        </p>
        <div className="mt-8 flex items-end justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-2 w-2 rounded-full bg-primary animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
        <p className="mt-4 text-xs text-dark-gray">Memuat layanan desa...</p>
      </div>
    </div>
  );
}
