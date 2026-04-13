import type { Experience, Project, Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "Blocks", category: "frontend" },
  { name: "Next.js", icon: "Globe", category: "frontend" },
  { name: "TypeScript", icon: "FileCode2", category: "frontend" },
  { name: "JavaScript", icon: "Braces", category: "frontend" },
  { name: "Tailwind CSS", icon: "Paintbrush", category: "frontend" },
  { name: "HTML/CSS", icon: "Code", category: "frontend" },
  { name: "Flutter", icon: "Smartphone", category: "frontend" },
  { name: "React Native", icon: "Tablet", category: "frontend" },
  // Backend
  { name: "Python", icon: "Terminal", category: "backend" },
  { name: "Django", icon: "Server", category: "backend" },
  { name: "Node.js", icon: "Hexagon", category: "backend" },
  { name: "NestJS", icon: "Box", category: "backend" },
  { name: "REST APIs", icon: "ArrowLeftRight", category: "backend" },
  { name: "PostgreSQL", icon: "Database", category: "backend" },
  // DevOps
  { name: "Docker", icon: "Container", category: "devops" },
  { name: "Git", icon: "GitBranch", category: "devops" },
  { name: "AWS", icon: "Cloud", category: "devops" },
  // Tools
  { name: "Linux", icon: "MonitorSmartphone", category: "tools" },
];

export const experiences: Experience[] = [
  {
    title: "Desenvolvedor Full Stack Pleno",
    company: "Grupo Bringel",
    period: "Jan 2025 — Presente",
    description: [
      "Desenvolvimento de aplicações web completas utilizando React no frontend e Django no backend, com integração de APIs REST e banco de dados SQL.",
      "Desenvolvimento de interfaces responsivas com React, garantindo boa experiência do usuário e integração eficiente com o backend.",
      "Utilização de Docker para containerização de aplicações, padronizando ambientes de desenvolvimento e produção.",
    ],
    technologies: ["React", "Django", "Docker", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Desenvolvedor Full Stack Junior",
    company: "IFAM — Polo de Inovação",
    period: "Jan 2024 — Jan 2025",
    description: [
      "Desenvolvimento de sistemas web para apoio a projetos acadêmicos, envolvendo integração entre frontend, backend e banco de dados SQL.",
      "Participação em projetos de pesquisa e desenvolvimento no IFAM, com foco na criação de soluções web fullstack utilizando JavaScript, React e Django Rest Framework.",
      "Containerização de aplicações com Docker para padronização de ambientes e facilitação de deploy.",
    ],
    technologies: ["React", "Django", "JavaScript", "Docker", "SQL"],
  },
  {
    title: "Trainee — Desenvolvedor Frontend",
    company: "Nheengatu Tech Solutions",
    period: "Jun 2023 — Jan 2024",
    description: [
      "Desenvolvimento de interfaces web utilizando React, com foco em componentes reutilizáveis e boas práticas de organização.",
      "Criação de aplicações mobile com React Native, implementando telas responsivas e integração com APIs REST.",
      "Desenvolvimento de aplicativos multiplataforma utilizando Flutter, com foco em performance e experiência do usuário.",
    ],
    technologies: ["React", "React Native", "Flutter", "REST APIs"],
  },
];

export const projects: Project[] = [
  {
    title: "Dashboard de Gestão",
    description:
      "Sistema de gestão com dashboard interativo, gráficos em tempo real e gerenciamento de dados. Interface moderna e responsiva com autenticação e controle de acesso.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    githubUrl: "#",
  },
  {
    title: "E-commerce API",
    description:
      "API RESTful completa para e-commerce com autenticação JWT, sistema de pagamentos, gestão de estoque e documentação automatizada com Swagger.",
    technologies: ["Django", "Python", "PostgreSQL", "Docker"],
    githubUrl: "#",
  },
  {
    title: "App de Chat em Tempo Real",
    description:
      "Aplicação de mensagens em tempo real com WebSocket, suporte a múltiplas salas, envio de arquivos e notificações push.",
    technologies: ["Next.js", "TypeScript", "WebSocket", "Tailwind"],
    githubUrl: "#",
  },
  {
    title: "App Mobile de Tarefas",
    description:
      "Aplicativo mobile multiplataforma para gerenciamento de tarefas com sincronização em nuvem, notificações e modo offline.",
    technologies: ["Flutter", "Firebase", "Dart"],
    githubUrl: "#",
  },
];
