import React from 'react';
import Image from 'next/image';

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
      <div className="w-full max-w-[1050px] mx-auto px-4 mt-8 sm:mt-16 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:auto-rows-[180px]">

          {/* Box 1: Small Stat (Top Left) */}
          <div className="md:col-span-1 row-span-1 rounded-2xl bg-[#0A0D27] border border-white/5 p-6 md:p-8 flex flex-col justify-center relative  overflow-hidden group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/10 transition-colors absolute top-6 right-6">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div className="space-y-2 ">
              <p className="text-5xl lg:text-6xl font-bold !font-heading text-white tracking-tighter">8+</p>
              <p className="text-sm text-slate-400 font-medium leading-snug">Years of Experience</p>
            </div>

          </div>

          {/* Box 2: Wide Image (Top Middle) */}
          <div className="md:col-span-2 row-span-1 rounded-2xl overflow-hidden relative group min-h-[180px] md:min-h-0">
            <Image
              priority
              src="/images/hero/team-collaborating.webp"
              alt="Team collaborating"
              width={348}
              height={232}
              className="object-cover transition-transform duration-700 group-hover:scale-105 w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-5 right-5 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold px-4 py-2.5 rounded-full flex items-center gap-2 cursor-pointer hover:bg-white/30 transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
              Watch Portfolio
            </div>
          </div>

          {/* Box 3: Tall Image Stat (Right) */}
          <div className="md:col-span-1 row-span-2 rounded-2xl overflow-hidden relative group min-h-[260px] md:min-h-0">
            <Image src="/images/hero/happy-customer.webp" alt="Happy Customer" fill sizes="(max-width: 768px) 350px, (max-width: 1200px) 50vw, 33vw" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

            <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#0158E6] text-white hover:text-slate-900 flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.4)] cursor-pointer hover:bg-[#fff] hover:scale-105 transition-all z-10">
              <svg className="w-5 h-5 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
            </div>

            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <p className="text-5xl lg:text-6xl font-bold !font-heading text-white tracking-tighter mb-2">550+</p>
              <p className="text-sm text-slate-300 font-medium leading-snug">Projects<br />Delivered</p>
            </div>
          </div>

          {/* Box 4: Small Image (Bottom Left) */}
          {/* <div className="md:col-span-1 row-span-1 rounded-2xl overflow-hidden relative group ">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" alt="Developer coding" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div> */}
          {/* Box 6: Small Stat (Bottom Middle-Right) */}
          <div className="md:col-span-2 row-span-1 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-900 border border-white/10 p-6 md:p-8 flex flex-row justify-between items-center relative  overflow-hidden group">
            {/* <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none transition-transform duration-700 group-hover:scale-150"></div> */}
            <div className="z-10 text-left space-y-2 ">
              <p className="text-5xl lg:text-6xl font-bold !font-heading text-white tracking-tighter">30+</p>
              <p className="text-sm text-blue-100 font-medium leading-snug relative z-10">Countries Served</p>
            </div>
            <div className="w-30 h-30 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
              <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>

          </div>
          {/* Box 5: Text Info (Bottom Middle-Left) */}
          <div className="md:col-span-1 row-span-1 rounded-2xl bg-white p-6 md:p-8 flex flex-col justify-center relative overflow-hidden group ">

            <p className="text-xl lg:text-2xl font-bold !font-heading text-slate-900 leading-tight mb-2 tracking-tight">400+ Happy<br />Clients</p>
            <p className="text-sm text-slate-500">Trusted by innovative startups and large enterprises.</p>
          </div>

        </div>
      </div>
    </section>
  );
};
