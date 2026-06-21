"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData, portfolioCategories as categories } from '@/data/portfolioData';

const ITEMS_PER_PAGE = 8;

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = portfolioData.filter(
    project => activeTab === "All" || project.category === activeTab
  );

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="w-full py-20 lg:py-28 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">

        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.2] tracking-tight mb-4">
            Our Excellent Portfolio
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Driving growth and success through creative design and development. Showcasing our passion for design and creativity
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-3 mb-12 w-full snap-x pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveTab(category);
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-all whitespace-nowrap shrink-0 snap-start ${activeTab === category
                  ? 'bg-primary border-primary text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-primary/50 hover:text-primary'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className={`group bg-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40`}
            >
              {/* Image Container */}
              <Link href={`/portfolio/${project.id}`} className="w-full sm:w-[45%] lg:w-[50%] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 relative bg-slate-100 border border-slate-100 block">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </Link>

              {/* Content Container */}
              <div className="w-full sm:w-[55%] lg:w-[50%] flex flex-col justify-center py-4 pr-2 sm:pr-4">
                <Link href={`/portfolio/${project.id}`}>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 !font-heading hover:text-primary transition-colors">{project.title}</h3>
                </Link>
                <p className="text-slate-500 text-sm mb-6 line-clamp-3">
                  {project.desc}
                </p>
                <Link href={`/portfolio/${project.id}`} className="flex items-center text-primary font-semibold text-sm hover:text-primary/80 transition-colors w-fit">
                  Initiate Now <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary disabled:opacity-50 disabled:hover:border-slate-200 disabled:hover:text-slate-600 transition-all bg-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center text-sm font-semibold transition-all ${currentPage === i + 1
                    ? 'bg-primary border-primary text-white shadow-md'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-primary/50 hover:text-primary'
                  }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary disabled:opacity-50 disabled:hover:border-slate-200 disabled:hover:text-slate-600 transition-all bg-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
