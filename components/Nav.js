"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
        <span className="text-sec font-righteous text-xl tracking-tight">
          Brenda
        </span>
      </a>

      <div className="flex items-center gap-6">
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className="relative block overflow-hidden whitespace-nowrap text-base text-sec hover:opacity-70 transition-opacity duration-300"
            style={{ lineHeight: 0.9 }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div>
              {link.label.split("").map((letter, j) => (
                <span
                  key={j}
                  className="inline-block"
                  style={{ transform: hovered === i ? "translateY(-100%)" : "translateY(0%)", transition: `transform 0.3s ease ${j * 0.03}s` }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <div className="absolute inset-0">
              {link.label.split("").map((letter, j) => (
                <span
                  key={j}
                  className="inline-block"
                  style={{ transform: hovered === i ? "translateY(0%)" : "translateY(100%)", transition: `transform 0.3s ease ${j * 0.03}s` }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
}
