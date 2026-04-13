import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 70,
    restDelta: 0.001
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
    return () => unsubscribe();
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const Impact = () => {
  const metrics = [
    { value: 4, suffix: "+", label: "Years Engineering Experience" },
    { value: 20, suffix: "+", label: "Digital Products Launched" },
    { value: 5, suffix: "k+", label: "Concurrent Users Supported" }
  ];

  return (
    <section className="relative w-full border-y border-white/5 overflow-hidden py-24 z-10 mt-10">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {metrics.map((metric, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col items-center md:items-start pt-8 md:pt-0 ${idx !== 0 ? 'md:pl-12 lg:pl-20' : ''} first:pt-0`}
            >
               <div className="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-4 flex items-center font-mono">
                 <Counter value={metric.value} suffix={metric.suffix} />
               </div>
               <p className="text-[#A1A1AA] text-[13px] uppercase tracking-widest font-medium max-w-[200px] leading-relaxed">
                 {metric.label}
               </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
