'use client';

import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export interface ReasonItem {
  id: string;
  title: string;
  desc: string;
}

export interface WhyChooseUsProps {
  title?: React.ReactNode;
  reasons?: ReasonItem[];
}

const defaultReasons: ReasonItem[] = [
  { id: '01', title: 'Expertise In Modern Technologies', desc: 'Our Developers Are Focused To Bring Optimum Outcomes Through Our Competitive Web And App Development Services. We Create Innovative IT Solutions That Stand Out Of The Crowd.' },
  { id: '02', title: 'Focus On Security & Reliability', desc: 'Every Project Is Built With Robust Architecture And Advanced Security Measures To Ensure Your Data And Users Are Protected.' },
  { id: '03', title: 'Scalable & Future-Ready Solutions', desc: 'Our Applications Are Designed To Grow With Your Business, Handling Increasing Users And Complex Functionality Effortlessly.' },
  { id: '04', title: 'User-Centric Approach', desc: 'We Prioritize Intuitive Design And Smooth User Experiences To Maximize Engagement And Satisfaction.' },
  { id: '05', title: 'Proven Track Record', desc: 'With A Portfolio Of Successful Projects Across Industries, We Consistently Deliver Solutions That Meet Business Objectives.' },
  { id: '06', title: 'Dedicated Support & Maintenance', desc: 'We Provide Round-The-Clock Support And Continuous Maintenance To Ensure Your Application Runs Smoothly And Stays Up-To-Date Long After Launch.' },
];

export const WhyChooseUs = ({
  title = <><span className="text-primary !font-heading">Why Choose Us</span> For Mobile<br className="hidden md:block" /> App & Web Development Project?</>,
  reasons = defaultReasons
}: WhyChooseUsProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-16 lg:py-20 relative overflow-hidden bg-white grid grid-cols-[1fr_min(1400px,100%)_1fr]">
      {/* Subtle Background Glow mimicking the design specifically behind the title */}
      <div className="col-span-full absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary/20 blur-[80px] pointer-events-none rounded-full"></div>

      {/* Header Section Container */}
      <div className="col-start-2 w-full px-4 mb-12 lg:mb-16 z-10 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.25] tracking-tight max-w-3xl">
            {title}
          </h2>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-colors bg-white shadow-sm"
              aria-label="Scroll Left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              aria-label="Scroll Right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Contained Scrollable Cards Container */}
      <div className="col-start-2 w-full px-4 z-10 relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 gap-6"
        >
          {/* Cards */}
          {reasons.map((item) => (
            <div
              key={item.id}
              className="min-w-[100%] sm:min-w-[calc(50%-12px)] md:min-w-[calc(33.33%-16px)] lg:min-w-[calc(25%-18px)] bg-[#FAFAFA] border border-slate-200 p-8 sm:p-10 flex flex-col snap-start hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <span className="text-primary text-xl sm:text-2xl font-bold mb-6 block">{item.id}</span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
