import Link from "next/link";
import { DESA, FOOTER_QUICK_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-mid-gray/30 bg-primary text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div>
          <p className="text-lg font-bold">SIGAP DESA</p>
          <p className="mt-2 text-sm text-white/80">
            Sistem Informasi Gerak Aktif Pelayanan Desa - mendekatkan pemerintah
            desa kepada warga melalui layanan digital.
          </p>
        </div>
        <div>
          <p className="font-semibold">Tautan Cepat</p>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            {FOOTER_QUICK_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
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
            Petunjuk Arah
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-white/70 sm:flex-row">
          <p className="text-center sm:text-left">
            Copyright © 2026 Pemerintah Desa {DESA.nama}
          </p>
          <p className="text-center sm:text-right">
            Developed by{" "}
            <a
              href="https://inspiralabs.id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              InspiraLabs – Nawa Inspira Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
