import React from 'react';
import { ShoppingCart, HeartPulse, Wine, Utensils, Box, Store } from 'lucide-react';

const useCases = [
  { title: "Grocery Delivery", icon: ShoppingCart, desc: "On-demand grocery delivery apps for local supermarkets." },
  { title: "Pharmacy Delivery", icon: HeartPulse, desc: "Fast and secure medicine delivery with prescription uploads." },
  { title: "Liquor Delivery", icon: Wine, desc: "Age-verified alcohol delivery solutions for licensed vendors." },
  { title: "Cloud Kitchens", icon: Utensils, desc: "Manage multiple brands and delivery-only kitchens efficiently." },
  { title: "Courier/Parcel", icon: Box, desc: "Hyperlocal parcel delivery matching drivers with senders." },
  { title: "Meat & Dairy", icon: Store, desc: "Temperature-controlled fresh produce delivery networks." },
];

export const SolutionUseCases = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-balance text-3xl md:text-4xl font-bold text-slate-900 mb-4">One Solution, Multiple Industries</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Our robust on-demand delivery architecture can be customized for various business models beyond just food.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-balance text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
