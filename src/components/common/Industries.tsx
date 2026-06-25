'use client';

import React from 'react';
import Link from 'next/link';
import {
  FaHeartPulse, FaBuildingColumns, FaShieldHalved, FaSackDollar, FaBagShopping,
  FaBox, FaGraduationCap, FaGamepad, FaHandHoldingHeart, FaClapperboard,
  FaUtensils, FaMugHot, FaPlane, FaWandMagicSparkles, FaPaperPlane, FaPhone
} from 'react-icons/fa6';

const industries = [
  { name: 'Healthcare', desc: 'Secure Mobile And Web Apps To Enhance Patient Care And Efficiency.', icon: FaHeartPulse, isActive: true },
  { name: 'Finance', desc: 'Robust Software For Banking, Fintech, And Blockchain Solutions.', icon: FaBuildingColumns },
  { name: 'Insurance', desc: 'Streamlined Platforms For Policy Management And Claims Processing.', icon: FaShieldHalved },
  { name: 'FinTech', desc: 'Innovative Financial Technology Apps For A Seamless User Experience.', icon: FaSackDollar },
  { name: 'E-commerce', desc: 'Scalable Online Stores And Apps For Retail Operations.', icon: FaBagShopping },
  { name: 'FMCG', desc: 'Supply Chain And Inventory Software For Consumer Goods.', icon: FaBox },
  { name: 'Education', desc: 'E-Learning Platforms And Edtech Solutions For Global Audiences.', icon: FaGraduationCap },
  { name: 'Gaming', desc: 'Immersive Gaming Applications For Various Platforms.', icon: FaGamepad },
  { name: 'Dating', desc: 'User-Focused Platforms With Smart Matchmaking Algorithms.', icon: FaHandHoldingHeart },
  { name: 'Media', desc: 'Quality Streaming Ensures Seamless Content Management.', icon: FaClapperboard },
  { name: 'Food', desc: 'Innovative Tech For Delivery And Restaurant Management.', icon: FaUtensils },
  { name: 'Lifestyle', desc: 'Personalized Digital Platforms For Enhanced Daily Living.', icon: FaMugHot },
  { name: 'Travel & Hospitality', desc: 'Smart Booking Platforms And Management Tools For Seamless Travel Experiences.', icon: FaPlane, isNew: true },
];

export interface IndustriesProps {
  buttonText?: string;
  buttonLink?: string;
}

export const Industries = ({
  buttonText = "Wanna Discuss",
  buttonLink = "/contact-us"
}: IndustriesProps = {}) => {
  return (
    <section className="w-full py-20 lg:py-28 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.2] tracking-tight">
            Industries We Serve<br />
            <span className="text-slate-800 !font-heading">– Comfygen Technologies</span>
          </h2>
          <Link href={buttonLink} className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3.5 rounded-full transition-colors shadow-[0_0_20px_rgba(1,88,230,0.3)] shrink-0 flex items-center gap-2">
            <FaPhone className="w-4 h-4" /> {buttonText}
          </Link>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

          {industries.map((ind) => (
            <div
              key={ind.name}
              className={`group bg-white rounded-xl p-6 sm:p-7 flex flex-col border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 cursor-pointer relative
                ${ind.isActive ? 'border-primary/50 shadow-xl shadow-primary/5' : 'border-slate-100 hover:border-primary/40'}`}
            >
              {/* "New" Badge */}
              {ind.isNew && (
                <div className="absolute top-5 right-5 border border-primary text-primary text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-primary/5">
                  New
                </div>
              )}

              {/* Icon */}
              <div className={`w-10 h-10 rounded-lg flex items-center justify-start mb-5 transition-colors ${ind.isActive ? 'text-primary' : 'text-slate-700 group-hover:text-primary'}`}>
                <ind.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>

              {/* Text */}
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                {ind.name}
              </h3>
              <p className="text-slate-500 text-[13px] leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}

          {/* Special AI Card */}
          <div className="lg:col-span-2 col-span-1 sm:col-span-2 md:col-span-3 bg-gradient-to-r from-primary via-[#2470f5] to-[#71a5ff] rounded-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer shadow-xl shadow-primary/20 border border-primary/20 hover:scale-[1.02] transition-transform duration-300">
            {/* Subtle glow behind the content */}
            <div className="absolute top-[-50%] right-[-20%] w-80 h-80 bg-white/20 blur-[80px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-70"></div>

            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between relative z-10 h-full w-full">

              {/* Left AI Text Content */}
              <div className="flex flex-col flex-1 w-full">
                <div className="w-8 h-8 rounded-lg flex items-center justify-start text-white mb-3">
                  <FaWandMagicSparkles className="w-5 h-5" fill="currentColor" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Artificial Intelligence
                </h3>
                <p className="text-blue-50 text-[13px] sm:text-sm leading-relaxed max-w-xs">
                  Using Machine Learning And Analytics To Create Automated Solutions For Better Business Results.
                </p>
              </div>

              {/* Mock Input Bar (Right Aligned on Desktop) */}
              <div className="bg-white rounded-full p-1.5 flex items-center gap-3 w-full md:w-auto md:min-w-[220px] shadow-2xl">
                <FaWandMagicSparkles className="w-4 h-4 text-slate-400 ml-3 shrink-0" />
                <span className="text-slate-600 text-xs sm:text-sm font-medium flex-1 whitespace-nowrap">Generate Image</span>
                <button aria-label="Generate Image" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-md hover:bg-primary/90 transition-colors shrink-0">
                  <FaPaperPlane className="w-3.5 h-3.5 mr-0.5 mt-0.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
