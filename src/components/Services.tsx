import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Sparkles } from 'lucide-react';

const services = [
  {
    title: "SaaS & Platform Development",
    tech: "MERN, Next.js",
    description: "Architect robust, high-performance web applications that accelerate market launch and scale seamlessly with enterprise growth.",
    icon: Layout,
  },
  {
    title: "Scalable Backend Engineering",
    tech: "Python, Microservices",
    description: "Design resilient infrastructure and distributed systems to ensure maximum uptime, handle peak loads, and future-proof operations.",
    icon: Server,
  },
  {
    title: "AI Agent & Automation Integration",
    tech: "Python, LLMs",
    description: "Deploy intelligent workflows that automate complex tasks, significantly reduce operational overhead, and unlock new business efficiencies.",
    icon: Sparkles,
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-32 px-6 z-10 w-full max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-widest text-[#888] mb-6 flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-white opacity-50"></span>
            ENGINEERING CAPABILITIES
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight"
          >
            Built for scale. <br className="hidden md:block"/> Designed for business impact.
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[17px] text-[#A1A1AA] max-w-md font-light leading-relaxed"
        >
          We translate complex business requirements into elegant, high-throughput technical solutions that drive measurable ROI.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative rounded-3xl p-[1px] overflow-hidden"
          >
            {/* Minimalist Linear-style gradient border */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-60 group-hover:from-white/30 group-hover:via-white/10 transition-all duration-700" />
            
            {/* Card Content Container */}
            <div className="relative h-full bg-[#050505] rounded-3xl p-10 flex flex-col justify-between transition-colors duration-500 group-hover:bg-[#0A0A0A]">
              
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
                   <service.icon className="text-[#E4E4E7] w-5 h-5" />
                </div>
                
                <h3 className="text-xl font-medium text-white mb-2 tracking-wide">
                  {service.title}
                </h3>
                
                <div className="text-[13px] font-mono text-[#71717A] mb-8 tracking-wide">
                  {service.tech}
                </div>
                
                <p className="text-[#A1A1AA] leading-relaxed font-light text-[15px]">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
