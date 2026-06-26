'use client';

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">
      
      {/* Telegram Button */}
      <a
        href="https://t.me/COMFYGENTECH"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 bg-[#006294] text-white p-3.5 rounded-full shadow-lg hover:bg-[#004d73] hover:scale-105 hover:-translate-y-1 transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-50 pointer-events-none'}`}
        aria-label="Contact on Telegram"
      >
        <span className="text-sm font-medium pr-1 pl-2 hidden sm:block whitespace-nowrap">Telegram</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.89 8.23l-2.02 9.53c-.15.68-.56.85-1.12.53l-3.1-2.28-1.5 1.44c-.16.16-.3.3-.61.3l.23-3.16 5.74-5.18c.25-.22-.05-.35-.38-.13l-7.09 4.46-3.07-.96c-.66-.21-.68-.66.14-.98l12-4.63c.55-.21 1.04.13.88 1.06z"/>
        </svg>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919587867258"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 bg-[#117C3D] text-white p-3.5 rounded-full shadow-lg hover:bg-[#0c592a] hover:scale-105 hover:-translate-y-1 transition-all duration-300 delay-75 ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-50 pointer-events-none'}`}
        aria-label="Contact on WhatsApp"
      >
        <span className="text-sm font-medium pr-1 pl-2 hidden sm:block whitespace-nowrap">WhatsApp</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.027 6.988 2.895a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.888-9.885 9.888m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      </a>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-105 z-10 ${isOpen ? 'bg-slate-800 rotate-90' : 'bg-primary hover:bg-primary/90'}`}
        aria-label="Toggle contact options"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

    </div>
  );
};
