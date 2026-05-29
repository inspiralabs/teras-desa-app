import Link from "next/link";
import { FileText, Receipt, HandCoins } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DividerTitle } from "@/components/ui/DividerTitle";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";

const LANGKAH = [
  {
    title: "Siapkan Dokumen",
    desc: "KTP, KK, surat pengantar RT/RW, dan berkas persyaratan sesuai jenis layanan yang diajukan.",
  },
  {
    title: "Ajukan Online/Offline",
    desc: "Melalui menu Layanan di website SIGAP DESA atau datang langsung ke kantor desa pada jam pelayanan.",
  },
  {
    title: "Verifikasi Berkas",
    desc: "Perangkat desa memverifikasi kelengkapan dan keabsahan dokumen pada hari kerja.",
  },
  {
    title: "Ambil Dokumen Jadi",
    desc: "Anda mendapat notifikasi WhatsApp atau email saat dokumen siap diambil di kantor desa.",
  },
];

const LAYANAN_POPULER = [
  {
    icon: FileText,
    title: "Administrasi Kependudukan",
    desc: "Pengajuan pembuatan dokumen kependudukan (KTP, KK, surat keterangan), unggah persyaratan, dan cek status berkas secara online.",
    href: "/layanan?tab=ktp",
  },
  {
    icon: Receipt,
    title: "Cek PBB",
    desc: "Masukkan Nomor Objek Pajak (NOP) untuk melihat informasi SPPT: ketetapan, denda, nilai bayar, dan jatuh tempo.",
    href: "/layanan?tab=pbb",
  },
  {
    icon: HandCoins,
    title: "Penerima Manfaat",
    desc: "Lihat data penerima bantuan sosial (BPNT, PKH, BLT-DD) dan cek status pendaftaran program dengan NIK Anda.",
    href: "/layanan?tab=manfaat",
  },
];

export function LayananRingkasSection() {
  return (
    <SectionShell>
      <FadeIn>
        <SectionHeader
          title="Panduan Layanan"
          subtitle="Empat langkah mudah mengurus layanan administrasi di Desa Bojongkulur."
          href="/layanan"
          linkLabel="Lihat Semua Layanan"
        />
        <ol className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LANGKAH.map((item, i) => (
            <li
              key={item.title}
              className="rounded-xl border border-mid-gray/40 bg-white p-4 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {i + 1}
              </span>
              <p className="mt-3 text-sm font-semibold text-primary">{item.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-dark-gray">
                {item.desc}
              </p>
            </li>
          ))}
        </ol>

        <DividerTitle className="mb-6">Layanan Terpopuler</DividerTitle>
        <div className="grid gap-4 md:grid-cols-3">
          {LAYANAN_POPULER.map(({ icon: Icon, title, desc, href }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-2xl border border-mid-gray/40 bg-white p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-light text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h4 className="mt-4 font-bold text-primary group-hover:text-secondary">
                {title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-dark-gray">{desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center md:hidden">
          <Button asChild>
            <Link href="/layanan">Lihat Semua Layanan</Link>
          </Button>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
