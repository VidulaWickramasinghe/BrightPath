import React from 'react';
import { Compass } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t-[16px] border-[#5DA9E9]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Compass size={24} className="text-[#5DA9E9]" />
          <span className="text-white font-bold text-xl">BrightPath Learning</span>
        </div>
        <p>© 2026 BrightPath Learning. All rights reserved.</p>
      </div>
    </footer>
  );
}