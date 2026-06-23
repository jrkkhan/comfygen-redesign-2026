import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { X, Search, Sparkles, Settings, Lightbulb, Factory, Building2, ArrowRight, User, Box, LayoutGrid, CloudRain, Bitcoin, HeartPulse, Wallet, GraduationCap, ShoppingCart, Heart, Smartphone, BrainCircuit, Link as LinkIcon, Coins, Code, UserPlus, Undo2 } from 'lucide-react';
import { megaMenuData } from '@/data/megaMenuData';

const iconMap: Record<string, React.ElementType> = {
  User, Box, LayoutGrid, CloudRain, Bitcoin, HeartPulse, Wallet, GraduationCap, ShoppingCart, Heart, Smartphone, BrainCircuit, Link: LinkIcon, Coins, Code, UserPlus
};

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'service' | 'solutions' | 'industries' | 'company';

export const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [activeTab, setActiveTab] = useState<TabType>('service');
  const [activeServiceCategory, setActiveServiceCategory] = useState(0);
  const [activeSolutionCategory, setActiveSolutionCategory] = useState(0);
  const [activeIndustryCategory, setActiveIndustryCategory] = useState(0);

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<{ label: string, href: string }[]>([]);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    // Gather all links
    const allLinks: { label: string, href: string }[] = [];
    megaMenuData.service.forEach(c => c.links.forEach(l => allLinks.push({ label: l.label, href: l.href })));
    megaMenuData.solutions.forEach(c => c.links.forEach(l => allLinks.push({ label: l.label, href: l.href })));
    megaMenuData.industries.forEach(c => c.links.forEach(l => allLinks.push({ label: l.label, href: l.href })));
    megaMenuData.company.forEach(c => allLinks.push({ label: c.title, href: c.href }));

    const results = allLinks.filter(link =>
      link.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Remove duplicates based on label
    const uniqueResults = Array.from(new Map(results.map(item => [item.label, item])).values());

    setSearchResults(uniqueResults);
    setIsSearching(true);
  };

  const handleClose = () => {
    setSearchQuery('');
    setIsSearching(false);
    onClose();
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-[#F8FAFC] flex flex-col overflow-y-auto">
      <div className="max-w-[1600px] w-full mx-auto px-4 md:px-8 pt-6 pb-24 md:py-10 flex flex-col min-h-screen">

        {/* Top Bar */}
        <div className="flex items-center justify-between mb-8 sm:mb-12 gap-8 shrink-0">
          {/* Logo */}
          <Link href="/" className="shrink-0 cursor-pointer" onClick={handleClose}>
            <div
              className="w-[180px] sm:w-[240px] h-[45px] sm:h-[60px] bg-primary"
              style={{
                maskImage: 'url(/logos/comfygen-logo.svg)',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'left center',
                WebkitMaskImage: 'url(/logos/comfygen-logo.svg)',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'left center'
              }}
              title="Comfygen Logo"
            />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl hidden md:flex items-center bg-white border border-slate-200 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="pl-6 text-slate-400">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <input
              type="text"
              placeholder="Mobile App Development"
              className="flex-1 bg-transparent border-none outline-none py-3 px-4 text-slate-700 placeholder:text-slate-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
              aria-label="Search"
              onClick={handleSearch}
              className="bg-primary hover:bg-primary/90 text-white p-3 m-1 rounded-full transition-colors flex items-center justify-center"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Close/Back Button */}
          {isSearching ? (
            <button
              onClick={() => setIsSearching(false)}
              className="shrink-0 flex items-center gap-2 px-6 h-12 rounded-full bg-white border border-primary text-primary hover:bg-primary/5 transition-all shadow-sm font-medium"
            >
              <Undo2 className="w-5 h-5" />
              Back
            </button>
          ) : (
            <button
              aria-label="Close Menu"
              onClick={handleClose}
              className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Mobile Search (Shows only on small screens) */}
        <div className="md:hidden flex items-center bg-white border border-slate-200 rounded-full overflow-hidden shadow-sm mb-8 shrink-0">
          <div className="pl-4 text-slate-400">
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent border-none outline-none py-2.5 px-3 text-slate-700 placeholder:text-slate-400 text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button
            aria-label="Search"
            onClick={handleSearch}
            className="bg-primary text-white p-2 m-1 rounded-full flex items-center justify-center"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>

        {isSearching ? (
          <div className="flex flex-col items-center max-w-3xl mx-auto w-full mt-4">
            <p className="text-slate-500 font-medium mb-8">Search Result</p>

            {searchResults.length > 0 ? (
              <div className="w-full flex flex-col">
                {searchResults.map((result, idx) => (
                  <a
                    key={idx}
                    href={result.href}
                    className="group flex items-center justify-between py-4 border-b border-slate-200 hover:border-primary transition-colors"
                  >
                    <span className="text-slate-800 text-[16px] font-medium group-hover:text-primary transition-colors">
                      {result.label}
                    </span>
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-slate-400 mt-12">No results found for "{searchQuery}"</div>
            )}
          </div>
        ) : (
          <>
            {/* Tabs Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 sm:mb-12 shrink-0">
              {/* Service Tab */}
              <button
                onClick={() => setActiveTab('service')}
                className={`flex items-center justify-center gap-3 p-4 md:p-6 rounded-2xl border transition-all ${activeTab === 'service'
                    ? 'bg-white border-primary shadow-lg shadow-primary/10 text-primary'
                    : 'bg-transparent border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300'
                  }`}
              >
                <Settings className="w-5 h-5 md:w-6 md:h-6" />
                <span className="font-heading font-medium text-lg md:text-xl">Service</span>
              </button>

              {/* Solutions Tab */}
              <button
                onClick={() => setActiveTab('solutions')}
                className={`flex items-center justify-center gap-3 p-4 md:p-6 rounded-2xl border transition-all ${activeTab === 'solutions'
                    ? 'bg-white border-primary shadow-lg shadow-primary/10 text-primary'
                    : 'bg-transparent border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300'
                  }`}
              >
                <Lightbulb className="w-5 h-5 md:w-6 md:h-6" />
                <span className="font-heading font-medium text-lg md:text-xl">Solutions</span>
              </button>

              {/* Industries Tab */}
              <button
                onClick={() => setActiveTab('industries')}
                className={`flex items-center justify-center gap-3 p-4 md:p-6 rounded-2xl border transition-all ${activeTab === 'industries'
                    ? 'bg-white border-primary shadow-lg shadow-primary/10 text-primary'
                    : 'bg-transparent border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300'
                  }`}
              >
                <Factory className="w-5 h-5 md:w-6 md:h-6" />
                <span className="font-heading font-medium text-lg md:text-xl">Industries</span>
              </button>

              {/* Company Tab */}
              <button
                onClick={() => setActiveTab('company')}
                className={`flex items-center justify-center gap-3 p-4 md:p-6 rounded-2xl border transition-all ${activeTab === 'company'
                    ? 'bg-white border-primary shadow-lg shadow-primary/10 text-primary'
                    : 'bg-transparent border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300'
                  }`}
              >
                <Building2 className="w-5 h-5 md:w-6 md:h-6" />
                <span className="font-heading font-medium text-lg md:text-xl">Company</span>
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1">
              {activeTab === 'service' && (
                <div className="flex flex-col lg:flex-row gap-8">

                  {/* Left Column: Categories List */}
                  <div className="w-full lg:w-[350px] flex flex-col gap-2 shrink-0">
                    {megaMenuData.service.map((category, idx) => {
                      const Icon = iconMap[category.icon] || Settings;
                      const isActive = activeServiceCategory === idx;
                      return (
                        <div key={category.id} className="flex flex-col">
                          <button
                            onClick={() => setActiveServiceCategory(idx)}
                            className={`w-full text-left flex items-start gap-4 p-4 rounded-xl transition-all ${isActive
                                ? 'bg-primary/5 border border-primary/10'
                                : 'bg-transparent border border-transparent hover:bg-white hover:border-slate-200'
                              }`}
                          >
                            <div className={`mt-1 shrink-0 ${isActive ? 'text-primary' : 'text-slate-600'}`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <p className={`font-bold text-[16px] mb-1 ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                                {category.title}
                              </p>
                              <p className="text-slate-500 text-[13px]">{category.subtitle}</p>
                            </div>
                          </button>

                          {/* Mobile Accordion Links */}
                          {isActive && (
                            <div className="lg:hidden grid grid-cols-1 gap-3 pt-2 pb-4 pl-[3.75rem] pr-4">
                              {category.links.map((link, lIdx) => (
                                <a key={lIdx} href={link.href} className="text-[14px] text-slate-600 hover:text-primary flex items-start">
                                  <ArrowRight className="w-3.5 h-3.5 mt-0.5 mr-2 text-primary opacity-70 shrink-0" />
                                  <span className="line-clamp-2">{link.label}</span>
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Middle Column: Links Grid */}
                  <div className="hidden lg:block flex-1 lg:border-l border-slate-200 lg:pl-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      {megaMenuData.service[activeServiceCategory]?.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          className="group flex items-center text-[14px] text-slate-600 hover:text-primary transition-colors font-sans"
                        >
                          <span className="line-clamp-2 leading-relaxed flex-1">
                            {link.label}
                          </span>
                          {/* Hover Arrow */}
                          <ArrowRight className="w-3.5 h-3.5 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0 text-primary" />

                          {/* New Badge */}
                          {link.isNew && (
                            <span className="ml-2 shrink-0 inline-flex items-center px-2 py-0.5 rounded-full border border-primary text-primary text-[10px] font-medium bg-primary/5 uppercase tracking-wider">
                              New
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Featured Card */}
                  <div className="w-full lg:w-[350px] shrink-0 h-[300px] relative rounded-2xl overflow-hidden mt-8 lg:mt-0 mb-12 lg:mb-0">
                    <Image
                      src={megaMenuData.serviceFeature.image}
                      alt="Connect to expert"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <a
                      href={megaMenuData.serviceFeature.href}
                      className="absolute bottom-0 right-0 bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-tl-3xl transition-colors shadow-lg z-10"
                    >
                      {megaMenuData.serviceFeature.buttonText}
                    </a>
                  </div>
                </div>
              )}

              {activeTab === 'solutions' && (
                <div className="flex flex-col lg:flex-row gap-8">

                  {/* Left Column: Categories List */}
                  <div className="w-full lg:w-[350px] flex flex-col gap-2 shrink-0">
                    {megaMenuData.solutions.map((category, idx) => {
                      const Icon = iconMap[category.icon] || Settings;
                      const isActive = activeSolutionCategory === idx;
                      return (
                        <div key={category.id} className="flex flex-col">
                          <button
                            onClick={() => setActiveSolutionCategory(idx)}
                            className={`w-full text-left flex items-start gap-4 p-4 rounded-xl transition-all ${isActive
                                ? 'bg-primary/5 border border-primary/10'
                                : 'bg-transparent border border-transparent hover:bg-white hover:border-slate-200'
                              }`}
                          >
                            <div className={`mt-1 shrink-0 ${isActive ? 'text-primary' : 'text-slate-600'}`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <p className={`font-bold text-[16px] mb-1 ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                                {category.title}
                              </p>
                              <p className="text-slate-500 text-[13px]">{category.subtitle}</p>
                            </div>
                          </button>

                          {/* Mobile Accordion Links */}
                          {isActive && (
                            <div className="lg:hidden grid grid-cols-1 gap-3 pt-2 pb-4 pl-[3.75rem] pr-4">
                              {category.links.map((link, lIdx) => (
                                <a key={lIdx} href={link.href} className="text-[14px] text-slate-600 hover:text-primary flex items-start">
                                  <ArrowRight className="w-3.5 h-3.5 mt-0.5 mr-2 text-primary opacity-70 shrink-0" />
                                  <span className="line-clamp-2">{link.label}</span>
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Middle Column: Links Grid */}
                  <div className="hidden lg:block flex-1 lg:border-l border-slate-200 lg:pl-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      {megaMenuData.solutions[activeSolutionCategory]?.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          className="group flex items-center text-[14px] text-slate-600 hover:text-primary transition-colors font-sans"
                        >
                          <span className="line-clamp-2 leading-relaxed flex-1">
                            {link.label}
                          </span>
                          {/* Hover Arrow */}
                          <ArrowRight className="w-3.5 h-3.5 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0 text-primary" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Featured Card */}
                  <div className="w-full lg:w-[350px] shrink-0 h-[300px] relative rounded-2xl overflow-hidden mt-8 lg:mt-0 mb-12 lg:mb-0">
                    <Image
                      src={megaMenuData.solutionsFeature.image}
                      alt="Connect to expert"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    {/* Gradient overlay to make button stand out */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                    {/* Connect to Expert Button */}
                    <a
                      href={megaMenuData.solutionsFeature.href}
                      className="absolute bottom-0 right-0 bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-tl-3xl transition-colors shadow-lg z-10"
                    >
                      {megaMenuData.solutionsFeature.buttonText}
                    </a>
                  </div>
                </div>
              )}

              {activeTab === 'industries' && (
                <div className="flex flex-col lg:flex-row gap-8">

                  {/* Left Column: Categories List */}
                  <div className="w-full lg:w-[350px] flex flex-col gap-2 shrink-0">
                    {megaMenuData.industries.map((category, idx) => {
                      const Icon = iconMap[category.icon] || Settings;
                      const isActive = activeIndustryCategory === idx;
                      return (
                        <div key={category.id} className="flex flex-col">
                          <button
                            onClick={() => setActiveIndustryCategory(idx)}
                            className={`w-full text-left flex items-start gap-4 p-4 rounded-xl transition-all ${isActive
                                ? 'bg-primary/5 border border-primary/10'
                                : 'bg-transparent border border-transparent hover:bg-white hover:border-slate-200'
                              }`}
                          >
                            <div className={`mt-1 shrink-0 ${isActive ? 'text-primary' : 'text-slate-600'}`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <p className={`font-bold text-[16px] mb-1 ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                                {category.title}
                              </p>
                              <p className="text-slate-500 text-[13px]">{category.subtitle}</p>
                            </div>
                          </button>

                          {/* Mobile Accordion Links */}
                          {isActive && (
                            <div className="lg:hidden grid grid-cols-1 gap-3 pt-2 pb-4 pl-[3.75rem] pr-4">
                              {category.links.map((link, lIdx) => (
                                <a key={lIdx} href={link.href} className="text-[14px] text-slate-600 hover:text-primary flex items-start">
                                  <ArrowRight className="w-3.5 h-3.5 mt-0.5 mr-2 text-primary opacity-70 shrink-0" />
                                  <span className="line-clamp-2">{link.label}</span>
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Middle Column: Links Grid */}
                  <div className="hidden lg:block flex-1 lg:border-l border-slate-200 lg:pl-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      {megaMenuData.industries[activeIndustryCategory]?.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          className="group flex items-center text-[14px] text-slate-600 hover:text-primary transition-colors font-sans"
                        >
                          <span className="line-clamp-2 leading-relaxed flex-1">
                            {link.label}
                          </span>
                          {/* Hover Arrow */}
                          <ArrowRight className="w-3.5 h-3.5 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0 text-primary" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Featured Card */}
                  <div className="w-full lg:w-[350px] shrink-0 h-[300px] relative rounded-2xl overflow-hidden mt-8 lg:mt-0 mb-12 lg:mb-0">
                    <Image
                      src={megaMenuData.industriesFeature.image}
                      alt="Connect to expert"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    {/* Gradient overlay to make button stand out */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                    {/* Connect to Expert Button */}
                    <a
                      href={megaMenuData.industriesFeature.href}
                      className="absolute bottom-0 right-0 bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-tl-3xl transition-colors shadow-lg z-10"
                    >
                      {megaMenuData.industriesFeature.buttonText}
                    </a>
                  </div>
                </div>
              )}

              {activeTab === 'company' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
                    {megaMenuData.company.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className={`group flex flex-col p-6 rounded-xl border transition-all ${item.isActive
                            ? 'border-primary bg-primary/5'
                            : 'border-transparent hover:border-slate-200 hover:bg-white'
                          }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p className={`font-bold text-[16px] transition-colors ${item.isActive ? 'text-primary' : 'text-slate-900 group-hover:text-primary'}`}>
                            {item.title}
                          </p>
                          <ArrowRight className={`w-4 h-4 transition-colors ${item.isActive ? 'text-primary' : 'text-slate-400 group-hover:text-primary'}`} />
                        </div>
                        <p className="text-slate-500 text-[13px]">{item.desc}</p>
                      </a>
                    ))}
                  </div>

                  {/* Right Column: Featured Card */}
                  <div className="lg:col-span-1 w-full shrink-0 h-[300px] relative rounded-2xl overflow-hidden mt-8 lg:mt-0 mb-12 lg:mb-0">
                    <Image
                      src={megaMenuData.companyFeature.image}
                      alt="Connect to expert"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <a
                      href={megaMenuData.companyFeature.href}
                      className="absolute bottom-0 right-0 bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-tl-3xl transition-colors shadow-lg z-10"
                    >
                      {megaMenuData.companyFeature.buttonText}
                    </a>
                  </div>
                </div>
              )}

              {activeTab !== 'service' && activeTab !== 'company' && activeTab !== 'solutions' && activeTab !== 'industries' && (
                <div className="flex items-center justify-center h-64 border-2 border-dashed border-slate-200 rounded-3xl">
                  <p className="text-slate-400 font-heading text-lg">Content for {activeTab} coming soon...</p>
                </div>
              )}
            </div>
          </>
        )}

      </div>
    </div>,
    document.body
  );
};
