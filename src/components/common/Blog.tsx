'use client';

import React from 'react';

const blogs = [
  {
    id: 1,
    title: "Cost To Develop Social Dating App Like Coffee Meets Bagel",
    date: "24 December 2024",
    // Placeholder using a modern tech/app UI image
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    isActive: true,
  },
  {
    id: 2,
    title: "How Much It Costs To Develop An App Like Bumble?",
    date: "24 December 2024",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "AI-Powered Dating App Development Cost & Features In 2026",
    date: "24 December 2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "How To Hire An Adult App Development Company?",
    date: "24 December 2024",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
  }
];

export const Blog = () => {
  return (
    <section className="w-full py-16 xl:py-16 2xl:py-28 px-4 bg-[#fafcff]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10 2xl:mb-16">
          <h2 className="text-balance text-3xl sm:text-4xl 2xl:text-[42px] font-bold text-slate-900 mb-3 2xl:mb-5 tracking-tight">
            Latest From Our Blog
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Deep Dives Into IT Solutions And The Future Of Digital Business.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 2xl:gap-8 mb-10 2xl:mb-14">
          {blogs.map(blog => (
            <div 
              key={blog.id} 
              // Card styles with active/hover states
              className={`group flex flex-col sm:flex-row bg-white rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 cursor-pointer 
                ${blog.isActive ? 'border-primary/40 shadow-xl shadow-primary/5 ring-1 ring-primary/10' : 'border-slate-100 hover:border-primary/30'}`}
            >
              {/* Text Content (Left side on Desktop) */}
              <div className="flex flex-col justify-center p-6 lg:p-6 2xl:p-10 w-full sm:w-1/2 order-2 sm:order-1">
                <h3 
                  className={`text-lg sm:text-xl 2xl:text-2xl font-bold mb-3 sm:mb-4 2xl:mb-6 transition-colors leading-snug tracking-tight
                    ${blog.isActive ? 'text-primary' : 'text-slate-900 group-hover:text-primary'}`}
                >
                  {blog.title}
                </h3>
                <p className="text-slate-500 text-[13px] sm:text-sm font-medium mt-auto">
                  {blog.date}
                </p>
              </div>

              {/* Image (Right side on Desktop) */}
              <div className="w-full sm:w-1/2 aspect-video overflow-hidden shrink-0 order-1 sm:order-2 relative bg-slate-100">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <button className="bg-primary hover:bg-primary/90 text-white font-medium px-10 py-3.5 rounded-full transition-colors shadow-[0_0_20px_rgba(1,88,230,0.3)] hover:shadow-[0_0_25px_rgba(1,88,230,0.5)] transform hover:-translate-y-0.5">
            View More
          </button>
        </div>

      </div>
    </section>
  );
};
