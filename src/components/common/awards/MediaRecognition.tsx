import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const MediaRecognition = () => {
  const mediaMentions = [
    {
      logo: "EIN Presswire",
      logoType: "ein",
      title: "Comfygen Shares Its Approach to Decentralized Technology Solutions",
      url: "https://www.einpresswire.com/article/693709999/comfygen-s-focus-creating-and-supervising-decentralized-solutions",
      hoverGradientClass: "from-[#0f172a] via-[#1e3a8a] to-[#3b82f6]",
    },
    {
      logo: "DesignRush",
      logoType: "designrush",
      title: "AI Financial Analysis: Key Trends Transforming Modern Finance",
      url: "https://www.designrush.com/agency/accounting/trends/ai-financial-analysis",
      hoverGradientClass: "from-[#1e1b4b] via-[#4c1d95] to-[#8b5cf6]",
    },
    {
      logo: "Yahoo Finance",
      logoType: "yahoo",
      title: "DesignRush Announces the Top Design & Development Companies",
      url: "https://finance.yahoo.com/news/designrush-unveils-list-top-design-120000515.html",
      hoverGradientClass: "from-[#2e1065] via-[#581c87] to-[#9333ea]",
    },
    {
      logo: "PRWeb",
      logoType: "prweb",
      title: "Best App Development Companies Recognized by DesignRush",
      url: "https://www.prweb.com/releases/designrush-lists-the-best-app-development-companies-in-march-2024-302087743.html",
      hoverGradientClass: "from-[#450a0a] via-[#991b1b] to-[#ef4444]",
    },
    {
      logo: "Newsfile Corp",
      logoType: "newsfile",
      title: "Top Software Development Companies Featured by DesignRush",
      url: "https://www.newsfilecorp.com/release/235289/DesignRush-Reveals-the-Top-Software-Development-Companies-in-December-2024",
      hoverGradientClass: "from-[#064e3b] via-[#065f46] to-[#10b981]",
    }
  ];

  const renderLogo = (type: string, text: string) => {
    switch(type) {
      case 'ein':
        return <span className="font-sans text-2xl font-black tracking-tight text-blue-500 group-hover:text-white transition-colors">{text}</span>;
      case 'designrush':
        return <span className="font-sans text-2xl font-bold tracking-tight text-purple-400 group-hover:text-white transition-colors">{text}</span>;
      case 'yahoo':
        return (
          <span className="font-sans text-2xl font-bold tracking-tight">
            <span className="text-[#9F5AFF] group-hover:text-white transition-colors italic">Yahoo!</span> <span className="text-white">Finance</span>
          </span>
        );
      case 'prweb':
        return <span className="font-sans text-2xl font-bold tracking-tighter text-red-500 group-hover:text-white transition-colors">{text}</span>;
      case 'newsfile':
        return <span className="font-serif text-2xl font-bold tracking-tight text-white border-l-4 border-green-500 group-hover:border-white transition-colors pl-2">{text}</span>;
      default:
        return <span className="font-bold text-xl text-white">{text}</span>;
    }
  };

  return (
    <section className="py-24 px-4 bg-[#0A0F24] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="mb-16 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 !font-heading text-white leading-tight">
            Comfygen in the Spotlight - <br className="hidden lg:block" />
            Media Recognitions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaMentions.map((mention, idx) => (
            <Link 
              key={idx} 
              href={mention.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative rounded-[2rem] border border-white/10 bg-[#0A0F24] transition-all duration-500 p-8 md:p-10 flex flex-col justify-between group block hover:-translate-y-2 overflow-hidden h-[380px]`}
            >
              {/* Hover Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${mention.hoverGradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`} />
              
              <div className="relative z-10 opacity-90 group-hover:opacity-100 transition-all duration-300">
                {renderLogo(mention.logoType, mention.logo)}
              </div>
              
              <div className="relative z-10 flex flex-col">
                <h3 className="text-lg md:text-xl font-medium text-white/90 group-hover:text-white leading-snug transition-colors duration-300">
                  {mention.title}
                </h3>
                
                {/* View Full Story Button */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows,margin] duration-500 ease-in-out mt-0 group-hover:mt-6">
                  <div className="overflow-hidden">
                    <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white text-white font-medium text-sm hover:bg-white hover:text-black transition-colors transform translate-y-4 group-hover:translate-y-0 duration-500">
                      View Full Story <ArrowUpRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
