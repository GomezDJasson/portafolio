"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-28 border-t border-zinc-800"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold"
      >
        Sobre mí
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-6 text-zinc-500 dark:text-zinc-400 max-w-2xl text-lg"
      >
        Soy un desarrollador enfocado en crear aplicaciones web modernas,
        rápidas y con una experiencia de usuario cuidada. Me gusta trabajar
        con tecnologías modernas del ecosistema JavaScript y construir
        interfaces que sean tanto funcionales como visualmente atractivas.
      </motion.p>
    </section>
  );
}