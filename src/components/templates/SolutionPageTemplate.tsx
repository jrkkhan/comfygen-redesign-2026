import React from 'react';
import parse from 'html-react-parser';
import dynamic from 'next/dynamic';
import { Header } from "@/components/common/Header";
import { HeroSectionThree } from "@/components/common/solution/HeroSectionThree";
import { HeroBentoGrid } from "@/components/common/solution/HeroBentoGrid";

// Dynamic imports
const DynamicFAQSchema = dynamic(() => import('@/components/common/DynamicFAQSchema').then(mod => mod.DynamicFAQSchema));
const ProblemStatement = dynamic(() => import('@/components/common/solution/ProblemStatement').then(mod => mod.ProblemStatement));
const SolutionAboutInfo = dynamic(() => import('@/components/common/solution/SolutionAboutInfo').then(mod => mod.SolutionAboutInfo));
const AdvancedTechFeatures = dynamic(() => import('@/components/common/solution/AdvancedTechFeatures').then(mod => mod.AdvancedTechFeatures));
const SolutionOfferings = dynamic(() => import('@/components/common/solution/SolutionOfferings').then(mod => mod.SolutionOfferings));
const Portfolio = dynamic(() => import('@/components/common/Portfolio').then(mod => mod.Portfolio));
const Services = dynamic(() => import('@/components/common/Services').then(mod => mod.Services));
const AppModulesTab = dynamic(() => import('@/components/common/solution/AppModulesTab').then(mod => mod.AppModulesTab));
const PricingTable = dynamic(() => import('@/components/common/solution/PricingTable').then(mod => mod.PricingTable));
const CloneSolutions = dynamic(() => import('@/components/common/solution/CloneSolutions').then(mod => mod.CloneSolutions));
const TechStack = dynamic(() => import('@/components/common/TechStack').then(mod => mod.TechStack));
const Blog = dynamic(() => import('@/components/common/Blog').then(mod => mod.Blog));
const FAQ = dynamic(() => import('@/components/common/FAQ').then(mod => mod.FAQ));
const Footer = dynamic(() => import('@/components/common/Footer').then(mod => mod.Footer));
const ProcessSteps = dynamic(() => import('@/components/common/ProcessSteps').then(mod => mod.ProcessSteps));
const WhyChooseUs = dynamic(() => import('@/components/common/WhyChooseUs').then(mod => mod.WhyChooseUs));

interface SolutionPageTemplateProps {
  slug: string;
  solutionData: any;
}

export function SolutionPageTemplate({ slug, solutionData }: SolutionPageTemplateProps) {
  const { 
    heroSection, 
    servicesSection,
    aboutSection, 
    modulesSection, 
    problemsSection, 
    offeringsSection, 
    techFeaturesSection, 
    clonesSection, 
    pricingSection, 
    faqSection 
  } = solutionData;

  return (
    <main className="min-h-screen bg-white">
      <DynamicFAQSchema faqs={faqSection?.items || []} />
      {/* Dark Hero Section Container matching other pages but with solution gradient */}
      <div 
        className="relative min-h-screen overflow-hidden flex flex-col z-[100]"
        style={{ backgroundImage: "radial-gradient(circle, rgba(102, 68, 227, 0.2) 0%, rgba(2, 6, 23, 1) 16%, rgba(2, 6, 23, 1) 81%, rgba(1, 88, 230, 0.2) 100%)", backgroundColor: "#020617" }}
      >

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col flex-1">
          <Header theme="dark" />
          <div className="flex-1 flex flex-col justify-center">
            <HeroSectionThree 
              badgeText={heroSection?.badgeText}
              title={
                <span>
                  {heroSection?.titlePreHighlight && heroSection?.highlightText && heroSection?.titlePostHighlight ? (
                    parse(`${heroSection.titlePreHighlight} <span class="text-[#0158e6]">${heroSection.highlightText}</span> ${heroSection.titlePostHighlight}`)
                  ) : (
                    heroSection?.title || slug.replace(/-/g, ' ').toUpperCase()
                  )}
                </span>
              }
              description={heroSection?.description}
              primaryButtonText="Book a Free Demo"
              primaryButtonLink="/contact-us"
              secondaryButtonText="Explore Features"
              secondaryButtonLink="#services"
              rightContent={<HeroBentoGrid />}
            />
          </div>
        </div>
      </div>

      {/* Common Services Component */}
      <Services 
        title={servicesSection?.heading}
        subtitle={servicesSection?.subtitle}
        services={servicesSection?.items?.length > 0 ? servicesSection.items : undefined}
      />

      {/* 2. About info with bullet */}
      <SolutionAboutInfo 
        title={aboutSection?.title}
        description={aboutSection?.paragraph}
        bulletPoints={aboutSection?.bullets}
      />

      {/* 3. App Modules */}
      <AppModulesTab sectionData={modulesSection} />

      {/* 4. Mazor problem */}
      <ProblemStatement sectionData={problemsSection} />

      {/* 5. Solutions we offers */}
      <SolutionOfferings sectionData={offeringsSection} />
      
      {/* 7. Emerging Technologies (AI & Security) */}
      <AdvancedTechFeatures sectionData={techFeaturesSection} />

      {/* 8. Cost / Pricing Table */}
      <PricingTable sectionData={pricingSection} />

      {/* 10. Why Choose Us */}
      <WhyChooseUs />

      {/* --- Common Sections --- */}

      {/* 11. Clone App Solutions */}
      <CloneSolutions sectionData={clonesSection} />

      {/* 12. Development Process */}
      <ProcessSteps pageName={slug.replace(/-/g, ' ')} />

      {/* 13. Tech Stack */}
      <TechStack />

      {/* 13. Portfolio / Case Studies */}
      <Portfolio />

      {/* 14. FAQs */}
      <FAQ 
        title={faqSection?.heading || "Frequently Asked Questions"}
        description={faqSection?.subHeading || "Got questions? We have answers."}
        faqs={faqSection?.items || []}
      />

      {/* 15. Blog Section */}
      <Blog searchTerm={slug.replace(/-/g, ' ')} />

      <Footer />
    </main>
  );
}
