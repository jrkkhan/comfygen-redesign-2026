"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BentoGrid } from './BentoGrid';

export interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export const Hero = ({
  title = (
    <>AI-Based Mobile App and<br className="hidden md:block" /> Web Development Company</>
  ),
  subtitle = "Are you looking to build powerful mobile application? Comfygen is a trusted AI-based mobile app & web development company. We design and build mobile apps and websites",
  primaryButtonText = "Lets Discuss",
  primaryButtonLink = "/contact-us",
  secondaryButtonText = "Explore More",
  secondaryButtonLink = "#services"
}: HeroProps) => {

  const handleSecondaryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (secondaryButtonLink.startsWith('#')) {
      e.preventDefault();
      const id = secondaryButtonLink.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative w-full pt-12 sm:pt-16 2xl:pt-20 pb-12 2xl:pb-24 px-4 flex flex-col items-center text-center z-10">
      {/* Top Badge */}
      {/* <div className="border border-white/20 bg-white/10 backdrop-blur-sm text-white rounded-full px-5 py-2 text-xs sm:text-base mb-10 inline-block">
        Professional IT Services, Covers Every Sector
      </div> */}

      {/* Main Heading */}
      <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-[56px] 2xl:text-[68px] font-semibold text-white mb-5 2xl:mb-6 leading-[1.15] max-w-5xl tracking-tight">
        {title}
      </h1>

      {/* Subheading */}
      <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base md:text-lg mb-6 2xl:mb-10 leading-relaxed px-4">
        {subtitle}
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-4 2xl:mb-10 w-full px-4">
        <Link href={primaryButtonLink} className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 2xl:py-3.5 rounded-full font-semibold transition-all w-full sm:w-auto shadow-lg shadow-white/5 text-center">
          {primaryButtonText}
        </Link>
        <Link
          href={secondaryButtonLink}
          onClick={handleSecondaryClick}
          className="bg-[#080F1E] text-white hover:bg-black border border-transparent px-8 py-3 2xl:py-3.5 rounded-full font-semibold transition-all w-full sm:w-auto shadow-lg text-center"
        >
          {secondaryButtonText}
        </Link>
      </div>

      {/* Bento Box Stats Section */}
      <BentoGrid />
    </section>
  );
};
