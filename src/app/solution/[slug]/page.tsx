import React from 'react';
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { HeroSectionThree } from "@/components/common/solution/HeroSectionThree";
import { HeroBentoGrid } from "@/components/common/solution/HeroBentoGrid";
import { ProblemStatement } from "@/components/common/solution/ProblemStatement";
import { SolutionAboutInfo } from "@/components/common/solution/SolutionAboutInfo";
import { AppModulesTab } from "@/components/common/solution/AppModulesTab";
import { AdvancedTechFeatures } from "@/components/common/solution/AdvancedTechFeatures";
import { SolutionOfferings } from "@/components/common/solution/SolutionOfferings";
import { ProcessSteps } from "@/components/common/ProcessSteps";
import { FAQ } from "@/components/common/FAQ";
import { PricingTable } from "@/components/common/solution/PricingTable";
import { TechStack } from "@/components/common/TechStack";
import { WhyChooseUs } from "@/components/common/WhyChooseUs";
import { CloneSolutions } from "@/components/common/solution/CloneSolutions";
import { Portfolio } from "@/components/common/Portfolio";
import { Metadata } from 'next';
import { fetchSolutionData } from "@/lib/api/solution";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: 'Food Delivery App Development Company | Custom & White-Label',
  description: 'Launch a complete food delivery ecosystem with our custom, scalable, and white-label food delivery app development solutions for iOS and Android.',
};

export default async function SolutionPage({ params }: { params: { slug: string } }) {
  // Wait for the slug to be resolved
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Fetch data from Strapi API
  const solutionData = await fetchSolutionData(slug);

  if (!solutionData) {
    // If no data and fallback failed, show 404
    notFound();
  }
  
  // Dummy data for Process Steps
  const processStepsData = [
    { id: "01", title: "Market Research & Strategy", desc: "We analyze your target audience and local competitors." },
    { id: "02", title: "UI/UX Design", desc: "Creating intuitive designs for Users, Drivers, and Restaurants." },
    { id: "03", title: "App Development", desc: "Building the apps with scalable, secure, and robust technology." },
    { id: "04", title: "Testing & QA", desc: "Rigorous testing to ensure zero bugs and high performance." },
    { id: "05", title: "Launch & Deployment", desc: "Publishing the apps on App Store and Google Play Store." },
    { id: "06", title: "Maintenance & Support", desc: "Post-launch support to keep your app updated and secure." }
  ];



  const { 
    heroSection, 
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
      {/* Absolute Header to overlap with Hero's dark background */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Header theme="dark" />
      </div>
      
      <HeroSectionThree 
        badgeText={heroSection.badgeText}
        title={
          <span dangerouslySetInnerHTML={{ __html: `${heroSection.titlePreHighlight} <span class="text-[#0158e6]">${heroSection.highlightText}</span> ${heroSection.titlePostHighlight}` }} />
        }
        description={heroSection.description}
        primaryButtonText="Book a Free Demo"
        secondaryButtonText="Explore Features"
        rightContent={<HeroBentoGrid />}
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
      <ProcessSteps 
        title="Our Food Delivery App Development Process"
        subtitle="A streamlined, agile approach to bring your idea to the market faster."
        steps={processStepsData}
      />

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

      <Footer />
    </main>
  );
}
