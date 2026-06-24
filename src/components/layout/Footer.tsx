import Link from "next/link";
import Image from "next/image";
import {
  DESA,
  FOOTER_QUICK_LINKS_COL1,
  FOOTER_QUICK_LINKS_COL2,
  SITE_ACRONYM_EXPANSION,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-mid-gray/30 bg-primary text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={IMAGES.lambangKabupaten}
              alt="Lambang Kabupaten Bogor"
              width={44}
              height={44}
              className="rounded-full bg-white/10 p-0.5"
            />
            <p className="text-lg font-bold">{SITE_NAME}</p>
          </div>
          <p className="mt-2 text-sm text-white/80">
            {SITE_ACRONYM_EXPANSION}. {SITE_TAGLINE} melalui layanan digital.
          </p>
        </div>
        <div>
          <p className="font-semibold">Tautan Cepat</p>
          <div className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-white/85">
            <ul className="space-y-2">
              {FOOTER_QUICK_LINKS_COL1.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {FOOTER_QUICK_LINKS_COL2.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p className="font-semibold">Pemerintah Desa {DESA.nama}</p>
          <p className="mt-3 text-sm text-white/85">{DESA.alamat}</p>
          <p className="mt-1 text-sm text-white/85">
            Kode Wilayah: {DESA.kodeWilayah}
          </p>
          <p className="mt-2 text-sm">{DESA.email}</p>
        </div>
        <div>
          <p className="font-semibold">Lokasi</p>
          <div className="mt-3 aspect-video overflow-hidden rounded-lg bg-white/10">
            <iframe
              title="Peta Kantor Desa Bojongkulur"
              src={DESA.mapsEmbed}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={DESA.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm underline"
          >
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-white/70 sm:flex-row">
          <p className="text-center sm:text-left">
            Copyright © 2026 Pemerintah Desa {DESA.nama}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-end">
            <Link href="/kebijakan-privasi" className="hover:text-white">
              Kebijakan Privasi
            </Link>
            <Link href="/syarat-ketentuan" className="hover:text-white">
              Syarat & Ketentuan
            </Link>
            <span aria-hidden>·</span>
            <a
              href="https://inspiralabs.id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              InspiraLabs – Nawa Inspira Digital
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
