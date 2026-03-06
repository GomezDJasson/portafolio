"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent"
        >
          Jasson D Gomez
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl md:text-2xl text-zinc-500 mb-6"
        >
          <TypeAnimation
            sequence={[
              "Creative Web Developer",
              2000,
              "Frontend Engineer",
              2000,
              "React & Next.js Developer",
              2000,
              "UI Focused Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg mb-8"
        >
          Construyo experiencias web modernas usando React, Next.js
          y diseño enfocado en rendimiento y experiencia de usuario.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:opacity-80 transition"
          >
            Ver proyectos
          </a>

          <a
            href="https://github.com/gomezdjasson/"
            target="_blank"
            className="px-6 py-3 rounded-lg border border-[var(--border)] hover:bg-[var(--card)] transition"
          >
            GitHub
          </a>
        </motion.div>

      </div>
    </section>
  )
}