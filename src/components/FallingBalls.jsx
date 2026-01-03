import { motion } from "framer-motion";

export default function FallingBalls() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(16)].map((_, i) => {
        const size = Math.random() * 10 + 6;
        const x = Math.random() * window.innerWidth;
        const yEnd = window.innerHeight - 24 - Math.random() * 30;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/60 blur-[1px]"
            style={{ width: size, height: size }}
            initial={{ x, y: -60, opacity: 0 }}
            animate={{ y: yEnd, opacity: 1 }}
            transition={{
              duration: 2.2 + Math.random(),
              ease: "easeOut",
              delay: Math.random() * 0.6,
            }}
          />
        );
      })}
    </div>
  );
}
