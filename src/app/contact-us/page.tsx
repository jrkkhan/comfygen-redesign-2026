import React from 'react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { ContactHero } from './components/ContactHero';
import { ContactFormSection } from './components/ContactFormSection';



export const metadata = {
  title: "Contact Us | Comfygen",
  description: "Get in touch with our experts. We're here to help you transform your ideas into digital reality.",
};

export default function ContactUsPage() {
  return (
    <main className="relative min-h-screen font-sans flex flex-col bg-slate-50">
      {/* Dark Header */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header theme="dark" />
      </div>

      <ContactHero />

      <div className="-mt-20 relative z-20">
        <ContactFormSection />
      </div>

      <Footer />
    </main>
  );
}


