"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sword, ShieldAlert } from "lucide-react";

export default function QuizSystem({
  question,
  options,
  answer
}: {
  question: string;
  options: string[];
  answer: number;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
  };

  const isCorrect = selected === answer;

  return (
    <div className="p-6 bg-[#160c1d] border-2 border-[#b500ff] border-dashed rounded-xl relative overflow-hidden">
      <div className="absolute opacity-10 top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#b500ff_0%,_transparent_70%)]"></div>
      
      <div className="relative z-10 flex flex-col items-center">
         <div className="bg-[#b500ff] text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2 shadow-[0_0_15px_rgba(181,0,255,0.6)]">
            <Sword size={14} /> Boss Battle
         </div>
         <h3 className="text-xl font-bold text-center mb-8 drop-shadow-md">{question}</h3>
         
         <div className="w-full space-y-3">
           {options.map((opt, idx) => (
             <button
               key={idx}
               onClick={() => handleSelect(idx)}
               className={`w-full p-4 text-left border rounded-lg font-bold transition-all duration-300 ${
                 showResult 
                   ? idx === answer 
                     ? "bg-[#00f3ff]/20 border-[#00f3ff] text-[#00f3ff] shadow-[0_0_20px_rgba(0,243,255,0.4)]" 
                     : idx === selected 
                         ? "bg-red-900/40 border-red-500 text-red-500" 
                         : "border-[#2a2a35] text-gray-500"
                   : "border-[#b500ff]/50 hover:border-[#ff00ea] hover:bg-[#ff00ea]/10 hover:shadow-[0_0_15px_rgba(255,0,234,0.3)]"
               }`}
             >
               <span className="opacity-50 mr-3">{idx + 1}.</span> {opt}
             </button>
           ))}
         </div>

         <AnimatePresence>
            {showResult && (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8, y: 20 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 className={`mt-6 py-2 px-6 rounded-full font-black uppercase tracking-widest text-sm shadow-[0_0_20px_currentColor] flex items-center gap-2 ${isCorrect ? 'text-[#00f3ff] bg-[#00f3ff]/10 border border-[#00f3ff]' : 'text-red-500 bg-red-900/20 border border-red-500'}`}
               >
                 {isCorrect ? (
                     <>VICTORY! +50 XP</>
                 ) : (
                     <><ShieldAlert size={16} /> DEFEAT... TRY AGAIN</>
                 )}
               </motion.div>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
}
