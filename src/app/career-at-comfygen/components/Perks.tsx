import React from 'react';
import { Globe, Heart, BookOpen, Clock, Laptop, Plane } from 'lucide-react';
import { perks } from '@/data/careersData';

// Map icon names from data to actual Lucide components
const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe className="w-6 h-6 text-primary" />,
  heart: <Heart className="w-6 h-6 text-emerald-500" />,
  book: <BookOpen className="w-6 h-6 text-blue-500" />,
  clock: <Clock className="w-6 h-6 text-orange-500" />,
  laptop: <Laptop className="w-6 h-6 text-purple-500" />,
  plane: <Plane className="w-6 h-6 text-pink-500" />
};

export const Perks = () => {
  return (
    <section id="perks" className="w-full py-20 lg:py-28 px-4 bg-slate-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            Why Join Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.2] tracking-tight mb-6 !font-heading">
            Perks & Benefits
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We believe that to do your best work, you need the best support. That's why we offer comprehensive benefits designed to take care of you and your family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {perks.map((perk, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                {iconMap[perk.icon] || <Heart className="w-6 h-6 text-primary" />}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 !font-heading">
                {perk.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
