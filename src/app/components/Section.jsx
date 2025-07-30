import React from "react";
import { motion } from "framer-motion";

const sectionAnimation = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <motion.div {...sectionAnimation} className="max-w-6xl mx-auto">
        {children}
      </motion.div>
    </section>
  );
}
