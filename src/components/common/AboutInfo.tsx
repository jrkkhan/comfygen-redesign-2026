import React from 'react';
import Image from 'next/image';

export interface AboutInfoProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: React.ReactNode;
  paragraphs?: string[];
  buttonText?: string;
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
  buttonText = "Learn More"
}: AboutInfoProps) => {
  return (
    <section className="w-full py-20 lg:py-32 px-4 bg-[#f8fafc]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Image Container */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[650px] rounded-3xl overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 mb-6 leading-[1.25] tracking-tight">
            {title}
          </h2>
          
          {paragraphs.map((text, idx) => (
            <p key={idx} className={`text-slate-600 text-sm sm:text-base leading-relaxed ${idx === paragraphs.length - 1 ? 'mb-10' : 'mb-6'}`}>
              {text}
            </p>
          ))}
          
          <button className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-primary/20 w-fit">
            {buttonText}
          </button>
        </div>

      </div>
    </section>
  );
};
