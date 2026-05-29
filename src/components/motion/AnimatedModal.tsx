"use client";

import { AnimatePresence, m } from "motion/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function AnimatedModal({
  open,
  onClose,
  title,
  children,
  className,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <m.div
            className="fixed inset-0 z-40 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden
          />
          <m.div
            role="dialog"
            aria-modal
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", visualDuration: 0.35, bounce: 0.15 }}
          >
            <div
              className={cn(
                "relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-6 shadow-xl",
                className
              )}
              onClick={(e) => e.stopPropagation()}
            >
              {title && (
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h2 className="text-xl font-bold text-primary">{title}</h2>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-lg p-2 hover:bg-light-gray"
                    aria-label="Tutup"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              )}
              {children}
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
