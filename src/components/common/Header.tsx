"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, Headphones, Menu } from 'lucide-react';
import { MegaMenu } from './MegaMenu';

export const Header = ({ theme = 'dark' }: { theme?: 'light' | 'dark' }) => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full pt-8 px-4 md:px-8 relative z-50">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between pb-8 relative">
          {/* Logo Section */}
          <Link href="/" className="flex flex-col cursor-pointer">
            <Image
              src={theme === 'light' ? "/logos/comfygen-logo-colorfull.svg" : "/logos/comfygen-logo.svg"}
              alt="Comfygen Logo"
              width={240}
              height={60}
              className="w-[180px] sm:w-[240px] h-auto"
              priority
            />
          </Link>

          {/* Center Contact Info (Pill) */}
          <div className={`hidden lg:flex items-center space-x-6 rounded-full px-8 py-3 backdrop-blur-sm bg-transparent ${theme === 'light' ? 'border border-slate-300' : 'border border-white/10'}`}>
            <a href="mailto:sales@comfygen.com" className={`flex items-center text-base transition-colors ${theme === 'light' ? 'text-slate-700 hover:text-primary' : 'text-slate-200 hover:text-white'}`}>
              <Mail className="w-4 h-4 mr-2" />
              sales@comfygen.com
            </a>
            <a href="tel:+919587867258" className={`flex items-center text-base transition-colors ${theme === 'light' ? 'text-slate-700 hover:text-primary' : 'text-slate-200 hover:text-white'}`}>
              <Phone className="w-4 h-4 mr-2" />
              +91 9587867258
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {theme === 'light' ? (
              <button className="relative hidden sm:inline-flex h-[46px] overflow-hidden rounded-full p-[2px] focus:outline-none transition-transform hover:scale-[1.02]">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#0158E6_50%,transparent_100%)]" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 backdrop-blur-3xl">
                  <Headphones className="w-4 h-4 mr-2 text-[#0158E6]" />
                  Get a Quote
                </span>
              </button>
            ) : (
              <button className="relative hidden sm:inline-flex h-[46px] overflow-hidden rounded-full p-[2px] focus:outline-none transition-transform hover:scale-[1.02] ">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#0158E6_50%,transparent_100%)]" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-[#080F1E] px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
                  <Headphones className="w-4 h-4 mr-2 text-white" />
                  Get a Quote
                </span>
              </button>
            )}
            <button
              onClick={() => setIsMegaMenuOpen(true)}
              aria-label="Open Menu"
              className="bg-primary hover:bg-primary/90 text-white p-2.5 sm:p-3 rounded-full transition-all shadow-lg shadow-primary/20"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
          
          {/* Light Theme Divider Line */}
          {theme === 'light' && (
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300/80 to-transparent" />
          )}
        </div>
      </header>

      {/* Full Screen Mega Menu Overlay */}
      <MegaMenu
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
      />
    </>
  );
};
