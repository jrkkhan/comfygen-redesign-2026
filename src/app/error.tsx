'use client'

import React, { useEffect } from 'react';
import { AlertOctagon, RotateCcw } from 'lucide-react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#02040a] flex flex-col font-sans text-white">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center z-10 relative mt-20">
        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
          <AlertOctagon className="w-10 h-10 text-red-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Something went wrong</h1>
        <p className="text-slate-400 max-w-lg mb-8 text-lg">
          We encountered an unexpected error while processing your request. Our team has been notified.
        </p>
        <button
          onClick={() => reset()}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-primary/20"
        >
          <RotateCcw className="w-5 h-5" />
          Try Again
        </button>
      </div>
      <Footer />
    </div>
  );
}
