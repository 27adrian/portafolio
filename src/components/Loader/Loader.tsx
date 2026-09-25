import { motion } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

function Loader({ onComplete }: LoaderProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#080808]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, y: "-8vh" }}
      transition={{
        duration: 0.8,
        delay: 1.2,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm uppercase tracking-[0.35em] text-white"
      >
        ADRIAN.DEV
      </motion.div>
    </motion.div>
  );
}

export default Loader;
