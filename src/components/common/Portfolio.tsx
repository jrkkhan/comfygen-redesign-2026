import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const portfolioProjects = [
  {
    id: 1,
    title: "Urban Ride-Hailing",
    desc: "Challenge: A Startup Wanted To Enter The Competitive Ride-Hailing Market With A Unique Offering. We Developed An Uber-Like Taxi Ap...",
    image: "/images/portfolio/ride-app.webp",
  },
  {
    id: 2,
    title: "Fitclub Mobile App",
    desc: "Welcome To FitClub, Where Your Fitness Journey Meets Innovation. Seamlessly Sculpt Your Well-Being With Our All-In-One Mobile Ap...",
    image: "/images/portfolio/fitness-app.webp",
  }
];

export const Portfolio = () => {
  return (
    <section className="w-full py-20 lg:py-28 px-4 bg-[#f8fafc]">
      <div className="max-w-[1400px] mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.2] tracking-tight max-w-2xl">
            Explore Our Mobile App<br className="hidden md:block" /> & Web Development Portfolio
          </h2>
          <button className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-primary/20 shrink-0">
            View More Projects
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {portfolioProjects.map((project, idx) => (
            <div
              key={project.id}
              // Making the first card have the active border by default to match the static image, 
              // but both get it on hover.
              className={`group bg-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40  `}
            >
              {/* Image Container */}
              <div className="w-full sm:w-[45%] lg:w-[50%] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 relative bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content Container */}
              <div className="w-full sm:w-[55%] lg:w-[50%] flex flex-col justify-center py-4 pr-2 sm:pr-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 !font-heading">{project.title}</h3>
                <p className="text-slate-500 text-sm  mb-6">
                  {project.desc}
                </p>
                <a href="/" className="flex items-center text-primary font-semibold text-sm hover:text-primary/80 transition-colors w-fit">
                  Explorer <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
