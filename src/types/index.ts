export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "devops" | "tools";
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
