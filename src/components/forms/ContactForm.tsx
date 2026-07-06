import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, ChevronDown } from 'lucide-react';

interface ContactFormProps {
  variant?: 'footer' | 'contact';
}

const countryDialCodes: Record<string, { dial: string; flag: string }> = {
  IN: { dial: '+91', flag: '🇮🇳' },
  US: { dial: '+1', flag: '🇺🇸' },
  GB: { dial: '+44', flag: '🇬🇧' },
  AU: { dial: '+61', flag: '🇦🇺' },
  AE: { dial: '+971', flag: '🇦🇪' },
  DE: { dial: '+49', flag: '🇩🇪' },
  FR: { dial: '+33', flag: '🇫🇷' },
  CA: { dial: '+1', flag: '🇨🇦' },
  JP: { dial: '+81', flag: '🇯🇵' },
  CN: { dial: '+86', flag: '🇨🇳' },
  BR: { dial: '+55', flag: '🇧🇷' },
  RU: { dial: '+7', flag: '🇷🇺' },
  ZA: { dial: '+27', flag: '🇿🇦' },
  SA: { dial: '+966', flag: '🇸🇦' },
  SG: { dial: '+65', flag: '🇸🇬' },
  // Add more as needed
};

import { getClientCountry, submitContactForm } from '@/app/actions/contact';

export const ContactForm = ({ variant = 'contact' }: ContactFormProps) => {
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
  const [errorMessage, setErrorMessage] = useState('');
  
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Auto-detect country securely via server action
  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const country = await getClientCountry();
        if (country) {
          const countryInfo = countryDialCodes[country];
          if (countryInfo) {
            setFormData(prev => ({ ...prev, countryCode: countryInfo.dial }));
          }
        }
      } catch (error) {
        console.error('Failed to detect country code:', error);
      }
    };
    
    fetchCountryCode();
  }, []);

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
    setErrorMessage('');
    
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        stdCode: formData.countryCode,
        mobNo: formData.phone,
        subject: formData.subject,
        msg: formData.message,
      };

      const result = await submitContactForm(payload);

      if (!result.success) {
        throw new Error(result.message);
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', countryCode: formData.countryCode, phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error: any) {
      setErrorMessage(error.message || 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFooter = variant === 'footer';

  const styles = {
    formGap: isFooter ? 'gap-6' : 'gap-5',
    label: isFooter ? 'text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2' : 'text-xs font-bold text-slate-700 uppercase tracking-wide mb-2',
    inputBg: isFooter ? 'bg-[#f8fafc]' : 'bg-white',
    button: isFooter ? 'font-medium px-8 py-3.5 rounded-full w-fit' : 'w-full font-bold px-8 py-4 rounded-xl justify-center hover:-translate-y-0.5',
    buttonHover: isFooter ? 'hover:bg-primary/90 shadow-primary/20' : 'hover:bg-primary/90 hover:shadow-primary/25',
    successMsg: isFooter ? 'text-green-600 text-sm mt-4 font-medium flex items-center gap-2' : 'text-green-600 bg-green-50 p-3 rounded-lg border border-green-100 text-sm mt-4 font-medium flex items-center justify-center gap-2'
  };

  // Find flag for current selected code
  const currentCountryKey = Object.keys(countryDialCodes).find(k => countryDialCodes[k].dial === formData.countryCode);
  const currentFlag = currentCountryKey ? countryDialCodes[currentCountryKey].flag : '🇮🇳';

  return (
    <form className={`flex flex-col ${styles.formGap}`} onSubmit={handleSubmit} noValidate>
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${styles.formGap}`}>
        <div>
          <label className={`block ${styles.label}`}>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={isFooter ? "Enter Name" : "John Doe"} className={`w-full ${styles.inputBg} border ${errors.name ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-primary/50 focus:ring-primary/20'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 transition-all text-slate-800 placeholder:text-slate-400`} />
          {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
        </div>
        <div>
          <label className={`block ${styles.label}`}>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={isFooter ? "example@gmail.com" : "john@example.com"} className={`w-full ${styles.inputBg} border ${errors.email ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-primary/50 focus:ring-primary/20'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 transition-all text-slate-800 placeholder:text-slate-400`} />
          {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
        </div>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 ${styles.formGap}`}>
        <div>
          <label className={`block ${styles.label}`}>Number</label>
          <div className={`flex w-full ${styles.inputBg} border ${errors.phone ? 'border-red-400 focus-within:ring-red-200' : 'border-slate-200 focus-within:border-primary/50 focus-within:ring-primary/20'} rounded-xl focus-within:ring-2 transition-all relative z-20`}>
            
            <div ref={dropdownRef} className="relative flex items-center border-r border-slate-200/60">
              <button
                type="button"
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                className="flex items-center gap-2 bg-transparent border-none text-slate-600 text-sm pl-4 pr-3 py-3.5 focus:outline-none cursor-pointer hover:text-slate-900"
              >
                <span>{currentFlag}</span>
                <span>{formData.countryCode}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCountryDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-[140px] bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden">
                  <ul className="max-h-[240px] overflow-y-auto custom-scrollbar flex flex-col py-1">
                    {Object.entries(countryDialCodes).map(([code, info]) => (
                      <li key={code}>
                        <button
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, countryCode: info.dial }));
                            setIsCountryDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 flex items-center gap-3 transition-colors ${formData.countryCode === info.dial ? 'bg-primary/5 text-primary font-medium' : 'text-slate-600'}`}
                        >
                          <span>{info.flag}</span>
                          <span>{info.dial}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={isFooter ? "20260 00000" : "98765 43210"} className="w-full bg-transparent border-none px-4 py-3.5 text-sm focus:outline-none text-slate-800 placeholder:text-slate-400" />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone}</p>}
        </div>
        <div>
          <label className={`block ${styles.label}`}>Subject</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder={isFooter ? "Type your subject" : "Web Development"} className={`w-full ${styles.inputBg} border ${errors.subject ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-primary/50 focus:ring-primary/20'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 transition-all text-slate-800 placeholder:text-slate-400`} />
          {errors.subject && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.subject}</p>}
        </div>
      </div>

      <div>
        <label className={`block ${styles.label}`}>{isFooter ? 'About Your Project' : 'Project Details'}</label>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder={isFooter ? "A Few Lines About your Idea..." : "Tell us about your project requirements..."} rows={isFooter ? 4 : 5} className={`w-full ${styles.inputBg} border ${errors.message ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-primary/50 focus:ring-primary/20'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 transition-all resize-none text-slate-800 placeholder:text-slate-400`}></textarea>
        {errors.message && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message}</p>}
      </div>

      <div className={!isFooter ? 'pt-2' : ''}>
        <button type="submit" disabled={isSubmitting} className={`${styles.button} transition-all shadow-lg flex items-center gap-2 ${isSubmitting ? 'bg-primary/70 cursor-not-allowed shadow-none text-white/80' : `bg-primary text-white ${styles.buttonHover}`}`}>
          {isSubmitting ? (isFooter ? 'Sending...' : 'Sending Message...') : 'Send Message'}
        </button>
        {submitSuccess && (
          <p className={styles.successMsg}>
            <ShieldCheck className={isFooter ? "w-4 h-4" : "w-5 h-5"} /> {isFooter ? "Message sent successfully! We'll get back to you soon." : "Message sent! We'll get back to you shortly."}
          </p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-sm mt-4 font-medium text-center">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
};
