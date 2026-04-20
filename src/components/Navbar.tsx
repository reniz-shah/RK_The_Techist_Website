import { useState } from 'react';
import { motion } from 'framer-motion';
import { getImgPath } from '../utils/path';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/10 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href='./'>
          <img
            src={getImgPath('/images/logo/white-RK_logo.png')}
            alt='logo'
            className='w-32 hidden dark:block'
          />
        </a>
        {/* <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
            <Code2 size={18} className="text-white" />
          </div>
          <span className="font-semibold text-lg tracking-wide text-white">Nova</span>
        </div> */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex text-sm font-medium bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full backdrop-blur-md transition-all border border-white/10"
        >
          Contact Us
        </a>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:text-white hover:bg-white/10 transition"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3 text-sm font-medium text-slate-300">
            <button
              type="button"
              className="self-end rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:text-white hover:bg-white/10 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Close
            </button>
            <a href="#services" className="hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#process" className="hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Process</a>
            <a href="#work" className="hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Work</a>
            <a href="#contact" className="hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
