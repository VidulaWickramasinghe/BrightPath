"use client";
import React from 'react';
import Link from 'next/link';
import { Section, Card, Button } from '@/components/UI';
import { Mail, Phone, Map, Clock, Heart } from 'lucide-react';

export default function Contact() {
  return (
    <div className="animate-in fade-in duration-700 pt-10">
      <Section>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-heading mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to support your learning journey? Contact us to discuss the best support plan for you or your child.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="md:col-span-1 space-y-6">
            <Card hover={false} className="bg-[#5DA9E9] text-white p-6">
              <h3 className="font-bold font-heading text-xl mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><Mail size={20} /> hello@brightpathlearning.com</li>
                <li className="flex items-center gap-3"><Phone size={20} /> +61 XXX XXX XXX</li>
                <li className="flex items-start gap-3"><Map size={20} className="mt-1" /> <span>Online / In-person <br/><span className="text-sm opacity-80">by arrangement</span></span></li>
                <li className="flex items-center gap-3"><Clock size={20} /> Mon - Sat</li>
              </ul>
            </Card>
            <div className="bg-white rounded-3xl p-6 shadow-sm border text-center">
               <Heart className="mx-auto text-[#FF8A80] mb-3" size={32} />
               <h4 className="font-bold mb-2">Need advice first?</h4>
               <Link href="#"><Button variant="outline" className="w-full text-sm py-2">Ask a Question</Button></Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <Card hover={false} className="border border-slate-100">
              <h2 className="text-2xl font-bold font-heading mb-6">Book Your First Session</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" className="w-full p-3 rounded-xl border bg-slate-50" placeholder="Full Name" />
                  <input type="text" className="w-full p-3 rounded-xl border bg-slate-50" placeholder="Student Name" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="email" className="w-full p-3 rounded-xl border bg-slate-50" placeholder="Email Address" />
                  <input type="tel" className="w-full p-3 rounded-xl border bg-slate-50" placeholder="Phone Number" />
                </div>
                <select className="w-full p-3 rounded-xl border bg-slate-50">
                  <option>Select Level (L6, L7, L8)</option>
                  <option>Level 6</option>
                  <option>Level 7</option>
                  <option>Level 8</option>
                </select>
                <textarea rows={4} className="w-full p-3 rounded-xl border bg-slate-50 resize-none" placeholder="How can we help?"></textarea>
                <Button type="submit" className="w-full">Send Enquiry</Button>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
