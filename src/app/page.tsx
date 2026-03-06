"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion"

export default function Home() {
  return (

    <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
      <Navbar /> 
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      </motion.main>
  );
}