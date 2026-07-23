import React from 'react';
import { ArrowRight, Users, Sparkles, CheckCircle, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const milestones = [
  {
    number: "400+",
    title: "Happy Clients",
    description: "Trusted by businesses worldwide for delivering reliable, scalable, and innovative software and app development solutions with a client-first approach.",
    icon: <Users className="w-8 h-8 text-[#0158E6]" />,
    gradient: "from-blue-600 to-[#0158E6]"
  },
  {
    number: "Since 2019",
    title: "Driving Digital Innovation",
    description: "Helping startups and enterprises build custom software, mobile apps, and digital solutions that accelerate business growth.",
    icon: <Sparkles className="w-8 h-8 text-[#0158E6]" />,
    gradient: "from-[#0158E6] to-indigo-600"
  },
  {
    number: "550+",
    title: "Projects Delivered",
    description: "Successfully delivering high-quality web, mobile, AI, and blockchain solutions with a focus on performance and scalability.",
    icon: <CheckCircle className="w-8 h-8 text-[#0158E6]" />,
    gradient: "from-indigo-600 to-blue-600"
  },
  {
    number: "30+",
    title: "Countries Served",
    description: "Delivering custom software, mobile app, AI, and web development solutions to businesses across 30+ countries with quality, innovation, and reliability.",
    icon: < Globe className="w-8 h-8 text-[#0158E6]" />,
    gradient: "from-blue-600 to-[#0158E6]"
  }
];

export const Milestones = () => {
  return (
    <section className="py-12 lg:py-20 px-4 bg-[#fff] font-sans relative overflow-hidden flex flex-col justify-center min-h-[90vh]">



      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <div className="inline-block border border-blue-200 bg-blue-50 text-[#0158E6] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-3">
            Our Achievements
          </div>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 leading-[1.2] tracking-tight font-heading">
            Comfygen Technologies Milestones
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {milestones.map((item, index) => (
            <React.Fragment key={index}>
              {/* Image Card injected at the 1st position (index 0) */}
              {index === 0 && (
                <div className="relative rounded-[1.5rem] overflow-hidden group lg:row-span-2 min-h-[350px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-12px_rgba(1,88,230,0.2)] transition-all duration-500 hover:-translate-y-2">
                  <Image
                    src="/images/hero/team-collaborating.webp"
                    alt="Global Team"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0158E6]/95 via-[#0158E6]/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-6 lg:p-8 w-full">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-5 border border-white/20">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-balance text-white text-2xl lg:text-[28px] font-bold mb-3 leading-tight">
                      Global <br /> Collaboration
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
                      Our expert teams work seamlessly across borders to deliver state-of-the-art digital solutions and dedicated support worldwide.
                    </p>
                  </div>
                </div>
              )}

              {/* Milestone Card */}
              <div
                className="group relative bg-white border border-slate-200 rounded-[1.5rem] p-6 lg:p-8  cursor-pointer transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col justify-between"
              >
                {/* Card Hover Glow effect */}
                <div className="absolute -inset-px rounded-[1.5rem] bg-gradient-to-b from-[#0158E6] to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Top: Icon & Number */}
                  <div className="flex flex-row items-center justify-between mb-5 gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-500">
                      {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-6 h-6 text-[#0158E6]" })}
                    </div>
                    <h3 className={`text-balance text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br ${item.gradient} tracking-tighter leading-none opacity-90 group-hover:scale-105 origin-bottom-right transition-transform duration-500`}>
                      {item.number}
                    </h3>
                  </div>

                  {/* Bottom: Text Content */}
                  <div>
                    <h4 className="text-balance text-xl lg:text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#0158E6] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Action Link */}
                <div className="relative z-10 pt-4 border-t border-slate-100 group-hover:border-blue-100 transition-colors duration-300">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center text-[#0158E6] font-semibold text-[14px] group/btn"
                  >
                    <span className="relative">
                      View Portfolio
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0158E6] transition-all duration-300 group-hover/btn:w-full" />
                    </span>
                  </Link>
                </div>

              </div>
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};
