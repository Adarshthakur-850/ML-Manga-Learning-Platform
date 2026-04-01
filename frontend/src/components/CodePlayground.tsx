"use client";

import { useState } from "react";
import { Play, CodeIcon } from "lucide-react";

export default function CodePlayground({ code }: { code: string }) {
  const [output, setOutput] = useState<string | null>(null);
  const [running, setRunning] = useState(false);

  const handleRun = () => {
    setRunning(true);
    setTimeout(() => {
      // Mock execution for demo purposes
      setOutput("[ 1 2 3 ]\n<class 'numpy.ndarray'>");
      setRunning(false);
    }, 800);
  };

  return (
    <div className="w-full bg-[#0d0d16] border border-[#1a1a24] rounded-lg overflow-hidden flex flex-col font-mono text-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-[#14141d] border-b border-[#2a2a35]">
        <div className="flex items-center gap-2 text-gray-400">
           <CodeIcon size={16} className="text-[#00f3ff]" />
           <span className="font-bold">Interactive Terminal</span>
        </div>
        <button 
          onClick={handleRun}
          disabled={running}
          className="flex items-center gap-1 px-3 py-1 bg-[#1a1a24] hover:bg-[#00f3ff]/20 text-[#00f3ff] border border-[#303040] hover:border-[#00f3ff] rounded-md transition-colors"
        >
          <Play size={14} /> {running ? "Running..." : "Run Code"}
        </button>
      </div>
      <div className="p-4 bg-[#050510] text-[#a5d6ff] overflow-x-auto whitespace-pre">
        <code>{code}</code>
      </div>
      {output && (
        <div className="border-t border-[#1a1a24] bg-black p-4 text-[#00f3ff] whitespace-pre border-l-4 border-l-[#ff00ea]">
           {output}
        </div>
      )}
    </div>
  );
}
