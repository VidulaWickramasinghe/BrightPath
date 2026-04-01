import "./globals.css";
import { Compass, Menu, X } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "BrightPath Learning | Maths Confidence",
  description: "Maths Support for Vocational Students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F8FAFC] text-[#25324A]">
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#5DA9E9] rounded-xl flex items-center justify-center text-white">
                <Compass size={24} />
              </div>
              <span className="font-bold text-xl">BrightPath</span>
            </Link>
            <nav className="hidden md:flex gap-8 font-semibold text-sm">
              <Link href="/about">About</Link>
              <Link href="/programs">Programs</Link>
              <Link href="/how-it-works">How It Works</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <Link href="/contact">
              <button className="bg-[#5DA9E9] text-white px-5 py-2 rounded-full text-sm font-bold">
                Book Session
              </button>
            </Link>
          </div>
        </header>
        
        <main className="pt-20">{children}</main>

        <footer className="bg-slate-900 text-white py-12 mt-20 border-t-8 border-[#5DA9E9]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p>© 2026 BrightPath Learning. Building Confidence in Maths.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
