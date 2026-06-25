"use client";

import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

import { ContactForm } from '@/components/forms/ContactForm';

const globalOffices = [
  {
    country: 'India',
    flagCode: 'in',
    phone: '+91 9587867258',
    location: 'A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar, Nirmohi Nagar, Jaipur, Rajasthan 302019'
  },
  {
    country: 'Canada',
    flagCode: 'ca',
    phone: '+1 579-977-4475',
    location: '40 Tuxedo Ct, Toronto, ON M1G 3S7, Canada'
  },
  {
    country: 'Germany',
    flagCode: 'de',
    phone: '+49 1515 1402200',
    location: 'Rheiderstraße 34, 53881 Euskirchen, Germany'
  }
];

export const ContactFormSection = () => {
  return (
    <section id="contact-form" className="w-full pb-20 px-4">
      <div className="max-w-[1400px] mx-auto">

        {/* Main Contact Form & Direct Info Container */}
        <div className="bg-white rounded-[40px] shadow-xl shadow-slate-200/50 p-6 md:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left Side: Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 !font-heading">Direct Contact</h2>

              <div className="flex flex-col sm:flex-row flex-wrap gap-8 md:gap-12 mb-12">
                <a href="tel:+919587867258" className="flex flex-col items-start group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100 group-hover:bg-emerald-100 group-hover:scale-105 transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <p className="text-slate-500 font-medium text-sm mb-1 group-hover:text-slate-700 transition-colors">Phone Number</p>
                  <p className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">+91 9587867258</p>
                </a>

                <a href="mailto:sales@comfygen.com" className="flex flex-col items-start group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100 group-hover:bg-blue-100 group-hover:scale-105 transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <p className="text-slate-500 font-medium text-sm mb-1 group-hover:text-slate-700 transition-colors">Email Address</p>
                  <p className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">sales@comfygen.com</p>
                </a>

                <a href="https://www.comfygen.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-start group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-4 border border-amber-100 group-hover:bg-amber-100 group-hover:scale-105 transition-all">
                    <Globe className="w-6 h-6" />
                  </div>
                  <p className="text-slate-500 font-medium text-sm mb-1 group-hover:text-slate-700 transition-colors">Site Address</p>
                  <p className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">www.comfygen.com</p>
                </a>
              </div>

              {/* World Map Illustration Graphic */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 hidden md:block">

                <Image
                  src="/images/hero/team-collaborating.webp"
                  alt="Global Offices"
                  fill
                  className="object-cover opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-xl mb-1">Global Presence</p>
                  <p className="text-white/80 text-sm">Serving clients worldwide across 15+ countries.</p>
                </div>
              </div>
            </div>

            {/* Right Side: The Form */}
            <div className="bg-slate-50 rounded-[32px] p-8 md:p-10 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-2 !font-heading">Send us a Message</h3>
              <p className="text-slate-500 mb-8 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>

              <ContactForm variant="contact" />
            </div>
          </div>
        </div>

        {/* Global Offices Section Below Form */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center !font-heading">Our Global Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {globalOffices.map((office, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-transparent flex items-center justify-center border border-slate-200">
                    <img src={`https://flagcdn.com/${office.flagCode}.svg`} alt={`${office.country} Flag`} className="w-8 h-auto rounded-sm border border-slate-100 shadow-sm" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-0.5">Office</p>
                    <h4 className="text-xl font-bold text-slate-900 !font-heading">{office.country}</h4>
                  </div>
                </div>

                <div className="space-y-4">
                  <a href={`tel:${office.phone.replace(/[\s-]/g, '')}`} className="flex items-start gap-3 group/phone cursor-pointer">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover/phone:scale-110 transition-transform" />
                    <p className="text-slate-700 font-medium group-hover/phone:text-primary transition-colors">{office.phone}</p>
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-slate-600 text-sm leading-relaxed">{office.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="rounded-xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-200 h-[450px] w-full relative group">
            <div className="absolute inset-0 pointer-events-none group-hover:bg-transparent transition-all duration-500 bg-slate-900/5 z-10 rounded-xl"></div>
            <iframe
              src="https://maps.google.com/maps?q=Comfygen%20Jaipur,%20Rajasthan&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Comfygen Office Location"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};


