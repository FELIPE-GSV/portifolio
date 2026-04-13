"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import type { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[skill.icon] || Icons.Code;

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-xl border border-card-border bg-card/50 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-accent-1/40 hover:bg-card-hover"
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 opacity-20 transition-opacity"
          style={{
            background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, var(--color-accent-1), transparent)`,
          }}
        />
      )}
      <div className="relative z-10 flex items-center gap-3">
        <Icon size={20} className="text-accent-1 shrink-0" />
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
      </div>
    </motion.div>
  );
}
