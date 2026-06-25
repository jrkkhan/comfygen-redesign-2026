"use client";
import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionTwoProps {
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

export const HeroSectionTwo: React.FC<HeroSectionTwoProps> = ({
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
      className="relative w-full pt-32 pb-16 lg:pt-48 lg:pb-24 px-4 lg:px-8 overflow-hidden bg-white"
      style={{ backgroundImage: "radial-gradient(circle, rgba(102, 68, 227, 0.1) 0%, rgba(255, 255, 255, 0.2) 16%, rgba(255, 255, 255, 0.2) 81%, rgba(1, 88, 230, 0.1) 100%)" }}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-8">

        {/* Content (Left) */}
        <div className="flex flex-col items-start max-w-2xl z-10">
          {badgeText && (
            <div className="border !font-heading border-slate-200 text-slate-800 text-sm font-semibold px-4 py-1.5 rounded-full w-fit mb-6 ">
              {badgeText}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-slate-900 mb-6 leading-[1.25] tracking-tight">
            {title}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-[90%]">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {primaryButtonText && (
              <Link
                href={primaryButtonLink}
                onClick={(e) => handleLinkClick(e, primaryButtonLink)}
                className="bg-[#0158e6] hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-full transition-colors "
              >
                {primaryButtonText}
              </Link>
            )}
            {secondaryButtonText && (
              <Link
                href={secondaryButtonLink}
                onClick={(e) => handleLinkClick(e, secondaryButtonLink)}
                className="bg-white hover:bg-slate-50 text-slate-900 font-medium px-8 py-3.5 rounded-full transition-colors border border-slate-200 "
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
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-[32px] overflow-hidden">
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
