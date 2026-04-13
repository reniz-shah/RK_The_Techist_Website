import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Layers, ShieldCheck, Rocket } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
interface ProcessStep {
  /** Step number label displayed inside the timeline node */
  step: number;
  /** Short phase title */
  title: string;
  /** Eyebrow / sub-label for the card */
  label: string;
  /** Detailed description that surfaces key quality signals */
  description: string;
  /** Bullet points that highlight concrete practices */
  highlights: string[];
  /** Lucide icon component */
  icon: React.ElementType;
}

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Architectural Discovery',
    label: 'PHASE 01 — DISCOVERY',
    description:
      'Before a single line of code is written, we invest deeply in understanding your domain. We produce exhaustive technical documentation — data-flow diagrams, API contracts, and typed domain models — ensuring every subsequent decision builds on a stable, fully-documented foundation.',
    highlights: [
      'Domain-driven design & bounded contexts',
      'Typed API contracts (OpenAPI / GraphQL SDL)',
      'Architecture Decision Records (ADRs)',
      'Risk mapping & technical-debt triage',
    ],
    icon: Compass,
  },
  {
    step: 2,
    title: 'Agile Development Sprints',
    label: 'PHASE 02 — BUILD',
    description:
      'Every sprint ships rigorously type-safe TypeScript code. Strict compiler flags, exhaustive interface definitions, and zero-tolerance for implicit `any` are non-negotiable. Features are developed in tight feedback loops with inline documentation (TSDoc) baked in from day one.',
    highlights: [
      'TypeScript strict mode — zero implicit `any`',
      'TSDoc inline documentation on every public API',
      'Modular, reusable component architecture',
      'PR reviews gated on type coverage thresholds',
    ],
    icon: Layers,
  },
  {
    step: 3,
    title: 'Automated QA & Security',
    label: 'PHASE 03 — QUALITY',
    description:
      'Quality is automated, not optional. Each commit passes through a layered pipeline: unit tests, integration tests, static analysis (ESLint + strict TypeScript), and SAST security scanning. Code quality metrics are tracked and ratcheted upward sprint over sprint.',
    highlights: [
      'Vitest / Jest with >80 % branch coverage',
      'ESLint + TypeScript strict linting rules',
      'SAST & dependency-vulnerability scanning',
      'Accessibility audits (WCAG 2.1 AA)',
    ],
    icon: ShieldCheck,
  },
  {
    step: 4,
    title: 'CI/CD Deployment',
    label: 'PHASE 04 — SHIP',
    description:
      'Deployments are fully automated, fully typed, and fully auditable. Every pipeline run enforces `tsc --noEmit` before a single artifact is built, guaranteeing that type regressions never reach production. Rollback strategies and blue/green switchovers are defined upfront.',
    highlights: [
      '`tsc --noEmit` gate on every CI run',
      'Zero-downtime blue/green deployments',
      'Automated changelog & semantic versioning',
      'Observability: structured logging & distributed tracing',
    ],
    icon: Rocket,
  },
];

// ─────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────

interface StepCardProps {
  step: ProcessStep;
  index: number;
  isRight: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ step, index, isRight }) => {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`group relative w-full md:w-[calc(50%-3rem)] ${isRight ? 'md:ml-auto' : ''}`}
    >
      {/* Gradient border shell */}
      <div className="relative rounded-2xl p-[1px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent group-hover:from-white/20 group-hover:via-white/10 transition-all duration-700" />

        {/* Card body */}
        <div className="relative bg-[#050505] rounded-2xl p-8 h-full group-hover:bg-[#080808] transition-colors duration-500">
          {/* Eyebrow label */}
          <div className="flex items-center gap-2 mb-5">
            <span className="text-[11px] font-mono font-semibold tracking-[0.18em] text-[#555]">
              {step.label}
            </span>
          </div>

          {/* Icon + Title */}
          <div className="flex items-start gap-4 mb-5">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/8 transition-all duration-500">
              <Icon className="w-4 h-4 text-[#E4E4E7]" />
            </div>
            <h3 className="text-[1.2rem] font-semibold text-white leading-snug tracking-tight pt-1">
              {step.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-[#A1A1AA] text-[14.5px] leading-relaxed font-light mb-6">
            {step.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-2">
            {step.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2.5 text-[13px] text-[#71717A] font-light"
              >
                <span className="mt-[6px] shrink-0 w-1.5 h-1.5 rounded-full bg-white/25 group-hover:bg-white/40 transition-colors duration-500" />
                <span className="font-mono">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────
// Main Section
// ─────────────────────────────────────────────────────────────
const Process: React.FC = () => {
  /** Ref used to drive the scroll-linked timeline fill animation */
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 30%'],
  });

  /** Animate the glowing vertical line from 0 % → 100 % height */
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-32 px-6 z-10 w-full max-w-7xl mx-auto border-t border-white/5"
    >
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-widest text-[#888] mb-6 flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-white opacity-50" />
            PROCESS ROADMAP
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight"
          >
            How we build.{' '}
            <br className="hidden md:block" />
            Why it matters.
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[17px] text-[#A1A1AA] max-w-md font-light leading-relaxed"
        >
          A rigorous, TypeScript-first engineering process that prioritises code
          quality, exhaustive documentation, and zero-compromise security from
          discovery to deployment.
        </motion.p>
      </div>

      {/* ── Timeline ───────────────────────────────────────── */}
      <div className="relative">
        {/* Static faint track */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5" />

        {/* Scroll-driven glowing fill */}
        <motion.div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-white/40 via-white/20 to-transparent origin-top"
          style={{
            scaleY: lineScaleY,
            height: '100%',
          }}
        />

        {/* Steps */}
        <div className="relative flex flex-col gap-16">
          {STEPS.map((step, index) => {
            const isRight = index % 2 !== 0;

            return (
              <div key={step.step} className="relative flex flex-col md:flex-row items-start gap-0 md:gap-8">
                {/* Timeline node — centred on desktop */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-[#0A0A0A] border border-white/15 items-center justify-center"
                >
                  <span className="text-[11px] font-mono font-bold text-[#E4E4E7] tracking-wider">
                    0{step.step}
                  </span>
                  {/* Ripple glow */}
                  <span className="absolute inset-0 rounded-full animate-ping bg-white/5 duration-1000" />
                </motion.div>

                {/* Mobile node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex md:hidden w-8 h-8 shrink-0 rounded-full bg-[#0A0A0A] border border-white/15 items-center justify-center mb-4"
                >
                  <span className="text-[10px] font-mono font-bold text-[#E4E4E7]">
                    0{step.step}
                  </span>
                </motion.div>

                {/* Card */}
                <StepCard step={step} index={index} isRight={isRight} />
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Footer badge ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-24 flex justify-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/3 text-[#71717A] text-[13px] font-mono tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70 animate-pulse" />
          TypeScript Strict · Documented · Auditable · Zero-compromise
        </div>
      </motion.div>
    </section>
  );
};

export default Process;
