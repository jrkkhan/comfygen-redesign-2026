"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, Search, ShoppingBag, Home, FileText, User, Heart, Star, Clock } from 'lucide-react';

import { SolutionPageData } from "@/types/solution";

interface CloneSolutionsProps {
  sectionData?: SolutionPageData['clonesSection'];
}

const fallbackClones = [
  { name: "Swiggy Clone", description: "Food delivery clone" },
  { name: "UberEats Clone", description: "Food delivery clone" },
  { name: "Zomato Clone", description: "Food delivery clone" },
  { name: "DoorDash Clone", description: "Food delivery clone" }
];

const genericColors = [
  { brandColor: "text-blue-600", bgColor: "bg-blue-600", lightBg: "bg-blue-50" },
  { brandColor: "text-emerald-600", bgColor: "bg-emerald-600", lightBg: "bg-emerald-50" },
  { brandColor: "text-orange-600", bgColor: "bg-orange-600", lightBg: "bg-orange-50" },
  { brandColor: "text-purple-600", bgColor: "bg-purple-600", lightBg: "bg-purple-50" },
];

export const CloneSolutions = ({ sectionData }: CloneSolutionsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const finalClones = sectionData?.items || fallbackClones;
  const activeCloneData = finalClones[activeIndex] || finalClones[0];
  const activeCloneStyle = genericColors[activeIndex % genericColors.length];

  const labels = sectionData?.mockup?.labels || {
    header: "Current Location",
    searchPlaceholder: "Search services, providers...",
    categoriesTitle: "Services",
    listTitle: "Top Rated Providers"
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-900 text-white border-y border-slate-800 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Content & Tabs */}
          <div className="text-left w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {sectionData?.heading ? (
                <span dangerouslySetInnerHTML={{ __html: sectionData.heading.replace('Clone', '<span class="text-blue-500">Clone</span>') }} />
              ) : (
                <>Looking for a <br /> Specific <span className="text-blue-500">Market Clone?</span></>
              )}
            </h2>
            <p className="text-slate-400 text-lg md:text-xl w-full mb-10 leading-relaxed pr-0 lg:pr-8">
              {sectionData?.subHeading || "We provide highly customizable, ready-to-launch clone scripts inspired by industry leaders to get your business off the ground in weeks, not months."}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-12">
              {finalClones.map((clone, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveIndex(idx)}
                  className={`border px-5 py-2.5 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 ${
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

            <div className="relative w-[260px] h-[540px] md:w-[300px] md:h-[620px] lg:w-[280px] lg:h-[580px] xl:w-[320px] xl:h-[660px] bg-white rounded-[3rem] border-[10px] xl:border-[12px] border-slate-800 shadow-2xl shadow-blue-500/20 overflow-hidden transform transition-transform duration-500 hover:-translate-y-2 text-left z-10">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-2 inset-x-0 h-7 bg-black rounded-full w-32 xl:w-36 mx-auto z-40"></div>
              
              {/* Real App UI Container */}
              <div className="relative w-full h-full bg-slate-50 flex flex-col pt-10 pb-6 text-slate-900 font-sans">
                
                {/* App Header */}
                <div className="px-4 pb-3 flex items-center justify-between bg-white z-30">
                  <Menu className="w-5 h-5 xl:w-6 xl:h-6 text-slate-600" />
                  {/* Dynamic Logo */}
                  <div 
                    key={activeCloneData.name} 
                    className={`font-black text-lg md:text-xl xl:text-2xl tracking-tight animate-in fade-in zoom-in duration-300 ${activeCloneStyle.brandColor}`}
                  >
                    {activeCloneData.name.split(' ')[0]}
                  </div>
                  <ShoppingBag className="w-5 h-5 xl:w-6 xl:h-6 text-slate-600" />
                </div>

                {/* App Body - Scrollable */}
                <div className="flex-1 overflow-y-auto pb-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  
                  {/* Location & Search */}
                  <div className="px-4 py-3 xl:py-4 bg-white border-b border-slate-100">
                    <div className="text-[10px] xl:text-xs text-slate-500 font-medium">{labels.header}</div>
                    <div className="text-xs xl:text-sm font-bold flex items-center gap-1 mb-3">
                      San Francisco, CA <ArrowRight className="w-3 h-3 rotate-90" />
                    </div>
                    
                    {/* Search Bar */}
                    <div className="bg-slate-100 rounded-lg px-3 py-2.5 flex items-center gap-2">
                      <Search className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-slate-400" />
                      <span className="text-[11px] xl:text-xs text-slate-400 truncate max-w-[150px]">{labels.searchPlaceholder}</span>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="px-4 py-4 xl:py-5">
                    <div className="flex justify-between items-end mb-3">
                      <h3 className="text-sm xl:text-base font-bold">{labels.categoriesTitle}</h3>
                      <span className={`text-[10px] xl:text-xs font-semibold ${activeCloneStyle.brandColor}`}>See all</span>
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                      {[1, 2, 3, 4].map((cat, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 min-w-[50px] xl:min-w-[60px]">
                          <div className={`w-12 h-12 xl:w-14 xl:h-14 rounded-full ${activeCloneStyle.lightBg} flex items-center justify-center shadow-sm border border-slate-100 transition-colors duration-500`}>
                            <div className={`w-5 h-5 rounded-md ${activeCloneStyle.bgColor} opacity-70`}></div>
                          </div>
                          <span className="text-[10px] xl:text-[11px] font-medium text-slate-600">Option {i+1}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top Rated Providers */}
                  <div className="px-4 pb-4">
                    <h3 className="text-sm xl:text-base font-bold mb-3">{labels.listTitle}</h3>
                    <div className="flex flex-col gap-4">
                      {/* Provider Card 1 */}
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
                        <div className={`h-28 xl:h-32 w-full relative ${activeCloneStyle.lightBg} flex items-center justify-center transition-colors duration-500`}>
                          <div className={`w-16 h-16 rounded-2xl ${activeCloneStyle.bgColor} opacity-20`}></div>
                          <div className="absolute top-2 right-2 w-6 h-6 xl:w-7 xl:h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                            <Heart className="w-3 h-3 xl:w-4 xl:h-4 text-slate-400" />
                          </div>
                        </div>
                        <div className="p-3 xl:p-4">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="text-xs xl:text-sm font-bold text-slate-900">Premium Service Provider</h4>
                            <div className="flex items-center gap-0.5 text-[10px] xl:text-xs font-bold">
                              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /> 4.9
                            </div>
                          </div>
                          <div className="text-[10px] xl:text-[11px] text-slate-500 mb-2">Verified Professional • Fast Response</div>
                          <div className="flex items-center gap-3 text-[9px] xl:text-[10px] font-medium text-slate-600">
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Available Now</span>
                            <span className="flex items-center gap-1"><span className={`w-1.5 h-1.5 rounded-full ${activeCloneStyle.bgColor}`}></span> Top Rated</span>
                          </div>
                        </div>
                      </div>

                      {/* Provider Card 2 */}
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
                        <div className={`h-28 xl:h-32 w-full relative bg-slate-100 flex items-center justify-center transition-colors duration-500`}>
                           <div className={`w-16 h-16 rounded-full ${activeCloneStyle.bgColor} opacity-10`}></div>
                        </div>
                        <div className="p-3 xl:p-4">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="text-xs xl:text-sm font-bold text-slate-900">Standard Provider</h4>
                            <div className="flex items-center gap-0.5 text-[10px] xl:text-xs font-bold">
                              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /> 4.5
                            </div>
                          </div>
                          <div className="text-[10px] xl:text-[11px] text-slate-500">Standard Service • Economic</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="absolute inset-x-0 bottom-0 h-16 xl:h-18 bg-white border-t border-slate-100 flex justify-between items-center px-6 pb-2 z-30">
                  <div className={`flex flex-col items-center gap-1 ${activeCloneStyle.brandColor} transition-colors duration-500`}>
                    <Home className="w-5 h-5 xl:w-6 xl:h-6" />
                    <span className="text-[9px] xl:text-[10px] font-bold">Home</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-slate-400">
                    <Search className="w-5 h-5 xl:w-6 xl:h-6" />
                    <span className="text-[9px] xl:text-[10px] font-medium">Browse</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-slate-400">
                    <FileText className="w-5 h-5 xl:w-6 xl:h-6" />
                    <span className="text-[9px] xl:text-[10px] font-medium">Orders</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-slate-400">
                    <User className="w-5 h-5 xl:w-6 xl:h-6" />
                    <span className="text-[9px] xl:text-[10px] font-medium">Account</span>
                  </div>
                </div>
                
                {/* iOS Home Indicator */}
                <div className="absolute inset-x-0 bottom-1 flex justify-center z-40">
                  <div className="w-1/3 h-1 bg-slate-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
