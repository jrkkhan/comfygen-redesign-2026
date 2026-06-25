'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const tabs = [
  'Frontend', 'Backend', 'Database', 'Cloud & DevOps',
  'Payment Gateways', 'Security', 'UI/UX Design',
  'Product Management', 'Artificial Intelligence'
];

const techData: Record<string, string[]> = {
  'Frontend': [
    'React.js', 'Vue.js', 'Angular', 'Svelte', 'Next.js',
    'Ember.js', 'Backbone.js', 'Bootstrap', 'Tailwind CSS', 'Material UI'
  ],
  'Backend': [
    'Node.js', 'Python', 'Java', 'PHP', 'Ruby on Rails',
    'Go', 'C#', 'Spring Boot', 'Django', 'Express.js'
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
    'Adyen', 'Authorize.Net', '2Checkout', 'Mollie', 'Skrill'
  ],
  'Security': [
    'OAuth', 'JWT', 'SSL/TLS', 'bcrypt', 'Cloudflare',
    'Keycloak', 'Auth0', 'Okta', 'Let\'s Encrypt', 'Sentinel'
  ],
  'UI/UX Design': [
    'Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin',
    'Framer', 'Principle', 'Balsamiq', 'Miro', 'Abstract'
  ],
  'Product Management': [
    'Jira', 'Trello', 'Asana', 'Notion', 'Linear',
    'ClickUp', 'Monday.com', 'Productboard', 'Aha!', 'Basecamp'
  ],
  'Artificial Intelligence': [
    'OpenAI', 'TensorFlow', 'PyTorch', 'Keras', 'Hugging Face',
    'LangChain', 'Scikit-learn', 'Midjourney', 'Claude', 'Gemini'
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

  return (
    <section className="w-full py-20 lg:py-28 px-4 bg-[#0A0D27]">
      <div className="max-w-[1400px] mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-14">
          <div className="flex flex-col">
            {/* Tag */}
            <span className="bg-white/10 border border-white/10 text-white text-xs font-medium  tracking-wider px-4 py-1.5 rounded-full w-fit mb-5 ">
              Tools we trust
            </span>
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-[1.25] tracking-tight max-w-2xl">
              Tech Stack for Building Apps and Websites Developments
            </h2>
          </div>

          {/* Top Right: Avatars and Button */}
          <div className="flex flex-col items-start md:items-center gap-5 shrink-0">
            {/* Avatars */}
            <div className="flex">
              <Image
                src="/images/tech-stack/team-faces.webp"
                alt="Our Developers"
                width={200}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </div>
            {/* Hire Button */}
            <Link href={buttonLink} className="bg-primary hover:bg-primary/90 text-white font-medium px-7 py-2.5 rounded-full transition-colors flex items-center gap-2 text-sm shadow-[0_0_15px_rgba(1,88,230,0.3)]">
              {buttonText} <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-10">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-[13px] font-medium transition-colors border ${activeTab === tab
                ? 'border-primary/80 text-white bg-primary/10 shadow-[0_0_10px_rgba(1,88,230,0.15)]'
                : 'border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {tab}
            </button>
          ))}
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
                  className={`h-[95px] rounded-xl flex items-center justify-center text-center px-4 text-lg lg:text-xl font-normal bg-white/5 border transition-all duration-300 hover:bg-[#151c33] hover:text-white text-white/90 hover:border-primary/60 cursor-pointer hover:shadow-[0_0_20px_rgba(1,88,230,0.15)] group ${tech === 'Backbone.js'
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
