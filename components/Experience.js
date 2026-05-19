"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    company: "公司名称 1",
    role: "职位名称",
    period: "202X – 至今",
    description: "这里是工作经历描述，替换为你实际的经历内容。",
  },
  {
    company: "公司名称 2",
    role: "职位名称",
    period: "202X – 202X",
    description: "这里是工作经历描述，替换为你实际的经历内容。",
  },
  {
    company: "公司名称 3",
    role: "职位名称",
    period: "202X – 202X",
    description: "这里是工作经历描述，替换为你实际的经历内容。",
  },
  {
    company: "公司名称 4",
    role: "职位名称",
    period: "202X – 202X",
    description: "这里是工作经历描述，替换为你实际的经历内容。",
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
      className="relative py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-[#e7e7e7] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-righteous text-4xl md:text-5xl lg:text-6xl text-[#1e1e1e] mb-4">
            My <span className="text-[#c9a96e]">Journey</span>
          </h2>
          <p className="text-[#1e1e1e]/60 font-cabinet text-lg">
            这里是副标题
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#1e1e1e]/10">
            <motion.div
              className="w-full bg-[#c9a96e]/50"
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
                <div className="absolute -left-[1.65rem] md:-left-[3.3rem] top-1 w-3 h-3 rounded-full bg-[#c9a96e] border-2 border-[#e7e7e7]" />

                <div className="bg-white/[0.5] border border-[#1e1e1e]/5 rounded-2xl p-6 md:p-8 hover:border-[#c9a96e]/20 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <h3 className="font-cabinet text-xl md:text-2xl font-bold text-[#1e1e1e]">
                      {exp.company}
                    </h3>
                    <span className="text-[#c9a96e]/70 text-sm font-cabinet">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[#1e1e1e]/50 text-sm font-cabinet mb-3 uppercase tracking-wider">
                    {exp.role}
                  </p>
                  <p className="text-[#1e1e1e]/60 font-cabinet text-base leading-relaxed">
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
