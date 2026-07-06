"use client";
import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionThreeProps {
  badgeText?: string;
  title: ReactNode;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  rightContent?: ReactNode;
}

export const HeroSectionThree: React.FC<HeroSectionThreeProps> = ({
  badgeText,
  title,
  description,
  primaryButtonText,
  primaryButtonLink = "#",
  secondaryButtonText,
  secondaryButtonLink = "#",
  imageSrc,
  imageAlt = "Hero Image",
  rightContent
}) => {

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link.startsWith('#') && link.length > 1) {
      e.preventDefault();
      const id = link.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      className="relative w-full flex items-center pt-12 pb-12 px-4 lg:px-8 overflow-hidden"
    >
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-10 lg:mt-0">

        {/* Content (Left) */}
        <div className="flex flex-col items-start max-w-2xl z-10">
          {badgeText && (
            <div className="border !font-heading border-white/20 text-slate-200 bg-white/5 backdrop-blur-sm text-sm font-semibold px-4 py-1.5 rounded-full w-fit mb-6">
              {badgeText}
            </div>
          )}

          <h1 className="text-balance text-3xl sm:text-4xl lg:text-[48px] font-bold text-white mb-6 leading-[1.25] tracking-tight !font-heading">
            {title}
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-[90%]">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {primaryButtonText && (
              <Link
                href={primaryButtonLink}
                onClick={(e) => handleLinkClick(e, primaryButtonLink)}
                className="bg-[#0158e6] hover:bg-blue-600 text-white font-medium px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-[#0158e6]/20"
              >
                {primaryButtonText}
              </Link>
            )}
            {secondaryButtonText && (
              <Link
                href={secondaryButtonLink}
                onClick={(e) => handleLinkClick(e, secondaryButtonLink)}
                className="bg-transparent hover:bg-white/10 text-white font-medium px-8 py-3.5 rounded-full transition-colors border border-white/20"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full z-10 flex items-center justify-center">
          {rightContent ? (
            rightContent
          ) : imageSrc ? (
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-[32px] overflow-hidden shadow-2xl shadow-black/50">
              {/* Optional glowing effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay z-10 pointer-events-none rounded-[32px]"></div>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          ) : null}
        </div>

      </div>
    </section>
  );
};
