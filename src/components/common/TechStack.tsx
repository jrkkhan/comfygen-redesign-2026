'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const tabs = [
  'Frontend', 'Backend', 'Database', 'Cloud & DevOps',
  'Payment Gateways', 'Security', 'UI/UX Design',
  'Product Management', 'Artificial Intelligence',
  'Blockchain', 'Crypto Wallets', 'APIs and Integrations'
];

const techData: Record<string, string[]> = {
  'Frontend': [
    'React.js', 'Vue.js', 'Angular', 'Svelte', 'Next.js',
    'Ember.js', 'Backbone.js', 'Bootstrap', 'Tailwind CSS', 'Material UI',
    'TypeScript', 'HTML5', 'CSS3'
  ],
  'Backend': [
    'Node.js', 'Python', 'Java', 'PHP', 'Ruby on Rails',
    'Go', 'C#', 'Spring Boot', 'Django', 'Express.js',
    'Laravel', '.NET'
  ],
  'Database': [
    'MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Oracle',
    'Firebase', 'Cassandra', 'Elasticsearch', 'DynamoDB', 'SQLite'
  ],
  'Cloud & DevOps': [
    'AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes',
    'Jenkins', 'Terraform', 'Ansible', 'CircleCI', 'GitHub Actions'
  ],
  'Payment Gateways': [
    'Stripe', 'PayPal', 'Razorpay', 'Braintree', 'Square',
    'Adyen', 'Authorize.Net', '2Checkout', 'Mollie', 'Skrill',
    'Coinbase Commerce', 'BitPay', 'Chargebee'
  ],
  'Security': [
    'OAuth', 'JWT', 'SSL/TLS', 'bcrypt', 'Cloudflare',
    'Keycloak', 'Auth0', 'Okta', 'Let\'s Encrypt', 'Sentinel',
    'Snyk', 'OWASP', 'CertiK', 'Slither', 'Penetration Testing'
  ],
  'UI/UX Design': [
    'Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin',
    'Framer', 'Principle', 'Balsamiq', 'Miro', 'Abstract',
    'Adobe Illustrator', 'Photoshop'
  ],
  'Product Management': [
    'Jira', 'Trello', 'Asana', 'Notion', 'Linear',
    'ClickUp', 'Monday.com', 'Productboard', 'Aha!', 'Basecamp'
  ],
  'Artificial Intelligence': [
    'OpenAI', 'TensorFlow', 'PyTorch', 'Keras', 'Hugging Face',
    'LangChain', 'Scikit-learn', 'Midjourney', 'Claude', 'Gemini',
    'Pinecone'
  ],
  'Blockchain': [
    'Solidity', 'Rust', 'Ethereum', 'Solana', 'Polygon', 'BNB Chain', 'Web3.js', 'Hardhat'
  ],
  'Crypto Wallets': [
    'MetaMask', 'WalletConnect', 'Trust Wallet', 'Coinbase Wallet SDK', 'Web3Auth', 'Ledger', 'Phantom', 'Rainbow'
  ],
  'APIs and Integrations': [
    'REST', 'GraphQL', 'Google Maps', 'Mapbox', 'Socket.io', 'Twilio', 'Firebase Cloud Messaging', 'WebRTC'
  ]
};

export interface TechStackProps {
  buttonText?: string;
  buttonLink?: string;
}

export const TechStack = ({
  buttonText = "Hire Dedicated Developer",
  buttonLink = "/contact-us"
}: TechStackProps = {}) => {
  const [activeTab, setActiveTab] = useState('Frontend');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full py-16 xl:py-16 2xl:py-28 px-4 bg-[#0A0D27]">
      <div className="max-w-[1400px] mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 2xl:gap-8 mb-8 2xl:mb-14">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Tag */}
            <span className="bg-white/10 border border-white/10 text-white text-xs font-medium  tracking-wider px-4 py-1.5 rounded-full w-fit mb-3 2xl:mb-5 ">
              Tools we trust
            </span>
            {/* Title */}
            <h2 className="text-balance text-3xl sm:text-4xl 2xl:text-[44px] font-bold text-white leading-[1.25] tracking-tight max-w-2xl">
              Tech Stack for Building Apps and Websites Developments
            </h2>
          </div>

          {/* Top Right: Avatars and Button */}
          <div className="flex flex-col items-center gap-4 2xl:gap-5 shrink-0">
            {/* Avatars */}
            <div className="flex -space-x-4 sm:-space-x-5 2xl:-space-x-6 hover:-space-x-2 transition-all duration-300">
              {['/images/ai-avatars/adil-khan.webp', '/images/ai-avatars/hemant-sharma.webp', '/images/ai-avatars/ketan-gupta.webp', '/images/ai-avatars/sanju-kumawat.webp'].map((src, i) => (
                <div key={i} className="relative w-16 h-16 sm:w-20 sm:h-20 2xl:w-24 2xl:h-24 rounded-full overflow-hidden border-[3px] border-transparent z-10 hover:z-20 transition-all hover:scale-110 cursor-pointer">
                  <Image
                    src={src}
                    alt={`Developer ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 64px, (max-width: 1536px) 80px, 96px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Hire Button */}
            <Link href={buttonLink} className="bg-primary hover:bg-primary/90 text-white font-medium px-7 py-2.5 rounded-full transition-colors flex items-center gap-2 text-sm shadow-[0_0_15px_rgba(1,88,230,0.3)]">
              {buttonText} <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="relative mb-8 2xl:mb-10 flex items-center">
          {/* Left Fade Dissolve */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0D27] via-[#0A0D27]/80 to-transparent z-[5] pointer-events-none" />

          {/* Left Scroll Button */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 z-10 w-9 h-9 flex items-center justify-center bg-[#151c33] text-white hover:bg-primary rounded-full shadow-lg border border-white/10 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-2.5 sm:gap-3 px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap shrink-0 px-5 py-2 rounded-full text-[13px] font-medium transition-colors border ${activeTab === tab
                  ? 'border-primary/80 text-white bg-primary/10 shadow-[0_0_10px_rgba(1,88,230,0.15)]'
                  : 'border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Right Fade Dissolve */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0D27] via-[#0A0D27]/80 to-transparent z-[5] pointer-events-none" />

          {/* Right Scroll Button */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 z-10 w-9 h-9 flex items-center justify-center bg-[#151c33] text-white hover:bg-primary rounded-full shadow-lg border border-white/10 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Tech Grid Section */}
        <div>
          {Object.entries(techData).map(([tabName, techs]) => (
            <div 
              key={tabName} 
              className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ${activeTab === tabName ? '' : 'hidden'}`}
            >
              {techs.map((tech, idx) => (
                <div
                  key={`${tabName}-${idx}`}
                  // We simulate the "Backbone.js" active state from the design to make it look exactly like the screenshot, 
                  // while also enabling the same hover effect on all cards.
                  className={`h-[85px] 2xl:h-[95px] rounded-xl flex items-center justify-center text-center px-4 text-lg lg:text-xl font-normal bg-white/5 border transition-all duration-300 hover:bg-[#151c33] hover:text-white text-white/90 hover:border-primary/60 cursor-pointer hover:shadow-[0_0_20px_rgba(1,88,230,0.15)] group ${tech === 'Backbone.js'
                    ? 'border-primary/50 text-white shadow-[0_0_15px_rgba(1,88,230,0.1)]'
                    : 'border-white/[0.02] text-slate-300'
                    }`}
                >
                  <span className="group-hover:scale-105 transition-transform duration-300 !font-heading ">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
