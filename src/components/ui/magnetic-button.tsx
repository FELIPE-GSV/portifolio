"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function MagneticButton({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPosition({
      x: (e.clientX - centerX) * 0.15,
      y: (e.clientY - centerY) * 0.15,
    });
  }

  function handleMouseLeave() {
    setPosition({ x: 0, y: 0 });
  }

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent-1 to-accent-2 text-background hover:shadow-[0_0_30px_var(--color-accent-1)/30] hover:scale-105",
    outline:
      "border border-card-border text-foreground hover:border-accent-1 hover:text-accent-1 hover:shadow-[0_0_20px_var(--color-accent-1)/15]",
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.5 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick}>
      {content}
    </button>
  );
}
