"use client";

import { Component, type ReactNode, useEffect, useState } from "react";
import {
  SectionSkeleton,
  type SectionSkeletonVariant,
} from "@/components/ui/SectionSkeleton";

type BoundaryProps = {
  children: ReactNode;
  variant: SectionSkeletonVariant;
  /** Durasi minimum skeleton saat mount (ms) */
  minLoadMs?: number;
};

type BoundaryState = { hasError: boolean };

class SectionErrorBoundary extends Component<
  { children: ReactNode; variant: SectionSkeletonVariant; onError: () => void },
  BoundaryState
> {
  state: BoundaryState = { hasError: false };

  static getDerivedStateFromError(): BoundaryState {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return <SectionSkeleton variant={this.props.variant} showError />;
    }
    return this.props.children;
  }
}

export function SectionBoundary({
  children,
  variant,
  minLoadMs = 350,
}: BoundaryProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), minLoadMs);
    return () => window.clearTimeout(timer);
  }, [minLoadMs]);

  if (!ready) {
    return <SectionSkeleton variant={variant} />;
  }

  return (
    <SectionErrorBoundary variant={variant} onError={() => undefined}>
      {children}
    </SectionErrorBoundary>
  );
}
