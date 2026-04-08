import { Section, Card, SectionHeader } from '@/components/UI';
import { Users, Target, Compass, Lightbulb, Clock, Heart, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="animate-in fade-in duration-700 pt-10">
      <Section className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#5DA9E9] font-bold text-sm mb-6">
          <Users size={16} /> Get to Know Us
        </div>
        <h1 className="text-5xl font-bold font-heading mb-6">About BrightPath Learning</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We believe every student can improve in maths when given the right support and a positive environment.
        </p>
      </Section>
      {/* Rest of the AboutView content here */}
    </div>
  );
}