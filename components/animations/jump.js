import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0, scale: 0.8 },
  enter: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: { opacity: 0, x: 0, y: 0, scale: 0.8 },
};

export const Jump = ({ children, delay = 0.4 }) => (
  <motion.div
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: delay, type: "spring", stiffness: 120 }}
    style={{ position: "relative" }}
  >
    {children}
  </motion.div>
);
