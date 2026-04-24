import { motion } from 'framer-motion';
import { ArrowRight, Code2, Globe, Rocket, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 z-10 mb-10">
      <div className="max-w-4xl mx-auto text-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Accepting new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white"
        >
          We help global startups <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400">launch and scale</span> <br className="hidden md:block" />
          digital products faster
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          RK The Techist is an international software development partner for founders and SaaS teams that need reliable React, Node.js, and Python engineering without hiring delays.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="/contact" className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Book a Free Strategy Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a href="#work" className="group w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-full transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
            View Work <PlayCircle size={18} className="text-slate-400 group-hover:text-white transition-colors" />
          </a>
        </motion.div>
      </div>

      {/* Feature showcase below hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full"
      >
        {[
          { icon: Globe, title: "Web Application Development", desc: "Conversion-focused React and Next.js experiences for global audiences." },
          { icon: Rocket, title: "SaaS Product Engineering", desc: "Production-ready architecture built for growth, reliability, and speed." },
          { icon: Code2, title: "API & Backend Development", desc: "Secure, scalable Node.js and Python systems for critical workflows." }
        ].map((feature, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <feature.icon size={20} className="text-cyan-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-sm text-slate-400">{feature.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
