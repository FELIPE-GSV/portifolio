"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Code, Globe, Mail, Phone } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:felipefeltz232@gmail.com",
    text: "felipefeltz232@gmail.com",
  },
  {
    icon: Globe,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/felipe-valente-a97613356/",
    text: "linkedin.com/in/felipe-valente",
  },
  {
    icon: Phone,
    label: "Telefone",
    href: "tel:+5592991973404",
    text: "(92) 99197-3404",
  },
  {
    icon: Code,
    label: "GitHub",
    href: "https://github.com/FELIPE-GSV",
    text: "github.com/FELIPE-GSV",
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          title="Entre em Contato"
          subtitle="Estou disponível para novas oportunidades e projetos"
        />

        <AnimatedSection>
          <p className="text-muted text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Estou sempre aberto a discutir novos projetos, ideias criativas ou
            oportunidades de fazer parte de algo incrível. Não hesite em entrar em
            contato!
          </p>

          <MagneticButton href="mailto:felipefeltz232@gmail.com" variant="primary">
            <Mail size={18} />
            Enviar Email
          </MagneticButton>
        </AnimatedSection>

        {/* Contact links grid */}
        <AnimatedSection delay={0.2} className="mt-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-xl border border-card-border bg-card/30 p-5 backdrop-blur-sm transition-all hover:border-accent-1/40 hover:bg-card-hover"
              >
                <div className="rounded-full border border-card-border p-3 text-muted transition-all group-hover:border-accent-1 group-hover:text-accent-1 group-hover:shadow-[0_0_12px_var(--color-accent-1)/20]">
                  <link.icon size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-mono text-accent-1 uppercase tracking-wider">
                    {link.label}
                  </p>
                  <p className="text-sm text-muted group-hover:text-foreground transition-colors">
                    {link.text}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
