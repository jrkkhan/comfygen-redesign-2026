import React from 'react';
import Link from 'next/link';
import { FileQuestion, ArrowRight } from 'lucide-react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#02040a] flex flex-col font-sans text-white">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center z-10 relative mt-20">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 border border-primary/20">
          <FileQuestion className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">404 - Page Not Found</h1>
        <p className="text-slate-400 max-w-lg mb-8 text-lg">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-primary/20"
        >
          Return to Homepage
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
