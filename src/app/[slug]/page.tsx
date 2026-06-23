import React from 'react';
import Image from "next/image";
import { Header } from "@/components/common/Header";
import { Hero } from "@/components/common/Hero";
import { Services } from "@/components/common/Services";
import { SolutionCards } from "@/components/common/SolutionCards";
import { CallToAction } from "@/components/common/CallToAction";
import { Smartphone, Bot, MonitorSmartphone, Layers, Component, Feather } from "lucide-react";
import { AboutInfo } from "@/components/common/AboutInfo";
import { Awards } from "@/components/common/Awards";
import { ProcessSteps } from "@/components/common/ProcessSteps";
import { WhyChooseUs } from "@/components/common/WhyChooseUs";
import dynamic from "next/dynamic";
import { fetchAPI } from "@/lib/api";
import { Metadata } from 'next';

const Portfolio = dynamic(() => import("@/components/common/Portfolio").then((mod) => mod.Portfolio));
const Testimonials = dynamic(() => import("@/components/common/Testimonials").then((mod) => mod.Testimonials));
const Industries = dynamic(() => import("@/components/common/Industries").then((mod) => mod.Industries));
const TechStack = dynamic(() => import("@/components/common/TechStack").then((mod) => mod.TechStack));
const Team = dynamic(() => import("@/components/common/Team").then((mod) => mod.Team));
const FAQ = dynamic(() => import("@/components/common/FAQ").then((mod) => mod.FAQ));
const Blog = dynamic(() => import("@/components/common/Blog").then((mod) => mod.Blog));
const Footer = dynamic(() => import("@/components/common/Footer").then((mod) => mod.Footer));

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, ' ').toUpperCase()} | Comfygen`,
    description: `Leading ${slug.replace(/-/g, ' ')} services by Comfygen.`,
  };
}

// Fallback icons
const defaultIcons = [Smartphone, Bot, MonitorSmartphone, Layers, Component, Feather];

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;

  const strapiData = await fetchAPI('/pages', {
    filters: { slug: { $eq: slug } },
    populate: {
      herosection: { on: { 'shared.herosection': { populate: '*' } } },
      servicesection: { on: { 'shared.service-component': { populate: { card: { populate: '*' } } } } },
      aboutinfo: { on: { 'shared.about-info': { populate: '*' } } },
      whychoose: { on: { 'shared.why-choose-us-component': { populate: { cards: { populate: '*' } } } } },
      solution: { on: { 'shared.solution-component': { populate: { cards: { populate: '*' } } } } },
      faqdata: { on: { 'shared.faq-component': { populate: { faqdata: { populate: '*' } } } } }
    },
  });

  if (!strapiData || !strapiData.data || strapiData.data.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <h1 className="text-3xl font-bold">404 - Page Data Not Found in CMS</h1>
      </div>
    );
  }

  const data = strapiData.data[0];

  const heroSection = data?.herosection?.[0] || data?.Herosection?.[0];
  const rawTitle = heroSection?.heading || slug.replace(/-/g, ' ').toUpperCase();
  const heroSubtitle = heroSection?.subtitle || "";

  const servicesSection = data?.servicesection?.[0];
  const servicesTitle = servicesSection?.heading || "Our Services";
  const servicesSubtitle = servicesSection?.subtitle || "";
  const mappedServices = servicesSection?.card?.map((item: any, index: number) => ({
    title: item.title,
    description: item.description,
    icon: defaultIcons[index % defaultIcons.length],
  })) || [];

  const aboutInfoSection = data?.aboutinfo?.[0];
  const aboutTitle = aboutInfoSection?.title || "About Us";
  const aboutParagraphs = aboutInfoSection?.description 
    ? aboutInfoSection.description.split('\n\n').filter((p: string) => p.trim() !== '')
    : [];
  const aboutImage = aboutInfoSection?.img?.url ? `https://cms.comfygen.com${aboutInfoSection.img.url}` : "/images/mobile-app-development/mobile-app-development-aboutinfo.webp";
  const aboutButtonText = aboutInfoSection?.buttontext || "Consult Our Experts";

  const whyChooseSection = data?.whychoose?.[0];
  const whyChooseTitle = whyChooseSection?.heading || "Why Choose Us?";
  const whyChooseReasons = whyChooseSection?.cards?.map((card: any, index: number) => ({
    id: `0${index + 1}`,
    title: card.title,
    desc: card.description
  })) || [];

  const solutionSection = data?.solution?.[0];
  const solutionTitle = solutionSection?.heading || "Our Solutions";
  const solutionSubtitle = solutionSection?.subtitle || "";
  const solutionCards = solutionSection?.cards?.map((card: any) => ({
    title: card.title,
    description: card.description,
    icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 8H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  })) || [];

  let apiFaqs = [];
  if (data.faqdata && data.faqdata.length > 0) {
    const faqComponent = data.faqdata[0];
    if (faqComponent.faqdata && faqComponent.faqdata.length > 0) {
      apiFaqs = faqComponent.faqdata.map((faq: any) => ({
        question: faq.quz,
        answer: faq.answer
      }));
    }
  }

  return (
    <main className="relative min-h-screen font-sans bg-white flex flex-col">
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
                    <span className="text-primary">Development</span>
                    <br className="hidden md:block" />
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
          />
        )}
        
        {aboutTitle && aboutParagraphs.length > 0 && (
          <AboutInfo
            title={aboutTitle}
            paragraphs={aboutParagraphs}
            imageSrc={aboutImage}
            imageAlt={aboutTitle}
            buttonText={aboutButtonText}
          />
        )}
        
        <Awards />
        <ProcessSteps />
        
        {whyChooseReasons.length > 0 && (
          <WhyChooseUs
            title={whyChooseTitle}
            reasons={whyChooseReasons}
          />
        )}
        
        <Portfolio />
        
        {solutionCards.length > 0 && (
          <SolutionCards
            title={solutionTitle}
            subtitle={solutionSubtitle}
            cards={solutionCards}
            isDark={false}
          />
        )}
        
        <CallToAction
          title={<>Ready to Dominate the <br className="hidden md:block" /> Market?</>}
          description="We Build Custom Apps That Boost Orders, Retain Customers, And Help You Scale Your Business Faster."
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
        
        <Blog />
      </div>
      <Footer />
    </main>
  );
}
