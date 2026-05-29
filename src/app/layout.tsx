import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { PageLayout } from "@/components/layout/PageLayout";
import { SITE_TITLE } from "@/lib/constants";
import { SPLASH_BLOCKING_SCRIPT } from "@/lib/splash-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | SIGAP DESA",
  },
  description:
    "Sistem Informasi Gerak Aktif Pelayanan Desa Bojongkulur. Layanan publik, berita, agenda, dan transparansi pemerintahan desa.",
  icons: {
    icon: "/images/lambang-kabupaten-bogor.png",
    apple: "/images/lambang-kabupaten-bogor.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          dangerouslySetInnerHTML={{ __html: SPLASH_BLOCKING_SCRIPT }}
        />
        <Providers>
          <PageLayout>{children}</PageLayout>
        </Providers>
      </body>
    </html>
  );
}
