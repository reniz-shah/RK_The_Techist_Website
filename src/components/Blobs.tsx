import { motion } from 'framer-motion';

const Blobs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, 30, 0],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        x: [0, -40, 0],
        y: [0, -50, 0],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-cyan-600/20 blur-[120px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        x: [0, 30, 0],
        y: [0, -30, 0],
      }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-pink-600/20 blur-[120px]"
    />
  </div>
);

export default Blobs;
