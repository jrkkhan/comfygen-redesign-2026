"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { SolutionPageData } from "@/types/solution";
import { ArrowRight, Calculator } from 'lucide-react';

interface PricingTableProps {
  sectionData?: SolutionPageData['pricingSection'];
}

const fallbackPlans = [
  {
    name: "MVP / Starter",
    description: "On-demand marketplace with real-time tracking, multi-payment, and an admin panel.",
    duration: "2-3 Months",
    price: "$15,000+",
    isPopular: false,
  },
  {
    name: "Growth Solution",
    description: "On-demand marketplace with real-time tracking, multi-payment, and an admin panel.",
    duration: "4-6 Months",
    price: "$30,000+",
    isPopular: true,
  },
  {
    name: "Enterprise",
    description: "On-demand marketplace with real-time tracking, multi-payment, and an admin panel.",
    duration: "6+ Months",
    price: "Custom",
    isPopular: false,
  }
];

export const PricingTable = ({ sectionData }: PricingTableProps) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const params = useParams();
  
  // Extract and format the page name from the URL slug
  const slug = params?.slug as string;
  const pageName = slug 
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : '';

  const finalPlans = sectionData?.items && sectionData.items.length > 0 ? sectionData.items.map((plan, idx) => ({
    name: idx === 0 ? "MVP Build" : idx === 1 ? "Growth Solution" : "Enterprise",
    description: plan.description,
    duration: plan.timeline || (idx === 0 ? "2-3 Months" : idx === 1 ? "4-6 Months" : "6+ Months"),
    price: plan.price,
    isPopular: idx === 1,
  })) : fallbackPlans;

  return (
    <section className="py-16 xl:py-12 bg-gradient-to-b from-slate-50 to-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-4 xl:px-8 relative z-10">
        <div className="text-center mb-10 xl:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-medium text-sm mb-4">
            <Calculator className="w-4 h-4" />
            Cost Estimated
          </div>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 mb-4 leading-tight tracking-tight capitalize">
            {pageName ? `${pageName} Cost` : (sectionData?.heading || "Flexible Engagement Models")}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base lg:text-lg font-medium leading-relaxed">
            {sectionData?.subHeading || "Choose an engagement model that aligns with your business stage. Pricing and timelines depend on your specific requirements."}
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/40 border border-slate-100 overflow-hidden relative">
          <div className="overflow-x-auto pb-4 md:pb-0">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead className="bg-slate-50/80 border-b border-slate-200">
                <tr>
                  <th className="py-5 xl:py-4 px-8 text-sm font-extrabold text-slate-800 uppercase tracking-wider w-[28%]">Package</th>
                  <th className="py-5 xl:py-4 px-8 text-sm font-extrabold text-slate-800 uppercase tracking-wider w-[32%]">Ideal For</th>
                  <th className="py-5 xl:py-4 px-8 text-sm font-extrabold text-slate-800 uppercase tracking-wider w-[20%]">Timeline</th>
                  <th className="py-5 xl:py-4 px-8 text-sm font-extrabold text-slate-800 uppercase tracking-wider w-[20%]">Estimated Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {finalPlans.map((plan, idx) => {
                  const isActive = hoveredIdx !== null ? hoveredIdx === idx : plan.isPopular;
                  
                  return (
                  <tr 
                    key={idx} 
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className={`group transition-all duration-300 cursor-pointer relative ${isActive ? 'bg-blue-50/20' : 'hover:bg-slate-50/80'}`}
                  >
                    
                    <td className={`py-6 xl:py-5 px-8 align-middle transition-all duration-300 ${isActive ? 'border-l-4 border-blue-600' : 'border-l-4 border-transparent'}`}>
                      <div className="flex flex-col items-start gap-2">
                        <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-slate-900'}`}>
                          {plan.name}
                        </span>
                      </div>
                    </td>
                    
                    <td className="py-6 xl:py-5 px-8 align-middle">
                      <p className="text-slate-500 text-base leading-relaxed pr-6">
                        {plan.description}
                      </p>
                    </td>
                    
                    <td className="py-6 xl:py-5 px-8 align-middle">
                      <span className="inline-flex items-center justify-center bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap border border-slate-200/60">
                        {plan.duration}
                      </span>
                    </td>
                    
                    <td className="py-6 xl:py-5 px-8 align-middle">
                      <div className="flex flex-col">
                        <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                          {plan.price}
                        </span>
                        {plan.price !== 'Custom' && (
                          <span className="text-slate-400 text-sm mt-1">Starting from</span>
                        )}
                      </div>
                    </td>
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          <div className="bg-slate-50/50 border-t border-slate-100 p-6 xl:p-5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 block"></span>
              The estimated cost & timeline varies based on client-specific feature requests.
            </p>
            <Link 
              href="/contact-us"
              className="group inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-slate-900/10 hover:shadow-blue-600/20 hover:-translate-y-1 whitespace-nowrap"
            >
              Discuss Your Project 
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
