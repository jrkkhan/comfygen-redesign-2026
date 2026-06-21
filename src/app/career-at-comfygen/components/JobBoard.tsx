"use client";

import React, { useState } from 'react';
import { ArrowRight, MapPin, Briefcase, Clock } from 'lucide-react';
import { jobsData, departments } from '@/data/careersData';

export const JobBoard = () => {
  const [activeDepartment, setActiveDepartment] = useState("All");

  const filteredJobs = jobsData.filter(
    job => activeDepartment === "All" || job.department === activeDepartment
  );

  return (
    <section id="open-positions" className="w-full py-20 lg:py-28 px-4 bg-white">
      <div className="max-w-[1000px] mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.2] tracking-tight mb-6 !font-heading">
            Open Positions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find your next role at Comfygen. We're always looking for talented individuals to join our growing team.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => setActiveDepartment(dept)}
              className={`px-6 py-2.5 rounded-full border text-sm font-medium transition-all whitespace-nowrap ${
                activeDepartment === dept
                  ? 'bg-primary border-primary text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-primary/50 hover:text-primary'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div 
                key={job.id}
                className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col sm:flex-row gap-6 sm:items-center justify-between"
              >
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                    {job.department}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors !font-heading">
                    {job.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-slate-500 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {job.experience}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 line-clamp-2">
                    {job.description}
                  </p>
                </div>

                <div className="shrink-0 pt-4 sm:pt-0 sm:border-l border-slate-200 sm:pl-8 flex flex-col justify-center">
                  <a 
                    href={`mailto:careers@comfygen.com?subject=Application for ${job.title}`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 hover:bg-primary text-white rounded-xl font-medium transition-colors"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200 border-dashed">
              <h3 className="text-xl font-bold text-slate-900 mb-2">No positions open</h3>
              <p className="text-slate-500">There are currently no open positions in the {activeDepartment} department.</p>
              <button 
                onClick={() => setActiveDepartment("All")}
                className="mt-6 text-primary font-medium hover:underline"
              >
                View all departments
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
