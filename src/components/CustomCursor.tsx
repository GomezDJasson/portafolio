"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full bg-white/30 backdrop-blur pointer-events-none z-50"
      animate={{
        x: mousePosition.x - (isHovering ? 20 : 12),
        y: mousePosition.y - (isHovering ? 20 : 12),
        width: isHovering ? 40 : 24,
        height: isHovering ? 40 : 24,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    />
  );
}