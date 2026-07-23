'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import ReactMarkdown from 'react-markdown';

const defaultSteps = [
  { id: '01', title: 'Discovery and Planning', desc: 'We map your idea, users, and business goals, then turn features and integrations into a clear roadmap. Both sides agree on scope before development starts.', time: '1-2 weeks' },
  { id: '02', title: 'MVP Strategy', desc: 'We identify which features matter most for launch versus later phases, helping you get to market faster without compromising on what your users actually need.', time: '1-2 weeks' },
  { id: '03', title: 'UI/UX Design', desc: 'Wireframes and prototypes get built around how your real users actually move through the product, so the final result feels natural and easy to use.', time: '3-4 weeks' },
  { id: '04', title: 'Development', desc: 'Our team builds the core product and integrates the APIs, payment systems, and features your project needs. Code goes through review at every single stage.', time: '5-6 weeks' },
  { id: '05', title: 'QA and Testing', desc: 'We test every product under real conditions, not just simulators, catching bugs and performance issues before anything goes live in front of your real users.', time: '2-3 weeks' },
  { id: '06', title: 'Deployment', desc: 'We manage the full launch, including server setup, app store submissions, and any review or compliance requirements that apply to your specific project or platform.', time: '1-2 weeks' },
  { id: '07', title: 'Support and Maintenance', desc: 'After launch, we handle regular updates, bug fixes, and compatibility work as platforms, devices, and standards keep changing over time, so your product stays reliable.', time: 'Ongoing' },
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
  subtitle?: any;
  steps?: ProcessStep[];
  imageSrc?: string;
  label?: string;
}

import { DynamicHowToSchema } from './DynamicHowToSchema';

export const ProcessSteps = ({ title, pageName, subtitle, steps, imageSrc, label }: ProcessStepsProps) => {
  const displaySteps = steps && steps.length > 0 ? steps : defaultSteps;
  const [activeStep, setActiveStep] = useState(displaySteps[0]?.id || '01');

  const schemaTitle = title || `A simple 7-step process for ${pageName || "delivery development"}`;
  const schemaDesc = subtitle || "As A Trusted Mobile App And Web Development Company, We Follow A Structured And Agile Website And Application Development Process To Deliver Custom, Scalable, And High-Quality Digital Solutions.";

  return (
    <section className="w-full py-16 xl:py-20 2xl:py-28 px-4 bg-white">
      <DynamicHowToSchema steps={displaySteps} name={schemaTitle as string} description={schemaDesc} />
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-20 items-start">

        {/* Left Column (Sticky) */}
        <div className="flex flex-col lg:sticky lg:top-24 2xl:top-32">
          {/* Badge */}
          <span className="border !font-heading border-slate-200 bg-[#FAFAFA] text-slate-800 text-sm font-semibold px-4 py-1.5 rounded-full w-fit mb-4 2xl:mb-6 ">
            {label ? label : "How we work"}
          </span>

          <h2 className="text-balance text-3xl sm:text-4xl 2xl:text-[42px] font-bold text-slate-900 mb-4 2xl:mb-6 leading-[1.25] tracking-tight">
            {title ? title : <>A simple 7-step process for<br className="hidden lg:block" /> <span className="capitalize">{pageName || "delivery development"}</span></>}
          </h2>

          {subtitle ? (
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3 2xl:mb-4 pr-0 lg:pr-10 [&_p]:mb-2 [&_p:last-child]:mb-0 [&_a]:text-primary [&_a]:font-medium hover:[&_a]:text-primary/80 [&_a]:underline">
              {Array.isArray(subtitle) ? (
                <BlocksRenderer content={subtitle} />
              ) : typeof subtitle === 'string' && (subtitle.includes('\n') || subtitle.includes('[') || subtitle.includes('<')) ? (
                <ReactMarkdown>{subtitle}</ReactMarkdown>
              ) : (
                <p>{subtitle}</p>
              )}
            </div>
          ) : (
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3 2xl:mb-4 pr-0 lg:pr-10">
              Every project we take on runs through the same seven stages, from the first planning call to long-term support after launch.
            </p>
          )}
          {!subtitle && (
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 2xl:mb-10 pr-0 lg:pr-10">
              This process keeps the work predictable, so you always know what's happening and what comes next.
            </p>
          )}

          {/* Illustration Placeholder */}
          <div className="w-full h-[250px] sm:h-[300px] xl:h-[350px] 2xl:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 flex items-center justify-center relative">
            <Image
              src={imageSrc || "/images/process/custom-process.webp"}
              alt="Process illustration"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              unoptimized={!!imageSrc}
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
                    {step.time && (
                      <span className={`text-xs sm:text-sm px-4 py-1 rounded-full border transition-colors ${isActive ? 'border-white/30 text-white' : 'border-slate-300 text-slate-700 bg-white'}`}>
                        {step.time}
                      </span>
                    )}
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
