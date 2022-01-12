import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
};

export const Visible = ({ children, delay = 0.4 }) => (
  <motion.div
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: delay, type: "easeInOut" }}
    style={{ position: "relative" }}
  >
    {children}
  </motion.div>
);
