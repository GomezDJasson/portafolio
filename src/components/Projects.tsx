"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-28 border-t border-zinc-800"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold"
      >
        Proyectos
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

        {projects.map((project) => (
  <motion.div
    key={project.title}
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="group border border-[var(--border)] rounded-xl overflow-hidden hover:shadow-xl transition"
  >

    <div className="relative overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
      />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 bg-white text-black rounded-md text-sm"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  className="px-4 py-2 border border-white rounded-md text-sm"
                >
                  Demo
                </a>

              </div>
    </div>

    <div className="p-6">

      <h3 className="text-xl font-semibold mb-2">
        {project.title}
      </h3>

      <p className="text-sm text-zinc-500 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs border border-[var(--border)] px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}