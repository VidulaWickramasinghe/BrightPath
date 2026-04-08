import React from 'react';
import { Section, SectionHeader, Card, Button } from '@/components/UI';
import Link from 'next/link';

export default function Programs() {
  const programs = [
    { level: 'L6', color: '#5DA9E9', title: 'Level 6 Maths Support', desc: 'A strong foundation is essential. This program helps Level 6 students develop confidence in core maths skills.', tags: ['foundational concepts', 'essential calculations', 'number confidence'] },
    { level: 'L7', color: '#FFD166', title: 'Level 7 Maths Coaching', desc: 'This program supports students working through more advanced topics and assessments.', tags: ['applied maths', 'assignment support', 'concept revision'] },
    { level: 'L8', color: '#FF8A80', title: 'Level 8 Maths Guidance', desc: 'Offers in-depth support, strategic revision, and clear coaching for higher-level performance.', tags: ['advanced breakdown', 'confidence under pressure', 'targeted plans'] },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <Section className="text-center pt-32 pb-16 bg-white rounded-b-[3rem]">
        <h1 className="text-5xl font-bold font-heading mb-6">Programs & Learning Support</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We offer targeted support designed specifically for vocational students.
        </p>
      </Section>

      <Section>
        <div className="space-y-8 max-w-5xl mx-auto">
          {programs.map((p, i) => (
            <Card key={i} className="flex flex-col md:flex-row gap-8 items-center border-l-8" style={{ borderLeftColor: p.color }}>
              <div className="md:w-1/3 text-center md:text-left">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-4 shadow-sm text-3xl font-bold font-heading" style={{ backgroundColor: `${p.color}20`, color: p.color }}>{p.level}</div>
                <h2 className="text-2xl font-bold font-heading mb-2">{p.title}</h2>
              </div>
              <div className="md:w-2/3">
                <p className="text-slate-600 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <div className="bg-[#5DA9E9] text-white rounded-[3rem] p-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-heading mb-4">Not Sure Which Program Fits?</h2>
          <p className="text-lg mb-8 opacity-90">We can help you choose the right level based on current goals.</p>
          <Link href="/contact"><Button variant="secondary">Book a Consultation</Button></Link>
        </div>
      </Section>
    </div>
  );
}