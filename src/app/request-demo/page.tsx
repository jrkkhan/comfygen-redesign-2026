import React from 'react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { ContactFormSection } from '@/app/contact-us/components/ContactFormSection';

export const metadata = {
  title: "Request Demo | Comfygen",
  description: "Request a demo of our digital solutions.",
};

export default function RequestDemoPage() {
  return (
    <main className="relative min-h-screen font-sans flex flex-col bg-slate-50">
      {/* Dark Header */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header theme="dark" />
      </div>

      <section className="w-full pt-40 pb-32 px-4 bg-slate-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-blue-500/20 blur-[100px] mix-blend-screen"></div>
        </div>

        <div className="max-w-[1000px] mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-medium text-sm mb-6 border border-white/20 backdrop-blur-md">
            Schedule a Walkthrough
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight !font-heading">
            Request a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Demo</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            See how our solutions can help you achieve your business goals. Fill out the form below and we'll get in touch with you shortly.
          </p>
        </div>
      </section>

      <div className="-mt-20 relative z-20">
        <ContactFormSection hideMap={true} />
      </div>

      <Footer />
    </main>
  );
}
