import { Suspense } from "react";

export default function InfografisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-[40vh] animate-pulse bg-light-gray" aria-hidden />
      }
    >
      {children}
    </Suspense>
  );
}
