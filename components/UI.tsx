import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', onClick, type = "button" }: any) => {
  const baseStyle = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 px-6 py-3";
  const variants: any = {
    primary: `bg-[#5DA9E9] hover:bg-[#4A90E2] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5`,
    secondary: `bg-[#FFD166] hover:bg-[#FFC13B] text-[#25324A] shadow-md hover:shadow-lg hover:-translate-y-0.5`,
    coral: `bg-[#FF8A80] hover:bg-[#FF7060] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5`,
    outline: `bg-transparent border-2 border-[#5DA9E9] text-[#5DA9E9] hover:bg-[#5DA9E9] hover:text-white`,
    white: `bg-white text-[#5DA9E9] shadow-md hover:shadow-lg hover:-translate-y-0.5`
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export const Card = ({ children, className = '', hover = true }: any) => (
  <div className={`bg-white rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(37,50,74,0.08)] ${hover ? 'transition-transform duration-300 hover:-translate-y-1' : ''} ${className}`}>
    {children}
  </div>
);

export const Section = ({ children, className = '', id = '' }: any) => (
  <section id={id} className={`py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

export const SectionHeader = ({ title, subtitle, align = 'center' }: any) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl`}>
    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">{title}</h2>
    {subtitle && <p className="text-lg text-slate-600 font-medium">{subtitle}</p>}
  </div>
);