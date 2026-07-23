'use client';

import React from 'react';
import Link from 'next/link';
import {
  HeartPulse, Landmark, Shield, CircleDollarSign, ShoppingBag,
  Package, GraduationCap, Gamepad2, HeartHandshake, Clapperboard,
  Utensils, Coffee, Plane, Wand2, Send, Phone,
  Store, Truck, Building, Scissors, Bot, Cpu, Database, Sparkles
} from 'lucide-react';

const industries = [
  { name: 'Healthcare', desc: 'Secure telemedicine and patient management apps built for HIPAA compliance.', icon: HeartPulse, href: '/healthcare-app-development', isActive: true },
  { name: 'Finance', desc: 'Fintech apps handling payments, budgeting, and investments with bank-grade security.', icon: Landmark, href: '/finance-app-development' },
  { name: 'Insurance', desc: 'Claims processing and policy management apps that cut paperwork in half.', icon: Shield, href: '/insurance-app-development' },
  { name: 'E-commerce', desc: 'Online stores with fast checkout, smart search, and higher conversion rates.', icon: ShoppingBag, href: '/ecommerce' },
  { name: 'Retail', desc: 'Inventory and POS apps connecting your stores, staff, and customers in real time.', icon: Store, href: '/ecommerce/grocery' },
  { name: 'Logistics', desc: 'Fleet tracking and warehouse apps that cut delivery delays significantly.', icon: Truck, href: '/logistics-app-development' },
  { name: 'Banking', desc: 'Digital banking platforms with biometric login and instant fund transfers.', icon: Building, href: '/banking-software-development' },
  { name: 'Dating', desc: 'Matchmaking apps with smart algorithms, video chat, and safety verification built in.', icon: HeartHandshake, href: '/dating-app-development' },
  { name: 'Beauty', desc: 'Booking apps connecting salons, stylists, and clients in a few taps.', icon: Scissors, href: '/salon-app-development' },
  { name: 'FMCG', desc: 'Distribution and inventory apps keeping fast-moving goods stocked and trackable.', icon: Package, href: '/ecommerce/fmcg' },
  { name: 'Real Estate', desc: 'Property listing apps with virtual tours and instant mortgage calculators.', icon: Building },
  { name: 'Education', desc: 'E-learning platforms with live classes, quizzes, and progress tracking for students.', icon: GraduationCap, href: '/e-learning-app-development' },
  { name: 'Travel & Hospitality', desc: 'Booking apps for flights, hotels, and itineraries in one place.', icon: Plane },
  { name: 'Food & Restaurant', desc: 'Ordering and delivery apps with live tracking and easy reordering.', icon: Utensils, href: '/food-delivery-app-development' },
  { name: 'Media & Entertainment', desc: 'Streaming apps with smooth playback, recommendations, and offline downloads.', icon: Clapperboard, href: '/social-media-app-development' },
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
    <section className="w-full py-16 xl:py-16 2xl:py-28 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 2xl:mb-12 gap-6">
          <h2 className="text-balance text-3xl sm:text-4xl 2xl:text-[42px] font-bold text-slate-900 leading-[1.2] tracking-tight">
            Industries We Serve<br />
            <span className="text-slate-800 !font-heading">– Comfygen Technologies</span>
          </h2>
          <Link href={buttonLink} className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3.5 rounded-full transition-colors shadow-[0_0_20px_rgba(1,88,230,0.3)] shrink-0 flex items-center gap-2">
            <Phone className="w-4 h-4" /> {buttonText}
          </Link>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">

          {industries.map((ind, idx) => {
            const isLast = idx === industries.length - 1;
            return (
            <Link
              key={ind.name}
              href={ind.href || '#'}
              className={`group rounded-xl p-3.5 sm:p-5 2xl:p-7 flex flex-col items-start border transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden
                ${isLast 
                  ? 'bg-gradient-to-r from-primary via-[#2470f5] to-[#71a5ff] border-primary/20 shadow-xl shadow-primary/20 hover:scale-[1.02]' 
                  : `bg-white hover:shadow-2xl ${ind.isActive ? 'border-primary/50 shadow-xl shadow-primary/5' : 'border-slate-200 hover:border-primary/50 hover:shadow-primary/5'}`
                }
                ${isLast ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              {/* Optional glow for the blue card */}
              {isLast && (
                <div className="absolute top-[-50%] right-[-20%] w-40 h-40 bg-white/20 blur-[50px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-70"></div>
              )}

              {/* "New" Badge */}
              {/* @ts-ignore */}
              {ind.isNew && (
                <div className={`absolute top-2 right-2 sm:top-4 sm:right-4 border text-[8px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full z-10 ${isLast ? 'border-white/50 text-white bg-white/20' : 'border-primary text-primary bg-primary/5'}`}>
                  New
                </div>
              )}

              {/* Icon */}
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-start mb-2 sm:mb-4 2xl:mb-5 transition-colors shrink-0 z-10 
                ${isLast ? 'text-white' : ind.isActive ? 'text-primary' : 'text-slate-700 group-hover:text-primary'}`}>
                <ind.icon className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={1.5} />
              </div>

              {/* Text */}
              <h3 className={`text-balance text-xs sm:text-base 2xl:text-lg font-bold mb-1 sm:mb-2 2xl:mb-3 transition-colors leading-tight z-10 
                ${isLast ? 'text-white' : 'text-slate-900 group-hover:text-primary'}`}>
                {ind.name}
              </h3>
              <p className={`text-[11px] sm:text-[13px] leading-relaxed z-10 
                ${isLast ? 'text-blue-50' : 'text-slate-500'}`}>
                {ind.desc}
              </p>
            </Link>
          )})}

        </div>

      </div>
    </section>
  );
};
