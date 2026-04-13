import { SectionHeading } from "@/components/ui/section-heading";
import { TimelineItem } from "@/components/ui/timeline-item";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Experiência"
          subtitle="Minha trajetória profissional no desenvolvimento de software"
        />

        <div className="relative">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.company} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
