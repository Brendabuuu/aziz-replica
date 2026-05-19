"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "LinkedIn", icon: "in", url: "https://www.linkedin.com/in/aziz-khaldi-b28207261/" },
  { name: "GitHub", icon: "gh", url: "https://github.com/AzizKhaldi01" },
  { name: "WhatsApp", icon: "wa", url: "https://wa.me/213779577865" },
];

const staggerItem = {
  hidden: { y: 80, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 1.8 + i * 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-main px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Social sidebar */}
      <div className="fixed left-4 md:left-8 bottom-0 z-20 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-white/30">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-300 text-sm tracking-widest [writing-mode:vertical-lr]"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full pt-24 md:pt-32">
        {/* Greeting */}
        <motion.p
          className="text-sec/60 font-cabinet text-sm md:text-base tracking-widest uppercase mb-4"
          variants={staggerItem}
          custom={0}
          initial="hidden"
          animate="visible"
        >
          Hi! I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          className="text-sec font-righteous text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-none mb-6"
          variants={staggerItem}
          custom={1}
          initial="hidden"
          animate="visible"
        >
          KHALID AHMED
          <br />
          <span className="text-gold">ABDELAZIZ</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          className="max-w-2xl"
          variants={staggerItem}
          custom={3}
          initial="hidden"
          animate="visible"
        >
          <p className="text-thr font-cabinet text-lg md:text-xl lg:text-2xl leading-relaxed">
            I&apos;m Aziz — a{" "}
            <span className="text-sec font-semibold">Full Stack Developer</span>{" "}
            crafting fast, scalable, and immersive digital experiences that merge
            creativity with technology.
          </p>
        </motion.div>

        {/* Skills tags */}
        <motion.div
          className="flex flex-wrap gap-3 mt-8"
          variants={staggerItem}
          custom={5}
          initial="hidden"
          animate="visible"
        >
          {["Full Stack Developer", "UI & UX Designer", "SaaS Architect"].map(
            (skill) => (
              <span
                key={skill}
                className="px-4 py-2 border border-white/20 rounded-full text-sm text-thr font-cabinet"
              >
                {skill}
              </span>
            )
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
      >
        <motion.p
          className="text-thr/50 text-xs tracking-widest uppercase mb-2 text-center font-cabinet"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          scroll down
        </motion.p>
      </motion.div>
    </section>
  );
}
