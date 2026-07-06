'use client';
import React, { useState } from 'react';
import { Smartphone, Store, Car, CheckCircle2, ShieldAlert, LayoutDashboard, Search, Home, Bell, Menu, BarChart3, Users, Settings, User, MapPin, ChevronRight } from 'lucide-react';
import { SolutionPageData } from "@/types/solution";

interface AppModulesTabProps {
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
      "Review & Rating System"
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
      "Customer Reviews Management"
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
      "Status Update Toggles"
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
      "Content Management System"
    ]
  }
];

// ==========================================
// PREMIUM GENERIC UI COMPONENTS (Zero Images)
// ==========================================

const PremiumUserApp = () => (
  <div className="w-full h-full bg-slate-50 flex flex-col font-sans text-slate-800 pointer-events-none select-none">
    {/* Header */}
    <div className="bg-white px-5 pt-6 pb-4 rounded-b-3xl shadow-sm z-10 shrink-0 border-b border-slate-100">
      <div className="flex justify-between items-center mb-4">
        <div>
           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Current Location</div>
           <div className="font-bold text-sm flex items-center gap-1">New York, USA <ChevronRight className="w-3 h-3 text-blue-600"/></div>
        </div>
        <div className="w-9 h-9 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
          <User className="w-4 h-4 text-white"/>
        </div>
      </div>
      <div className="relative">
        <div className="w-full h-11 bg-slate-50 rounded-xl flex items-center px-4 gap-3 border border-slate-200">
          <Search className="w-4 h-4 text-slate-400" />
          <div className="text-xs text-slate-400 font-medium">Search services, providers...</div>
        </div>
      </div>
    </div>

    {/* Content Area */}
    <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-6">
      
      {/* Categories */}
      <div className="flex gap-4">
        {[1,2,3,4].map((i) => (
          <div key={i} className="flex flex-col items-center gap-2 shrink-0">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${i === 1 ? 'bg-blue-600 shadow-lg shadow-blue-500/30' : 'bg-white border border-slate-200 shadow-sm'}`}>
              <div className={`w-6 h-6 rounded-full ${i === 1 ? 'bg-white' : 'bg-slate-200'}`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended List */}
      <div>
        <div className="flex justify-between items-end mb-3">
          <div className="font-bold text-sm text-slate-900">Recommended</div>
          <div className="text-[10px] text-blue-600 font-bold">See All</div>
        </div>
        
        <div className="flex flex-col gap-3">
          {[1,2].map((i) => (
            <div key={i} className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-center relative overflow-hidden">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-slate-800 opacity-5"></div>
              </div>
              <div className="flex-1">
                <div className="font-bold text-sm mb-1 text-slate-800">Premium Service Provider</div>
                <div className="text-[10px] text-slate-500 mb-2">⭐ 4.9 (1.2k reviews)</div>
                <div className="font-black text-blue-600 text-sm">$45.00</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const PremiumVendorPanel = () => (
  <div className="w-full h-full bg-slate-50 flex flex-col font-sans text-slate-800 pointer-events-none select-none">
    <div className="bg-white px-6 py-5 border-b border-slate-200 flex justify-between items-center shrink-0">
      <div className="font-bold text-base text-slate-800">Dashboard Overview</div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
        <div className="text-xs font-bold text-emerald-600">Store Active</div>
      </div>
    </div>

    <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6">
      
      {/* Metric Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-4 rounded-2xl shadow-lg shadow-blue-500/20 text-white">
          <div className="text-[10px] font-medium text-blue-100 uppercase tracking-wider mb-1">Total Revenue</div>
          <div className="font-black text-2xl">$12,450</div>
        </div>
        <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
           <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1">Active Orders</div>
           <div className="font-black text-2xl text-slate-800">24</div>
        </div>
      </div>

      {/* Dummy Chart */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
         <div className="font-bold text-xs text-slate-500 uppercase tracking-wider">Weekly Sales</div>
         <div className="h-32 w-full flex items-end justify-between px-2 gap-2">
           {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
             <div key={i} className="w-full bg-blue-50 rounded-t-md relative group">
               <div className="absolute bottom-0 w-full bg-blue-500 rounded-t-md transition-all duration-500" style={{ height: `${h}%` }}></div>
             </div>
           ))}
         </div>
      </div>

      {/* Recent Activity */}
      <div>
        <div className="font-bold text-sm mb-3 text-slate-800">Recent Bookings</div>
        <div className="flex flex-col gap-3">
          {[1,2].map(i => (
            <div key={i} className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center">
              <div>
                <div className="font-bold text-sm text-slate-800 mb-0.5">Order #{849 + i}</div>
                <div className="text-[10px] text-slate-400 font-medium">John Doe • 3 items</div>
              </div>
              <div className={`px-2 py-1 rounded-md text-[10px] font-bold tracking-wide ${i === 1 ? 'bg-amber-50 text-amber-600 border border-amber-200' : 'bg-emerald-50 text-emerald-600 border border-emerald-200'}`}>
                {i === 1 ? 'PREPARING' : 'COMPLETED'}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
);

const PremiumDriverApp = () => (
  <div className="w-full h-full bg-slate-900 flex flex-col font-sans text-white relative pointer-events-none select-none overflow-hidden">
    {/* Dark Map Background */}
    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <path d="M 50 100 C 150 100, 200 300, 350 250" stroke="#3b82f6" strokeWidth="6" fill="transparent" strokeDasharray="8,8" />
      <circle cx="50" cy="100" r="10" fill="#3b82f6" />
      <circle cx="350" cy="250" r="10" fill="#10b981" />
      {/* Dummy Map Pins */}
      <path d="M42 85 l8 15 l8 -15 a 10 10 0 1 0 -16 0" fill="#3b82f6" />
      <path d="M342 235 l8 15 l8 -15 a 10 10 0 1 0 -16 0" fill="#10b981" />
    </svg>

    <div className="relative z-10 p-5 flex justify-between items-center">
      <div className="w-10 h-10 bg-slate-800/80 backdrop-blur-md rounded-full flex items-center justify-center border border-slate-700">
        <Menu className="w-5 h-5 text-white"/>
      </div>
      <div className="bg-emerald-500/20 backdrop-blur-md border border-emerald-500/50 text-emerald-400 px-4 py-2 rounded-full font-bold text-xs shadow-[0_0_15px_rgba(16,185,129,0.3)]">
        ONLINE
      </div>
    </div>

    {/* Floating Bottom Card */}
    <div className="relative z-10 mt-auto bg-slate-800/90 backdrop-blur-xl border-t border-slate-700 rounded-t-[2rem] p-6 shadow-2xl w-full max-w-sm mx-auto">
       <div className="w-12 h-1.5 bg-slate-600 rounded-full mx-auto mb-5"></div>
       <div className="flex justify-between items-end mb-6">
         <div>
           <div className="font-black text-2xl mb-1 text-white">New Request</div>
           <div className="text-slate-400 text-xs font-medium">Distance: 2.5 km • Est: 12 mins</div>
         </div>
         <div className="font-black text-emerald-400 text-xl">$18.50</div>
       </div>
       
       <div className="flex flex-col gap-5 mb-8 relative px-2">
          <div className="absolute left-4 top-3 bottom-3 w-0.5 bg-slate-700"></div>
          
          <div className="flex gap-4 items-center z-10">
            <div className="w-4 h-4 bg-blue-500 rounded-full ring-4 ring-slate-800 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <div className="flex-1">
              <div className="text-[10px] font-bold text-slate-500 uppercase mb-0.5 tracking-wider">Pickup Point</div>
              <div className="text-sm font-semibold text-slate-200">123 Business Avenue</div>
            </div>
          </div>
          
          <div className="flex gap-4 items-center z-10">
            <div className="w-4 h-4 bg-emerald-500 rounded-full ring-4 ring-slate-800 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            <div className="flex-1">
              <div className="text-[10px] font-bold text-slate-500 uppercase mb-0.5 tracking-wider">Drop-off Point</div>
              <div className="text-sm font-semibold text-slate-200">456 Residential Complex</div>
            </div>
          </div>
       </div>

       <div className="flex gap-3">
         <div className="flex-1 py-3.5 bg-slate-700 text-white text-center rounded-xl font-bold text-sm">Decline</div>
         <div className="flex-[2] py-3.5 bg-blue-600 text-white text-center rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(59,130,246,0.4)]">Accept Order</div>
       </div>
    </div>
  </div>
);

const PremiumAdminPanel = () => (
  <div className="w-full h-full bg-slate-900 flex flex-col font-sans text-slate-200 pointer-events-none select-none">
    <div className="h-14 bg-slate-950/50 border-b border-slate-800 flex justify-between items-center px-6 shrink-0">
      <div className="font-black text-sm tracking-widest text-white">ECOSYSTEM<span className="text-blue-500">.OS</span></div>
      <div className="flex gap-3 items-center">
        <Bell className="w-4 h-4 text-slate-400"/>
        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full border border-slate-700 shadow-sm"></div>
      </div>
    </div>

    <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: 'Total Users', val: '45,231', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
          { label: 'Total Revenue', val: '$892k', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
          { label: 'Active Providers', val: '1,204', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
          { label: 'Live Orders', val: '342', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' }
        ].map((stat, i) => (
          <div key={i} className={`p-4 rounded-2xl border ${stat.bg} shadow-sm`}>
             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</div>
             <div className={`font-black text-xl ${stat.color}`}>{stat.val}</div>
          </div>
        ))}
      </div>

      <div className="flex-1 bg-slate-800/50 rounded-2xl border border-slate-700/50 p-5 flex flex-col">
         <div className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-4">Platform Growth</div>
         <div className="flex-1 w-full flex items-end px-2 gap-1.5 opacity-80">
           {[30, 45, 40, 60, 55, 80, 75, 95, 85, 100].map((h, i) => (
             <div key={i} className="flex-1 bg-blue-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
           ))}
         </div>
      </div>
    </div>
  </div>
);

const ActiveUI = ({ id }: { id: string }) => {
  switch (id) {
    case 'user': return <PremiumUserApp />;
    case 'vendor': return <PremiumVendorPanel />;
    case 'delivery': return <PremiumDriverApp />;
    case 'admin': return <PremiumAdminPanel />;
    default: return <PremiumUserApp />;
  }
};


// ==========================================
// THE MAIN COMPONENT
// ==========================================

export const AppModulesTab = ({ sectionData }: AppModulesTabProps) => {
  const finalModulesData = sectionData?.items ? sectionData.items.map(m => {
    let icon = Smartphone;
    if (m.id === 'vendor') icon = Store;
    else if (m.id === 'driver' || m.id === 'delivery') icon = Car;
    else if (m.id === 'admin') icon = LayoutDashboard;
    return { ...m, icon };
  }) : modulesData;

  const [activeTab, setActiveTab] = useState(finalModulesData[0].id);
  
  const activeData = finalModulesData.find(m => m.id === activeTab) || finalModulesData[0];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-bold !font-heading text-slate-900 mb-6 tracking-tight">{sectionData?.heading || "Complete Ecosystem Architecture"}</h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">{sectionData?.subHeading || "A fully integrated suite of premium applications designed to scale across any on-demand business model instantly."}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Area: Features List */}
          <div className="flex-1 w-full order-2 lg:order-1 relative z-20">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-sm capitalize mb-6 border border-blue-100">
              {activeData.label}
            </div>
            <h3 className="text-balance text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">Empower your ecosystem with <span className="text-[#0158e6]">robust tools.</span></h3>
            
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

          {/* Right Area: Premium Tablet Dashboard */}
          <div className="flex-1 w-full shrink-0 order-1 lg:order-2 relative perspective-[2000px] animate-in fade-in zoom-in duration-500">
            {/* Premium Glassy Tablet Body */}
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-950 rounded-[1.5rem] md:rounded-[2rem] p-2 md:p-3 shadow-2xl shadow-blue-900/20 ring-1 ring-slate-700">
              
              {/* Screen Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 rounded-[1.5rem] md:rounded-[2rem] pointer-events-none z-30"></div>
              
              {/* Camera dot */}
              <div className="absolute top-0 inset-x-0 h-2 md:h-3 flex justify-center z-20">
                <div className="w-1.5 h-1.5 mt-1 bg-black rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]"></div>
              </div>
              
              {/* Screen Area */}
              <div className="relative w-full h-full bg-slate-900 rounded-[1rem] md:rounded-[1.5rem] overflow-hidden flex shadow-inner">
                
                {/* Dark Internal Sidebar */}
                <div className="w-[80px] md:w-[100px] bg-slate-950/80 backdrop-blur-xl border-r border-slate-800 flex flex-col py-6 shrink-0 shadow-2xl z-20">
                   <div className="flex flex-col gap-3 px-3">
                     {finalModulesData.map(tab => (
                       <button 
                         key={tab.id}
                         onClick={() => setActiveTab(tab.id)}
                         className={`p-3 rounded-xl flex flex-col items-center gap-2 transition-all duration-300 ${
                           activeTab === tab.id 
                           ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] scale-105' 
                           : 'text-slate-500 hover:bg-slate-800 hover:text-slate-300'
                         }`}
                       >
                         <tab.icon className="w-5 h-5" />
                         <span className="text-[9px] font-bold text-center uppercase tracking-wider">{tab.shortLabel}</span>
                       </button>
                     ))}
                   </div>
                </div>

                {/* Internal App Content Area */}
                <div className="flex-1 bg-slate-900 flex flex-col relative overflow-hidden">
                  <ActiveUI id={activeTab} />
                </div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/20 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
