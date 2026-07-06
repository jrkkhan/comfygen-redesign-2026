import React from 'react';

export const ContactHero = () => {
  return (
    <section className="w-full pt-40 pb-32 px-4 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-blue-500/20 blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="max-w-[1000px] mx-auto relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-medium text-sm mb-6 border border-white/20 backdrop-blur-md">
          We'd love to hear from you
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight !font-heading">
          Get in touch with our <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">team of experts</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions. Let's build something great together.
        </p>
      </div>
      
      {/* Decorative Stats */}
      <div className="max-w-[1000px] mx-auto relative z-10 mt-16 pt-10 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
            <p className="text-slate-400 text-sm">Support Available</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-2">1hr</h3>
            <p className="text-slate-400 text-sm">Average Response Time</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-2">15+</h3>
            <p className="text-slate-400 text-sm">Global Locations</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-2">99%</h3>
            <p className="text-slate-400 text-sm">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};
