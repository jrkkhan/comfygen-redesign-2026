import React from 'react';
import dynamic from 'next/dynamic';
import { Header } from '@/components/common/Header';
import { HeroSectionThree } from '@/components/common/solution/HeroSectionThree';
import { HeroBentoGrid } from '@/components/common/solution/HeroBentoGrid';

// Dynamic imports
const DynamicFAQSchema = dynamic(() => import('@/components/common/DynamicFAQSchema').then(mod => mod.DynamicFAQSchema));
const Services = dynamic(() => import('@/components/common/Services').then(mod => mod.Services));
// const AboutInfo = dynamic(() => import('@/components/common/AboutInfo').then(mod => mod.AboutInfo));
const WhyChooseUs = dynamic(() => import('@/components/common/WhyChooseUs').then(mod => mod.WhyChooseUs));
const ProcessSteps = dynamic(() => import('@/components/common/ProcessSteps').then(mod => mod.ProcessSteps));
const Portfolio = dynamic(() => import('@/components/common/Portfolio').then(mod => mod.Portfolio));
const Testimonials = dynamic(() => import('@/components/common/Testimonials').then(mod => mod.Testimonials));
const FAQ = dynamic(() => import('@/components/common/FAQ').then(mod => mod.FAQ));
const Blog = dynamic(() => import('@/components/common/Blog').then(mod => mod.Blog));
const Footer = dynamic(() => import('@/components/common/Footer').then(mod => mod.Footer));

const SolutionAboutInfo = dynamic(() => import('@/components/common/solution/SolutionAboutInfo').then(mod => mod.SolutionAboutInfo));
const SolutionOfferings = dynamic(() => import('@/components/common/solution/SolutionOfferings').then(mod => mod.SolutionOfferings));
const ProblemStatement = dynamic(() => import('@/components/common/solution/ProblemStatement').then(mod => mod.ProblemStatement));
const IndustryModulesTab = dynamic(() => import('@/components/common/industry/IndustryModulesTab').then(mod => mod.IndustryModulesTab));
const AdvancedTechFeatures = dynamic(() => import('@/components/common/solution/AdvancedTechFeatures').then(mod => mod.AdvancedTechFeatures));
const Awards = dynamic(() => import('@/components/common/Awards').then(mod => mod.Awards));
const TechStack = dynamic(() => import('@/components/common/TechStack').then(mod => mod.TechStack));

interface IndustryPageTemplateProps {
  slug: string;
  industryData: any;
}

export function IndustryPageTemplate({ slug, industryData }: IndustryPageTemplateProps) {
  const getSectionData = (section: any) => Array.isArray(section) ? section[0] : section;

  const heroSection = getSectionData(industryData.IndustryHeroSection);
  const aboutSection = getSectionData(industryData.IndustryAboutSection);
  const serviceSection = getSectionData(industryData.IndustryServiceSection);
  const offeringsSection = getSectionData(industryData.IndustryOfferingsSection);
  const problemsSection = getSectionData(industryData.IndustryProblemsSection);
  const modulesSection = getSectionData(industryData.IndustryModulesSection);
  const techFeaturesSection = getSectionData(industryData.IndustryTechFeaturesSection);
  const faqData = getSectionData(industryData.faqSection);

  return (
    <main className="relative min-h-screen font-sans bg-white flex flex-col">
      <DynamicFAQSchema faqs={faqData?.faqdata ? faqData.faqdata.map((faq: any) => ({ question: faq.quz, answer: faq.answer })) : []} />
      <div className="relative flex flex-col z-[100] min-h-screen lg:min-h-screen overflow-hidden bg-[#020617]">
        {/* Modern Glowing Gradient Blobs - Brand Theme */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `
            radial-gradient(circle at 20% 0%, rgba(1, 88, 230, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 100%, rgba(1, 88, 230, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(1, 88, 230, 0.03) 0%, transparent 60%)
          `
        }} />
        {/* Elegant Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <Header theme="dark" />
        <div className="flex-1 flex flex-col justify-center">
          {heroSection && (
            <HeroSectionThree
              badgeText={heroSection.badgeText}
              title={
                <span className="text-white">
                  {heroSection.titlePreHighlight} <span className="text-blue-500">{heroSection.highlightText}</span> {heroSection.titlePostHighlight}
                </span>
              }
              description={heroSection.description}
              primaryButtonText={heroSection.primaryButtonText || "Get a Quote"}
              primaryButtonLink={heroSection.primaryButtonLink || "/contact-us"}
              secondaryButtonText={heroSection.secondaryButtonText || "Explore Features"}
              secondaryButtonLink={heroSection.secondaryButtonLink || "#services"}
              rightContent={<HeroBentoGrid />}
            />
          )}
        </div>
      </div>

      <div className="flex-1">
        {aboutSection && (
          <SolutionAboutInfo
            title={aboutSection.title}
            paragraphs={aboutSection.paragraph ? aboutSection.paragraph.split('\n\n').filter((p: string) => p.trim() !== '') : []}
          />
        )}

        {serviceSection && (
          <Services
            title={serviceSection.heading}
            subtitle={serviceSection.subtitle}
            services={serviceSection.card}
          />
        )}

        {offeringsSection && (
          <SolutionOfferings sectionData={offeringsSection} />
        )}

        {problemsSection && (
          <ProblemStatement sectionData={problemsSection} />
        )}

        {/* Static sections that aren't mapped yet */}
        <Awards />

        {modulesSection && (
          <IndustryModulesTab sectionData={modulesSection} />
        )}

        {/* Static section */}
        <TechStack />
        <Portfolio />

        {techFeaturesSection && (
          <AdvancedTechFeatures sectionData={techFeaturesSection} />
        )}

        <ProcessSteps pageName={slug.replace(/-/g, ' ')} />
        <WhyChooseUs />
        <Testimonials />

        {faqData?.faqdata && (
          <FAQ faqs={faqData.faqdata.map((faq: any) => ({ question: faq.quz, answer: faq.answer }))} />
        )}

        <Blog searchTerm={slug.replace(/-/g, ' ')} />
      </div>
      <Footer />
    </main>
  );
}
