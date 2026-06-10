import { Suspense } from "react";

export default function PollingAspirasiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-[50vh] animate-pulse bg-light-gray" aria-hidden />
      }
    >
      {children}
    </Suspense>
  );
}
