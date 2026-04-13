import { Code, Globe, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code,
  Globe,
  Mail,
};

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-background">
      {/* Gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent-1/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Social icons */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="rounded-full border border-card-border p-2.5 text-muted transition-all hover:border-accent-1 hover:text-accent-1 hover:shadow-[0_0_12px_var(--color-accent-1)/20]"
                  aria-label={link.label}
                >
                  {Icon && <Icon size={18} />}
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Felipe Valente. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
