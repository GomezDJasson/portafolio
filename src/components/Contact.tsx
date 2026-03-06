"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-28 border-t border-zinc-800"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold"
      >
        Contacto
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-6 text-zinc-500 dark:text-zinc-400 max-w-xl"
      >
        Si quieres trabajar conmigo o tienes alguna pregunta,
        no dudes en contactarme. Siempre estoy abierto a nuevas
        oportunidades y proyectos interesantes.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-6 mt-10"
      >
        <a
          href="mailto:fallenangeljd@email.com"
          className="px-6 py-3 border border-zinc-700 rounded-lg hover:bg-zinc-900 transition"
        >
          Enviar Email
        </a>

        <a
          href="https://github.com/gomezdjasson/"
          target="_blank"
          className="px-6 py-3 border border-zinc-700 rounded-lg hover:bg-zinc-900 transition"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/jassondgomez/"
          target="_blank"
          className="px-6 py-3 border border-zinc-700 rounded-lg hover:bg-zinc-900 transition"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}