import React from 'react';
import Image from "next/image";
import dynamic from 'next/dynamic';
import { Smartphone, Bot, MonitorSmartphone, Layers, Component, Feather } from "lucide-react";

// Critical components loaded normally
import { Header } from "@/components/common/Header";
import { Hero } from "@/components/common/Hero";

// Below-the-fold components loaded dynamically
const DynamicFAQSchema = dynamic(() => import('@/components/common/DynamicFAQSchema').then(mod => mod.DynamicFAQSchema));
const Services = dynamic(() => import('@/components/common/Services').then(mod => mod.Services));
const SolutionCards = dynamic(() => import('@/components/common/SolutionCards').then(mod => mod.SolutionCards));
const ExtraInfoCards = dynamic(() => import('@/components/common/ExtraInfoCards').then(mod => mod.ExtraInfoCards));
const AdvancedTechFeatures = dynamic(() => import('@/components/common/solution/AdvancedTechFeatures').then(mod => mod.AdvancedTechFeatures));
const CallToAction = dynamic(() => import('@/components/common/CallToAction').then(mod => mod.CallToAction));
const AboutInfo = dynamic(() => import('@/components/common/AboutInfo').then(mod => mod.AboutInfo));
const Awards = dynamic(() => import('@/components/common/Awards').then(mod => mod.Awards));
const ProcessSteps = dynamic(() => import('@/components/common/ProcessSteps').then(mod => mod.ProcessSteps));
const WhyChooseUs = dynamic(() => import('@/components/common/WhyChooseUs').then(mod => mod.WhyChooseUs));
const Portfolio = dynamic(() => import('@/components/common/Portfolio').then(mod => mod.Portfolio));
const Testimonials = dynamic(() => import('@/components/common/Testimonials').then(mod => mod.Testimonials));
const Industries = dynamic(() => import('@/components/common/Industries').then(mod => mod.Industries));
const TechStack = dynamic(() => import('@/components/common/TechStack').then(mod => mod.TechStack));
const Team = dynamic(() => import('@/components/common/Team').then(mod => mod.Team));
const Leadership = dynamic(() => import('@/components/common/Leadership').then(mod => mod.Leadership));
const FAQ = dynamic(() => import('@/components/common/FAQ').then(mod => mod.FAQ));
const Blog = dynamic(() => import('@/components/common/Blog').then(mod => mod.Blog));
const Footer = dynamic(() => import('@/components/common/Footer').then(mod => mod.Footer));

// Fallback icons
const defaultIcons = [Smartphone, Bot, MonitorSmartphone, Layers, Component, Feather];

interface ServicePageTemplateProps {
  slug: string;
  data: any;
}

export function ServicePageTemplate({ slug, data }: ServicePageTemplateProps) {
  const heroSection = data?.herosection;
  const rawTitle = heroSection?.heading || slug.replace(/-/g, ' ').toUpperCase();
  const heroSubtitle = heroSection?.subtitle || "";

  const servicesSection = data?.servicesection;
  const servicesTitle = servicesSection?.heading || "Our Services";
  const servicesSubtitle = servicesSection?.subtitle || "";
  const mappedServices = servicesSection?.card?.map((item: any, index: number) => ({
    title: item.title,
    description: item.description,
    link: item.link,
    icon: item.icon || defaultIcons[index % defaultIcons.length],
  })) || [];

  const aboutInfoSection = data?.aboutinfo;
  const aboutTitle = aboutInfoSection?.title || "About Us";
  const aboutDescription = aboutInfoSection?.description;
  const aboutImage = aboutInfoSection?.img?.url ? `http://101.53.148.136:1337${aboutInfoSection.img.url}` : "/images/mobile-app-development/mobile-app-development-aboutinfo.webp";
  const aboutButtonText = aboutInfoSection?.buttontext || "Consult Our Experts";

  const whyChooseSection = data?.whychoose;
  const whyChooseTitle = whyChooseSection?.heading || "Why Choose Us?";
  const whyChooseReasons = whyChooseSection?.cards?.map((card: any, index: number) => ({
    id: `0${index + 1}`,
    title: card.title,
    desc: card.description || card.desc
  })) || [];

  const processStepsSection = data?.processSteps || data?.processsteps || data?.process || data?.Process;
  const processTitle = processStepsSection?.title;
  const processLabel = processStepsSection?.label;
  
  // They named the subtitle field "description" in CMS
  const processSubtitle = processStepsSection?.subtitle || processStepsSection?.description; 
  
  const processImage = processStepsSection?.img?.url ? `http://101.53.148.136:1337${processStepsSection.img.url}` : undefined;
  
  // They might have named the steps array field "ProcessStepItem" or "steps"
  const rawSteps = processStepsSection?.steps || processStepsSection?.ProcessStepItem || processStepsSection?.processstepitem;
  
  const processStepsData = rawSteps?.map((step: any, index: number) => ({
    id: `0${index + 1}`, // Auto-generate ID
    title: step.title,
    // They named the description field "disc" instead of "desc"
    desc: step.desc || step.description || step.disc, 
    time: step.time
  })) || undefined;

  const solutionSection = data?.solution;
  const solutionTitle = solutionSection?.heading || "Our Solutions";
  const solutionSubtitle = solutionSection?.subtitle || "";
  const solutionCards = solutionSection?.cards?.map((card: any) => ({
    title: card.title,
    description: card.description,
    icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 8H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  })) || [];

  const extraInfoSection = data?.extracards;
  const extraInfoTitle = extraInfoSection?.title;
  const extraInfoCardsData = extraInfoSection?.extracardItem?.map((card: any) => ({
    title: card.title,
    description: card.disc,
  })) || [];

  const techFeaturesSection = data?.TechFeaturesSection || data?.techFeaturesSection || data?.techFeatures;

  let apiFaqs = [];
  if (data?.faqdata && data.faqdata.faqdata && data.faqdata.faqdata.length > 0) {
    apiFaqs = data.faqdata.faqdata.map((faq: any) => ({
      question: faq.quz,
      answer: faq.answer
    }));
  }

  return (
    <main className="relative min-h-screen font-sans bg-white flex flex-col">
      <DynamicFAQSchema faqs={apiFaqs} />
      <div className="relative min-h-screen overflow-hidden bg-[#02040a] flex flex-col z-[100]">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/hero-background.webp"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col flex-1">
          <Header />
          <div className="flex-1 flex flex-col justify-center">
            <Hero
              title={
                rawTitle.includes("Development") ? (
                  <>
                    {rawTitle.split("Development")[0]}
                    Development
                    {rawTitle.split("Development")[1]}
                  </>
                ) : (
                  rawTitle
                )
              }
              subtitle={heroSubtitle}
              primaryButtonText="Get a Free Quote"
            />
          </div>
        </div>
      </div>
      <div className="flex-1">
        {mappedServices.length > 0 && (
          <Services
            title={servicesTitle}
            subtitle={servicesSubtitle}
            services={mappedServices}
            isClickableCard={true}
          />
        )}

        {aboutTitle && aboutDescription && (
          <AboutInfo
            title={aboutTitle}
            description={aboutDescription}
            imageSrc={aboutImage}
            imageAlt={aboutTitle}
            buttonText={aboutButtonText}
          />
        )}

        <Awards />
        <ProcessSteps 
          pageName={slug.replace(/-/g, ' ')}
          title={processTitle}
          subtitle={processSubtitle}
          steps={processStepsData}
          imageSrc={processImage}
          label={processLabel}
        />

        {whyChooseReasons.length > 0 && (
          <WhyChooseUs
            title={whyChooseTitle}
            reasons={whyChooseReasons}
          />
        )}

        <Portfolio />

        {techFeaturesSection && (
          <AdvancedTechFeatures sectionData={techFeaturesSection} />
        )}

        {solutionCards.length > 0 && (
          <SolutionCards
            title={solutionTitle}
            subtitle={solutionSubtitle}
            cards={solutionCards}
            isDark={false}
          />
        )}

        {extraInfoCardsData.length > 0 && (
          <ExtraInfoCards
            title={extraInfoTitle}
            cards={extraInfoCardsData}
          />
        )}

        <CallToAction
          title={<>Your Competitors Are Already
            <br className="hidden md:block" />  Going Digital</>}
          description="Don't fall behind. Build a custom app that helps you reach more customers and scale faster. "
          buttonText="Talk to Expert Now"
          isDark={false}
          graphicType="dashed-circles"
        />
        <Testimonials />
        <Industries />

        <TechStack />
        <Team />

        {apiFaqs.length > 0 && (
          <FAQ
            title="Frequently Asked Questions"
            description="Find answers to the most commonly asked questions regarding our services."
            faqs={apiFaqs}
          />
        )}

        {/* Dynamic Author/Leadership Section */}
        <Leadership authorKey={data?.author || data?.attributes?.author} />

        <Blog />
      </div>
      <Footer />
    </main>
  );
}
