'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const celebrations = [
  {
    id: 1,
    badge: "FESTIVAL",
    title: "Diwali Celebration",
    description: "A festival of lights, laughter, and unforgettable memories at our firm.",
    image: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?w=800&q=80",
  },
  {
    id: 2,
    badge: "FESTIVAL",
    title: "Diwali Celebration",
    description: "A festival of lights, laughter, and unforgettable memories at our firm.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80",
  },
  {
    id: 3,
    badge: "FESTIVAL",
    title: "Holi Celebration",
    description: "Colors, joy, and togetherness \u2014 celebrating the festival of colors with our team.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80",
  },
  {
    id: 4,
    badge: "EVENT",
    title: "New Year Bash",
    description: "Welcoming the new year with great enthusiasm, goals, and a grand party.",
    image: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=800&q=80",
  }
];

export const Celebrations = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 lg:px-8 bg-white font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl lg:text-[36px] font-bold text-slate-900 font-heading inline-block">
              Glimpses of Celebrations
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel / Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {celebrations.map((item) => (
            <div 
              key={item.id} 
              className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.12)] transition-shadow duration-300"
            >
              {/* Image Area */}
              <div className="relative h-[240px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 420px"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#0158E6] text-[11px] font-bold tracking-wider px-3 py-1 rounded-md uppercase shadow-sm">
                  {item.badge}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
