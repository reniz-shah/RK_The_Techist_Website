import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

/** Valid project type values the client can select */
// type ProjectType = 'MERN Stack Development' | 'Python / AI Agent' | 'Strategic Consulting' | '';

/** Shape of the contact form's controlled state */
interface ContactFormState {
  name: string;
  email: string;
  // projectType: ProjectType;
  description: string;
}

/** Possible submission states for the form */
type SubmitState = 'idle' | 'sending' | 'success' | 'error';

// ─────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────

// const PROJECT_TYPES: Exclude<ProjectType, ''>[] = [
//   'MERN Stack Development',
//   'Python / AI Agent',
//   'Strategic Consulting',
// ];

const INITIAL_STATE: ContactFormState = {
  name: '',
  email: '',
  // projectType: '',
  description: '',
};

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

/**
 * Sends the dual-email flow via EmailJS:
 *  1. Priority notification email → founder
 *  2. Automated confirmation email → client
 *
 * Both templates must be configured in your EmailJS dashboard.
 * The variable names used here (`{{client_name}}`, `{{client_email}}`,
 * `{{project_type}}`, `{{description}}`) must match your template placeholders.
 */
async function dispatchEmails(form: ContactFormState): Promise<void> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
  const founderTemplateId = import.meta.env.VITE_EMAILJS_FOUNDER_TEMPLATE_ID as string;
  // const clientTemplateId = import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID as string;

  if (!publicKey?.trim() || !serviceId?.trim() || !founderTemplateId?.trim()) {
    throw new Error(
      'Email is not configured for this build. Ensure VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, and VITE_EMAILJS_FOUNDER_TEMPLATE_ID are set when running npm run build (e.g. GitHub Actions with the correct environment secrets).'
    );
  }

  /** Shared template variables */
  const templateParams = {
    name: form.name,
    email: form.email,
    // project_type: form.projectType,
    description: form.description,
  };

  // 1️⃣  Priority alert to the founder
  await emailjs.send(serviceId, founderTemplateId, templateParams, publicKey);

  // 2️⃣  Automated confirmation to the client
  // await emailjs.send(serviceId, clientTemplateId, templateParams, publicKey);
}

// ─────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const FieldLabel: React.FC<LabelProps> = ({ htmlFor, children }) => (
  <label
    htmlFor={htmlFor}
    className="block text-[12px] font-mono font-semibold tracking-[0.15em] text-white mb-3 uppercase"
  >
    {children}
  </label>
);

const inputBase =
  'w-full bg-[#070707] border border-white/8 rounded-xl px-5 py-4 text-white text-[15px] font-light placeholder:text-[#383838] focus:outline-none focus:border-white/25 focus:bg-[#0a0a0a] transition-all duration-300 resize-none';

// ─────────────────────────────────────────────────────────────
// Success overlay — "Success Agent" state
// ─────────────────────────────────────────────────────────────

const SuccessOverlay: React.FC<{ name: string }> = ({ name }) => (
  <motion.div
    key="success"
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="flex flex-col items-center justify-center text-center py-16 px-8 gap-6"
    role="status"
    aria-live="polite"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.1 }}
      className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center"
    >
      <CheckCircle className="w-7 h-7 text-emerald-400" strokeWidth={1.5} />
    </motion.div>

    <div className="space-y-2">
      <h3 className="text-2xl font-semibold text-white tracking-tight">
        Message received, {name.split(' ')[0]}.
      </h3>
      <p className="text-[#71717A] text-[15px] font-light leading-relaxed max-w-sm">
        Thanks for reaching out. We'll review your request and send a clear next-step plan within &nbsp;
        <span className="text-white/60">24 business hours</span>.
      </p>
    </div>

    <div className="flex items-center gap-2 text-[12px] font-mono text-[#444] tracking-widest">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 animate-pulse" />
      SUCCESS AGENT · EMAILS DISPATCHED
    </div>
  </motion.div>
);

// ─────────────────────────────────────────────────────────────
// Main Section
// ─────────────────────────────────────────────────────────────

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>(INITIAL_STATE);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  // const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  // const dropdownRef = useRef<HTMLDivElement>(null);

  /** Controlled change handler — keeps TypeScript fully typed */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // const selectProjectType = (type: ProjectType): void => {
  //   setForm((prev) => ({ ...prev, projectType: type }));
  //   setDropdownOpen(false);
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!form.name || !form.email || !form.description) return;

    setSubmitState('sending');
    setErrorMsg('');

    try {
      await dispatchEmails(form);
      setSubmitState('success');
      setForm(INITIAL_STATE);
    } catch (err) {
      console.error('[Contact] Email dispatch failed:', err);
      const isConfig =
        err instanceof Error && err.message.includes('Email is not configured');
      setErrorMsg(
        isConfig
          ? err.message
          : 'Something went wrong — please email us directly.'
      );
      setSubmitState('error');
    }
  };

  const isSending = submitState === 'sending';
  const isSuccess = submitState === 'success';

  return (
    <section
      id="contact"
      className="relative py-32 px-6 z-10 w-full max-w-7xl mx-auto border-t border-white/5"
    >
      {/* ── Header ─────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-widest text-[#888] mb-6 flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-white opacity-50" />
            CONTACT AGENT
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight"
          >
            Start a conversation.
            <br className="block" />
            <span className="text-[#555]">Global delivery, clear communication.</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[17px] text-[#A1A1AA] max-w-md font-light leading-relaxed"
        >
          Share your goals, timelines, and current challenges. We will reply with
          recommended scope, delivery approach, and a practical next step for your team.
        </motion.p>
      </div>

      {/* ── Form Container ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative max-w-2xl mx-auto rounded-3xl p-[1px] overflow-hidden"
      >
        {/* Gradient border */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent" />

        <div className="relative bg-[#050505] rounded-3xl overflow-hidden">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <SuccessOverlay key="success" name={form.name || 'there'} />
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-10 md:p-12 space-y-8"
                noValidate
              >
                {/* Name */}
                <div>
                  <FieldLabel htmlFor="contact-name">Full Name</FieldLabel>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Alex Johnson"
                    value={form.name}
                    onChange={handleChange}
                    className={inputBase}
                    disabled={isSending}
                  />
                </div>

                {/* Work Email */}
                <div>
                  <FieldLabel htmlFor="contact-email">Work Email</FieldLabel>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="alex@company.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputBase}
                    disabled={isSending}
                  />
                </div>


                {/* Project Type — custom dropdown */}
                {/* <div className="relative" ref={dropdownRef}>
                  <FieldLabel htmlFor="contact-project-type">Project Type</FieldLabel>
                  <button
                    id="contact-project-type"
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded={dropdownOpen}
                    onClick={() => setDropdownOpen((o) => !o)}
                    disabled={isSending}
                    className={`${inputBase} flex items-center justify-between text-left cursor-pointer ${
                      form.projectType ? 'text-white' : 'text-[#383838]'
                    }`}
                  >
                    <span>{form.projectType || 'Select engagement type…'}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#555] transition-transform duration-300 ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.ul
                        role="listbox"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-20 mt-2 w-full bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                      >
                        {PROJECT_TYPES.map((type) => (
                          <li
                            key={type}
                            role="option"
                            aria-selected={form.projectType === type}
                            onClick={() => selectProjectType(type)}
                            className="px-5 py-4 text-[15px] font-light text-[#A1A1AA] hover:text-white hover:bg-white/5 cursor-pointer transition-all duration-200 border-b border-white/5 last:border-0"
                          >
                            {type}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div> */}

                {/* Technical Description */}
                <div>
                  <FieldLabel htmlFor="contact-description">
                    Project Goals & Requirements
                  </FieldLabel>
                  <textarea
                    id="contact-description"
                    name="description"
                    required
                    rows={5}
                    placeholder="Describe your product goals, current setup, key challenges, timeline, and expected outcomes..."
                    value={form.description}
                    onChange={handleChange}
                    className={inputBase}
                    disabled={isSending}
                  />
                  <p className="mt-2 text-[12px] text-[#A1A1AA] font-mono">
                    Non-technical details are welcome. We can translate business needs into technical scope.
                  </p>
                </div>

                {/* Error message */}
                {submitState === 'error' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400/80 text-[13px] font-mono"
                  >
                    {errorMsg}
                  </motion.p>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: isSending ? 1 : 1.015 }}
                  whileTap={{ scale: isSending ? 1 : 0.98 }}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-white text-[#030014] text-[15px] font-semibold tracking-wide transition-all duration-300 hover:bg-[#E4E4E7] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Dispatching…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Footer note */}
                <p className="text-center text-[12px] text-[#A1A1AA] font-mono tracking-wide">
                  We typically respond within 24 business hours · Your information remains confidential.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
