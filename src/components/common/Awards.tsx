import React from 'react';
import Image from 'next/image';

interface AwardCardProps {
  title: string;
  imageSrc: string;
  className?: string;
}

const AwardCard = ({ title, imageSrc, className = "" }: AwardCardProps) => (
  <div className={`bg-[#12182b] border border-white/[0.04] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center hover:bg-[#1a2238] transition-colors duration-300 group ${className}`}>
    <div className="relative h-16 sm:h-20 w-full mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <Image 
        src={imageSrc} 
        alt={title} 
        fill 
        className="object-contain drop-shadow-md" 
      />
    </div>
    <span className="text-slate-200 text-xs sm:text-base font-medium  !font-heading">{title}</span>
  </div>
);

export const Awards = () => {
  return (
    <section className="w-full py-20 lg:py-28 px-4 bg-[#0A0D27]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-8">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white mb-6 leading-[1.25] tracking-tight">
            Comfygen <span className="text-primary">Awards,</span><br className="hidden sm:block" />
            Ratings & Recognition's
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-10 max-w-lg">
            We Don't Just Deliver Solutions; We Build Lasting Partnerships. Discover The Success Stories And Feedback From Our Clients, Which Stand As A Testament.
          </p>
          <button className="border border-primary text-white hover:bg-primary px-8 py-3.5 rounded-full text-sm font-medium transition-all  hover:shadow-[0_0_25px_rgba(1,88,230,0.4)]">
            Know More
          </button>
        </div>

        {/* Right Column: Awards Grid */}
        <div className="lg:col-span-6 w-full flex flex-col gap-4 sm:gap-6">

          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            <AwardCard title="Top Developers" imageSrc="/images/award/top-developers.webp" />
            <AwardCard title="Superb" imageSrc="/images/award/superb.webp" />
            <AwardCard title="Mobileappdaily" imageSrc="/images/award/mobileappdaily.webp" className="col-span-2 sm:col-span-1" />
          </div>

          {/* Bottom Row: 2 Cards (Wider) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <AwardCard title="Firms Top Ecommerce" imageSrc="/images/award/firms-top-ecommerce.webp" />
            <AwardCard title="Firms Mobile App Development" imageSrc="/images/award/firms-mobile-app-development.webp" />
          </div>

        </div>

      </div>
    </section>
  );
};
