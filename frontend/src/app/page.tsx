"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center space-y-8"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase">
          Master AI in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] to-[#ff00ea] drop-shadow-[0_0_10px_rgba(255,0,234,0.6)]">
            Manga Style
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto">
          Read immersive comic panels, run real code, and level up your Data Science & Machine Learning skillset.
        </p>

        <div className="pt-8">
          <Link href="/explore">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 243, 255, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#01111a] border-2 border-[#00f3ff] text-[#00f3ff] font-bold text-xl rounded-full relative overflow-hidden group flex items-center gap-2 mx-auto"
            >
              Start Learning <ChevronRight className="w-6 h-6" />
              <div className="absolute inset-0 bg-[#00f3ff] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Featured Topics Mock Preview */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full max-w-6xl mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 pb-12"
      >
        {["Neural Networks Arc", "The Data Wrangling Manga", "MLOps Awakening"].map((title, i) => (
          <div key={i} className="bg-[#111116] border border-[#2a2a35] rounded-xl overflow-hidden hover:border-[#ff00ea] transition-colors relative group">
            <div className="h-48 bg-gray-800 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-30 bg-gradient-to-tr from-[#00f3ff] to-transparent mix-blend-overlay"></div>
               <span className="font-bold text-gray-500 text-2xl tracking-widest uppercase">COVER ART</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#ff00ea] transition-colors">{title}</h3>
              <p className="text-sm text-gray-400">Master the basics step-by-step through our engaging visual episodes and interactive boss battles.</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
