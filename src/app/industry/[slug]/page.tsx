import React from 'react';
import dynamic from 'next/dynamic';
import { Header } from '@/components/common/Header';
import { HeroSectionThree } from '@/components/common/solution/HeroSectionThree';
import { megaMenuData } from '@/data/megaMenuData';

const Services = dynamic(() => import('@/components/common/Services').then(mod => mod.Services));
const AboutInfo = dynamic(() => import('@/components/common/AboutInfo').then(mod => mod.AboutInfo));
const WhyChooseUs = dynamic(() => import('@/components/common/WhyChooseUs').then(mod => mod.WhyChooseUs));
const ProcessSteps = dynamic(() => import('@/components/common/ProcessSteps').then(mod => mod.ProcessSteps));
const Portfolio = dynamic(() => import('@/components/common/Portfolio').then(mod => mod.Portfolio));
const Testimonials = dynamic(() => import('@/components/common/Testimonials').then(mod => mod.Testimonials));
const FAQ = dynamic(() => import('@/components/common/FAQ').then(mod => mod.FAQ));
const CallToAction = dynamic(() => import('@/components/common/CallToAction').then(mod => mod.CallToAction));
const Footer = dynamic(() => import('@/components/common/Footer').then(mod => mod.Footer));

export async function generateStaticParams() {
  const allIndustryLinks = megaMenuData.industries.flatMap(cat => cat.links);
  return allIndustryLinks.map((link) => {
    const slug = link.href.split('/').pop();
    return { slug };
  });
}

function getIndustryData(slug: string) {
  const allIndustryLinks = megaMenuData.industries.flatMap(cat => cat.links);
  const matchedLink = allIndustryLinks.find(link => link.href.endsWith(slug));
  
  if (matchedLink) {
    return { title: matchedLink.label };
  }
  
  const fallbackTitle = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    
  return { title: fallbackTitle };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { title } = getIndustryData(slug);

  return (
    <main className="relative min-h-screen font-sans bg-white flex flex-col">
      {/* Dark Header + Hero Section */}
      <div className="relative flex flex-col z-[100] bg-slate-950">
        <Header theme="dark" />
        <HeroSectionThree
          badgeText="Industry Expertise"
          title={<span className="text-white">{title} <span className="text-blue-500">Services</span></span>}
          description={`Empower your business with our top-notch ${title.toLowerCase()} tailored to meet your unique industry needs.`}
          primaryButtonText="Get a Quote"
          primaryButtonLink="/contact-us"
          secondaryButtonText="Explore Features"
          secondaryButtonLink="#services"
          imageSrc="/images/hero/team-collaborating.webp"
          imageAlt={`${title} illustration`}
        />
      </div>

      {/* Common Sections */}
      <div className="flex-1">
        <AboutInfo 
          title={`Innovative ${title} Solutions`}
          paragraphs={[
            `We specialize in delivering cutting-edge ${title.toLowerCase()} that drive efficiency, growth, and unparalleled user experiences in the modern digital era.`,
            `Our expert team combines deep industry knowledge with the latest technologies to build scalable and secure applications designed specifically for your business requirements.`
          ]}
        />
        <Services title={`Our ${title} Services`} />
        <WhyChooseUs />
        <ProcessSteps />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </div>

      <Footer />
    </main>
  );
}
