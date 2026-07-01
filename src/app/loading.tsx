import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] w-full h-screen flex flex-col items-center justify-center bg-background">
      {/* Minimalist, high-performance spinner */}
      <div className="relative w-12 h-12 mb-6">
        <div className="absolute inset-0 rounded-full border-2 border-white/10"></div>
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin"></div>
      </div>

      {/* Clean Brand Text */}
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold tracking-[0.25em] text-white uppercase">
          Comfy<span className="text-primary">gen</span>
        </h2>
        
        {/* Simple loading indicator */}
        <p className="mt-3 text-xs text-slate-500 tracking-widest uppercase flex items-center gap-1">
          Loading 
          <span className="flex items-center gap-0.5 ml-1 mt-1">
            <span className="w-1 h-1 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-1 h-1 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-1 h-1 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </span>
        </p>
      </div>
    </div>
  );
}
