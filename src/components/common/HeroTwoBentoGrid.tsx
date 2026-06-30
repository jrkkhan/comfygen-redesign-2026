import React from 'react';
import Image from 'next/image';

export const HeroTwoBentoGrid = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto">
      {/* 
        Experimenting with a 2-column grid layout for half-width containers.
        This prevents squishing while maintaining the bento feel. 
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-[160px]">

        {/* Box 1: Small Stat */}
        <div className="col-span-1 row-span-1 rounded-3xl bg-[#0A0D27] border border-white/5 p-6 flex flex-col justify-center relative overflow-hidden group ">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/10 transition-colors absolute top-4 right-4">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div className="space-y-1">
            <p className="text-4xl lg:text-5xl font-bold !font-heading text-white tracking-tighter">8+</p>
            <p className="text-sm text-slate-400 font-medium">Years of Experience</p>
          </div>
        </div>

        {/* Box 2: Image Box */}
        <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden relative group ">
          <Image
            src="/images/hero/team-collaborating.webp"
            alt="Team collaborating"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 350px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:bg-white/30 transition-colors cursor-pointer">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
            Watch Portfolio
          </div>
        </div>

        {/* Box 3: Tall Image Stat */}
        <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden relative group ">
          <Image
            src="/images/hero/happy-customer.webp"
            alt="Happy Customer"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 350px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0158E6] text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.4)] cursor-pointer hover:scale-105 transition-all z-10">
            <svg className="w-5 h-5 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          </div>

          <div className="absolute bottom-0 left-0 p-6 w-full">
            <p className="text-4xl lg:text-5xl font-bold !font-heading text-white tracking-tighter mb-1">550+</p>
            <p className="text-sm text-slate-300 font-medium">Projects Delivered</p>
          </div>
        </div>

        {/* Box 4: Blue Stat Box */}
        <div className="col-span-1 row-span-1 rounded-3xl bg-gradient-to-br from-[#0158E6] to-blue-800 p-6 flex flex-col justify-center relative overflow-hidden group ">
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div className="z-10 space-y-1">
            <p className="text-4xl lg:text-5xl font-bold !font-heading text-white tracking-tighter">30+</p>
            <p className="text-sm text-blue-100 font-medium">Countries Served</p>
          </div>
        </div>

        {/* Box 5: White Text Box */}
        <div className="col-span-1 row-span-1 rounded-3xl bg-white border-1 border-blue-100 p-6 flex flex-col justify-center   group">
          <p className="text-2xl font-bold !font-heading text-slate-900 leading-tight mb-2 tracking-tight group-hover:text-[#0158E6] transition-colors">400+ Happy<br />Clients</p>
          <p className="text-xs text-slate-500 leading-relaxed">Trusted by innovative startups and large enterprises.</p>
        </div>

      </div>
    </div>
  );
};
