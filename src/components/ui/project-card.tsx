"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Code } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-xl border border-card-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-accent-2/40 hover:bg-card-hover"
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 opacity-15 transition-opacity"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, var(--color-accent-2), transparent)`,
          }}
        />
      )}

      {/* Gradient image placeholder */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-1/20 via-accent-2/20 to-accent-3/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-foreground/10">
            {project.title.charAt(0)}
          </span>
        </div>
        {/* Hover overlay with links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-card-border bg-card p-3 text-foreground transition-colors hover:border-accent-1 hover:text-accent-1"
              aria-label={`GitHub - ${project.title}`}
            >
              <Code size={20} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-card-border bg-card p-3 text-foreground transition-colors hover:border-accent-1 hover:text-accent-1"
              aria-label={`Live demo - ${project.title}`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-card-border bg-background/50 px-3 py-1 text-xs font-medium text-accent-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
