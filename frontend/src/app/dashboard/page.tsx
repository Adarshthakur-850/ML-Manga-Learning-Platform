import { Target, Zap, Trophy, Flame } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl font-sans text-[#ededed]">
      <h1 className="text-4xl font-bold mb-12 text-[#b500ff] uppercase tracking-wider items-center flex gap-4">
          <Target className="w-10 h-10" /> Learning Dashboard
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#111116] border border-[#2a2a35] rounded-xl p-8 relative overflow-hidden">
               <div className="absolute -right-10 -top-10 text-[#2a2a35] opacity-20"><Zap size={200} /></div>
               <h2 className="text-2xl font-bold mb-4 relative z-10 tracking-wide">Current Rank: <span className="text-[#00f3ff] drop-shadow-[0_0_8px_rgba(0,243,255,0.6)]">Data Genin</span></h2>
               <div className="flex items-center gap-4 mb-2 relative z-10 w-full mt-8">
                   <div className="text-4xl font-black text-white min-w-[max-content]">LVL 4</div>
                   <div className="bg-[#050510] h-4 flex-grow rounded-full overflow-hidden border border-[#2a2a35]">
                       <div className="bg-gradient-to-r from-[#00f3ff] to-[#ff00ea] h-full" style={{width: '65%'}}></div>
                   </div>
                   <div className="text-sm font-bold text-gray-400 whitespace-nowrap">650 / 1000 XP</div>
               </div>
            </div>

            <div className="bg-[#111116] border border-[#2a2a35] rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6 flex gap-2 items-center tracking-widest uppercase"><Trophy className="text-[#ff00ea]" /> Recent Achievements</h3>
                <div className="space-y-4">
                   <div className="flex items-center justify-between p-4 bg-[#0c0c14] border border-[#1a1a24] rounded-lg border-l-4 border-l-[#ff00ea] hover:bg-[#161622] transition-colors">
                       <div>
                           <h4 className="font-bold text-lg">Matrix Multiplication</h4>
                           <p className="text-sm text-gray-400">Completed Chapter 3 of NumPy Ninja</p>
                       </div>
                       <div className="font-black text-[#00f3ff] text-xl">+100 XP</div>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-[#0c0c14] border border-[#1a1a24] rounded-lg border-l-4 border-l-[#00f3ff] hover:bg-[#161622] transition-colors">
                       <div>
                           <h4 className="font-bold text-lg">First Boss Defeated</h4>
                           <p className="text-sm text-gray-400">Answered the Array slicing quiz perfectly</p>
                       </div>
                       <div className="font-black text-[#00f3ff] text-xl">+50 XP</div>
                   </div>
                </div>
            </div>
         </div>

         <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#1c0c1a] to-[#0f0814] border border-[#ff00ea]/30 rounded-xl p-8 text-center shadow-[0_0_30px_rgba(255,0,234,0.1)] relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-screen"></div>
                <Flame className="w-20 h-20 mx-auto text-[#ff00ea] mb-2 drop-shadow-[0_0_15px_rgba(255,0,234,0.8)]" />
                <h3 className="text-5xl font-black text-white mb-2">3 Days</h3>
                <p className="text-[#ff00ea] tracking-widest uppercase font-bold text-sm">Learning Streak</p>
            </div>
         </div>
      </div>
    </div>
  )
}
