"use client";

import { motion } from "framer-motion";

export default function MangaPanel({
  children,
  index
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 * (index % 3) }}
      className="relative w-full"
    >
      <div className="absolute -left-20 top-0 h-full w-4 border-l-2 border-dashed border-[#1a1a24] hidden md:block"></div>
      <div className="bg-[#0c0c14] border border-[#2a2a35] shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:border-[#00f3ff]/50 transition-colors duration-500 rounded-sm">
        {children}
      </div>
    </motion.div>
  );
}
