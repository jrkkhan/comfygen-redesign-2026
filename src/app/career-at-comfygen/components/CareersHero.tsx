"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CareersHero = () => {

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link.startsWith('#') && link.length > 1) {
      e.preventDefault();
      const id = link.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="w-full pt-40 pb-20 px-4 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-blue-500/20 blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-medium text-sm mb-6 border border-white/20 backdrop-blur-md">
          Join Our Team
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
          Do the best work of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">your career with us</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          We're a team of passionate creators, engineers, and strategists building the future of digital experiences. Join us and make a global impact.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#open-positions" 
            onClick={(e) => handleLinkClick(e, '#open-positions')}
            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all shadow-lg shadow-primary/25 flex items-center justify-center group"
          >
            View Open Positions
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#perks" 
            onClick={(e) => handleLinkClick(e, '#perks')}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium transition-all backdrop-blur-md flex items-center justify-center"
          >
            Learn About Our Culture
          </a>
        </div>
      </div>
      
      {/* Decorative Stats */}
      <div className="max-w-[1000px] mx-auto relative z-10 mt-20 pt-10 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-2">150+</h3>
            <p className="text-slate-400 text-sm">Team Members</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-2">12</h3>
            <p className="text-slate-400 text-sm">Countries Represented</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-2">100%</h3>
            <p className="text-slate-400 text-sm">Remote Friendly</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-2">4.9</h3>
            <p className="text-slate-400 text-sm">Glassdoor Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};
