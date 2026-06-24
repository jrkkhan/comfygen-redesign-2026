import React from 'react';
import { Cpu, ShieldCheck, Map, BellDot, BarChart3, Cloud } from 'lucide-react';
import { SolutionPageData } from "@/types/solution";

interface AdvancedTechFeaturesProps {
  sectionData?: SolutionPageData['techFeaturesSection'];
}

const fallbackFeatures = [
  {
    title: "AI-Powered Recommendations",
    description: "Suggest food items based on past orders, search history, and trending items to increase average order value.",
    icon: Cpu,
  },
  {
    title: "Real-time Route Optimization",
    description: "Advanced algorithms calculate the fastest delivery routes, reducing fuel cost and improving delivery times.",
    icon: Map,
  },
  {
    title: "Fraud Prevention & Security",
    description: "End-to-end encryption and strict identity verification for drivers and users to ensure maximum security.",
    icon: ShieldCheck,
  },
  {
    title: "Live Order Tracking",
    description: "Provide customers with real-time ETA and exact location of their delivery partner on a live map.",
    icon: BellDot,
  },
  {
    title: "Advanced Data Analytics",
    description: "Powerful dashboard for business owners to track KPIs, popular items, peak hours, and user behavior.",
    icon: BarChart3,
  },
  {
    title: "Cloud Scalability",
    description: "Built on AWS/Google Cloud to seamlessly handle millions of concurrent users during peak ordering hours.",
    icon: Cloud,
  }
];

const genericIcons = [Cpu, Map, ShieldCheck, BellDot, BarChart3, Cloud];

export const AdvancedTechFeatures = ({ sectionData }: AdvancedTechFeaturesProps) => {
  const finalFeatures = sectionData?.items || fallbackFeatures;

  return (
    <section className="py-20 bg-[#080F1E] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{sectionData?.heading || "Emerging Technologies"}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{sectionData?.subHeading || "We don't just build apps; we build intelligent, scalable systems designed to beat the competition."}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {finalFeatures.map((feature, idx) => {
            const Icon = genericIcons[idx % genericIcons.length];
            return (
              <div key={idx} className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 transition-colors group">
                <div className="w-14 h-14 bg-[#0158E6]/20 text-[#0158E6] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
