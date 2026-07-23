"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const allAwards = [
  {
    id: 1,
    title: "Top eCommerce App Development Companies",
    description: "Recognized for delivering custom eCommerce applications tailored to modern business requirements across different industries.",
    url: "https://selectedfirms.co/companies/ecommerce-app-development/india",
    logoText: "Selected Firms",
    logoBg: "bg-blue-100",
    logoColor: "text-blue-700"
  },
  {
    id: 2,
    title: "Top DeFi Development Companies",
    description: "Featured for developing secure DeFi platforms, smart contracts, and blockchain-based financial solutions.",
    url: "https://selectedfirms.co/companies/defi-development",
    logoText: "Selected Firms",
    logoBg: "bg-blue-100",
    logoColor: "text-blue-700"
  },
  {
    id: 3,
    title: "Top Taxi App Development Companies in India",
    description: "Listed for delivering reliable taxi booking applications with real-time tracking and user-friendly features.",
    url: "https://superbcompanies.com/categories/taxi-app-development-companies-in-india/",
    logoText: "Superb Companies",
    logoBg: "bg-green-100",
    logoColor: "text-green-700"
  },
  {
    id: 4,
    title: "Top Blockchain Development Companies in Canada",
    description: "Recognized for providing blockchain development services focused on secure and scalable digital solutions.",
    url: "https://www.designrush.com/agency/blockchain-development-companies/ca",
    logoText: "DesignRush",
    logoBg: "bg-purple-100",
    logoColor: "text-purple-700"
  },
  {
    id: 5,
    title: "Top eCommerce App Development Companies",
    description: "Featured for building eCommerce platforms that support seamless shopping experiences and business growth.",
    url: "https://selectedfirms.co/companies/ecommerce-app-development",
    logoText: "Selected Firms",
    logoBg: "bg-blue-100",
    logoColor: "text-blue-700"
  },
  {
    id: 6,
    title: "Top Food Delivery App Development Companies",
    description: "Listed for developing food delivery applications with order management, live tracking, and smooth customer experiences.",
    url: "https://superbcompanies.com/categories/food-delivery-app-development-companies/",
    logoText: "Superb Companies",
    logoBg: "bg-green-100",
    logoColor: "text-green-700"
  },
  {
    id: 7,
    title: "Top Cryptocurrency App Development Companies",
    description: "Recognized for building cryptocurrency applications, wallets, exchanges, and blockchain-based platforms.",
    url: "https://www.goodfirms.co/app-development/cryptocurrency",
    logoText: "GoodFirms",
    logoBg: "bg-red-100",
    logoColor: "text-red-700"
  },
  {
    id: 8,
    title: "Top Enterprise App Development Companies",
    description: "Featured for developing enterprise applications that simplify business operations and improve workflow management.",
    url: "https://selectedfirms.co/companies/enterprise-app-development-companies",
    logoText: "Selected Firms",
    logoBg: "bg-blue-100",
    logoColor: "text-blue-700"
  },
  {
    id: 9,
    title: "Top Chatbot Development Companies",
    description: "Listed for creating chatbot solutions that help businesses manage customer conversations and support services.",
    url: "https://superbcompanies.com/categories/chatbot-development-companies/",
    logoText: "Superb Companies",
    logoBg: "bg-green-100",
    logoColor: "text-green-700"
  },
  {
    id: 10,
    title: "Top AI Consulting Companies in Jaipur",
    description: "Recognized among Jaipur's trusted technology consulting companies for helping businesses plan and implement digital solutions.",
    url: "https://fixnhour.com/companies/top-ai-consulting-companies/india/jaipur",
    logoText: "FixNHour",
    logoBg: "bg-orange-100",
    logoColor: "text-orange-700"
  },
  {
    id: 11,
    title: "Top AI App Development Companies in Germany",
    description: "Listed for developing business applications that support automation, data processing, and operational efficiency.",
    url: "https://fixnhour.com/companies/ai-app-development-companies/germany",
    logoText: "FixNHour",
    logoBg: "bg-orange-100",
    logoColor: "text-orange-700"
  },
  {
    id: 12,
    title: "Top Artificial Intelligence Companies in Canada",
    description: "Featured for providing software and technology solutions to businesses across multiple industries.",
    url: "https://www.mobileappdaily.com/directory/artificial-intelligence-companies/ca",
    logoText: "MobileAppDaily",
    logoBg: "bg-teal-100",
    logoColor: "text-teal-700"
  }
];

export const AwardsCategories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400; // width of card + gap
      const currentScroll = scrollRef.current.scrollLeft;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="flex flex-col w-full bg-white">
      <div className="w-full max-w-[1400px] mx-auto p-8 md:p-12 lg:p-16 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Recognized by Leading Industry Platforms
          </h2>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleScroll('left')}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {allAwards.map((award) => (
            <Link 
              key={award.id} 
              href={award.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] flex-shrink-0 snap-start flex flex-col group block hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Image / Logo Placeholder Area */}
              <div className="w-full h-[180px] bg-gradient-to-b from-[#FEFDF9] to-[#F7F4E5] rounded-2xl mb-6 flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className={`text-center flex flex-col items-center justify-center ${award.logoBg} rounded-xl px-4 py-3 shadow-sm`}>
                   <span className={`font-bold text-lg md:text-xl ${award.logoColor}`}>
                     {award.logoText}
                   </span>
                </div>
              </div>

              {/* Content Area */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {award.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
