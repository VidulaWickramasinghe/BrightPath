"use client";
import React, { useState, useEffect } from 'react';
import { Compass, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from './UI';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: '/about', label: 'About' },
    { id: '/programs', label: 'Programs' },
    { id: '/how-it-works', label: 'How It Works' },
    { id: '/resources', label: 'Resources' },
    { id: '/testimonials', label: 'Testimonials' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#5DA9E9] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-sm group-hover:-translate-y-0.5 transition-transform">
            <Compass size={24} />
          </div>
          <div>
            <h1 className="font-heading font-bold text-xl leading-none text-slate-800 tracking-tight">BrightPath</h1>
            <span className="text-xs text-[#5DA9E9] font-bold tracking-widest uppercase">Learning</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <Link key={link.id} href={link.id} className="text-sm font-semibold text-slate-600 hover:text-[#5DA9E9] transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:block">
            <Button className="py-2 px-5 text-sm">Book a Session</Button>
          </Link>
          <button className="lg:hidden text-slate-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t py-4 px-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map(link => (
            <Link key={link.id} href={link.id} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold text-slate-600">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full">Book a Session</Button>
          </Link>
        </div>
      )}
    </header>
  );
}