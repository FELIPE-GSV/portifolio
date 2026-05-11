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
      "Participação em projetos de pesquisa e desenvolvimento no IFAM, com foco em soluções web fullstack com JavaScript, React e Django Rest Framework.",
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
    title: "Abarechat Mobile",
    description:
      "App mobile de rede social com feed de posts, comentários, perfis de usuário, sistema de seguidores, chat em tempo real via WebSocket, upload e edição de mídia (imagens e vídeos), notificações em tempo real e deep links para compartilhamento de posts.",
    technologies: ["Flutter", "Dart", "Socket.IO", "Provider"],
    githubUrl: "https://github.com/FELIPE-GSV",
    category: "mobile",
  },
  {
    title: "Netpoli Mobile",
    description:
      "App mobile da plataforma Netpoli com onboarding completo, feed de conteúdo, criação de projetos, compressão e edição de imagens, suporte a vídeo, sistema de busca e navegação em 5 abas. Tema verde com suporte a dark/light mode.",
    technologies: ["Flutter", "Dart", "Provider", "fl_chart"],
    githubUrl: "https://github.com/FELIPE-GSV",
    category: "mobile",
  },
  {
    title: "Netpoli Web",
    description:
      "Versão web da plataforma Netpoli com rota protegida por auth guard, feed com scroll infinito, atualizações otimistas com useOptimistic do React 19, suporte a imagem e vídeo, layout com AppShell (header + sidebar) e dark/light theme.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    githubUrl: "https://github.com/FELIPE-GSV",
    category: "web",
  },
  {
    title: "Crash Game",
    description:
      "Plataforma de cassino multiplayer em tempo real com dois microsserviços (Games e Wallets), comunicação assíncrona via RabbitMQ, autenticação via Keycloak (PKCE + JWT), gateway Kong, mecânica de jogo \"provably fair\", sincronização via WebSocket e orquestração via Docker Compose.",
    technologies: ["React 19", "NestJS", "PostgreSQL", "RabbitMQ", "Keycloak", "Socket.IO", "Kong"],
    githubUrl: "https://github.com/FELIPE-GSV",
    category: "web",
  },
];
