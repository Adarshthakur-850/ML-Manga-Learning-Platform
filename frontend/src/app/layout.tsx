import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ML Manga Learning",
  description: "Learn Machine Learning through an immersive manga-style experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <nav className="w-full h-16 border-b border-[#111116] bg-opacity-80 backdrop-blur-[10px] fixed top-0 z-50 flex items-center px-6 justify-between">
          <div className="text-xl font-bold tracking-widest text-[#00f3ff] drop-shadow-[0_0_8px_rgba(0,243,255,0.6)]">
            ML<span className="text-[#ff00ea]">MANGA</span>
          </div>
          <div className="flex gap-4 font-semibold text-sm">
            <Link href="/" className="hover:text-[#00f3ff] transition-colors">Home</Link>
            <Link href="/explore" className="hover:text-[#ff00ea] transition-colors">Explore</Link>
            <Link href="/dashboard" className="hover:text-[#b500ff] transition-colors">Dashboard</Link>
          </div>
        </nav>
        <main className="flex-grow flex flex-col w-full pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
