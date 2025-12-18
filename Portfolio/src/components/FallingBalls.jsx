import { motion } from "framer-motion";

export default function FallingBalls() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-500 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -100,
          }}
          animate={{ y: window.innerHeight + 100 }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
