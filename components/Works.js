"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const portfolioPages = Array.from({ length: 28 }, (_, i) => ({
  id: i + 1,
  src: `/works/page-${i + 1}.png`,
  alt: `Portfolio page ${i + 1}`,
}));

export default function Works() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-[#e7e7e7] overflow-hidden"
    >
      <motion.div className="max-w-6xl mx-auto" style={{ opacity }}>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-righteous text-4xl md:text-5xl lg:text-6xl text-[#1e1e1e] mb-4">
            My <span className="text-[#c9a96e]">Portfolio</span>
          </h2>
          <p className="text-[#1e1e1e]/60 font-cabinet text-lg">
            作品集展示 · 点击查看大图
          </p>
        </motion.div>

        {/* Image grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {portfolioPages.slice(0, 12).map((page, i) => (
            <motion.div
              key={page.id}
              className="group relative overflow-hidden rounded-lg bg-white cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 12) * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              onClick={() => setSelectedId(selectedId === page.id ? null : page.id)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={page.src}
                  alt={page.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Show remaining pages if any */}
        {portfolioPages.length > 12 && (
          <motion.div
            className="grid md:grid-cols-3 gap-4 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {portfolioPages.slice(12, 15).map((page, i) => (
              <motion.div
                key={page.id}
                className="group relative overflow-hidden rounded-lg bg-white cursor-pointer"
                onClick={() => setSelectedId(selectedId === page.id ? null : page.id)}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={page.src}
                    alt={page.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* More pages indicator */}
        {portfolioPages.length > 15 && (
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[#1e1e1e]/40 font-cabinet text-sm">
              共 {portfolioPages.length} 页 · 点击图片查看详情
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
