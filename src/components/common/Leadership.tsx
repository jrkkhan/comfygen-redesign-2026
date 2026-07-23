import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Quote } from 'lucide-react';

const authorsData = {
  saddam: {
    name: "Mr. Saddam Husen",
    designation: "Founder & CTO, Comfygen Technologies",
    description: "Mr. Saddam Husen is the Founder & CTO of Comfygen Technologies, specializing in custom software, mobile app, blockchain, and AI solutions. He helps startups and enterprises build secure, scalable, and business-focused digital products.",
    linkedin: "https://www.linkedin.com/in/saddamhusen/",
    image: "/images/about/saddam-husen.jpg",
    badge: "Tech Visionary",
    badgeDesc: "15+ Years Exp."
  },
  abhishek: {
    name: "Mr. Abhishek Singh",
    designation: "Project Manager, Comfygen Technologies",
    description: "Mr. Abhishek Singh is a Project Manager at Comfygen Technologies specializing in on-demand app development. With 2+ years of experience, he has delivered 20+ on-demand solutions for clients across 7 countries, covering grocery delivery, service booking, and logistics platforms. His background in Python development gives him a clear technical understanding of how on-demand systems are built and scaled. He works closely with startups and enterprises to scope, plan, and deliver on-demand projects on time.",
    linkedin: "https://linkedin.com/in/abhishek-singh-44b2ab11b/",
    image: "/images/about/abhishek-singh.webp",
    badge: "Project Manager",
    badgeDesc: "2+ Years Exp."
  }
};

interface LeadershipProps {
  authorKey?: string;
  badgeText?: string;
}

export const Leadership = ({ authorKey, badgeText = "Our Author" }: LeadershipProps) => {
  // If no authorKey is provided, or an invalid one is provided, do not render the component
  const authorData = authorsData[authorKey as keyof typeof authorsData];

  if (!authorData) {
    return null;
  }

  return (
    <section className="py-16 lg:py-20 px-4 bg-[#fff] font-sans relative overflow-hidden">
      {/* Decorative background grid for the section */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0158E6 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Main Premium Card */}
        <div className="bg-[#0A0D27] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center   relative overflow-hidden border border-white/[0.05] group/card">

          {/* Glowing Background Orbs */}
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#0158E6]/20 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 group-hover/card:translate-x-10" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 group-hover/card:-translate-x-10" />

          {/* Left Content (Text) */}
          <div className="flex-1 relative z-10 flex flex-col items-start w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium tracking-wide mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00D0C5] animate-pulse" />
              {badgeText}
            </div>

            <h2 className="text-balance text-4xl sm:text-5xl   font-bold mb-4 leading-tight font-heading text-white tracking-tight">
              {authorData.name}
            </h2>
            <div className="inline-block mb-10">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-[#00D0C5] text-lg lg:text-xl font-semibold tracking-wide">
                {authorData.designation}
              </p>
            </div>

            <div className="relative mb-12">
              <Quote className="absolute -top-6 -left-4 w-12 h-12 text-white/5 rotate-180" />
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed relative z-10 pl-5 border-l-2 border-[#0158E6]/50">
                {authorData.description}
              </p>
            </div>

            <Link
              href={authorData.linkedin}
              target="_blank"
              className="inline-flex items-center gap-3 bg-[#0158E6] hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 group shadow-[0_0_20px_rgba(1,88,230,0.3)] hover:shadow-[0_0_30px_rgba(1,88,230,0.5)] hover:-translate-y-1"
            >
              <span>Connect on LinkedIn</span>
              <div className="bg-white/20 p-1.5 rounded-full transition-colors duration-300 group-hover:bg-white group-hover:text-[#0158E6]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Right Content (Image) */}
          <div className="w-full lg:w-[440px] shrink-0 relative z-10 mt-8 lg:mt-0">
            {/* Decorative Elements around Image */}
            <div className="hidden sm:block absolute -inset-4 border border-white/10 rounded-[2.5rem] -rotate-3 transition-transform duration-700 group-hover/card:rotate-0" />
            <div className="hidden sm:block absolute -inset-4 border border-[#0158E6]/40 rounded-[2.5rem] rotate-3 transition-transform duration-700 group-hover/card:rotate-0" />

            {/* Main Image Container */}
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] group cursor-pointer border border-white/10">
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D27]/90 via-transparent to-transparent z-10" />

              <Image
                src={authorData.image}
                alt={authorData.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 object-top"
              />

              {/* Floating Tech Badge on Hover */}
              <div className="absolute bottom-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0158E6] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{authorData.badge}</p>
                    <p className="text-slate-300 text-xs">{authorData.badgeDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
