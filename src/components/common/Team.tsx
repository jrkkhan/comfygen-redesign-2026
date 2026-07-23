'use client';

import React from 'react';
import Image from 'next/image';
const Linkedin = ({ className, strokeWidth }: { className?: string, strokeWidth?: number | string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth || 2} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const teamMembers = [
  {
    name: 'Saddam Husen',
    role: 'Founder And CTO',
    image: '/images/team/saddam-husen-v2.webp',
    isActive: true,
    linkedin: 'https://www.linkedin.com/in/saddam-husen/'
  },
  {
    name: 'Girdhari Rajpurohit',
    role: 'SEO Manager',
    image: '/images/team/girdhari-rajpurohit-v2.webp',
    linkedin: 'https://www.linkedin.com/in/thegirdharisingh/'
  },
  {
    name: 'Abhishek Singh',
    role: 'Project Manager',
    image: '/images/team/abhishek-singh-v2.webp',
    linkedin: 'https://www.linkedin.com/in/abhishek-ssingh/'
  },
  {
    name: 'Sandhya Agrawal',
    role: 'Sales Head',
    image: '/images/team/sandhya-agrawal-v2.webp',
    linkedin: 'https://www.linkedin.com/in/sandhya-agarwal-a3a089189/'
  },
];

export const Team = () => {
  return (
    <section className="w-full py-16 xl:py-16 2xl:py-28 px-4 bg-[#fafcff]">
      <div className="max-w-[1400px] mx-auto">

        {/* Header Section */}
        <div className="text-center mb-10 2xl:mb-16">
          <h2 className="text-balance text-3xl sm:text-4xl 2xl:text-[42px] font-bold text-slate-900 mb-3 2xl:mb-5 tracking-tight">
            Meet the People Behind Your Project
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The core team at Comfygen brings together designers, developers, and blockchain engineers who build every solution we deliver.

          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-6">
          {teamMembers.map((member, idx) => {
            const CardWrapper = member.linkedin ? 'a' : 'div';
            return (
              <CardWrapper
                key={idx}
                {...(member.linkedin ? {
                  href: member.linkedin,
                  target: "_blank",
                  rel: "noopener noreferrer"
                } : {})}
                // Active state mimicking the blue outlined border in the design
                className={`flex flex-col items-center text-center p-6 2xl:p-10 rounded-[20px] border transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer group bg-white
                  ${member.isActive
                    ? 'border-primary/40 shadow-xl shadow-primary/5 ring-1 ring-primary/10'
                    : 'border-slate-100 hover:border-primary/30'
                  }
                `}
              >
                {/* Profile Image Wrapper */}
                <div className="w-28 h-28 md:w-32 md:h-32 2xl:w-40 2xl:h-40 rounded-full overflow-hidden mb-4 2xl:mb-6 relative">
                  {/* Optional glow ring on hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-primary/20 transition-colors z-10"></div>

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 112px, 160px"
                    className="object-cover rounded-full group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Details */}
                <div className="flex items-center justify-center gap-2 mb-1 2xl:mb-2">
                  <h3 className="text-balance text-base 2xl:text-xl font-bold text-slate-900 group-hover:text-primary transition-colors !font-heading">
                    {member.name}
                  </h3>
                  {member.linkedin && (
                    <div className="flex items-center justify-center w-6 h-6 2xl:w-7 2xl:h-7 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                      <Linkedin className="w-3 h-3 2xl:w-3.5 2xl:h-3.5" strokeWidth={2.5} />
                    </div>
                  )}
                </div>
                <p className="text-slate-500 text-xs 2xl:text-sm font-medium mb-3 2xl:mb-4">
                  {member.role}
                </p>
              </CardWrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
};
