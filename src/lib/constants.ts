import type { NavItem, SocialLink } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/FELIPE-GSV",
    icon: "Code",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/felipe-valente-a97613356/",
    icon: "Globe",
  },
  {
    label: "Email",
    href: "mailto:felipefeltz232@gmail.com",
    icon: "Mail",
  },
];

export const SITE_CONFIG = {
  name: "Felipe Valente",
  title: "Felipe Valente | Desenvolvedor Fullstack",
  description:
    "Desenvolvedor Fullstack especializado em React, Django e Node.js. Criando aplicações web completas com foco em performance e experiência do usuário.",
  url: "https://felipevalente.dev",
};
