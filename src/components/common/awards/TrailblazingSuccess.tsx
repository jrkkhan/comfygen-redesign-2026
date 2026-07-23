"use client";

import React from 'react';

export const TrailblazingSuccess = () => {
  // We will use standard external images for now since we don't have the real photos.
  const photos = [
    "https://picsum.photos/seed/award1/600/400",
    "https://picsum.photos/seed/award2/600/400",
    "https://picsum.photos/seed/award3/600/400",
    "https://picsum.photos/seed/award4/600/400",
    "https://picsum.photos/seed/award5/600/400",
    "https://picsum.photos/seed/award6/600/400",
  ];

  return (
    <section className="py-24 border-b border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10 px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 !font-heading text-white">
            A Snapshot of <br />
            Our Trailblazing Success
          </h2>
        </div>
      </div>

      <div className="relative flex overflow-hidden group pb-12 pt-4 z-10">
          
          {/* First Marquee Track */}
          <div className="flex shrink-0 gap-4 md:gap-6 marquee-scroll group-hover:[animation-play-state:paused] pr-4 md:pr-6">
            {photos.map((src, idx) => (
              <div 
                key={idx} 
                className="shrink-0 w-[80vw] sm:w-[320px] md:w-[340px] lg:w-[360px] aspect-[16/10] relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 transition-transform duration-500 hover:scale-[1.02]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={src} 
                  alt={`Award moment ${idx + 1}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F24]/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Second Marquee Track (Duplicate) */}
          <div className="flex shrink-0 gap-4 md:gap-6 marquee-scroll group-hover:[animation-play-state:paused] pr-4 md:pr-6" aria-hidden="true">
            {photos.map((src, idx) => (
              <div 
                key={`dup-${idx}`} 
                className="shrink-0 w-[80vw] sm:w-[320px] md:w-[340px] lg:w-[360px] aspect-[16/10] relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 transition-transform duration-500 hover:scale-[1.02]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={src} 
                  alt={`Award moment ${idx + 1}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F24]/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .marquee-scroll {
          animation: marquee 25s linear infinite;
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}} />

    </section>
  );
};
