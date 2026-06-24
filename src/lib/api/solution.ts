import { fetchAPI } from "../api";
import { SolutionPageData } from "@/types/solution";
import { mockSolutionData } from "@/data/mockSolution";

// Define a type for Strapi's dynamic zone component responses
interface StrapiComponent {
  __component: string;
  [key: string]: any;
}

export async function fetchSolutionData(slug: string): Promise<SolutionPageData | null> {
  try {
    // We populate deep to get all nested dynamic zones and repeatable components
    // If strapi-plugin-populate-deep is not installed, we'll need to write out explicit populate params
    const response = await fetchAPI('/solutions', {
      filters: { slug: { $eq: slug } },
      populate: {
        seo: { populate: '*' },
        SolutionHeroSection: { populate: '*' },
        SolutionAboutSection: { populate: '*' },
        SolutionModulesSection: { populate: '*' },
        SolutionProblemsSection: { populate: '*' },
        SolutionOfferingsSection: { populate: '*' },
        SolutionTechFeaturesSection: { populate: '*' },
        SolutionClonesSection: { populate: '*' },
        SolutionPricingSection: { populate: '*' },
        faqSection: { populate: '*' }
      }, 
    });

    if (!response || !response.data || response.data.length === 0) {
      console.log(`No solution found for slug: ${slug}, falling back to mock data for development.`);
      return null;
    }

    const strapiData = response.data[0].attributes || response.data[0]; // handles Strapi v4 vs v5 struct

    // Helper to find a specific component in the Strapi response
    // Since each section is its own Dynamic Zone, Strapi usually returns it as an array.
    const getComponentData = (dynamicZoneArray: StrapiComponent[] | undefined) => {
      if (!dynamicZoneArray || !Array.isArray(dynamicZoneArray) || dynamicZoneArray.length === 0) return undefined;
      return dynamicZoneArray[0];
    };

    // Helper to extract items from repeatable components
    const extractItems = (items: any[]) => {
      if (!items || !Array.isArray(items)) return [];
      return items;
    };

    // Construct the final mapped object matching our SolutionPageData schema
    const mappedData: SolutionPageData = {
      seo: {
        title: strapiData.seo?.title || mockSolutionData.seo.title,
        description: strapiData.seo?.description || mockSolutionData.seo.description,
        keywords: strapiData.seo?.keywords || mockSolutionData.seo.keywords,
        metaRobots: strapiData.seo?.metaRobots,
        canonicalURL: strapiData.seo?.canonicalURL,
        structuredData: strapiData.seo?.structuredData,
        metaImage: strapiData.seo?.metaImage || strapiData.seo?.shareImage,
      },
      
      heroSection: {
        badgeText: getComponentData(strapiData.SolutionHeroSection)?.badgeText || mockSolutionData.heroSection.badgeText,
        titlePreHighlight: getComponentData(strapiData.SolutionHeroSection)?.titlePreHighlight || mockSolutionData.heroSection.titlePreHighlight,
        highlightText: getComponentData(strapiData.SolutionHeroSection)?.highlightText || mockSolutionData.heroSection.highlightText,
        titlePostHighlight: getComponentData(strapiData.SolutionHeroSection)?.titlePostHighlight || mockSolutionData.heroSection.titlePostHighlight,
        description: getComponentData(strapiData.SolutionHeroSection)?.description || mockSolutionData.heroSection.description,
      },

      aboutSection: {
        title: getComponentData(strapiData.SolutionAboutSection)?.title || mockSolutionData.aboutSection.title,
        paragraph: getComponentData(strapiData.SolutionAboutSection)?.paragraph || mockSolutionData.aboutSection.paragraph,
        bullets: getComponentData(strapiData.SolutionAboutSection)?.bullets || mockSolutionData.aboutSection.bullets,
        stats: extractItems(getComponentData(strapiData.SolutionAboutSection)?.stats).length > 0 
          ? extractItems(getComponentData(strapiData.SolutionAboutSection)?.stats).map((stat: any) => ({
              label: stat.title || stat.label || "", // Mapping Strapi's 'title' to 'label'
              value: stat.description || stat.value || "", // Mapping Strapi's 'description' to 'value'
            })) 
          : mockSolutionData.aboutSection.stats,
      },

      modulesSection: {
        heading: getComponentData(strapiData.SolutionModulesSection)?.heading || mockSolutionData.modulesSection.heading,
        subHeading: getComponentData(strapiData.SolutionModulesSection)?.subHeading || mockSolutionData.modulesSection.subHeading,
        items: extractItems(getComponentData(strapiData.SolutionModulesSection)?.items).length > 0 
          ? extractItems(getComponentData(strapiData.SolutionModulesSection)?.items) 
          : mockSolutionData.modulesSection.items,
      },

      problemsSection: {
        heading: getComponentData(strapiData.SolutionProblemsSection)?.heading || mockSolutionData.problemsSection.heading,
        subHeading: getComponentData(strapiData.SolutionProblemsSection)?.subHeading || mockSolutionData.problemsSection.subHeading,
        items: extractItems(getComponentData(strapiData.SolutionProblemsSection)?.items).length > 0
          ? extractItems(getComponentData(strapiData.SolutionProblemsSection)?.items)
          : mockSolutionData.problemsSection.items,
      },

      offeringsSection: {
        heading: getComponentData(strapiData.SolutionOfferingsSection)?.heading || mockSolutionData.offeringsSection.heading,
        subHeading: getComponentData(strapiData.SolutionOfferingsSection)?.subHeading || mockSolutionData.offeringsSection.subHeading,
        items: extractItems(getComponentData(strapiData.SolutionOfferingsSection)?.items).length > 0
          ? extractItems(getComponentData(strapiData.SolutionOfferingsSection)?.items)
          : mockSolutionData.offeringsSection.items,
      },

      techFeaturesSection: {
        heading: getComponentData(strapiData.SolutionTechFeaturesSection)?.heading || mockSolutionData.techFeaturesSection.heading,
        subHeading: getComponentData(strapiData.SolutionTechFeaturesSection)?.subHeading || mockSolutionData.techFeaturesSection.subHeading,
        items: extractItems(getComponentData(strapiData.SolutionTechFeaturesSection)?.items).length > 0
          ? extractItems(getComponentData(strapiData.SolutionTechFeaturesSection)?.items)
          : mockSolutionData.techFeaturesSection.items,
      },

      clonesSection: {
        heading: getComponentData(strapiData.SolutionClonesSection)?.heading || mockSolutionData.clonesSection.heading,
        subHeading: getComponentData(strapiData.SolutionClonesSection)?.subHeading || mockSolutionData.clonesSection.subHeading,
        items: extractItems(getComponentData(strapiData.SolutionClonesSection)?.items).length > 0
          ? extractItems(getComponentData(strapiData.SolutionClonesSection)?.items)
          : mockSolutionData.clonesSection.items,
        mockup: getComponentData(strapiData.SolutionClonesSection)?.mockup || mockSolutionData.clonesSection.mockup,
      },

      pricingSection: {
        heading: getComponentData(strapiData.SolutionPricingSection)?.heading || mockSolutionData.pricingSection.heading,
        subHeading: getComponentData(strapiData.SolutionPricingSection)?.subHeading || mockSolutionData.pricingSection.subHeading,
        items: extractItems(getComponentData(strapiData.SolutionPricingSection)?.items).length > 0
          ? extractItems(getComponentData(strapiData.SolutionPricingSection)?.items)
          : mockSolutionData.pricingSection.items,
      },

      faqSection: {
        heading: strapiData.faqSection?.[0]?.heading || mockSolutionData.faqSection.heading,
        subHeading: strapiData.faqSection?.[0]?.subHeading || mockSolutionData.faqSection.subHeading,
        items: strapiData.faqSection?.[0]?.faqdata?.length > 0
          ? strapiData.faqSection[0].faqdata.map((faq: any) => ({
              question: faq.quz || faq.question || "",
              answer: faq.answer || ""
            }))
          : mockSolutionData.faqSection.items,
      },
    };

    return mappedData;
  } catch (error) {
    console.error("Error mapping Strapi solution data:", error);
    return null;
  }
}
