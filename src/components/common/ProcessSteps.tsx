'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const defaultSteps = [
  { id: '01', title: 'Requirement Analysis', desc: 'We Map Goals, Scope, And Milestones Into A Clear Roadmap.', time: '1-2 weeks' },
  { id: '02', title: 'UI/UX Design & Design Phase', desc: 'We Create Wireframes And Prototypes To Visualize The Solutions.', time: '3-4 weeks' },
  { id: '03', title: 'Development', desc: 'We Build The Product Based On The Finalized Designs And Specifications.', time: '5-6 weeks' },
  { id: '04', title: 'QA & Testing', desc: 'We Conduct Thorough Testing To Ensure Functionality And Performance.', time: '7-8 weeks' },
  { id: '05', title: 'Deployment & Launch', desc: 'We Deploy The Product And Monitor Its Performance In The Real World.', time: '9-10 weeks' },
  { id: '06', title: 'Post-Launch Support', desc: 'We Provide Continuous Support And Maintenance For Your Product.', time: 'Ongoing' },
  { id: '07', title: 'Marketing & SEO', desc: 'We Help You Reach Your Target Audience And Grow Your Business.', time: 'Ongoing' },
];

export interface ProcessStep {
  id: string;
  title: string;
  desc: string;
  time?: string;
}

export interface ProcessStepsProps {
  title?: string;
  pageName?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

export const ProcessSteps = ({ title, pageName, subtitle, steps }: ProcessStepsProps) => {
  const displaySteps = steps && steps.length > 0 ? steps : defaultSteps;
  const [activeStep, setActiveStep] = useState(displaySteps[0]?.id || '01');

  return (
    <section className="w-full py-16 xl:py-20 2xl:py-28 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-20 items-start">

        {/* Left Column (Sticky) */}
        <div className="flex flex-col lg:sticky lg:top-24 2xl:top-32">
          {/* Badge */}
          <span className="border !font-heading border-slate-200 bg-[#FAFAFA] text-slate-800 text-sm font-semibold px-4 py-1.5 rounded-full w-fit mb-4 2xl:mb-6 ">
            How we work
          </span>

          <h2 className="text-balance text-3xl sm:text-4xl 2xl:text-[42px] font-bold text-slate-900 mb-4 2xl:mb-6 leading-[1.25] tracking-tight">
            {title ? title : <>A simple 7-step process for<br className="hidden lg:block" /> <span className="capitalize">{pageName || "delivery development"}</span></>}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3 2xl:mb-4 pr-0 lg:pr-10">
            {subtitle ? subtitle : "As A Trusted Mobile App And Web Development Company, We Follow A Structured And Agile Website And Application Development Process To Deliver Custom, Scalable, And High-Quality Digital Solutions."}
          </p>
          {!subtitle && (
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 2xl:mb-10 pr-0 lg:pr-10">
              You Always Know What Stage Your Project Is In And What Comes Next.
            </p>
          )}

          {/* Illustration Placeholder */}
          <div className="w-full h-[250px] sm:h-[300px] xl:h-[350px] 2xl:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 flex items-center justify-center">
            <Image
              src="/images/process/custom-process.webp"
              alt="Team discussing project requirements on screen"
              width={1024}
              height={683}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column (Scrollable Steps list) */}
        <div className="flex flex-col gap-4 relative">

          {/* List Container with Custom Scrollbar */}
          <div 
            className="flex flex-col gap-4 max-h-[500px] lg:max-h-[600px] 2xl:max-h-[850px] overflow-y-auto pr-2 sm:pr-6 pb-6 2xl:pb-10 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-300 transition-all"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black 3%, black 97%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 3%, black 97%, transparent)'
            }}
          >
            {displaySteps.map((step) => {
              const isActive = activeStep === step.id;

              return (
                <div
                  key={step.id}
                  onMouseEnter={() => setActiveStep(step.id)}
                  className={`cursor-pointer border transition-all duration-300 p-5 xl:p-6 2xl:p-8 flex flex-col relative group
                    ${isActive
                      ? 'bg-primary border-primary text-white   scale-[1.02] z-10'
                      : 'bg-[#fafafa] border-slate-200 text-slate-900 hover:bg-slate-100 hover:border-slate-200'
                    }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-xl sm:text-2xl font-bold transition-colors ${isActive ? 'text-white' : 'text-primary'}`}>
                      {step.id}
                    </span>
                    <span className={`text-xs sm:text-sm px-4 py-1 rounded-full border transition-colors ${isActive ? 'border-white/30 text-white' : 'border-slate-300 text-slate-700 bg-white'}`}>
                      {step.time}
                    </span>
                  </div>
                  <h3 className={`text-balance text-lg sm:text-xl font-bold mb-3 transition-colors ${isActive ? 'text-white' : 'text-slate-900'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-colors ${isActive ? 'text-white/90' : 'text-slate-500'}`}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
