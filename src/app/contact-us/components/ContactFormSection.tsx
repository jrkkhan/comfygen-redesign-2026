"use client";

import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{5,15}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', countryCode: '+91', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section className="w-full pb-20 px-4">
      <div className="max-w-[1400px] mx-auto">

        {/* Main Contact Form & Direct Info Container */}
        <div className="bg-white rounded-[40px] shadow-xl shadow-slate-200/50 p-6 md:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left Side: Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 !font-heading">Direct Contact</h2>

              <div className="flex flex-col sm:flex-row flex-wrap gap-8 md:gap-12 mb-12">
                <div className="flex flex-col items-start">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
                    <Phone className="w-6 h-6" />
                  </div>
                  <p className="text-slate-500 font-medium text-sm mb-1">Phone Number</p>
                  <p className="text-base font-bold text-slate-900">+91 9587867258</p>
                </div>

                <div className="flex flex-col items-start">
                  <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                    <Mail className="w-6 h-6" />
                  </div>
                  <p className="text-slate-500 font-medium text-sm mb-1">Email Address</p>
                  <p className="text-base font-bold text-slate-900">sales@comfygen.com</p>
                </div>

                <div className="flex flex-col items-start">
                  <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-4 border border-amber-100">
                    <Globe className="w-6 h-6" />
                  </div>
                  <p className="text-slate-500 font-medium text-sm mb-1">Site Address</p>
                  <p className="text-base font-bold text-slate-900">www.comfygen.com</p>
                </div>
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

              <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className={`w-full bg-white border ${errors.name ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-primary/50 focus:ring-primary/20'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 transition-all text-slate-800 placeholder:text-slate-400`} />
                    {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className={`w-full bg-white border ${errors.email ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-primary/50 focus:ring-primary/20'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 transition-all text-slate-800 placeholder:text-slate-400`} />
                    {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Number</label>
                    <div className={`flex w-full bg-white border ${errors.phone ? 'border-red-400 focus-within:ring-red-200' : 'border-slate-200 focus-within:border-primary/50 focus-within:ring-primary/20'} rounded-xl focus-within:ring-2 transition-all overflow-hidden`}>
                      <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="bg-transparent border-none text-slate-600 text-sm pl-4 pr-2 py-3.5 focus:outline-none cursor-pointer hover:text-slate-900 border-r border-slate-200/60 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748b%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_10px_center] bg-[length:10px] pr-8">
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+33">🇫🇷 +33</option>
                      </select>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="98765 43210" className="w-full bg-transparent border-none px-4 py-3.5 text-sm focus:outline-none text-slate-800 placeholder:text-slate-400" />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Subject</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Web Development" className={`w-full bg-white border ${errors.subject ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-primary/50 focus:ring-primary/20'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 transition-all text-slate-800 placeholder:text-slate-400`} />
                    {errors.subject && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Project Details</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project requirements..." rows={5} className={`w-full bg-white border ${errors.message ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-primary/50 focus:ring-primary/20'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 transition-all resize-none text-slate-800 placeholder:text-slate-400`}></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button type="submit" disabled={isSubmitting} className={`w-full font-bold px-8 py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 ${isSubmitting ? 'bg-primary/70 cursor-not-allowed shadow-none text-white/80' : 'bg-primary hover:bg-primary/90 text-white hover:shadow-primary/25 hover:-translate-y-0.5'}`}>
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                  {submitSuccess && (
                    <p className="text-green-600 bg-green-50 p-3 rounded-lg border border-green-100 text-sm mt-4 font-medium flex items-center justify-center gap-2">
                      <ShieldCheck className="w-5 h-5" /> Message sent! We'll get back to you shortly.
                    </p>
                  )}
                </div>
              </form>
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
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-slate-700 font-medium">{office.phone}</p>
                  </div>
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


