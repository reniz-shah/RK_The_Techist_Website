
import { motion } from 'framer-motion';
import { getImgPath } from '../utils/path';

/* ─── Types ───────────────────────────────────────────────── */
interface FooterLink {
  label: string;
  href: string;
  title: string;
}

/* ─── Data ────────────────────────────────────────────────── */
const expertiseLinks: FooterLink[] = [
  { label: 'Web App Development',         href: '#services',    title: 'Explore our web application development services' },
  { label: 'SaaS Product Engineering',    href: '#services',    title: 'Learn about our SaaS product engineering capabilities' },
  { label: 'Backend & API Development',   href: '#services',    title: 'Discover our backend and API development expertise' },
  { label: 'AI Automation Integration',   href: '#services',    title: 'Explore our AI automation and integration services' },
];

const agencyLinks: FooterLink[] = [
  { label: 'Our Projects',        href: '#work', title: 'Browse our portfolio of client projects' },
  { label: 'Engineering Process', href: '#process',  title: 'See our structured agile engineering process' },
  { label: 'Contact Us',          href: '#contact',  title: 'Get in touch to start a new project' },
];

/* ─── Sub-components ──────────────────────────────────────── */
const LinkedInIcon = () => (
  <svg role="img" aria-label="LinkedIn" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);


/* ─── Animation variants ──────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
} satisfies import('framer-motion').Variants;

/* ─── Main Component ──────────────────────────────────────── */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      aria-label="Agency footer"
      className="relative w-full bg-[#030014] border-t border-white/[0.07]"
    >
      {/* Subtle top gradient accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* ── 4-column grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-white/[0.06]"
        >

          {/* ── Col 1 · Identity ── */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            {/* Logo */}
            <a href="./" title="RK The Techist - Home" className="inline-block w-fit">
              <img
                src={getImgPath('/images/logo/white-RK_logo.png')}
                alt="RK The Techist agency logo"
                className="h-10 w-auto"
                loading="lazy"
                decoding="async"
              />
            </a>

            {/* Tagline */}
            <p className="text-sm text-slate-400 leading-relaxed max-w-[260px]">
              International software development agency helping startups and SaaS
              teams build scalable web products with React, Node.js, and Python.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/rk-the-consulting-techist"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow RK The Techist on LinkedIn"
                aria-label="LinkedIn profile"
                className="group flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200"
              >
                <LinkedInIcon />
              </a>
            </div>
          </motion.div>

          {/* ── Col 2 · Expertise (Services / SEO) ── */}
          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-slate-500">
              Expertise
            </h3>
            <nav aria-label="Expertise links">
              <ul className="flex flex-col gap-3">
                {expertiseLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      title={link.title}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-150 group flex items-center gap-2"
                    >
                      <span
                        aria-hidden="true"
                        className="block w-1 h-1 rounded-full bg-purple-500/60 group-hover:bg-purple-400 transition-colors duration-150 shrink-0"
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* ── Col 3 · Agency / Company ── */}
          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-slate-500">
              Agency
            </h3>
            <nav aria-label="Agency links">
              <ul className="flex flex-col gap-3">
                {agencyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      title={link.title}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-150 group flex items-center gap-2"
                    >
                      <span
                        aria-hidden="true"
                        className="block w-1 h-1 rounded-full bg-purple-500/60 group-hover:bg-purple-400 transition-colors duration-150 shrink-0"
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* ── Col 4 · Operations / Technical Availability ── */}
          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-slate-500">
              Operations
            </h3>

            {/* Live status badge */}
            <div
              role="status"
              aria-live="polite"
              aria-label="Current project availability status"
              className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] w-fit"
            >
              {/* Animated pulse dot */}
              <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-emerald-400 leading-none">
                Accepting International Projects
              </span>
            </div>

            {/* Timezone availability */}
            <p className="text-sm text-slate-400 leading-relaxed">
              Remote-first delivery. Working hours aligned to{' '}
              <span className="text-slate-300 font-medium">IST</span>,{' '}
              <span className="text-slate-300 font-medium">EST</span>, and{' '}
              <span className="text-slate-300 font-medium">GMT</span> timezones.
            </p>

            {/* Quick contact CTA */}
            <a
              href="#contact"
              title="Start a new project with RK The Techist"
              className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors duration-150 group"
            >
              Start your project
              <svg
                aria-hidden="true"
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>

        </motion.div>

        {/* ── Copyright & Legal row ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
        >
          {/* Copyright */}
          <p className="text-xs text-slate-600 text-center sm:text-left">
            © {currentYear}{' '}
            <span className="text-slate-500 font-medium">RK The Techist</span>.{' '}
            All rights reserved.
          </p>

          {/* Legal / AI-crawler links */}
          <nav aria-label="Legal and AI crawler links" className="flex items-center gap-5">
          <a
              href="./llms.txt"
              title="Plain-text site index for AI language model crawlers"
              rel="nofollow"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-150 flex items-center gap-1"
            >
              <svg aria-hidden="true" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              llms.txt
            </a>
          </nav>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
