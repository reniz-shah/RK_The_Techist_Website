import React from 'react';
import { motion } from 'framer-motion';

const Specialization = () => {
  return (
    <section className="relative py-24 px-6 z-10 w-full max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-widest text-[#888] mb-6 flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-white opacity-50"></span>
          TECHNICAL SPECIALIZATION
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6 leading-tight"
        >
          Engineered for Performance.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[17px] text-[#A1A1AA] max-w-2xl font-light leading-relaxed"
        >
          We employ a curated suite of modern, high-performance technologies natively chosen for tight security, architectural resilience, and long-term maintainability.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Column 1 */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="border-b border-white/5 pb-4">
            <h3 className="text-xl font-medium text-white tracking-wide">Core Full Stack</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {["React", "TypeScript", "Node.js"].map((tech) => (
              <span key={tech} className="px-5 py-2.5 rounded-lg bg-[#050505] border border-white/10 text-[#E4E4E7] text-[13px] font-mono tracking-widest uppercase hover:border-white/30 hover:bg-white/5 transition-all duration-300 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Column 2 */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-6"
        >
          <div className="border-b border-white/5 pb-4">
            <h3 className="text-xl font-medium text-white tracking-wide">Data & Infrastructure</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {["Python", "PostgreSQL", "AWS"].map((tech) => (
              <span key={tech} className="px-5 py-2.5 rounded-lg bg-[#050505] border border-white/10 text-[#E4E4E7] text-[13px] font-mono tracking-widest uppercase hover:border-white/30 hover:bg-white/5 transition-all duration-300 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Specialization;
