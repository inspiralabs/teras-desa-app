import { FadeIn } from "@/components/motion/FadeIn";
import { SectionShell } from "@/components/ui/SectionShell";

export function PageHero({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <SectionShell className="py-6 md:py-8">
      <FadeIn>
        <h1 className="text-3xl font-bold text-primary md:text-4xl">{title}</h1>
        {description && (
          <p className="mt-2 max-w-3xl text-dark-gray">{description}</p>
        )}
      </FadeIn>
    </SectionShell>
  );
}
