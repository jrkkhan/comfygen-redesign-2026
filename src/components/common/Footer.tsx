'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Globe, ShieldCheck, MapPin } from 'lucide-react';

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
    <footer className="w-full bg-[#0A0D27] pt-20 border-t border-white/5 relative z-10">
      <div className="max-w-[1400px] mx-auto px-4">

        {/* Conditionally hide top contact section on Contact page */}
        {!isContactPage && (
          <>
            {/* Top Contact Form & Info Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">

          {/* Left Side: Contact Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-white mb-5 leading-[1.1] tracking-tight">
              Tell us what you're<br />planning to build.
            </h2>
            <p className="text-slate-400 mb-12 text-[15px] max-w-md leading-relaxed">
              Share Your Idea And We'll Come Back Within One Business Day With Next Steps.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-8 md:gap-12">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-[#4ADE80]/15 flex items-center justify-center text-white mb-4 border border-white/5 shadow-inner">
                  <Phone className="w-5 h-5" />
                </div>
                <p className="text-slate-400 text-[13px] mb-1">Phone Number</p>
                <p className="text-white font-medium">+009 8754 3433 223</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-[#5C9DFE]/15 flex items-center justify-center text-white mb-4 border border-white/5 shadow-inner">
                  <Mail className="w-5 h-5" />
                </div>
                <p className="text-slate-400 text-[13px] mb-1">Email Address</p>
                <p className="text-white font-medium">support@gmail.com</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-[#FACC15]/15 flex items-center justify-center text-white mb-4 border border-white/5 shadow-inner">
                  <Globe className="w-5 h-5" />
                </div>
                <p className="text-slate-400 text-[13px] mb-1">Site Address</p>
                <p className="text-white font-medium">www.sitename.com</p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form Card */}
          <div className="bg-white rounded-[32px] p-8 sm:p-10  relative">


            <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact us</h3>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name" className={`w-full bg-[#f8fafc] border ${errors.name ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-primary/50 focus:ring-primary/20'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 transition-all text-slate-800 placeholder:text-slate-400`} />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@gmail.com" className={`w-full bg-[#f8fafc] border ${errors.email ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-primary/50 focus:ring-primary/20'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 transition-all text-slate-800 placeholder:text-slate-400`} />
                  {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Number</label>
                  <div className={`flex w-full bg-[#f8fafc] border ${errors.phone ? 'border-red-400 focus-within:ring-red-200' : 'border-slate-200 focus-within:border-primary/50 focus-within:ring-primary/20'} rounded-xl focus-within:ring-2 transition-all overflow-hidden`}>
                    <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="bg-transparent border-none text-slate-600 text-sm pl-4 pr-2 py-3.5 focus:outline-none cursor-pointer hover:text-slate-900 border-r border-slate-200/60 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748b%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_10px_center] bg-[length:10px] pr-8">
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+33">🇫🇷 +33</option>
                    </select>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="20260 00000" className="w-full bg-transparent border-none px-4 py-3.5 text-sm focus:outline-none text-slate-800 placeholder:text-slate-400" />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Type your subject" className={`w-full bg-[#f8fafc] border ${errors.subject ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-primary/50 focus:ring-primary/20'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 transition-all text-slate-800 placeholder:text-slate-400`} />
                  {errors.subject && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.subject}</p>}
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">About Your Project</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="A Few Lines About your Idea..." rows={4} className={`w-full bg-[#f8fafc] border ${errors.message ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-primary/50 focus:ring-primary/20'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 transition-all resize-none text-slate-800 placeholder:text-slate-400`}></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message}</p>}
              </div>
              <div>
                <button type="submit" disabled={isSubmitting} className={`font-medium px-8 py-3.5 rounded-full transition-all shadow-lg w-fit flex items-center gap-2 ${isSubmitting ? 'bg-primary/70 cursor-not-allowed shadow-none text-white/80' : 'bg-primary hover:bg-primary/90 text-white shadow-primary/20'}`}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitSuccess && (
                  <p className="text-green-600 text-sm mt-4 font-medium flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Message sent successfully! We'll get back to you soon.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Global Offices Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {globalOffices.map((office, index) => (
              <div key={index} className="  border border-white/10 rounded-2xl px-8 p-6 group hover:bg-white/5 transition-colors">
                <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wide flex items-center gap-2 !font-heading">
                  <span className="text-[22px] leading-none mb-0.5">{office.flag}</span>
                  {office.country}
                </h4>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-slate-400 text-xs mb-1">Phone Number</p>
                    <p className="text-white font-medium text-sm">{office.phone}</p>
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

            {/* Separator */}
            <hr className="border-white/5 mb-16" />
          </>
        )}

        {/* Footer Links & Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6 mb-16">

          {/* Company Details */}
          <div className="lg:col-span-2 pr-4 lg:pr-10">
            <div className="flex flex-col cursor-pointer mb-6">
              <Image
                src="/logos/comfygen-logo.svg"
                alt="Comfygen Logo"
                width={200}
                height={50}
                className="w-[150px] sm:w-[180px] h-auto"
                priority
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-8">
              <a href="/" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="/" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="/" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="/" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
            {/* Certification Badges */}
            <div className="flex gap-4 mt-2 p-4 rounded-2xl border border-white/10 w-fit">
              <div className="relative w-16 h-14 transition-transform hover:-translate-y-1 duration-300">
                <Image src="/images/certifications/iso-9001.webp" alt="ISO 9001:2015 Certified" fill className="object-contain" unoptimized />
              </div>
              <div className="relative w-16 h-14 transition-transform hover:-translate-y-1 duration-300">
                <Image src="/images/certifications/iso-20000.webp" alt="ISO/IEC 20000-1:2018 Certified" fill className="object-contain" unoptimized />
              </div>
              <div className="relative w-16 h-14 transition-transform hover:-translate-y-1 duration-300">
                <Image src="/images/certifications/iso-27001.webp" alt="ISO 27001 Certified" fill className="object-contain" unoptimized />
              </div>
            </div>
          </div>

          {/* Columns */}
          {/* Note: I've updated the links from the mock's template placeholders (taxes, mutual funds) to actual IT/Development links to make it relevant to Comfygen */}
          <div className="lg:pl-8 lg:border-l border-white/5">
            <h4 className="text-white font-semibold mb-6">Web & App</h4>
            <ul className="flex flex-col gap-3.5">
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">Web Development</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">Mobile App Dev</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">UI/UX Design</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">E-commerce Solutions</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">PWA Development</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">CMS Development</a></li>
            </ul>
          </div>
          <div className="lg:pl-8 lg:border-l border-white/5">
            <h4 className="text-white font-semibold mb-6">Blockchain</h4>
            <ul className="flex flex-col gap-3.5">
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">Smart Contracts</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">dApp Development</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">DeFi Solutions</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">NFT Marketplace</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">Crypto Wallets</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">Blockchain Consulting</a></li>
            </ul>
          </div>
          <div className="lg:pl-8 lg:border-l border-white/5">
            <h4 className="text-white font-semibold mb-6">Crypto & Token</h4>
            <ul className="flex flex-col gap-3.5">
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">Token Creation</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">ICO/IDO Development</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">Exchange Platform</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">Crypto Staking</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">Tokenomics Design</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">Coin Integration</a></li>
            </ul>
          </div>
          <div className="lg:pl-8 lg:border-l border-white/5">
            <h4 className="text-white font-semibold mb-6">Gaming</h4>
            <ul className="flex flex-col gap-3.5">
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">Web3 Gaming</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">Metaverse Dev</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">P2E Games</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">Casino Games</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">Sports Betting</a></li>
              <li><a href="/" className="text-slate-400 hover:text-white text-[13px] transition-colors">Board Games</a></li>
            </ul>
          </div>
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
