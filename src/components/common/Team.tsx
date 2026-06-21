'use client';

import React from 'react';

const teamMembers = [
  {
    name: 'Mr. Saddam Husen',
    role: 'Founder And CTO',
    // High-quality placeholder for Founder
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    isActive: true
  },
  {
    name: 'Girdhari Rajpurohit',
    role: 'SEO Manager',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Abhishek Nayar',
    role: 'General Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Sandha Agrawal',
    role: 'Human Resource Head',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  },
];

export const Team = () => {
  return (
    <section className="w-full py-20 lg:py-28 px-4 bg-[#fafcff]">
      <div className="max-w-[1400px] mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 mb-5 tracking-tight">
            Meet the team you'll work with
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Led By A Founding Team With 80+ Developers, Designers, And QA Engineers In-House.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              // Active state mimicking the blue outlined border in the design
              className={`flex flex-col items-center text-center p-8 sm:p-10 rounded-[20px] border transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer group bg-white
                ${member.isActive
                  ? 'border-primary/40 shadow-xl shadow-primary/5 ring-1 ring-primary/10'
                  : 'border-slate-100 hover:border-primary/30'
                }
              `}
            >
              {/* Profile Image Wrapper */}
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 relative">
                {/* Optional glow ring on hover */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-primary/20 transition-colors z-10"></div>

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Details */}
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors !font-heading">
                {member.name}
              </h3>
              <p className="text-slate-500 text-sm font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
