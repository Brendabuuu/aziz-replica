"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-4 md:px-8 py-6 md:py-8 font-cabinet">
      <a href="#home">
        <Image
          src="/images/logo.png"
          alt="Brenda Logo"
          width={28}
          height={36}
          className="cursor-pointer"
          priority
        />
      </a>

      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className="relative block overflow-hidden whitespace-nowrap text-lg text-white hover:opacity-70 transition-opacity duration-300"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <motion.span
              className="inline-block"
              animate={{
                y: hovered === i ? "-100%" : "0%",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {link.label}
            </motion.span>
            <motion.span
              className="absolute inset-0 inline-block"
              animate={{
                y: hovered === i ? "0%" : "100%",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {link.label}
            </motion.span>
          </a>
        ))}
      </div>

      {/* Mobile hamburger would go here */}
    </nav>
  );
}
