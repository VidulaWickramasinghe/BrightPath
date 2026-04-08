import React from 'react';
import { Section, SectionHeader, Card } from '@/components/UI';
import { Award } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    { initial: 'S', color: '#5DA9E9', text: "Maths used to feel stressful, but the lessons were explained so clearly. I feel much more confident now.", author: "Level 7 Student" },
    { initial: 'P', color: '#7BDCB5', text: "The teaching style is calm and very supportive. I could see my child becoming comfortable with maths quickly.", author: "Parent of L6 Student", dark: true },
    { initial: 'S', color: '#B8A1FF', text: "I liked that I could ask questions without feeling embarrassed. Everything actually made sense.", author: "Level 8 Student" },
  ];

  return (
    <div className="animate-in fade-in duration-700 pt-10">
      <Section className="text-center">
        <h1 className="text-5xl font-bold font-heading mb-6">What Families Say</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          BrightPath Learning is built on trust, support, and positive outcomes.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <Card key={i} hover={false} className={`relative pt-12 ${r.dark ? 'bg-slate-800 text-white shadow-xl' : ''}`}>
              <div className="absolute top-0 left-8 -translate-y-1/2 text-6xl text-[#FFD166] font-serif font-bold opacity-50">"</div>
              <p className={`italic mb-6 relative z-10 ${r.dark ? 'text-slate-200' : 'text-slate-600'}`}>{r.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: r.color }}>{r.initial}</div>
                <div><h4 className="font-bold">{r.author}</h4></div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      
      <Section className="text-center bg-white rounded-t-[3rem]">
        <SectionHeader title="Confidence. Understanding. Progress." />
        <div className="flex justify-center gap-4">
          <Award size={40} className="text-[#FFD166]" />
          <Award size={40} className="text-[#5DA9E9]" />
          <Award size={40} className="text-[#FF8A80]" />
        </div>
      </Section>
    </div>
  );
}