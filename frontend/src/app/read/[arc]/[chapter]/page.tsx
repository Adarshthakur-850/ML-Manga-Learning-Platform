"use client";

import { useScroll, useSpring, motion } from "framer-motion";
import { useParams } from "next/navigation";
import CodePlayground from "@/components/CodePlayground";
import MangaPanel from "@/components/MangaPanel";
import QuizSystem from "@/components/QuizSystem";

export default function ReaderPage() {
  const params = useParams();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Mock data for the panels
  const chapterData = {
    title: "Arrays Basics",
    arc: params.arc,
    panels: [
      { id: 1, type: "text", content: "Welcome to NumPy! NumPy arrays are the core of fast computation. Unlike Python lists, they are stored in a contiguous block of memory." },
      { id: 2, type: "image", content: "Manga visualization of memory blocks" },
      { id: 3, type: "code", content: "import numpy as np\narr = np.array([1, 2, 3])\nprint(arr)" },
      { id: 4, type: "quiz", question: "What does np.array do?", options: ["Creates a vanilla python list", "Creates an optimized NumPy array", "Imports NumPy module"], answer: 1 }
    ]
  };

  return (
    <div className="flex bg-[#050510] text-[#ededed] min-h-screen relative font-sans">
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#00f3ff] to-[#ff00ea] transform origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Sticky Sidebar */}
      <div className="hidden lg:block w-72 border-r border-[#1a1a24] p-6 lg:fixed lg:top-16 lg:h-[calc(100vh-4rem)] overflow-y-auto">
        <h2 className="text-[#b500ff] font-bold tracking-widest uppercase text-xs mb-8">Chapters List</h2>
        <ul className="space-y-6 text-sm font-semibold text-gray-400 border-l-2 border-[#1a1a24] pl-4">
          <li className="text-[#00f3ff] relative">
             <span className="absolute -left-[21px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00f3ff]"></span>
             <span className="ml-2 block cursor-pointer hover:underline">Chapter 1: The Awakening</span>
          </li>
          <li className="hover:text-white transition-colors cursor-pointer relative">
             <span className="absolute -left-[21px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-gray-600 bg-transparent"></span>
             <span className="ml-2">Chapter 2: Data Structures</span>
          </li>
          <li className="hover:text-white transition-colors cursor-pointer relative">
             <span className="absolute -left-[21px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-gray-600 bg-transparent"></span>
             <span className="ml-2">Chapter 3: Memory Access</span>
          </li>
        </ul>
        
        <div className="mt-16">
            <h2 className="text-[#ff00ea] font-bold tracking-widest uppercase text-xs mb-4">Your Progress</h2>
            <div className="bg-[#111116] rounded-full h-2 w-full overflow-hidden">
               <div className="bg-gradient-to-r from-[#ff00ea] to-[#b500ff] h-full" style={{width: '24%'}}></div>
            </div>
            <div className="text-xs text-gray-500 mt-2 text-right">Lvl 4 (24%)</div>
        </div>
      </div>

      {/* Manga Scroll Area */}
      <div className="flex-grow lg:ml-72 max-w-3xl mx-auto py-12 px-4 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#0c0c14] min-h-screen">
        <div className="text-center mb-24 mt-8">
           <h1 className="text-5xl md:text-6xl font-black uppercase text-white tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
               {chapterData.title}
           </h1>
           <div className="text-[#ff00ea] mt-4 tracking-widest uppercase mb-16 font-bold text-lg drop-shadow-[0_0_5px_rgba(255,0,234,0.6)]">ARC: {chapterData.arc}</div>
        </div>
        
        <div className="space-y-24 pb-32">
           {chapterData.panels.map((panel, idx) => (
               <MangaPanel key={panel.id} index={idx}>
                   {panel.type === 'text' && (
                       <div className="p-8 md:p-12 text-xl md:text-2xl leading-relaxed shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] font-medium">
                           <p>{panel.content}</p>
                       </div>
                   )}
                   {panel.type === 'code' && (
                       <div className="p-4 bg-black/40">
                         <CodePlayground code={panel.content || ""} />
                       </div>
                   )}
                   {panel.type === 'image' && (
                       <div className="w-full h-[400px] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-gray-900 border-2 border-[#1a1a24] rounded-sm flex items-center justify-center text-gray-400 font-bold uppercase tracking-wide font-mono flex-col shadow-inner">
                           <div className="w-32 h-32 border-4 border-[#00f3ff] rounded-full flex items-center justify-center animate-pulse mb-4 shadow-[0_0_20px_rgba(0,243,255,0.5)]">
                              [IMG]
                           </div>
                           {panel.content}
                       </div>
                   )}
                   {panel.type === 'quiz' && (
                       <div className="p-4">
                          <QuizSystem question={panel.question || ""} options={panel.options || []} answer={panel.answer || 0} />
                       </div>
                   )}
               </MangaPanel>
           ))}
        </div>
      </div>
    </div>
  );
}
