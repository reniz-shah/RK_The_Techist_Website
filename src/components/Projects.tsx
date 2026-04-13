import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    name: "Real-Time Health Monitoring Platform",
    description: "Built a scalable health monitoring platform that collects continuous sensor data via BLE devices and processes it using a FastAPI backend. Designed a real-time dashboard using React to visualize daily and weekly health insights.",
    highlight: [
      "Implemented queue-based data processing using asynchronous architecture",
      "Designed API system handling high-frequency data uploads",
      "Built user dashboard for reports and analytics",
      "Deployed entire system on AWS EC2 with cron jobs for data aggregation"
    ]
  },
  {
    name: "SaaS Onboarding & Task Management System",
    description: "Developed a full-stack onboarding platform enabling HR teams to track pre-joining tasks of employees in real-time. Built using Angular frontend and Django backend with socket-based live updates.",
    highlight: [
      "Real-time sync between HR and employee dashboards",
      "Role-based access for HR and new hires",
      "Task tracking with completion status updates",
      "Optimized backend queries for faster response times"
    ]
  },
  {
    name: "Custom eCommerce Warranty Integration System",
    description: "Built a custom warranty and add-on system for eCommerce platforms, allowing users to purchase protection plans alongside products. Integrated with cart systems and handled complex pricing logic.",
    highlight: [
      "Dynamic add-on selection system for product pages",
      "Fixed critical cart bugs affecting product quantity logic",
      "Improved UX for warranty selection and checkout flow",
      "Worked with Shopify-like architecture and APIs"
    ]
  },
  {
    name: "Interactive Web Inspection & Debugging Tool",
    description: "Created a web-based tool that allows users to load any external website and inspect UI elements. Built using React with a FastAPI backend to handle CORS and asset fetching.",
    highlight: [
      "Enabled element-level inspection inside embedded iframe",
      "Extracted CSS, images, and metadata dynamically",
      "Optimized backend for faster asset processing",
      "Solved complex cross-origin limitations using backend proxy"
    ]
  },
  {
    name: "Scalable Backend System for File Processing",
    description: "Designed a backend system that processes uploaded files asynchronously using queue listeners and scheduled cron jobs. The system calculates user metrics and uploads processed data to cloud storage.",
    highlight: [
      "Built queue-based processing pipeline for large file handling",
      "Implemented cron jobs for periodic data computation",
      "Integrated cloud storage for file management",
      "Improved system reliability and processing efficiency"
    ]
  },
  {
    name: "High-Performance Webflow Optimization Project",
    description: "Optimized a Webflow-based website to significantly improve performance scores and loading speed, focusing on desktop performance and user experience.",
    highlight: [
      "Improved performance score to 90+",
      "Reduced unused CSS and JavaScript",
      "Optimized images and loading strategies",
      "Enhanced Core Web Vitals metrics"
    ]
  },
  {
    name: "React-Based Dynamic Warranty Dashboard",
    description: "Built a dynamic dashboard for managing warranty plans, allowing users to select categories, view plans, and complete purchase workflows. Integrated with backend APIs for real-time data.",
    highlight: [
      "Created multi-step workflow for plan selection and checkout",
      "Built reusable React components for scalability",
      "Integrated backend APIs for dynamic data rendering",
      "Improved UX for higher conversion rates"
    ]
  }
];

// Duplicate projects array to create infinite scrolling effect
const extendedProjects = [...projects, ...projects, ...projects];

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    const scrollContainer = scrollRef.current;

    const scroll = () => {
      if (scrollContainer && !isHovered) {
        scrollContainer.scrollLeft += 1;
        // Seamlessly reset scroll position when we reach halfway
        // (because we duplicated the array 3 times, halfway safely puts us in identical content)
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll by roughly the width of one card plus gap
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 550 + 32; 
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="relative py-24 px-6 z-10 w-full max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-6"
        >
          Our Featured Work
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
        >
          Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Projects</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto"
        >
          A selection of our recent technical achievements and digital solutions built for scalable growth.
        </motion.p>
      </div>

      <div className="relative group/slider">
        {/* Navigation Buttons */}
        <button 
          onClick={() => scrollByAmount('left')}
          className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 border border-white/10 text-white backdrop-blur-md opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-white/10 hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => scrollByAmount('right')}
          className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 border border-white/10 text-white backdrop-blur-md opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-white/10 hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>

        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex overflow-x-auto pb-12 pt-4 gap-6 sm:gap-8 hide-scrollbar cursor-grab active:cursor-grabbing" 
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}} />
          {extendedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="group relative shrink-0 w-[85vw] sm:w-[450px] md:w-[550px] rounded-3xl bg-white/[0.02] border border-white/5 p-8 overflow-hidden hover:bg-white/[0.04] transition-all duration-500 flex flex-col"
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {project.name}
                  </h3>
                  <div className="p-2 rounded-full bg-white/5 text-slate-400 group-hover:text-white group-hover:bg-white/10 transition-colors cursor-pointer shrink-0 ml-4">
                    <ExternalLink size={20} />
                  </div>
                </div>
                
                <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="space-y-3 mt-auto pt-4 border-t border-white/5">
                  {project.highlight.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-cyan-400/70 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-300 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
