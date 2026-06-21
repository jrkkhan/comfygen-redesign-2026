'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  faqs?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: 'What Services Does Comfygen Technologies Offer?',
    answer: 'We offer a wide range of services including web development, mobile app development, UI/UX design, blockchain solutions, AI integration, and custom software development tailored to your business needs.'
  },
  {
    question: 'How Long Does A Project Take?',
    answer: 'The timeline varies depending on the complexity of the project. Generally, a standard web or mobile app takes 3-6 months from ideation to launch, while simpler projects can be completed faster.'
  },
  {
    question: 'Do You Sign NDAs?',
    answer: 'Comfygen Technologies Provides End-To-End Digital Solutions Including Mobile App Development, Web Development, AI Development, Blockchain Solutions, And Custom Software Development Tailored To Different Industries.'
  },
  {
    question: 'Who Owns The Code And IP?',
    answer: 'Once the project is completed and all payments are settled, you own 100% of the source code and Intellectual Property (IP).'
  },
  {
    question: 'What Engagement Models Do You Offer?',
    answer: 'We offer flexible engagement models including Fixed-Price, Time & Material, and Dedicated Team models to suit your specific project requirements and budget.'
  },
  {
    question: 'Do You Provide Post-Launch Support?',
    answer: 'Yes, we provide comprehensive post-launch support and maintenance packages to ensure your application runs smoothly, stays updated, and scales effectively.'
  },
];

export const FAQ = ({
  title = "Frequently Asked Questions",
  description = "We've Got Answers For You! Explore Our Most Common Inquiries To Learn More About Our Development Process, Our Extensive Expertise, And How We Effectively Help Businesses Scale With Tailored IT Solutions.",
  faqs = defaultFaqs
}: FAQProps) => {
  // Set index 2 as default open to match the design mockup
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 lg:py-28 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left Column (Sticky Content) */}
        <div className="flex flex-col items-start lg:sticky lg:top-32">
          {/* Badge */}
          <span className="border !font-heading border-slate-200 bg-[#FAFAFA] text-slate-800 text-sm font-semibold px-4 py-1.5 rounded-full w-fit mb-6 ">
            Good to know
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 mb-6 leading-[1.2] tracking-tight">
            {title}
          </h2>

          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8 pr-0 md:pr-10">
            {description}
          </p>

          <button className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-primary/20 mb-12 shrink-0">
            Still Have Question
          </button>

          {/* Illustration Placeholder (Replacing SVG with a relevant Unsplash image) */}
          <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 bg-[#f8fafc] border border-slate-100 hidden md:block">
            <Image
              src="/images/faq/faq-team-discussion.webp"
              alt="Team Discussion FAQ"
              width={800}
              height={533}
              className="w-full h-[280px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right Column (Accordion List) */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className={`border  cursor-pointer transition-all duration-300 overflow-hidden transform-gpu
                  ${isOpen
                    ? 'border-black bg-primary shadow-xl shadow-primary/20 scale-[1.01]'
                    : 'border-slate-200 bg-[#fafafa] hover:border-slate-200 hover:shadow-md hover:bg-white'
                  }`}
              >
                {/* FAQ Question Header */}
                <div className="flex justify-between items-center p-5 sm:p-6">
                  <h3 className={`text-base sm:text-lg font-bold pr-4 transition-colors ${isOpen ? 'text-white' : 'text-slate-800'}`}>
                    {faq.question}
                  </h3>

                  {/* Toggle Icon */}
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-white text-primary rotate-180' : 'bg-transparent border border-slate-200 text-slate-500'}`}>
                    {/* Using ChevronDown universally and rotating it when open for a smooth animation effect */}
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>

                {/* FAQ Answer Body */}
                <div
                  className={`px-5 sm:px-6 transition-all duration-300 ease-in-out grid ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className={`text-sm leading-relaxed ${isOpen ? 'text-blue-50/90' : 'text-slate-500'}`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
