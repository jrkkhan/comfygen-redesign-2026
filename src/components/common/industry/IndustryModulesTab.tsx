'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Smartphone, Store, Car, CheckCircle2, LayoutDashboard, ChevronRight } from 'lucide-react';
import { SolutionPageData } from "@/types/solution";

interface IndustryModulesTabProps {
  sectionData?: SolutionPageData['modulesSection'];
}

const modulesData = [
  {
    id: 'user',
    label: 'User App',
    shortLabel: 'User App',
    icon: Smartphone,
    features: [
      "Easy Sign-up & Profile Management",
      "Advanced Search & Filters",
      "Real-time GPS Tracking",
      "Multiple Payment Gateways",
      "Push Notifications & Alerts",
      "Review & Rating System",
      "Secure Data Encryption",
      "24/7 In-app Support"
    ]
  },
  {
    id: 'vendor',
    label: 'Provider Panel',
    shortLabel: 'Provider',
    icon: Store,
    features: [
      "Store/Service Dashboard",
      "Catalog & Category Management",
      "Order/Booking Management",
      "Offer & Discount Tools",
      "Payment & Settlement Tracking",
      "Customer Reviews Management",
      "Inventory Status Alerts",
      "Performance Analytics"
    ]
  },
  {
    id: 'delivery',
    label: 'Agent App',
    shortLabel: 'Agent',
    icon: Car,
    features: [
      "Easy Registration & KYC",
      "Real-time GPS Routing",
      "Accept/Reject Requests",
      "Earnings & Payout Dashboard",
      "In-app Chat/Call System",
      "Status Update Toggles",
      "Multi-language Support",
      "Shift Scheduling"
    ]
  },
  {
    id: 'admin',
    label: 'Admin Dashboard',
    shortLabel: 'Admin',
    icon: LayoutDashboard,
    features: [
      "Master Control Dashboard",
      "User & Provider Management",
      "Commission & Revenue Tracking",
      "Global Push Notifications",
      "Advanced Reports & Analytics",
      "Content Management System",
      "Role-based Access Control",
      "Automated Backup Systems"
    ]
  }
];

export const IndustryModulesTab = ({ sectionData }: IndustryModulesTabProps) => {
  const finalModulesData = sectionData?.items ? sectionData.items.map(m => {
    let icon = Smartphone;
    if (m.id === 'vendor') icon = Store;
    else if (m.id === 'driver' || m.id === 'delivery') icon = Car;
    else if (m.id === 'admin') icon = LayoutDashboard;
    return { ...m, icon };
  }) : modulesData;

  const [activeTab, setActiveTab] = useState(finalModulesData[0].id);
  
  const activeIndex = finalModulesData.findIndex(m => m.id === activeTab);
  const activeData = finalModulesData[activeIndex] || finalModulesData[0];

  const portfolioImages = [
    "/images/portfolio/ride-app.webp",
    "/images/portfolio/fitness-app.webp"
  ];
  const currentImage = (activeData as any).image || portfolioImages[activeIndex % portfolioImages.length];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-bold !font-heading text-slate-900 mb-6 tracking-tight">{sectionData?.heading || "Complete Ecosystem Architecture"}</h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">{sectionData?.subHeading || "A fully integrated suite of premium applications designed to scale across any on-demand business model instantly."}</p>
          
          {/* Tab Buttons Centered Below Heading */}
          <div className="inline-flex flex-wrap justify-center items-center p-1.5 bg-slate-100/80 border border-slate-200 rounded-xl mt-10">
            {finalModulesData.map(tab => (
               <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 ${
                    activeTab === tab.id
                    ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-900/5'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                  }`}
               >
                  <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-blue-600' : 'text-slate-400'}`} />
                  {tab.shortLabel}
               </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Area: Features List */}
          <div className="flex-1 w-full order-2 lg:order-1 relative z-20">

            <h3 className="text-balance text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">{activeData.label}</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              {activeData.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 font-medium leading-snug">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="mt-10 bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-1 hover:shadow-xl shadow-slate-900/20 flex items-center gap-2">
              Request Full Demo <ChevronRight className="w-5 h-5"/>
            </button>
          </div>

          {/* Right Area: Portfolio Image */}
          <div className="flex-1 w-full shrink-0 order-1 lg:order-2 relative animate-in fade-in zoom-in duration-500">
            <div className="relative w-full aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-slate-200">
              <Image 
                key={currentImage} // Force re-render animation when image changes
                src={currentImage}
                alt={`${activeData.label} Interface`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105 animate-in fade-in duration-500"
              />
            </div>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/20 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
