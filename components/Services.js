"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const services = [
  {
    num: "01",
    title: "品牌视觉与创意策划",
    description:
      "主导品牌旗舰店创意视觉策划，结合品牌调性与IP特性持续迭代。从首页前三屏到活动承接页，打造统一的品牌视觉语言与沉浸式购物体验。",
  },
  {
    num: "02",
    title: "电商全链路设计",
    description:
      "覆盖天猫、淘宝等平台全链路视觉输出——主图、详情页、分类页、推广素材。通过数据分析和A/B测试优化，带动活动转化率提升30%。",
  },
  {
    num: "03",
    title: "UI/交互设计",
    description:
      "负责App、Web及H5界面交互设计，把控整体视觉风格。建立设计规范与组件库，确保产品多端适配与统一的品牌体验。",
  },
  {
    num: "04",
    title: "AI驱动创意设计",
    description:
      "熟练运用Midjourney、Stable Diffusion等AI工具提升创意效率与产出质量。以AI赋能设计流程，将创意概念快速转化为高品质视觉素材。",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Services() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  // Marquee text
  const marqueeText = "VISUAL DESIGN  UI DESIGN  BRAND STRATEGY  ";
  const repeatedMarquee = marqueeText.repeat(6);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-main overflow-hidden"
    >
      {/* Marquee header */}
      <div className="w-full overflow-hidden mb-16 border-y border-white/5 py-6">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <p className="font-megrim text-4xl md:text-5xl lg:text-6xl text-white/10 uppercase whitespace-nowrap mr-8">
            {repeatedMarquee}
          </p>
        </motion.div>
      </div>

      <motion.div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16" style={{ opacity }}>
        <h2 className="font-righteous text-4xl md:text-5xl lg:text-6xl text-sec mb-4 text-center">
          What <span className="text-gold">I Do</span>
        </h2>
        <p className="text-thr font-cabinet text-center text-lg mb-16 max-w-2xl mx-auto">
          数据驱动的设计决策，兼具商业视角与创意执行力
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              className="group relative p-8 rounded-2xl border border-white/5 hover:border-gold/20 transition-all duration-500 bg-white/[0.02]"
              variants={cardVariants}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="font-righteous text-6xl md:text-7xl text-white/5 absolute top-4 right-6 group-hover:text-gold/10 transition-colors duration-500">
                {service.num}
              </span>
              <h3 className="font-cabinet text-xl md:text-2xl font-bold text-sec mb-4 relative z-10">
                {service.title}
              </h3>
              <p className="text-thr/70 font-cabinet text-base leading-relaxed relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
