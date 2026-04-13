"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-accent-1/10 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 30, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 h-[350px] w-[350px] rounded-full bg-accent-2/10 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 30, -40, 0],
            y: [0, -20, 40, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/3 h-[300px] w-[300px] rounded-full bg-accent-3/8 blur-[120px]"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-10 lg:flex-row lg:gap-16 lg:text-left"
      >
        {/* Photo */}
        <motion.div variants={itemVariants} className="shrink-0">
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent-1 via-accent-2 to-accent-3 opacity-60 blur-md" />
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-card-border sm:h-56 sm:w-56 md:h-64 md:w-64">
              <Image
                src="/profile.jpeg"
                alt="Felipe Valente"
                fill
                className="object-cover object-[center_70%]"
                priority
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
              />
            </div>
          </div>
        </motion.div>

        {/* Text content */}
        <div className="text-center lg:text-left">
          <motion.p
            variants={itemVariants}
            className="mb-4 font-mono text-sm text-accent-1"
          >
            Olá, meu nome é
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="gradient-text text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          >
            Felipe Valente
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-2xl font-medium text-muted sm:text-3xl md:text-4xl"
          >
            Desenvolvedor Fullstack
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Especializado em React, Django e Node.js. Construo aplicações web
            completas com foco em performance, experiência do usuário e código limpo.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <MagneticButton href="#projects" variant="primary">
              Ver Projetos
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline">
              Entre em Contato
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
