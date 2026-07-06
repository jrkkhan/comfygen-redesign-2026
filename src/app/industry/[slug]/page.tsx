import React from 'react';

import { notFound } from 'next/navigation';
import { DynamicFAQSchema } from "@/components/common/DynamicFAQSchema";
import { Header } from '@/components/common/Header';
import { HeroSectionThree } from '@/components/common/solution/HeroSectionThree';
import { HeroBentoGrid } from '@/components/common/solution/HeroBentoGrid';
import { megaMenuData } from '@/data/megaMenuData';
import { fetchAPI } from '@/lib/api';
import type { Metadata, ResolvingMetadata } from 'next';

// Generic Common Components
import { Services } from '@/components/common/Services';
import { AboutInfo } from '@/components/common/AboutInfo';
import { WhyChooseUs } from '@/components/common/WhyChooseUs';
import { ProcessSteps } from '@/components/common/ProcessSteps';
import { Portfolio } from '@/components/common/Portfolio';
import { Testimonials } from '@/components/common/Testimonials';
import { FAQ } from '@/components/common/FAQ';
import { Blog } from '@/components/common/Blog';
import { Footer } from '@/components/common/Footer';

// Advanced/Solution Specific Components
import { SolutionAboutInfo } from '@/components/common/solution/SolutionAboutInfo';
import { SolutionOfferings } from '@/components/common/solution/SolutionOfferings';
import { ProblemStatement } from '@/components/common/solution/ProblemStatement';
import { IndustryModulesTab } from '@/components/common/industry/IndustryModulesTab';
import { AdvancedTechFeatures } from '@/components/common/solution/AdvancedTechFeatures';
import { Awards } from '@/components/common/Awards';
import { TechStack } from '@/components/common/TechStack';


export async function generateStaticParams() {
  const allIndustryLinks = megaMenuData.industries.flatMap(cat => cat.links);
  return allIndustryLinks.map((link) => {
    const slug = link.href.split('/').pop();
    return { slug };
  });
}

// Fetch industry data from Strapi API
async function getIndustryDataFromAPI(slug: string) {
  const response = await fetchAPI('/industries', {
    filters: { slug: { $eq: slug } },
    populate: {
      IndustryHeroSection: { populate: '*' },
      IndustryServiceSection: { populate: '*' },
      IndustryAboutSection: { populate: '*' },
      IndustryModulesSection: { populate: '*' },
      IndustryOfferingsSection: { populate: '*' },
      IndustryProblemsSection: { populate: '*' },
      IndustryTechFeaturesSection: { populate: '*' },
      faqSection: { populate: '*' },
      Seo: { populate: '*' }
    }
  });

  if (response?.data) {
    if (Array.isArray(response.data)) {
      return response.data.length > 0 ? response.data[0] : null;
    }
    return response.data;
  }
  return null;
}

// Dynamically generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }, parent: ResolvingMetadata): Promise<Metadata> {
  const { slug } = await params;
  const industryData = await getIndustryDataFromAPI(slug);

  const seo = Array.isArray(industryData?.Seo) ? industryData.Seo[0] : industryData?.Seo;

  if (seo) {
    return {
      title: seo.metaTitle || industryData?.title || `${slug.replace(/-/g, ' ').toUpperCase()} | Comfygen`,
      description: seo.metaDescription,
      keywords: seo.keywords,
      alternates: seo.canonicalURL ? { canonical: seo.canonicalURL } : undefined,
      robots: seo.metaRobots,
      openGraph: {
        title: seo.metaTitle || industryData?.title,
        description: seo.metaDescription,
        url: `https://www.comfygen.com/industry/${slug}`,
        siteName: 'Comfygen',
        type: 'website',
      },
    };
  }

  return {
    title: industryData?.title ? `${industryData.title} | Comfygen` : 'Industry Solutions | Comfygen',
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industryData = await getIndustryDataFromAPI(slug);

  if (!industryData) {
    notFound();
  }

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
