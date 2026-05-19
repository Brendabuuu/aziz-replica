"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    company: "青木科技股份有限公司",
    role: "设计组长",
    period: "2025.5 – 至今",
    description:
      "负责泡泡玛特天猫/淘宝旗舰店首页前三屏创意策划及视觉设计，结合品牌调性与IP特性持续迭代。主导多IP合成毛绒系列视觉语言设计，确保品牌辨识度。覆盖主图、详情页、分类页等全店视觉输出，落地活动机制视觉方案。",
  },
  {
    company: "自由设计师（MBA在读）",
    role: "独立设计师",
    period: "2022.9 – 2025.4",
    description:
      "以独立设计师身份为品牌提供视觉设计服务，涵盖品牌视觉、电商页面、社媒物料等。曾在蓝色光标用AI工具完成Web开发与UI设计，建立B端产品设计组件库。",
  },
  {
    company: "上海贸腾电子商务有限公司",
    role: "视觉设计",
    period: "2020.6 – 2022.10",
    description:
      "主导林肯、捷豹路虎等豪华车品牌S/A级大促活动整体视觉策划。通过数据分析和A/B测试优化，带动活动转化率提升30%。建立电商营销设计体系，制定跨平台视觉规范。",
  },
  {
    company: "德施利安资产管理股份有限公司",
    role: "视觉设计 / UI设计",
    period: "2014.7 – 2020.6",
    description:
      "负责公司网站、App及H5界面交互设计，把控整体视觉风格。主导公司品牌形象升级，建立统一的品牌设计语言。负责品牌海报、电商详情页、Banner等线上线下物料设计。",
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Experience() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-main overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-righteous text-4xl md:text-5xl lg:text-6xl text-sec mb-4">
            My <span className="text-gold">Journey</span>
          </h2>
          <p className="text-thr font-cabinet text-lg">
            12年设计经验 · 从视觉到品牌的成长之路
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/10">
            <motion.div
              className="w-full bg-gold/50"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 pl-6 md:pl-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="relative"
                variants={itemVariants}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[1.65rem] md:-left-[3.3rem] top-1 w-3 h-3 rounded-full bg-gold border-2 border-main" />

                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-gold/20 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <h3 className="font-cabinet text-xl md:text-2xl font-bold text-sec">
                      {exp.company}
                    </h3>
                    <span className="text-gold/70 text-sm font-cabinet">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-thr/60 text-sm font-cabinet mb-3 uppercase tracking-wider">
                    {exp.role}
                  </p>
                  <p className="text-thr/70 font-cabinet text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
