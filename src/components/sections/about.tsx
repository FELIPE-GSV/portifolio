"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { SkillCard } from "@/components/ui/skill-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { skills } from "@/lib/data";

const categories = [
  { key: "frontend" as const, label: "Frontend" },
  { key: "backend" as const, label: "Backend" },
  { key: "devops" as const, label: "DevOps & Cloud" },
  { key: "tools" as const, label: "Ferramentas" },
];

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Sobre Mim"
          subtitle="Conheça um pouco mais sobre minha trajetória e habilidades"
        />

        {/* Bio */}
        <AnimatedSection className="mx-auto max-w-3xl mb-16">
          <div className="rounded-xl border border-card-border bg-card/30 p-8 backdrop-blur-sm">
            <p className="text-muted leading-relaxed text-base sm:text-lg">
              Sou desenvolvedor fullstack com experiência em aplicações web completas,
              atuando tanto no frontend quanto no backend. Atualmente trabalho como
              desenvolvedor pleno no{" "}
              <span className="text-foreground font-medium">Grupo Bringel</span>,
              desenvolvendo soluções com React e Django. Estou cursando{" "}
              <span className="text-foreground font-medium">
                Sistemas de Informação
              </span>{" "}
              na FAMETRO, em Manaus. Sou apaixonado por criar experiências digitais
              que combinam design elegante com código eficiente.
            </p>
          </div>
        </AnimatedSection>

        {/* Skills grid by category */}
        <div className="space-y-10">
          {categories.map((category) => {
            const categorySkills = skills.filter(
              (s) => s.category === category.key
            );
            if (categorySkills.length === 0) return null;
            return (
              <AnimatedSection key={category.key}>
                <h3 className="text-sm font-mono text-accent-1 mb-4 uppercase tracking-wider">
                  {category.label}
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {categorySkills.map((skill, i) => (
                    <SkillCard key={skill.name} skill={skill} index={i} />
                  ))}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
