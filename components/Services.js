"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Full Stack Development",
    description:
      "Building end-to-end web applications with Next.js, React, Node.js, and modern frameworks. Delivering scalable, performant solutions from database to deployment.",
  },
  {
    num: "02",
    title: "UI/UX Design & Frontend",
    description:
      "Designing modern, responsive interfaces with Figma, Tailwind CSS, and Framer Motion. Creating intuitive experiences with clean design systems and pixel-perfect implementations.",
  },
  {
    num: "03",
    title: "SaaS Platform Development",
    description:
      "Developing end-to-end SaaS solutions with subscription systems, Stripe billing, and multi-tenant management. Ensuring scalability and secure user management.",
  },
  {
    num: "04",
    title: "API & System Architecture",
    description:
      "Designing maintainable APIs with PostgreSQL, Prisma, and MongoDB. Focusing on performance optimization, security best practices, and reliable data flow.",
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
  const marqueeText = "FULL-STACK DEVELOPER  UI & UX DESIGNER  ";
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
          Driving measurable growth and engagement through thoughtful design and
          engineering
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
