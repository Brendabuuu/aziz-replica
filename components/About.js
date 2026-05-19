"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-main overflow-hidden"
    >
      {/* Top curve decoration */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-main to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div className="mb-16" style={{ opacity }}>
          <h2 className="font-righteous text-4xl md:text-5xl lg:text-6xl text-sec mb-4">
            About <span className="text-gold">Me</span>
          </h2>
          <p className="text-thr font-cabinet text-lg max-w-xl">
            Scroll to Explore My Story
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative"
            style={{ y }}
          >
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-2xl">
              <Image
                src="/images/brenda-about.jpg"
                alt="Brenda Pu"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-full" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-white/10 rounded-full" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-gold/10 text-gold text-xs tracking-widest uppercase rounded-full font-cabinet">
                Visual &amp; Brand Designer
              </span>
              <span className="px-3 py-1 bg-white/5 text-thr text-xs tracking-widest uppercase rounded-full font-cabinet">
                UI &amp; E-commerce Design
              </span>
            </div>

            <p className="text-thr font-cabinet text-base md:text-lg leading-relaxed mb-6">
              资深设计师，12年视觉设计经验。专注视觉营销设计与产品界面设计，
              擅长数据驱动的设计决策，具备跨部门协作经验和团队管理能力。
            </p>

            <p className="text-thr/70 font-cabinet text-base leading-relaxed mb-8">
              曾主导泡泡玛特、林肯等多个电商大型活动视觉策划，为项目带来显著的转化提升。
              具有MBA商业背景，注重设计价值与商业目标的深度结合。
              MBA毕业于华东理工大学，主修消费心理与行为营销、设计思维。
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <motion.p
                  className="font-righteous text-4xl md:text-5xl text-gold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  12+
                </motion.p>
                <p className="text-thr/60 text-sm font-cabinet mt-1">
                  Years of Experience
                </p>
              </div>
              <div>
                <motion.p
                  className="font-righteous text-4xl md:text-5xl text-gold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  08+
                </motion.p>
                <p className="text-thr/60 text-sm font-cabinet mt-1">
                  Brands Served
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
