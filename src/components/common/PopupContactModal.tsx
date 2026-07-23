'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';

interface PopupContactModalProps {
  onDismiss: () => void;
}

export const PopupContactModal = ({ onDismiss }: PopupContactModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Trigger the fade/scale-in transition on the frame after mount.
  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsOpen(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  // Manage body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenContactPopup', 'true');
    // Allow animation to complete before unmounting
    setTimeout(onDismiss, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal Dialog Card */}
      <div
        className={`bg-white rounded-3xl w-full max-w-lg md:max-w-4xl shadow-2xl relative z-10 overflow-hidden border border-slate-100 transition-all duration-300 ease-out transform ${
          isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
        }`}
      >
        {/* Top Accent Gradient Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-primary via-[#5C9DFE] to-[#4ADE80]" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 border border-slate-100 shadow-sm transition-all z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12">

          {/* Left Column: Image Card */}
          <div className="relative hidden md:block md:col-span-5 w-full h-full min-h-[480px]">
            <Image
              src="/images/hero/team-collaborating.webp"
              alt="Global Presence"
              fill
              sizes="(max-width: 768px) 0px, 400px"
              className="object-cover"
              priority
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

            {/* Overlay Text */}
            <div className="absolute bottom-8 left-6 text-white z-10 pr-4">
              <h4 className="font-bold text-xl mb-1.5 !font-heading leading-tight">
                Global Presence
              </h4>
              <p className="text-white/80 text-xs font-medium leading-relaxed">
                Serving clients worldwide across 30+ countries
              </p>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="p-6 sm:p-8 pt-8 md:pt-8 max-h-[90vh] md:max-h-[85vh] overflow-y-auto custom-scrollbar flex flex-col md:col-span-7">
            {/* Header Info */}
            <div className="mb-6 pr-6">
              <h3 className="text-balance text-2xl font-bold text-slate-900 mb-2 !font-heading tracking-tight">
                Get in Touch
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Have a project or idea in mind? Share the details below and get a free consult & quote from our experts.
              </p>
            </div>

            {/* Form */}
            <ContactForm variant="modal" onSuccess={handleClose} />
          </div>

        </div>
      </div>
    </div>
  );
};
