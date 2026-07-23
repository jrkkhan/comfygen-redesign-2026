import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export interface SolutionAboutInfoProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: React.ReactNode;
  description?: string;
  paragraphs?: string[];
  bulletPoints?: string[];
  buttonText?: string;
  buttonLink?: string;
}

export const SolutionAboutInfo = ({
  imageSrc = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
  imageAlt = "Food Delivery About Image",
  title = "Transforming the Delivery Landscape with Intelligent App Solutions",
  description = "Our food delivery app solutions bridge the gap between customers and restaurants. We leverage cutting-edge technology to create seamless, scalable, and highly reliable applications that ensure a 5-star user experience, helping your business grow rapidly.",
  paragraphs,
  bulletPoints = [
    "100% Custom-built & White-label solutions",
    "High performance and scalable cloud architecture",
    "Intuitive User Interface (UI) for maximum engagement",
    "Complete ownership of source code",
    "End-to-end encryption & robust data security",
    "Seamless third-party API & payment integrations"
  ],
  buttonText = "Discuss Your Project",
  buttonLink = "/contact-us"
}: SolutionAboutInfoProps) => {
  return (
    <section className="w-full py-20 lg:py-24 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left: Image Container */}
        <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col">
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 mb-6 leading-[1.25] tracking-tight">
            {title}
          </h2>

          {paragraphs && paragraphs.length > 0 ? (
            paragraphs.map((text, idx) => (
              <p key={idx} className={`text-slate-600 text-base lg:text-lg leading-relaxed ${idx === paragraphs.length - 1 ? 'mb-8' : 'mb-4'}`}>
                {text}
              </p>
            ))
          ) : (
            <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-8 line-clamp-2">
              {description}
            </p>
          )}

          {bulletPoints && bulletPoints.length > 0 && (
            <div className="space-y-4 mb-10">
              {bulletPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#0158e6] shrink-0" />
                  <span className="text-slate-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
          )}

          {(buttonText || "Discuss Your Project") && (
            <Link
              href={buttonLink || "/contact-us"}
              className="bg-[#0158e6] hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg shadow-blue-500/30 w-fit"
            >
              {buttonText || "Discuss Your Project"}
            </Link>
          )}
        </div>

      </div>
    </section>
  );
};
