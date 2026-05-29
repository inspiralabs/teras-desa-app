"use client";

import { SectionBoundary } from "@/components/layout/SectionBoundary";

export function PageContentBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SectionBoundary variant="page" minLoadMs={300}>
      {children}
    </SectionBoundary>
  );
}
