import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AwardCardProps {
  title: string;
  imageSrc: string;
  href?: string;
  className?: string;
}

const AwardCard = ({ title, imageSrc, href, className = "" }: AwardCardProps) => {
  const content = (
    <div className={`bg-[#12182b] h-full border border-white/[0.04] rounded-2xl p-5 xl:p-6 2xl:p-8 flex flex-col items-center justify-center text-center hover:bg-[#1a2238] transition-colors duration-300 group ${className}`}>
      <div className="relative h-12 sm:h-16 2xl:h-20 w-full mb-3 2xl:mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-contain drop-shadow-md" 
        />
      </div>
      <span className="text-slate-200 text-xs sm:text-sm 2xl:text-base font-medium  !font-heading">{title}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    );
  }

  return content;
};

export const Awards = () => {
  return (
    <section className="w-full py-16 xl:py-20 2xl:py-28 px-4 bg-[#0A0D27]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 2xl:gap-12 items-center">

        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-8">
          <h2 className="text-balance text-3xl sm:text-4xl 2xl:text-[42px] font-bold text-white mb-4 2xl:mb-6 leading-[1.25] tracking-tight">
            Comfygen <span className="text-primary">Awards,</span><br className="hidden sm:block" />
            Ratings & Recognition's
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 2xl:mb-10 max-w-lg">
            We Don't Just Deliver Solutions; We Build Lasting Partnerships. Discover The Success Stories And Feedback From Our Clients, Which Stand As A Testament.
          </p>
          <Link href="/client-testimonials" className="border border-primary text-white hover:bg-primary px-8 py-3.5 rounded-full text-sm font-medium transition-all  hover:shadow-[0_0_25px_rgba(1,88,230,0.4)]">
            Know More
          </Link>
        </div>

        {/* Right Column: Awards Grid */}
        <div className="lg:col-span-6 w-full flex flex-col gap-4 sm:gap-6">

          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            <AwardCard href="https://www.topdevelopers.co/profile/comfygen" title="Top Developers" imageSrc="/images/award/top-developers.webp" />
            <AwardCard href="https://clutch.co/profile/comfygen-technologies" title="Superb" imageSrc="/images/award/superb.webp" />
            <AwardCard href="https://www.designrush.com/agency/profile/comfygen" title="Mobileappdaily" imageSrc="/images/award/mobileappdaily.webp" className="col-span-2 sm:col-span-1" />
          </div>

          {/* Bottom Row: 2 Cards (Wider) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <AwardCard href="https://selectedfirms.co/agency/comfygen-private-limited" title="Firms Top Ecommerce" imageSrc="/images/award/firms-top-ecommerce.webp" />
            <AwardCard href="https://www.goodfirms.co/company/comfygen-technologies" title="Firms Mobile App Development" imageSrc="/images/award/firms-mobile-app-development.webp" />
          </div>

        </div>

      </div>
    </section>
  );
};
