"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aziz-khaldi-b28207261/" },
    { name: "GitHub", url: "https://github.com/AzizKhaldi01" },
    { name: "WhatsApp", url: "https://wa.me/213779577865" },
    { name: "Email", url: "mailto:contact@azizkhaldi.com" },
  ];

  return (
    <footer
      id="contact"
      className="relative py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-main border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-righteous text-4xl md:text-5xl lg:text-6xl text-sec mb-4">
            Let&apos;s <span className="text-gold">Connect</span>
          </h2>
          <p className="text-thr font-cabinet text-lg max-w-xl mx-auto">
            Have a project in mind? Let&apos;s work together to create something
            amazing.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <span className="font-cabinet text-lg text-thr group-hover:text-gold transition-colors duration-300">
                {link.name}
              </span>
              <span className="block h-px w-0 bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-thr/40 font-cabinet text-sm">
            © {new Date().getFullYear()} Aziz Khaldi. Crafted with care.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
