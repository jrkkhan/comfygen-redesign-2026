import React from 'react';

export interface ExtraInfoCardItem {
  title: React.ReactNode;
  description: React.ReactNode;
}

export interface ExtraInfoCardsProps {
  title: React.ReactNode;
  cards: ExtraInfoCardItem[];
}

export const ExtraInfoCards = ({ title, cards }: ExtraInfoCardsProps) => {
  return (
    <section className="w-full py-16 lg:py-24 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-balance text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug tracking-tight max-w-3xl">
            {title}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="relative group p-[1px] bg-slate-100 hover:bg-gradient-to-r hover:from-primary hover:to-blue-400 transition-all duration-300 cursor-pointer"
            >
              <div className="bg-[#fafafa] h-full w-full p-8 group-hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-balance text-xl font-bold text-slate-900 mb-4">
                  {card.title}
                </h3>
                <div className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {card.description}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
