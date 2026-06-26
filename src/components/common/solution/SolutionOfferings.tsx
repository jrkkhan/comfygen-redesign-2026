import React from 'react';
import { Store, UtensilsCrossed, Smartphone, ShoppingCart, HeartPulse, Box, EggFried, Wine } from 'lucide-react';
import { SolutionPageData } from "@/types/solution";

interface SolutionOfferingsProps {
  sectionData?: SolutionPageData['offeringsSection'];
}

const genericIcons = [Store, UtensilsCrossed, Smartphone, ShoppingCart, HeartPulse, Box, EggFried, Wine];

const fallbackSolutions = [
  {
    title: "Aggregator Platform",
    description: "Connect multiple restaurants with customers like Zomato.",
    icon: Store,
  },
  {
    title: "Cloud Kitchen",
    description: "Manage virtual brands effortlessly.",
    icon: UtensilsCrossed,
  },
  {
    title: "Dedicated App",
    description: "White-label app for your restaurant.",
    icon: Smartphone,
  },
  {
    title: "Grocery App",
    description: "On-demand local grocery delivery.",
    icon: ShoppingCart,
  },
  {
    title: "Pharmacy App",
    description: "Medicine delivery with secure prescription uploads.",
    icon: HeartPulse,
  },
  {
    title: "Parcel Delivery",
    description: "Hyperlocal parcel logistics matching.",
    icon: Box,
  },
  {
    title: "Meat & Dairy",
    description: "Temperature-controlled fresh produce delivery.",
    icon: EggFried,
  },
  {
    title: "Liquor Delivery",
    description: "Age-verified alcohol delivery solutions.",
    icon: Wine,
  }
];

export const SolutionOfferings = ({ sectionData }: SolutionOfferingsProps) => {
  const finalSolutions = sectionData?.items || fallbackSolutions;

  return (
    <section className="py-12 xl:py-16 2xl:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 relative z-10 w-full">
        <div className="text-center mb-6 2xl:mb-10">
          <h2 className="text-balance text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">{sectionData?.heading || "Solutions We Offer"}</h2>
          <p className="text-slate-600 text-[15px] md:text-base max-w-2xl mx-auto leading-relaxed">
            {sectionData?.subHeading || "From multi-vendor aggregators to dedicated apps, we build scalable platforms tailored for diverse business models."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 2xl:gap-5">
          
          {finalSolutions.map((item, idx) => {
            const Icon = item.icon || genericIcons[idx % genericIcons.length];

            const isWide = idx === 0 || idx === 4 || idx === 6 || idx === 7;

            // --- Card 1: Aggregator Platform (User's preferred design) ---
            if (idx === 0) {
              return (
                <div key={idx} className="lg:col-span-2 lg:row-span-1 rounded-2xl 2xl:rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50/50 p-4 xl:p-5 2xl:p-6 relative overflow-hidden group shadow-[inset_0_0_0_1px_rgba(226,232,240,1)] hover:shadow-lg transition-all duration-300">
                  <div className="absolute right-0 top-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative z-10 flex flex-col justify-center h-full">
                    <div className="flex items-center gap-3 2xl:gap-4 mb-2 2xl:mb-3">
                      <div className="w-10 h-10 2xl:w-12 2xl:h-12 shrink-0 bg-white text-blue-600 rounded-lg 2xl:rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-5 h-5 2xl:w-6 2xl:h-6" />
                      </div>
                      <h3 className="text-balance text-lg xl:text-xl 2xl:text-2xl font-bold text-slate-900 tracking-tight leading-tight">{item.title}</h3>
                    </div>
                    <p className="text-slate-600 text-[13px] 2xl:text-sm leading-relaxed max-w-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            }

            // --- All other cards (White minimalist design) ---
            const colorThemes: Record<number, { bg: string, text: string, border: string }> = {
              1: { bg: "bg-orange-50", text: "text-orange-600", border: "hover:border-orange-200" },
              2: { bg: "bg-purple-50", text: "text-purple-600", border: "hover:border-purple-200" },
              3: { bg: "bg-emerald-50", text: "text-emerald-600", border: "hover:border-emerald-200" },
              4: { bg: "bg-rose-50", text: "text-rose-600", border: "hover:border-rose-200" },
              5: { bg: "bg-indigo-50", text: "text-indigo-600", border: "hover:border-indigo-200" },
              6: { bg: "bg-amber-50", text: "text-amber-600", border: "hover:border-amber-200" },
              7: { bg: "bg-pink-50", text: "text-pink-600", border: "hover:border-pink-200" }
            };
            const theme = colorThemes[idx] || colorThemes[1];

            if (isWide) {
              return (
                <div key={idx} className={`lg:col-span-2 lg:row-span-1 rounded-2xl 2xl:rounded-3xl bg-white border border-slate-100 p-4 xl:p-5 2xl:p-6 hover:shadow-xl ${theme.border} transition-all duration-300 group`}>
                  <div className="flex flex-col justify-center h-full">
                    <div className="flex items-center gap-3 2xl:gap-4 mb-2 2xl:mb-3">
                      <div className={`w-10 h-10 2xl:w-12 2xl:h-12 shrink-0 ${theme.bg} ${theme.text} rounded-lg 2xl:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-5 h-5 2xl:w-6 2xl:h-6" />
                      </div>
                      <h3 className="text-balance text-lg xl:text-xl 2xl:text-2xl font-bold text-slate-900 tracking-tight leading-tight">{item.title}</h3>
                    </div>
                    <p className="text-slate-500 text-[13px] 2xl:text-sm leading-relaxed max-w-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div key={idx} className={`lg:col-span-1 lg:row-span-1 rounded-2xl 2xl:rounded-3xl bg-white border border-slate-100 p-4 xl:p-5 2xl:p-6 hover:shadow-xl ${theme.border} transition-all duration-300 group flex flex-col justify-center`}>
                <div className={`w-10 h-10 2xl:w-12 2xl:h-12 shrink-0 ${theme.bg} ${theme.text} rounded-lg 2xl:rounded-xl flex items-center justify-center mb-2 2xl:mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 2xl:w-6 2xl:h-6" />
                </div>
                <h3 className="text-balance text-[17px] xl:text-lg 2xl:text-xl font-bold text-slate-900 mb-1 2xl:mb-2 leading-tight">{item.title}</h3>
                <p className="text-slate-500 text-[13px] 2xl:text-sm leading-relaxed line-clamp-2">{item.description}</p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};
