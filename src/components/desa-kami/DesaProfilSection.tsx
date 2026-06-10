"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { SectionCard } from "@/components/ui/SectionShell";
import { cn } from "@/lib/utils";

export function DesaProfilSection({
  id,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <FadeIn>
      <section id={id} className={cn(id && "scroll-mt-24")}>
      <SectionCard className={className}>
        <h2 className="text-xl font-bold text-primary md:text-2xl">{title}</h2>
        {description && (
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-dark-gray md:text-base">
            {description}
          </p>
        )}
        <div className="mt-4 md:mt-6">{children}</div>
      </SectionCard>
      </section>
    </FadeIn>
  );
}
