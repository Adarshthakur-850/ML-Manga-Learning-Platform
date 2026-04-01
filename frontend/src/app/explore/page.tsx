import Link from 'next/link';

const topics = [
  { id: 'ml-basics', title: 'Machine Learning Basics', arc: "Introduction", chapters: 3 },
  { id: 'numpy', title: 'NumPy Ninja', arc: "Data Foundations", chapters: 5 },
  { id: 'pandas', title: 'Pandas Adventure', arc: "Data Foundations", chapters: 6 },
  { id: 'pytorch', title: 'Deep Learning with PyTorch', arc: "Neural Ascension", chapters: 8 },
];

export default function ExplorePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h1 className="text-4xl font-bold mb-8 text-[#00f3ff] uppercase tracking-wider">Explore Arcs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topics.map(topic => (
          <Link key={topic.id} href={`/read/${topic.id}/chapter-1`}>
            <div className="bg-[#111116] border-2 border-[#1a1a24] hover:border-[#ff00ea] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,0,234,0.3)] group h-[400px] flex flex-col cursor-pointer">
              <div className="flex-grow bg-gradient-to-br from-gray-900 to-[#0a0a0f] border-b border-[#1a1a24] relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-gradient-to-t from-[#ff00ea] to-transparent mix-blend-screen"></div>
                 <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-full text-xs font-bold text-[#00f3ff] border border-[#00f3ff]">
                   {topic.chapters} Chaps
                 </div>
                 <div className="text-gray-700 font-black text-6xl opacity-20 transform -rotate-12 group-hover:scale-110 transition-transform duration-500">
                    {topic.title.substring(0,2).toUpperCase()}
                 </div>
              </div>
              <div className="p-5">
                <div className="text-xs text-[#b500ff] font-bold mb-1 uppercase tracking-wider">{topic.arc}</div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#ff00ea] transition-colors">{topic.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
