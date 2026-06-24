import React from 'react';
import { Bell, CreditCard, Star, Search, Tag, Globe, MapPin, MessageSquare } from 'lucide-react';

const features = [
  {
    title: "Push Notifications",
    description: "Keep users engaged with real-time updates on order status and offers.",
    icon: Bell,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Payment Gateways",
    description: "Seamless transactions with integrated support for cards and UPI.",
    icon: CreditCard,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Ratings & Reviews",
    description: "Build trust by allowing customers to rate their experience.",
    icon: Star,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Advanced Search",
    description: "Help users find exactly what they crave with powerful filters.",
    icon: Search,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Real-time Tracking",
    description: "Live map updates and exact ETAs so customers know where their food is.",
    icon: MapPin,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Multilingual Support",
    description: "Expand your reach by offering the app in multiple languages.",
    icon: Globe,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Discounts & Promo",
    description: "Drive sales and reward loyalty with customizable promo codes.",
    icon: Tag,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "In-App Chat & Calls",
    description: "Enable direct, secure communication between users and drivers.",
    icon: MessageSquare,
    color: "text-blue-500",
    bg: "bg-blue-50",
  }
];

export const KeyFeatures = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Key Features</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Discover the core functionalities that make our applications highly engaging and user-friendly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx} 
                className="p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all group bg-white"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
