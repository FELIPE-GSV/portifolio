"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data";

const FILTERS = [
  { key: "all", label: "Todos" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
] as const;

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "mobile">("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Projetos"
          subtitle="Aplicações que desenvolvi do conceito à produção"
        />

        {/* Filter tabs */}
        <div className="mt-8 mb-10 flex gap-2 flex-wrap">
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeFilter === key
                  ? "text-background bg-accent-1"
                  : "border border-card-border text-muted hover:border-accent-1/30 hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
