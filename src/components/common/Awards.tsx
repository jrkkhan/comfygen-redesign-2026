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
  const innerContent = (
    <div className="bg-[#12182b] h-full border border-white/[0.04] rounded-2xl p-5 xl:p-6 2xl:p-8 flex flex-col items-center justify-center text-center hover:bg-[#1a2238] transition-colors duration-300 group">
      <div className="relative h-20 sm:h-24 2xl:h-28 w-full mb-3 2xl:mb-5 flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          quality={60}
          className="object-contain drop-shadow-md scale-[1.5] group-hover:scale-[1.6] transition-transform duration-300"
        />
      </div>
      <span className="text-slate-200 text-xs sm:text-sm 2xl:text-base font-medium !font-heading">{title}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`block h-full ${className}`}>
        {innerContent}
      </a>
    );
  }

  return (
    <div className={`h-full ${className}`}>
      {innerContent}
    </div>
  );
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
            Our consistent presence on the industry's leading rating and review platforms reflects the trust our clients place in us and the quality we bring to every project we deliver.
          </p>
          <Link href="/awards" className="border border-primary text-white hover:bg-primary px-8 py-3.5 rounded-full text-sm font-medium transition-all hover:shadow-[0_0_25px_rgba(1,88,230,0.4)]">
            Know More
          </Link>
        </div>

        {/* Right Column: Awards Grid */}
        <div className="lg:col-span-6 w-full grid grid-cols-2 sm:grid-cols-6 gap-4 sm:gap-6">
          <AwardCard href="https://www.topdevelopers.co/profile/comfygen" title="Top Developer" imageSrc="/images/award/top-developer.webp" className="col-span-1 sm:col-span-2" />
          <AwardCard href="https://clutch.co/profile/comfygen-technologies" title="Clutch" imageSrc="/images/award/clutch-logo.webp" className="col-span-1 sm:col-span-2" />
          <AwardCard href="https://www.designrush.com/agency/profile/comfygen" title="DesignRush" imageSrc="/images/award/designerush.webp" className="col-span-2 sm:col-span-2" />
          <AwardCard href="https://selectedfirms.co/agency/comfygen-private-limited" title="SelectedFirms" imageSrc="/images/award/selected-firms.webp" className="col-span-1 sm:col-span-3" />
          <AwardCard href="https://www.goodfirms.co/company/comfygen-technologies" title="GoodFirms" imageSrc="/images/award/goodfirms.webp" className="col-span-1 sm:col-span-3" />
        </div>

      </div>
    </section>
  );
};
