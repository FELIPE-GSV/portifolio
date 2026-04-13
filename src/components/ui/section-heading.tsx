import { AnimatedSection } from "./animated-section";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <AnimatedSection className="mb-16 text-center">
      <h2 className="gradient-text text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
