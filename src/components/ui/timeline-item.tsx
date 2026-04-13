import { AnimatedSection } from "./animated-section";
import type { Experience } from "@/types";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  return (
    <AnimatedSection delay={index * 0.15} className="relative pl-8 pb-12 last:pb-0">
      {/* Vertical line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-card-border" />

      {/* Dot */}
      <div className="absolute left-[-4px] top-2 h-[9px] w-[9px] rounded-full bg-accent-1 shadow-[0_0_8px_var(--color-accent-1)]" />

      {/* Content */}
      <div className="rounded-xl border border-card-border bg-card/30 p-6 transition-colors hover:border-accent-1/30 hover:bg-card-hover">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-3">
          <h3 className="text-lg font-semibold text-foreground">
            {experience.title}
          </h3>
          <span className="text-xs font-mono text-accent-1 bg-accent-1/10 rounded-full px-3 py-1 w-fit">
            {experience.period}
          </span>
        </div>

        <p className="text-sm font-medium text-accent-2 mb-4">
          {experience.company}
        </p>

        <ul className="space-y-2 mb-4">
          {experience.description.map((item, i) => (
            <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
              <span className="text-accent-1 mt-1 shrink-0">&#8226;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-card-border bg-background/50 px-3 py-1 text-xs font-medium text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
