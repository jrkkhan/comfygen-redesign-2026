import React from 'react';
import { Plus } from 'lucide-react';

const locations = [
  {
    country: "India",
    address: "Jaipur Rajasthan",
    color: "text-[#0158E6]", // Blue
    hex: "#0158E6",
    position: "top-[30%] left-[67%]"
  },
  {
    country: "Canada",
    address: "Tuxedo Ct,Toronto",
    color: "text-[#FF5B22]", // Orange-Red
    hex: "#FF5B22",
    position: "top-[18%] left-[22%]"
  },
  {
    country: "Germany",
    address: "Rhederstraße Euskirchen",
    color: "text-[#10B981]", // Green
    hex: "#FF8A00",
    position: "top-[16%] left-[51%]"
  }
];

export const OurGeography = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-[#FAFAFA] font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Heading Section */}
        <h2 className="text-balance text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 mb-6 leading-[1.25] tracking-tight">
          Our Geography
        </h2>
        <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          Headquartered in India, Comfygen Technologies operates globally delivering innovative web<br className="hidden sm:block" /> and mobile development solutions.
        </p>

        {/* Location Texts (Row) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-5xl mx-auto">
          {locations.map((loc, idx) => (
            <div key={idx} className="flex flex-col items-center p-6 lg:p-6 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300">
              <h3 className={`text-balance text-lg font-bold mb-1.5 ${loc.color}`}>
                {loc.country}
              </h3>
              <p className="text-slate-500 text-[14px]">
                Office locations: {loc.address}
              </p>
            </div>
          ))}
        </div>

        {/* Map Area */}
        <div className="relative w-full max-w-[1000px] mx-auto aspect-[2/1] flex items-center justify-center mt-12">

          {/* Actual Dotted Map generated via CSS Mask */}
          {/* Opacity increased from 0.35 to 0.75, dot color made #94a3b8 for better visibility */}
          <div
            className="absolute inset-0 opacity-75 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, #94a3b8 1px, transparent 1px)`,
              backgroundSize: '4px 4px',
              maskImage: `url('/images/world-map-mask.svg')`,
              WebkitMaskImage: `url('/images/world-map-mask.svg')`,
              maskSize: '100% auto',
              WebkitMaskSize: '100% auto',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              clipPath: 'polygon(0 0, 100% 0, 100% 86%, 0 86%)',
            }}
          />

          {/* Markers */}
          {locations.map((loc, idx) => (
            <div key={idx} className={`absolute ${loc.position} flex items-center group cursor-pointer z-10`}>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max min-w-[140px] bg-[#0158E6] text-white text-xs rounded-xl py-2.5 px-4 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none shadow-xl shadow-blue-900/20 z-50 origin-bottom">
                <p className="font-bold text-[14px] mb-0.5">{loc.country} Office</p>
                <p className="text-blue-100/90 text-[11px] leading-tight">{loc.address}</p>
                {/* Tooltip Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-[6px] border-transparent border-t-[#0158E6]" />
              </div>

              {/* Marker Icon */}
              <div
                className="relative flex items-center justify-center w-7 h-7 rounded-full border bg-white shadow-sm z-10 transition-transform duration-300 group-hover:scale-110"
                style={{ borderColor: loc.hex }}
              >
                <Plus className="w-3.5 h-3.5" style={{ color: loc.hex }} />
              </div>

              {/* Marker Label */}
              <div
                className="ml-2 px-4 py-1 bg-white border text-[13px] font-medium rounded-full shadow-sm whitespace-nowrap transition-transform duration-300 group-hover:scale-105"
                style={{ borderColor: loc.hex, color: loc.hex }}
              >
                {loc.country.toUpperCase()}
              </div>

              {/* Pulsing ring */}
              <div
                className="absolute left-[3px] top-[3px] w-5 h-5 rounded-full animate-ping pointer-events-none"
                style={{ backgroundColor: `${loc.hex}40` }} // 40 is hex for 25% opacity
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
