"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { name: "Email", url: "mailto:brenda_pu@163.com" },
    { name: "Phone", url: "tel:+8617612157859" },
  ];

  return (
    <footer
      id="contact"
      className="relative py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-[#e7e7e7] border-t border-[#1e1e1e]/5"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-righteous text-4xl md:text-5xl lg:text-6xl text-[#1e1e1e] mb-4">
            Let&apos;s <span className="text-[#c9a96e]">Connect</span>
          </h2>
          <p className="text-[#1e1e1e]/60 font-cabinet text-lg max-w-xl mx-auto">
            这里是一句联系我号召语
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-8"
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
              <span className="font-cabinet text-lg text-[#1e1e1e]/60 group-hover:text-[#c9a96e] transition-colors duration-300">
                {link.name}
              </span>
              <span className="block h-px w-0 bg-[#c9a96e] group-hover:w-full transition-all duration-300" />
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
          <p className="text-[#1e1e1e]/30 font-cabinet text-sm mb-2">
            brenda_pu@163.com · 176 1215 7859
          </p>
          <p className="text-[#1e1e1e]/20 font-cabinet text-sm">
            © {new Date().getFullYear()} Brenda. Crafted with care.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
