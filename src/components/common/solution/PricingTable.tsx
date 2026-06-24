import React from 'react';
import { Check, X } from 'lucide-react';
import Link from 'next/link';
import { SolutionPageData } from "@/types/solution";

interface PricingTableProps {
  sectionData?: SolutionPageData['pricingSection'];
}

const fallbackPlans = [
  {
    name: "MVP / Starter",
    description: "Perfect for startups testing the market.",
    price: "$15,000+",
    duration: "2-3 Months",
    isPopular: false,
    features: [
      { name: "Basic User App (iOS & Android)", included: true },
      { name: "Basic Delivery App", included: true },
      { name: "Web Admin Dashboard", included: true },
      { name: "Single Payment Gateway", included: true },
      { name: "Real-time Tracking", included: false },
      { name: "AI Recommendations", included: false },
      { name: "1 Month Free Support", included: true }
    ]
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses scaling up.",
    price: "$35,000+",
    duration: "4-6 Months",
    isPopular: true,
    features: [
      { name: "Advanced User App (Native)", included: true },
      { name: "Advanced Delivery App", included: true },
      { name: "Restaurant/Vendor Panel", included: true },
      { name: "Multiple Payment Gateways", included: true },
      { name: "Real-time GPS Tracking", included: true },
      { name: "Promo & Loyalty System", included: true },
      { name: "3 Months Free Support", included: true }
    ]
  },
  {
    name: "Enterprise",
    description: "Custom-built for massive scale operations.",
    price: "Custom",
    duration: "6+ Months",
    isPopular: false,
    features: [
      { name: "Complete White-label Source Code", included: true },
      { name: "Custom API Integrations", included: true },
      { name: "Advanced Data Analytics", included: true },
      { name: "AI-Powered Recommendations", included: true },
      { name: "Cloud Load Balancing (AWS/GCP)", included: true },
      { name: "Dedicated Account Manager", included: true },
      { name: "12 Months Free Support", included: true }
    ]
  }
];

export const PricingTable = ({ sectionData }: PricingTableProps) => {
  const finalPlans = sectionData?.items ? sectionData.items.map((plan, idx) => ({
    name: plan.tierName,
    description: plan.description,
    price: plan.price,
    duration: idx === 0 ? "2-3 Months" : idx === 1 ? "4-6 Months" : "6+ Months",
    isPopular: idx === 1, // Make middle plan popular
    features: plan.features.map(f => ({ name: f, included: true }))
  })) : fallbackPlans;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{sectionData?.heading || "Transparent & Flexible Pricing"}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{sectionData?.subHeading || "Choose a plan that fits your business stage. No hidden fees, just high-quality development."}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {finalPlans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-3xl p-8 flex flex-col ${
                plan.isPopular 
                ? 'border-2 border-[#0158e6] shadow-2xl shadow-blue-500/20 transform md:-translate-y-4' 
                : 'border border-slate-200 shadow-xl shadow-slate-200/50'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0158e6] text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-6 h-10">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                </div>
                <div className="text-slate-500 text-sm mt-2 font-medium">Timeline: {plan.duration}</div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-slate-700' : 'text-slate-400'}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <Link 
                href="/contact-us"
                className={`w-full text-center py-4 rounded-xl font-semibold transition-all ${
                  plan.isPopular 
                  ? 'bg-[#0158e6] hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                Get a Quote
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
