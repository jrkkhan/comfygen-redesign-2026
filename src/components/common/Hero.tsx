import React from 'react';
import Image from 'next/image';
import { BentoGrid } from './BentoGrid';

export interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export const Hero = ({
  title = (
    <>AI-Based Mobile App and<br className="hidden md:block" /> Web Development Company</>
  ),
  subtitle = "Are you looking to build powerful mobile application? Comfygen is a trusted AI-based mobile app & web development company. We design and build mobile apps and websites",
  primaryButtonText = "Lets Discuss",
  secondaryButtonText = "Explore More"
}: HeroProps) => {
  return (
    <section className="relative w-full pt-16 sm:pt-20 pb-24 px-4 flex flex-col items-center text-center z-10">
      {/* Top Badge */}
      {/* <div className="border border-white/20 bg-white/10 backdrop-blur-sm text-white rounded-full px-5 py-2 text-xs sm:text-base mb-10 inline-block">
        Professional IT Services, Covers Every Sector
      </div> */}

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold text-white mb-6 leading-[1.15] max-w-5xl tracking-tight">
        {title}
      </h1>

      {/* Subheading */}
      <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base md:text-lg mb-10 leading-relaxed px-4">
        {subtitle}
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-6 w-full px-4">
        <button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3.5 rounded-full font-semibold transition-all w-full sm:w-auto shadow-lg shadow-white/5">
          {primaryButtonText}
        </button>
        <button className="bg-[#080F1E] text-white hover:bg-black border border-transparent px-8 py-3.5 rounded-full font-semibold transition-all w-full sm:w-auto shadow-lg">
          {secondaryButtonText}
        </button>
      </div>

      {/* Bento Box Stats Section */}
      <BentoGrid />
    </section>
  );
};
