import React from 'react';
import { Sparkles, CheckCircle2, Calculator, Target, Smile, Lightbulb, Award, Users } from 'lucide-react';
import Link from 'next/link';
import { Section, SectionHeader, Card, Button } from '@/components/UI';

export default function Home() {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background blobs omitted for brevity, same as original code */}
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#5DA9E9] font-bold text-sm mb-6 border border-blue-100">
              <Sparkles size={16} /> Friendly Maths Support
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-heading leading-tight mb-6">
              Maths Support Made <span className="text-[#5DA9E9]">Simple</span> for Vocational Students
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl">
              BrightPath Learning helps Level 6, 7, and 8 vocational students build confidence through friendly, structured coaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/contact"><Button>Book a Free Consultation</Button></Link>
              <Link href="/programs"><Button variant="outline">Explore Programs</Button></Link>
            </div>
          </div>
          {/* Decorative graphic div omitted for brevity, same as original code */}
        </div>
      </section>
      
      {/* Include the rest of your HomeView logic/sections here... */}
    </div>
  );
}