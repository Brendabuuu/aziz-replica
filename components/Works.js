"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const works = [
  {
    title: "Comra AI",
    category: "3D Virtual Tours",
    description:
      "Immersive 3D virtual tour system built with React Three Fiber, enabling interactive spatial experiences.",
    tech: ["React Three Fiber", "Prisma", "PostgreSQL", "Three.js"],
  },
  {
    title: "Techivation",
    category: "SaaS Platform",
    description:
      "Full SaaS ecosystem powering audio plugin licensing, user management, and subscription billing.",
    tech: ["Next.js", "Stripe", "Node.js", "PostgreSQL"],
  },
  {
    title: "VexLogic",
    category: "AI Platform",
    description:
      "AI-powered SaaS platform with real-time collaboration features and modern infrastructure.",
    tech: ["React", "AI/ML", "WebSockets", "Cloud"],
  },
  {
    title: "Digital Natives",
    category: "Web Applications",
    description:
      "Scalable web applications and reusable UI component systems for enterprise clients.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
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
            Featured <span className="text-gold">Works</span>
          </h2>
          <p className="text-thr font-cabinet text-lg">
            Projects that showcase my expertise
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
