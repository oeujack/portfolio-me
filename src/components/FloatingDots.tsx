import { motion } from "framer-motion";

const dots = [
  { x: "10%", y: "20%", size: 4, delay: 0 },
  { x: "85%", y: "15%", size: 3, delay: 0.5 },
  { x: "75%", y: "35%", size: 5, delay: 1 },
  { x: "90%", y: "60%", size: 3, delay: 1.5 },
  { x: "15%", y: "70%", size: 4, delay: 2 },
  { x: "80%", y: "85%", size: 3, delay: 0.8 },
  { x: "25%", y: "45%", size: 3, delay: 1.2 },
  { x: "60%", y: "25%", size: 4, delay: 0.3 },
  { x: "40%", y: "80%", size: 3, delay: 1.8 },
  { x: "95%", y: "40%", size: 4, delay: 0.6 },
];

const FloatingDots = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-primary"
          style={{
            left: dot.x,
            top: dot.y,
            width: dot.size,
            height: dot.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingDots;
