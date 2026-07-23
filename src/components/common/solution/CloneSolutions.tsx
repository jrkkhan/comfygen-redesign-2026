"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import parse from 'html-react-parser';
import { ArrowRight } from 'lucide-react';

import { SolutionPageData } from "@/types/solution";

interface CloneSolutionsProps {
  sectionData?: SolutionPageData['clonesSection'];
}

const fallbackClones: Array<{ name: string; description: string; image?: string }> = [
  { name: "Swiggy Clone", description: "Food delivery clone" },
  { name: "UberEats Clone", description: "Food delivery clone" },
  { name: "Zomato Clone", description: "Food delivery clone" },
  { name: "DoorDash Clone", description: "Food delivery clone" }
];



export const CloneSolutions = ({ sectionData }: CloneSolutionsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const finalClones = sectionData?.items || fallbackClones;
  const activeCloneData = finalClones[activeIndex] || finalClones[0];

  return (
    <section className="py-12 lg:py-16 2xl:py-24 bg-slate-900 text-white border-y border-slate-800 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 2xl:gap-12 items-center">
          
          {/* Left Side: Content & Tabs */}
          <div className="text-left w-full">
            <h2 className="text-balance text-3xl md:text-4xl 2xl:text-5xl font-bold mb-4 2xl:mb-6 leading-tight">
              {sectionData?.heading ? (
                <span>{parse(sectionData.heading.replace('Clone', '<span class="text-blue-500">Clone</span>'))}</span>
              ) : (
                <>Looking for a <br /> Specific <span className="text-blue-500">Market Clone?</span></>
              )}
            </h2>
            <div className="text-slate-400 text-[15px] md:text-base 2xl:text-xl w-full mb-4 leading-relaxed pr-0 lg:pr-8">
              {sectionData?.subHeading ? (
                typeof sectionData.subHeading === 'string' ? parse(sectionData.subHeading) : (Array.isArray(sectionData.subHeading as any) ? (sectionData.subHeading as any).map((block: any) => block.children?.map((c: any) => c.text).join('')).join('\n') : "We provide highly customizable, ready-to-launch clone scripts inspired by industry leaders to get your business off the ground in weeks, not months.")
              ) : "We provide highly customizable, ready-to-launch clone scripts inspired by industry leaders to get your business off the ground in weeks, not months."}
            </div>

            
            <div className="flex flex-wrap gap-2.5 2xl:gap-3 mb-8 2xl:mb-12">
              {finalClones.map((clone, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveIndex(idx)}
                  className={`border px-4 py-2 md:px-5 md:py-2.5 2xl:px-6 2xl:py-3 rounded-full font-medium transition-all duration-300 text-sm 2xl:text-base ${
                    activeIndex === idx 
                      ? 'bg-blue-600 border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] text-white scale-105' 
                      : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {clone.name}
                </button>
              ))}
            </div>

            <Link href="/contact-us" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors text-lg group">
              Request a Clone Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Side: iPhone Mockup */}
          <div className="relative w-full flex justify-center lg:justify-center">
            {/* Background decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative w-full max-w-xl aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-500/20 transform transition-transform duration-500 hover:-translate-y-2 text-left z-10 border border-slate-700/50">
              <Image 
                key={activeCloneData.name} 
                src={activeCloneData.image || "/images/portfolio/ride-app.webp"}
                alt={`${activeCloneData.name} Mockup`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105 animate-in fade-in zoom-in duration-500"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
