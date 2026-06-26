import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface AboutInfoProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: React.ReactNode;
  paragraphs?: string[];
  buttonText?: string;
  buttonLink?: string;
}

const defaultParagraphs = [
  "Comfygen Is A Reliable Web And Mobile App Development Company Providing Secure And Scalable Digital Solutions Globally. We Assist Startups And Growing Businesses In Transforming Ideas Into Impactful Digital Products That Enhance Efficiency And Foster Growth.",
  "Our Expert Mobile App Development Team Uses Modern Frameworks And Cloud-Native Architectures To Build High-Performing Websites And Apps In Sectors Like Fintech, Healthcare, And Gaming. We Focus On Usability, Performance, And Scalability To Meet Your Business Needs."
];

export const AboutInfo = ({
  imageSrc = "/images/about/about-team.webp",
  imageAlt = "Team collaborating and high-fiving",
  title = "Powering Businesses with Scalable Mobile App and Web Development",
  paragraphs = defaultParagraphs,
  buttonText = "Learn More",
  buttonLink = "/about-us"
}: AboutInfoProps) => {
  return (
    <section className="w-full py-16 lg:py-20 2xl:py-32 px-4 bg-[#f8fafc]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-20 items-center">
        
        {/* Left: Image Container */}
        <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={imageAlt} 
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col">
          <h2 className="text-balance text-3xl sm:text-4xl 2xl:text-[42px] font-bold text-slate-900 mb-4 2xl:mb-6 leading-[1.25] tracking-tight">
            {title}
          </h2>
          
          {paragraphs.map((text, idx) => (
            <p key={idx} className={`text-slate-600 text-sm sm:text-base leading-relaxed ${idx === paragraphs.length - 1 ? 'mb-8 2xl:mb-10' : 'mb-4 2xl:mb-6'}`}>
              {text}
            </p>
          ))}
          
          <Link 
            href={buttonLink} 
            aria-label={buttonText === "Learn More" ? "Learn more about Comfygen" : undefined}
            className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-primary/20 w-fit"
          >
            {buttonText}
          </Link>
        </div>

      </div>
    </section>
  );
};
