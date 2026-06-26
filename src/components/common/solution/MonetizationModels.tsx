import React from 'react';
import { DollarSign, Percent, Megaphone, Crown } from 'lucide-react';

const models = [
  {
    title: "Commission on Orders",
    description: "Earn a fixed percentage or flat fee on every successful order placed through your food delivery app.",
    icon: Percent,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    title: "Delivery Charges",
    description: "Generate revenue by charging customers a delivery fee based on distance, time, or demand (surge pricing).",
    icon: DollarSign,
    color: "text-green-500",
    bg: "bg-green-50"
  },
  {
    title: "In-App Advertising",
    description: "Allow restaurants to pay for top placement in search results or feature banners on the home screen.",
    icon: Megaphone,
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    title: "Premium Subscriptions",
    description: "Offer users a 'Pro' membership with benefits like free delivery or exclusive discounts for a monthly fee.",
    icon: Crown,
    color: "text-purple-500",
    bg: "bg-purple-50"
  }
];

export const MonetizationModels = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-balance text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Can You Make Money?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Explore multiple revenue streams and proven business models for your food delivery startup.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, idx) => {
            const Icon = model.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all group bg-white">
                <div className={`w-14 h-14 rounded-xl ${model.bg} ${model.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-balance text-xl font-bold text-slate-900 mb-3">{model.title}</h3>
                <p className="text-slate-600 leading-relaxed">{model.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
