"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Git", icon: FaGitAlt },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-28 border-t border-zinc-800"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold"
      >
        Tecnologías
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">

        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 border border-[var(--border)] rounded-xl hover:bg-[var(--card)] transition group"
            >
              <Icon size={32} className="transition-transform duration-300 group-hover:scale-125" />
              <p className="mt-3 text-sm">{skill.name}</p>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}