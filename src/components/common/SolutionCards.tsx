"use client";
import React, { useState } from 'react';

export interface SolutionCardItem {
  title: string;
  description: string;
}

export interface SolutionCardsProps {
  title: React.ReactNode;
  subtitle: string;
  cards: SolutionCardItem[];
  isDark?: boolean;
}

export const SolutionCards = ({ title, subtitle, cards, isDark = false }: SolutionCardsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const displayedCards = isExpanded ? cards : cards.slice(0, 10);

  return (
    <section className={`w-full py-20 lg:py-28 px-4 relative overflow-hidden ${isDark ? 'bg-[#0A0D27]' : 'bg-white'}`}>
      {/* Background diagonal single line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[12px] bg-primary/80 -rotate-12 z-0"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {title}
          </h2>
          <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-0 border-l border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
          {displayedCards.map((card, idx) => (
            <div 
              key={idx} 
              className={`backdrop-blur-sm p-8 border-r border-b hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer ${
                isDark 
                  ? 'bg-[#0A0D27]/60 border-slate-800 hover:bg-[#0A0D27]' 
                  : 'bg-white/80 border-slate-200 hover:bg-white'
              }`}
            >
              <h3 className={`text-lg font-bold mb-4 group-hover:text-primary transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {card.title}
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        {cards.length > 10 && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className={`border border-primary text-primary hover:bg-primary hover:text-white font-medium px-10 py-3 rounded-full transition-colors ${isDark ? 'bg-transparent' : 'bg-white'}`}
            >
              {isExpanded ? 'View Less' : 'View More'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
