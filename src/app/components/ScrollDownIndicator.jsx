import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollDownIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <ChevronDown className="w-8 h-8 text-gray-500" />
      </motion.div>
    </div>
  );
}
