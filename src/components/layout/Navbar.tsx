"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { m, AnimatePresence, useReducedMotion } from "motion/react";
import { DESA, NAV_ITEMS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { cn } from "@/lib/utils";

function isDesaKamiActive(pathname: string) {
  return (
    pathname === "/desa-kami" ||
    pathname === "/lembaga-desa" ||
    pathname === "/produk-hukum" ||
    pathname === "/apbdes"
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [desaOpen, setDesaOpen] = useState(false);
  const [mobileDesaOpen, setMobileDesaOpen] = useState(false);
  const desaRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (desaRef.current && !desaRef.current.contains(e.target as Node)) {
        setDesaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-primary text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={IMAGES.lambangKabupaten}
            alt="Lambang Kabupaten Bogor"
            width={40}
            height={40}
            className="rounded-full bg-white/10 p-0.5"
          />
          <div className="leading-tight">
            <span className="text-base font-bold tracking-tight md:text-lg">
              SIGAP DESA
            </span>
            <span className="block text-xs text-white/80">
              Desa {DESA.nama} · Kab. {DESA.kabupaten}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Utama">
          {NAV_ITEMS.map((item) => {
            if ("submenu" in item && item.submenu) {
              const active = isDesaKamiActive(pathname);
              return (
                <div key={item.href} className="relative" ref={desaRef}>
                  <button
                    type="button"
                    onClick={() => setDesaOpen(!desaOpen)}
                    className={cn(
                      "flex items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors",
                      active ? "bg-white/15" : "hover:bg-white/10"
                    )}
                    aria-expanded={desaOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        desaOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {desaOpen && (
                    <div className="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-lg border border-white/10 bg-primary py-1 shadow-lg">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setDesaOpen(false)}
                          className={cn(
                            "block px-4 py-2.5 text-sm hover:bg-white/10",
                            pathname === sub.href && "bg-white/15 font-medium"
                          )}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-2.5 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-white/15"
                    : "hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.nav
            initial={{ opacity: 0, x: reduce ? 0 : "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reduce ? 0 : "-100%" }}
            transition={{ type: "spring", bounce: 0.1, visualDuration: 0.3 }}
            className="border-t border-white/10 bg-primary xl:hidden"
            aria-label="Menu mobile"
          >
            <div className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto px-4 py-4">
              {NAV_ITEMS.map((item) => {
                if ("submenu" in item && item.submenu) {
                  return (
                    <div key={item.href}>
                      <button
                        type="button"
                        onClick={() => setMobileDesaOpen(!mobileDesaOpen)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium",
                          isDesaKamiActive(pathname) && "bg-white/15"
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4",
                            mobileDesaOpen && "rotate-180"
                          )}
                        />
                      </button>
                      {mobileDesaOpen && (
                        <div className="ml-3 border-l border-white/20 pl-2">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => {
                                setOpen(false);
                                setMobileDesaOpen(false);
                              }}
                              className={cn(
                                "block rounded-lg px-3 py-2.5 text-sm",
                                pathname === sub.href && "bg-white/15"
                              )}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-3 text-sm font-medium",
                      pathname === item.href && "bg-white/15"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
