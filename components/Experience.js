"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    company: "Techivation",
    role: "Full Stack Developer (Part-time)",
    period: "May 2025 – Present",
    description:
      "Building and maintaining Techivation's full web and SaaS ecosystem powering audio plugin licensing and management.",
  },
  {
    company: "VexLogic",
    role: "Full Stack Engineer (Part-time)",
    period: "Jun 2025 – Present",
    description:
      "Developing an AI-powered SaaS platform with real-time collaboration, billing systems, and modern infrastructure.",
  },
  {
    company: "Comra AI",
    role: "Full Stack Developer (Full-time)",
    period: "Nov 2024 – Present",
    description:
      "Building immersive 3D virtual tour systems using React Three Fiber, Prisma, and PostgreSQL.",
  },
  {
    company: "Digital Natives",
    role: "Frontend Developer (Full-time)",
    period: "Feb 2024 – Oct 2024",
    description:
      "Built scalable web apps and reusable UI systems using React, Next.js, and Tailwind CSS.",
  },
  {
    company: "Fintechracy",
    role: "Frontend Developer (Full-time)",
    period: "Nov 2023 – Mar 2024",
    description:
      "Developed a mobile-first PWA for financial management with offline storage and barcode scanning.",
  },
  {
    company: "Codintex",
    role: "Software Engineer (Internship)",
    period: "Earlier",
    description:
      "Worked on enterprise desktop apps using .NET and C#, gaining foundational experience in backend systems.",
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
            Experience &amp; professional growth
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
