"use client";

import { motion } from "framer-motion";

export default function PageTransition() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111111]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        className="curve_background"
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        exit={{ clipPath: "polygon(0 0, 100% 0, 0 0, 0 100%)" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.h1
        className="text-white font-righteous text-3xl md:text-4xl lg:text-6xl text-center"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          position: "fixed",
          top: "50%",
          left: "50%",
          zIndex: 100,
          transform: "translateX(-50%) translateY(-50%)",
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hello!
      </motion.h1>
    </motion.div>
  );
}
