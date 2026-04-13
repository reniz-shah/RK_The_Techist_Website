
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
  { label: 'Full-Stack MERN Apps',       href: '#services',    title: 'Explore our Full-Stack MERN application development services' },
  { label: 'Python AI Integration',       href: '#services',    title: 'Learn about our Python and AI/ML integration capabilities' },
  { label: 'SaaS MVP Development',        href: '#services',    title: 'Discover our rapid SaaS MVP development process' },
  { label: 'Fractional CTO Consulting',   href: '#contact',     title: 'Enquire about Fractional CTO consulting engagements' },
];

const agencyLinks: FooterLink[] = [
  { label: 'Our Projects',        href: '#projects', title: 'Browse our portfolio of client projects' },
  { label: 'Engineering Process', href: '#process',  title: 'See our structured agile engineering process' },
  { label: 'Client Records',      href: '#impact',   title: 'View testimonials and client success records' },
  { label: 'Contact Us',          href: '#contact',  title: 'Get in touch to start a new project' },
];

/* ─── Sub-components ──────────────────────────────────────── */
const LinkedInIcon = () => (
  <svg role="img" aria-label="LinkedIn" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg role="img" aria-label="GitHub" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
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
            <a href="/" title="RK The Techist - Home" className="inline-block w-fit">
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
              An engineering-first development agency specialising in high-performance
              MERN and Python ecosystems for global startups.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/reniz-shah"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow RK The Techist on LinkedIn"
                aria-label="LinkedIn profile"
                className="group flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/reniz-shah"
                target="_blank"
                rel="noopener noreferrer"
                title="View RK The Techist on GitHub"
                aria-label="GitHub profile"
                className="group flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200"
              >
                <GitHubIcon />
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
                Active &amp; Accepting Projects
              </span>
            </div>

            {/* Timezone availability */}
            <p className="text-sm text-slate-400 leading-relaxed">
              Operating globally. Availability in{' '}
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
              Start a project
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
              href="/privacy-policy"
              title="Read the RK The Techist privacy policy"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-150"
            >
              Privacy Policy
            </a>
            <span aria-hidden="true" className="w-px h-3 bg-white/10" />
            <a
              href="/terms"
              title="Read the RK The Techist terms of service"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-150"
            >
              Terms of Service
            </a>
            <span aria-hidden="true" className="w-px h-3 bg-white/10" />
            <a
              href="/llms.txt"
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
