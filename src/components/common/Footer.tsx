'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Globe, ShieldCheck, MapPin } from 'lucide-react';
import { footerData } from '@/data/footerData';

import { ContactForm } from '@/components/forms/ContactForm';

const globalOffices = [
  {
    country: 'India',
    flag: '🇮🇳',
    phone: '+91 9587867258',
    location: 'A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar, Nirmohi Nagar, Jaipur, Rajasthan 302019'
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    phone: '+1 579-977-4475',
    location: '40 Tuxedo Ct, Toronto, ON M1G 3S7, Canada'
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    phone: '+49 1515 1402200',
    location: 'Rheiderstraße 34, 53881 Euskirchen, Germany'
  }
];

export const Footer = () => {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact-us';

  return (
    <footer className="w-full bg-[#0A0D27] pt-16 xl:pt-16 2xl:pt-20 border-t border-white/5 relative z-10">
      <div className="max-w-[1400px] mx-auto px-4">

        {/* Conditionally hide top contact section on Contact page */}
        {!isContactPage && (
          <>
            {/* Top Contact Form & Info Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-20 mb-16 2xl:mb-24">

              {/* Left Side: Contact Information */}
              <div className="flex flex-col justify-center">
                <h2 className="text-balance text-3xl sm:text-4xl 2xl:text-[44px] font-bold text-white mb-4 2xl:mb-5 leading-[1.1] tracking-tight">
                  Let's Turn Your Idea<br />Into a Reality
                </h2>
                <p className="text-slate-400 mb-8 2xl:mb-12 text-[15px] max-w-md leading-relaxed">
                  Share a few details about your project and we'll respond quickly with a clear plan forward

                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-8 md:gap-12">
                  <a href="tel:+919587867258" className="flex flex-col items-start group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-[#4ADE80]/15 flex items-center justify-center text-white mb-4 border border-white/5 shadow-inner group-hover:bg-[#4ADE80]/25 group-hover:scale-105 transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <p className="text-slate-400 text-[13px] mb-1 group-hover:text-slate-300 transition-colors">Phone Number</p>
                    <p className="text-white font-medium group-hover:text-[#4ADE80] transition-colors">+91 9587867258</p>
                  </a>
                  <a href="mailto:sales@comfygen.com" className="flex flex-col items-start group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-[#5C9DFE]/15 flex items-center justify-center text-white mb-4 border border-white/5 shadow-inner group-hover:bg-[#5C9DFE]/25 group-hover:scale-105 transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <p className="text-slate-400 text-[13px] mb-1 group-hover:text-slate-300 transition-colors">Email Address</p>
                    <p className="text-white font-medium group-hover:text-[#5C9DFE] transition-colors">sales@comfygen.com</p>
                  </a>
                  <a href="https://www.comfygen.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-start group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-[#FACC15]/15 flex items-center justify-center text-white mb-4 border border-white/5 shadow-inner group-hover:bg-[#FACC15]/25 group-hover:scale-105 transition-all">
                      <Globe className="w-5 h-5" />
                    </div>
                    <p className="text-slate-400 text-[13px] mb-1 group-hover:text-slate-300 transition-colors">Site Address</p>
                    <p className="text-white font-medium group-hover:text-[#FACC15] transition-colors">www.comfygen.com</p>
                  </a>
                </div>
              </div>

              {/* Right Side: Contact Form Card */}
              <div className="bg-white rounded-[32px] p-6 2xl:p-10 relative">

                <h3 className="text-balance text-2xl font-bold text-slate-900 mb-2 !font-heading">Send us a Message</h3>
                <p className="text-slate-500 mb-8 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
                <ContactForm variant="footer" />
              </div>
            </div>

            {/* Global Offices Section */}
            <div className="mb-10 2xl:mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {globalOffices.map((office, index) => (
                  <div key={index} className="border border-white/10 rounded-2xl px-6 p-5 2xl:px-8 2xl:p-6 group hover:bg-white/5 transition-colors">
                    <h4 className="text-balance text-base 2xl:text-lg font-bold text-white mb-3 2xl:mb-4 uppercase tracking-wide flex items-center gap-2 !font-heading">
                      <span className="text-[22px] leading-none mb-0.5">{office.flag}</span>
                      {office.country}
                    </h4>
                    <div className="flex flex-col gap-4">
                      <div>
                        <p className="text-slate-400 text-xs mb-1">Phone Number</p>
                        <a href={`tel:${office.phone.replace(/[\s-]/g, '')}`} className="text-white font-medium text-sm hover:text-primary transition-colors">{office.phone}</a>
                      </div>
                      <div>
                        <p className="text-slate-400 text-xs mb-1">Office Location</p>
                        <p className="text-white font-medium text-sm leading-relaxed">
                          {office.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Full Width Separator */}
      {!isContactPage && (
        <div className="w-full border-t border-white/5 mb-10 2xl:mb-16"></div>
      )}

      <div className="w-full max-w-[1400px] mx-auto px-4">
        {/* Footer Links & Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-10 2xl:mb-16">

          {/* Company Details */}
          <div className="lg:col-span-1 pr-4">
            <div className="flex flex-col cursor-pointer mb-6">
              <div className="w-[150px] sm:w-[180px]">
                <Image
                  src="/logos/comfygen-logo.svg"
                  alt="Comfygen Logo"
                  width={200}
                  height={50}
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Comfygen Technologies founded in 2019 with a vision to deliver reliable and scalable digital solutions, Comfygen Technologies provides comprehensive IT consulting, software development, Application Development and digital transformation services.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-8">
              <a href="https://x.com/Comfygen_Tech" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="https://www.facebook.com/comfygen.technologies" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://www.instagram.com/comfygen_technologies" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/comfygen-technologies" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
            {/* Certification Badges */}
            <div className="flex gap-2 2xl:gap-4 mt-2 p-2.5 2xl:p-4 rounded-xl 2xl:rounded-2xl border border-white/10 w-fit">
              <div className="relative w-12 h-10 2xl:w-16 2xl:h-14 transition-transform hover:-translate-y-1 duration-300">
                <Image src="/images/certifications/iso-9001.webp" alt="ISO 9001:2015 Certified" fill className="object-contain" unoptimized />
              </div>
              <div className="relative w-12 h-10 2xl:w-16 2xl:h-14 transition-transform hover:-translate-y-1 duration-300">
                <Image src="/images/certifications/iso-20000.webp" alt="ISO/IEC 20000-1:2018 Certified" fill className="object-contain" unoptimized />
              </div>
              <div className="relative w-12 h-10 2xl:w-16 2xl:h-14 transition-transform hover:-translate-y-1 duration-300">
                <Image src="/images/certifications/iso-27001.webp" alt="ISO 27001 Certified" fill className="object-contain" unoptimized />
              </div>
            </div>
          </div>

          {footerData.map((column, index) => (
            <div key={index} className="lg:pl-8 lg:border-l border-white/5 lg:col-span-1">
              <h4 className="text-balance text-white font-medium mb-4 2xl:mb-6 capitalize text-[15px]">{column.title}</h4>
              <ul className="flex flex-col gap-3 2xl:gap-3.5 max-h-[320px] 2xl:max-h-[340px] overflow-y-auto footer-scrollbar pr-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-slate-400 hover:text-white text-[13px] transition-colors leading-relaxed block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Copyright Section */}
        <hr className="border-white/5" />
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-[13px]">
            © 2026 Comfygen Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">About Us</a>
            <a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">Career</a>
            <a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">Our Blog</a>
            <a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">Disclaimer</a>
          </div>
          <p className="text-slate-400 text-[13px] text-center md:text-right">
            All Right Reserved <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors ml-1">Terms & Condition</a> | <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</a>
          </p>
        </div>

      </div>
    </footer>
  );
};
