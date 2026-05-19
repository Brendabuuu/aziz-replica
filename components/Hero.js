"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { name: "Email", icon: "em", url: "mailto:brenda_pu@163.com" },
  { name: "Phone", icon: "ph", url: "tel:+8617612157859" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-[#e7e7e7] px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Social sidebar - left */}
      <div className="fixed left-4 md:left-8 bottom-0 z-20 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-[#1e1e1e]/20">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1e1e1e]/40 hover:text-[#1e1e1e] transition-colors duration-300 text-xs tracking-[0.2em] [writing-mode:vertical-lr]"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full pt-24 md:pt-32">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Left content */}
          <div className="md:max-w-xl">
            {/* Greeting with word animation */}
            <div className="text-container mb-4">
              <div className="word-wrapper">
                <motion.span
                  className="word text-[#1e1e1e]/50 font-cabinet text-sm md:text-base tracking-widest uppercase"
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, delay: 2.0, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  Hi!
                </motion.span>
              </div>
              <div className="word-wrapper">
                <motion.span
                  className="word text-[#1e1e1e]/50 font-cabinet text-sm md:text-base tracking-widest uppercase"
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, delay: 2.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  I&apos;m
                </motion.span>
              </div>
            </div>

            {/* Name */}
            <motion.h1
              className="text-[#1e1e1e] font-righteous text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-none mb-6"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              BRENDA
              <br />
              <span className="text-[#c9a96e]">PU</span>
            </motion.h1>

            {/* Title */}
            <motion.div
              className="max-w-2xl"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-[#1e1e1e]/80 font-cabinet text-lg md:text-xl lg:text-2xl leading-relaxed">
                这里是标题 — 你的身份与专业介绍
              </p>
            </motion.div>

            {/* Skills tags */}
            <motion.div
              className="flex flex-wrap gap-3 mt-8"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {["标签 1", "标签 2", "标签 3", "标签 4"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border border-[#1e1e1e]/20 rounded-full text-sm text-[#1e1e1e]/60 font-cabinet"
                  >
                    {skill}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Right decorative - large name */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.8 }}
          >
            <span className="font-righteous text-[10rem] leading-none text-[#1e1e1e]/5 select-none">
              B
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
      >
        <motion.p
          className="text-[#1e1e1e]/30 text-xs tracking-widest uppercase mb-2 text-center font-cabinet"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          scroll down
        </motion.p>
      </motion.div>
    </section>
  );
}
