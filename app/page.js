"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page curveRoute overflow-hidden relative">
      <AnimatePresence mode="wait">
        {loading && <PageTransition key="transition" />}
      </AnimatePresence>

      <Nav />

      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Works />
      </main>

      <Footer />
    </div>
  );
}
