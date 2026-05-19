"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const paragraphs = [
  "这里是你的个人介绍第一段。描述你的背景、专业和经验。",
  "这里是第二段介绍内容。可以写你的设计理念、擅长领域和成就。",
];

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-[#e7e7e7] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div className="mb-16" style={{ opacity }}>
          <h2 className="font-righteous text-4xl md:text-5xl lg:text-6xl text-[#1e1e1e] mb-4">
            About <span className="text-[#c9a96e]">Me</span>
          </h2>
          <div className="text-container">
            <p className="text-[#1e1e1e]/60 font-cabinet text-lg max-w-xl">
              这里是一句副标题
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image placeholder */}
          <motion.div
            className="relative"
            style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
          >
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-2xl bg-[#1e1e1e]/5 flex items-center justify-center">
              <span className="text-[#1e1e1e]/30 font-cabinet text-lg">
                你的照片
              </span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#c9a96e]/30 rounded-full" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#1e1e1e]/10 rounded-full" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-[#c9a96e]/10 text-[#c9a96e] text-xs tracking-widest uppercase rounded-full font-cabinet">
                标签 1
              </span>
              <span className="px-3 py-1 bg-[#1e1e1e]/5 text-[#1e1e1e]/60 text-xs tracking-widest uppercase rounded-full font-cabinet">
                标签 2
              </span>
            </div>

            {paragraphs.map((text, i) => (
              <p
                key={i}
                className={`text-[#1e1e1e]/80 font-cabinet text-base md:text-lg leading-relaxed ${
                  i < paragraphs.length - 1 ? "mb-6" : "mb-8"
                }`}
              >
                {text}
              </p>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-righteous text-4xl md:text-5xl text-[#c9a96e]">
                  00
                </p>
                <p className="text-[#1e1e1e]/40 text-sm font-cabinet mt-1">
                  年份经验
                </p>
              </div>
              <div>
                <p className="font-righteous text-4xl md:text-5xl text-[#c9a96e]">
                  00+
                </p>
                <p className="text-[#1e1e1e]/40 text-sm font-cabinet mt-1">
                  项目经历
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
