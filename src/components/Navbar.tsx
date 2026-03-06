"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="w-full border-b border-[var(--border)] backdrop-blur bg-black/60 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="font-semibold text-lg">
          Jasson.dev
        </div>

        <nav className="flex items-center gap-6 text-sm">

          <a href="#about" className="hover:text-zinc-400 transition">
            About
          </a>

          <a href="#projects" className="hover:text-zinc-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-zinc-400 transition">
            Contact
          </a>

          <ThemeToggle />

        </nav>

      </div>
    </header>
  );
}