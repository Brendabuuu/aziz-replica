"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const works = [
  {
    title: "泡泡玛特旗舰店",
    category: "天猫/淘宝旗舰店",
    description:
      "负责首页前三屏创意策划及视觉设计，结合IP特性动态调整。主导多IP合成毛绒系列视觉语言设计，确保品牌辨识度。覆盖主图、详情页、分类页、社媒物料等全链路视觉输出。",
    tech: ["品牌视觉", "IP设计", "电商页面", "全链路视觉"],
  },
  {
    title: "林肯官方旗舰店",
    category: "豪华车品牌电商",
    description:
      "负责店铺所有页面视觉把控与持续更新，首页、详情页、主图、推广素材等创意设计。优化精品产品展示页面，提升浏览深度与购买转化率。",
    tech: ["视觉策划", "A/B测试", "转化优化", "Data-driven"],
  },
  {
    title: "捷豹路虎小程序",
    category: "小程序设计",
    description:
      "负责小程序界面排版、整体风格把控及交互设计。与前端工程师对接并完成后台内容持续更新。打造与豪华车品牌调性一致的移动端体验。",
    tech: ["UI设计", "交互设计", "品牌调性", "小程序"],
  },
  {
    title: "Closetly 衣橱管理App",
    category: "UI设计规范",
    description:
      "设计现代极简+时尚轻奢风格的衣橱管理App UI规范。涵盖色彩系统、字体排版、布局规范及交互模式，以iOS原生风格为主，适配Material You。",
    tech: ["UI Design", "Design System", "Figma", "HIG"],
  },
];

export default function Works() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-main overflow-hidden"
    >
      <motion.div className="max-w-6xl mx-auto" style={{ opacity }}>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-righteous text-4xl md:text-5xl lg:text-6xl text-sec mb-4">
            Featured <span className="text-gold">Projects</span>
          </h2>
          <p className="text-thr font-cabinet text-lg">
            作品展示 · 从品牌视觉到产品设计的完整实践
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-gold/20 transition-all duration-500 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Background hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <span className="text-gold/80 text-xs tracking-widest uppercase font-cabinet">
                  {work.category}
                </span>
                <h3 className="font-cabinet text-xl md:text-2xl font-bold text-sec mt-2 mb-3 group-hover:text-gold transition-colors duration-300">
                  {work.title}
                </h3>
                <p className="text-thr/70 font-cabinet text-sm leading-relaxed mb-4">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {work.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs border border-white/10 rounded text-thr/60 font-cabinet"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
