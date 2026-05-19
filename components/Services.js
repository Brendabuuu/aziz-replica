"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const services = [
  {
    num: "01",
    title: "服务类别 1",
    description: "这里是你的服务/能力描述文字，可以写你擅长的设计领域。",
  },
  {
    num: "02",
    title: "服务类别 2",
    description: "这里是第二项服务的描述，替换为你实际的内容。",
  },
  {
    num: "03",
    title: "服务类别 3",
    description: "这里是第三项服务的描述，替换为你实际的内容。",
  },
  {
    num: "04",
    title: "服务类别 4",
    description: "这里是第四项服务的描述，替换为你实际的内容。",
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

  const marqueeText = "SERVICE 01  SERVICE 02  SERVICE 03  SERVICE 04  ";
  const repeatedMarquee = marqueeText.repeat(6);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#e7e7e7] overflow-hidden"
    >
      {/* Marquee header */}
      <div className="w-full overflow-hidden mb-16 border-y border-[#1e1e1e]/5 py-6">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <p className="text-[#1e1e1e]/10 text-4xl md:text-5xl lg:text-6xl uppercase whitespace-nowrap mr-8" style={{ fontFamily: "'Megrim', cursive" }}>
            {repeatedMarquee}
          </p>
        </motion.div>
      </div>

      <motion.div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16" style={{ opacity }}>
        <h2 className="font-righteous text-4xl md:text-5xl lg:text-6xl text-[#1e1e1e] mb-4 text-center">
          What <span className="text-[#c9a96e]">I Do</span>
        </h2>
        <p className="text-[#1e1e1e]/60 font-cabinet text-center text-lg mb-16 max-w-2xl mx-auto">
          这里是一句概括性副标题
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              className="group relative p-8 rounded-2xl border border-[#1e1e1e]/5 hover:border-[#c9a96e]/20 transition-all duration-500 bg-white/[0.5]"
              variants={cardVariants}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="font-righteous text-6xl md:text-7xl text-[#1e1e1e]/5 absolute top-4 right-6 group-hover:text-[#c9a96e]/10 transition-colors duration-500">
                {service.num}
              </span>
              <h3 className="font-cabinet text-xl md:text-2xl font-bold text-[#1e1e1e] mb-4 relative z-10">
                {service.title}
              </h3>
              <p className="text-[#1e1e1e]/60 font-cabinet text-base leading-relaxed relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
