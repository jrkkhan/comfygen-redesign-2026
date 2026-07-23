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
    question: 'When was Comfygen Technologies founded?',
    answer: 'Comfygen Technologies was founded in 2019 with a vision to provide reliable software development and digital transformation solutions for businesses worldwide.'
  },
  {
    question: 'What services does Comfygen Technologies provide?',
    answer: 'We offer custom software development, mobile app development, web development, AI solutions, blockchain development, and IT consulting services.'
  },
  {
    question: 'Why should businesses choose Comfygen Technologies?',
    answer: 'Businesses choose us for our experienced team, transparent process, scalable solutions, timely delivery, and commitment to quality.'
  },
  {
    question: 'What industries does Comfygen Technologies serve?',
    answer: 'We work with businesses across industries including healthcare, fintech, eCommerce, logistics, real estate, education, transportation, and more.'
  },
  {
    question: 'Does Comfygen Technologies work with startups and enterprises?',
    answer: 'Yes, we help startups, small businesses, and enterprises build digital products tailored to their goals, budget, and growth requirements.'
  },
  {
    question: 'Where does Comfygen Technologies provide services?',
    answer: 'We serve clients globally across 30+ countries, helping businesses develop innovative digital solutions remotely.'
  },
  {
    question: 'What makes Comfygen Technologies different from other development companies?',
    answer: 'We focus on customized solutions, clear communication, modern technology, and long-term partnerships to deliver measurable business value.'
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
    <section className="w-full py-16 xl:py-16 2xl:py-28 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-20 items-start">

        {/* Left Column (Sticky Content) */}
        <div className="flex flex-col items-start lg:sticky lg:top-32">
          {/* Badge */}
          <span className="border !font-heading border-slate-200 bg-[#FAFAFA] text-slate-800 text-sm font-semibold px-4 py-1.5 rounded-full w-fit mb-4 2xl:mb-6 ">
            Good to know
          </span>

          <h2 className="text-balance text-3xl sm:text-4xl 2xl:text-[44px] font-bold text-slate-900 mb-4 2xl:mb-6 leading-[1.2] tracking-tight">
            {title}
          </h2>

          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6 2xl:mb-8 pr-0 md:pr-10">
            {description}
          </p>

          <a 
            href="https://wa.me/919587867258" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-primary/20 mb-8 2xl:mb-12 shrink-0 inline-block text-center"
          >
            Still Have Question
          </a>

          {/* Illustration Placeholder (Replacing SVG with a relevant Unsplash image) */}
          <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 bg-[#f8fafc] border border-slate-100 hidden md:block">
            <Image
              src="/images/faq/faq-team-discussion.webp"
              alt="Team Discussion FAQ"
              width={800}
              height={533}
              className="w-full h-[220px] 2xl:h-[280px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right Column (Accordion List) */}
        <div className="flex flex-col gap-2 sm:gap-3 2xl:gap-4">
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
                <div className="flex justify-between items-center p-4 xl:p-5 2xl:p-6">
                  <h3 className={`text-balance text-base sm:text-lg font-bold pr-4 transition-colors ${isOpen ? 'text-white' : 'text-slate-800'}`}>
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
                  className={`px-4 xl:px-5 2xl:px-6 transition-all duration-300 ease-in-out grid ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-4 xl:pb-5 2xl:pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'}`}
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
