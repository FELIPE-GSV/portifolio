"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

function GithubIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const STATS = [
  { value: "02+", label: "Anos de\nExperiência" },
  { value: "03+", label: "Empresas\nAtendidas" },
  { value: "10+", label: "Tecnologias\nDominadas" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-stretch overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-accent-1/5 blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent-1/3 blur-[160px]" style={{ opacity: 0.04 }} />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,195,125,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,195,125,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6 py-24 pt-32">
        {/* ── 3-column layout on desktop ── */}
        <div className="grid w-full grid-cols-1 items-center gap-0 lg:grid-cols-[1fr_auto_auto]">

          {/* ── LEFT: Text content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center pr-0 lg:pr-12"
          >
            {/* Available badge */}
            <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent-1" />
              <span className="font-mono text-sm text-accent-1 tracking-widest uppercase">
                Disponível para projetos
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={itemVariants}>
              <p className="font-mono text-sm text-muted mb-2">Olá! Meu nome é</p>
              <h1 className="text-6xl font-bold tracking-tight leading-[1.0] sm:text-7xl lg:text-[84px]">
                Felipe<br />
                <span className="text-accent-1">Valente</span>
                <span className="text-muted">.</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div variants={itemVariants} className="mt-5 flex items-center gap-3">
              <span className="h-px w-8 bg-muted/30" />
              <p className="text-lg text-muted font-light tracking-wide">
                Desenvolvedor Full Stack
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-md text-muted leading-relaxed text-base"
            >
              Especializado em React, Django e Node.js. Construo aplicações web
              e mobile completas — do frontend ao backend — com foco em
              performance e código limpo.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#projects" variant="primary">
                Ver Projetos
              </MagneticButton>
              <MagneticButton href="#contact" variant="outline">
                Entre em Contato
              </MagneticButton>
              <a
                href="/Felipe_Valente_CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted hover:text-foreground border border-card-border hover:border-accent-1/30 transition-all duration-200"
              >
                <Download size={15} />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="mt-8 flex items-center gap-4">
              {[
                { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/felipe-valente-a97613356/", label: "LinkedIn" },
                { Icon: GithubIcon, href: "https://github.com/FELIPE-GSV", label: "GitHub" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border text-muted hover:border-accent-1/40 hover:text-accent-1 transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
              <span className="h-px w-12 bg-muted/20" />
              <a
                href="mailto:felipefeltz232@gmail.com"
                className="font-mono text-xs text-muted hover:text-accent-1 transition-colors"
              >
                felipefeltz232@gmail.com
              </a>
            </motion.div>
          </motion.div>

          {/* ── CENTER: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative hidden lg:flex items-end justify-center self-stretch"
          >
            {/* Green glow under photo */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-72 rounded-full bg-accent-1/20 blur-3xl" />

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-64 bg-gradient-to-r from-transparent via-accent-1/60 to-transparent" />

            <div className="relative w-[340px] xl:w-[400px] select-none">
              <Image
                src="/felipe-hero.png"
                alt="Felipe Valente"
                width={400}
                height={600}
                className="w-full object-contain object-bottom drop-shadow-[0_0_60px_rgba(56,195,125,0.12)]"
                priority
                quality={95}
              />
            </div>
          </motion.div>

          {/* ── RIGHT: Stats ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex flex-col gap-6 pl-12 border-l border-card-border self-center"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                custom={i}
                className="group"
              >
                <p className="text-5xl font-bold text-accent-1 leading-none tabular-nums">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs text-muted font-mono leading-relaxed uppercase tracking-wider whitespace-pre-line">
                  {stat.label}
                </p>
              </motion.div>
            ))}

            {/* Tech stack icons */}
            <motion.div variants={itemVariants} className="mt-4 pt-4 border-t border-card-border">
              <p className="text-[10px] font-mono text-muted/60 uppercase tracking-widest mb-3">Tech Stack</p>
              <div className="flex flex-col gap-1.5">
                {["React", "Next.js", "Django", "Flutter", "Node.js"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent-1/60" />
                    <span className="font-mono text-xs text-muted">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile photo (shown below text on small screens) */}
      <div className="absolute inset-0 -z-0 flex items-end justify-end opacity-10 lg:hidden pointer-events-none">
        <Image
          src="/felipe-hero.png"
          alt=""
          width={300}
          height={450}
          className="object-contain object-bottom"
          aria-hidden="true"
          quality={80}
        />
      </div>

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
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-muted/50 uppercase tracking-widest">scroll</span>
          <ArrowDown size={16} className="text-muted/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
