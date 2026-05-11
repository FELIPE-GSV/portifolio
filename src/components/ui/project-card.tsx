"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Smartphone, Globe } from "lucide-react";

function GithubIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const CATEGORY_COLORS: Record<string, string> = {
  mobile: "text-accent-1 bg-accent-1/10 border-accent-1/20",
  web: "text-accent-2 bg-accent-2/10 border-accent-2/20",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  const categoryLabel = project.category === "mobile" ? "Mobile" : "Web";
  const CategoryIcon = project.category === "mobile" ? Smartphone : Globe;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl border border-card-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-accent-1/20 card-glow flex flex-col"
    >
      {/* Spotlight effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07] transition-opacity"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, var(--color-accent-1), transparent)`,
          }}
        />
      )}

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-1/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Header visual */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-1/8 via-transparent to-accent-1/4" />

        {/* Corner number */}
        <div className="absolute top-4 left-5 font-mono text-5xl font-bold text-accent-1/5 select-none">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Category badge */}
        {project.category && (
          <div className={`absolute top-4 right-4 flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono ${CATEGORY_COLORS[project.category]}`}>
            <CategoryIcon size={11} />
            {categoryLabel}
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-card-border bg-card text-muted transition-all hover:border-accent-1/50 hover:text-accent-1 hover:scale-110"
              aria-label={`GitHub — ${project.title}`}
            >
              <GithubIcon size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-card-border bg-card text-muted transition-all hover:border-accent-1/50 hover:text-accent-1 hover:scale-110"
              aria-label={`Demo — ${project.title}`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent-1 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-4 border-t border-card-border">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-card-border bg-background/60 px-3 py-1 text-xs font-mono text-accent-1/80 hover:border-accent-1/30 hover:text-accent-1 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
