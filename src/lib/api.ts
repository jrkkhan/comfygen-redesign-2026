import qs from 'qs';
import { safeFetch } from "@/lib/http/fetcher";

/**
 * Helper function to fetch data from the CMS (Strapi).
 * @param path - The API endpoint path (e.g., '/mobile-app-development')
 * @param urlParamsObject - Object containing query parameters to be stringified by qs
 * @param options - Additional fetch options (e.g., { cache: 'no-store' })
 */
export async function fetchAPI(path: string, urlParamsObject = {}) {
  try {
    // Stringify the URL params using qs
    const queryString = qs.stringify(urlParamsObject, {
      encodeValuesOnly: true, // encode only the values to keep the brackets clean (optional but good practice for Strapi)
    });

    const isDev = process.env.NODE_ENV === 'development';
    const baseUrl = isDev ? 'http://localhost:3000' : 'https://redesign.jamsara.com';

    // Build the request URL
    const requestUrl = `${baseUrl}/api${path}${queryString ? `?${queryString}` : ''}`;
    console.log("Fetching Strapi URL:", requestUrl);
    console.log("Using Token:", process.env.STRAPI_API_TOKEN ? "Token exists" : "NO TOKEN!");

    // Make the fetch request
    const response = await fetch(requestUrl, {
      next: { revalidate: 60 }, // Reduced to 1-minute ISR to see updates faster
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 400 || response.status === 404 || response.status === 502) {
        return null;
      }
      const errorText = await response.text();
      console.error(`Strapi Error (${response.status}):`, errorText);
      throw new Error(`Error fetching from CMS: ${response.statusText}. Details: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("fetchAPI Error:", error);
    return null;
  }
}

import { getPageDataBySlugService } from "@/lib/services/pageService";
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
        SolutionAboutSection: { populate: { stats: { populate: '*' } } },
        ModulesSection: { populate: { appModuleItems: { populate: '*' } } },
        ProblemsSection: { populate: { items: { populate: '*' } } },
        OfferingsSection: { populate: { items: { populate: '*' } } },
        SolutionServiceSection: { populate: { card: { populate: '*' } } },
        TechFeaturesSection: { populate: { items: { populate: '*' } } },
        ClonesSection: { populate: { CloneItems: { populate: ['image', 'Image'] } } },
        clonesSection: { populate: { cloneItems: { populate: ['image', 'Image'] } } },
        PricingSection: { populate: { items: { populate: '*' } } },
        faqSection: { populate: { faqdata: { populate: '*' } } }
      },
    });

    if (!response || !response.data || response.data.length === 0) {
      console.log(`No solution found for slug: ${slug}, falling back to mock data for development.`);
      return null;
    }

    const strapiData = response.data[0].attributes || response.data[0]; // handles Strapi v4 vs v5 struct

    return mapStrapiSolutionData(strapiData);
  } catch (error) {
    console.error("Error fetching Strapi solution data:", error);
    return null;
  }
}

export const getMediaUrl = (url: string | undefined | null) => {
  if (!url) return undefined;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `https://cms.comfygen.com${url}`;
};

export function mapStrapiSolutionData(strapiData: any): SolutionPageData | null {
  try {
    if (!strapiData) return null;

    // Helper to extract items from repeatable components
    const extractItems = (items: any[]) => {
      if (!items || !Array.isArray(items)) return [];
      return items;
    };

    // Construct the final mapped object matching our SolutionPageData schema
    const mappedData: SolutionPageData = {
      author: strapiData.author || null,
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
        badgeText: strapiData.SolutionHeroSection?.badgeText || mockSolutionData.heroSection.badgeText,
        titlePreHighlight: strapiData.SolutionHeroSection?.titlePreHighlight || mockSolutionData.heroSection.titlePreHighlight,
        highlightText: strapiData.SolutionHeroSection?.highlightText || mockSolutionData.heroSection.highlightText,
        titlePostHighlight: strapiData.SolutionHeroSection?.titlePostHighlight || mockSolutionData.heroSection.titlePostHighlight,
        description: strapiData.SolutionHeroSection?.description || mockSolutionData.heroSection.description,
      },

      aboutSection: {
        title: strapiData.SolutionAboutSection?.title || mockSolutionData.aboutSection.title,
        paragraph: strapiData.SolutionAboutSection?.paragraph || mockSolutionData.aboutSection.paragraph,
        bullets: strapiData.SolutionAboutSection?.bullets || mockSolutionData.aboutSection.bullets,
        image: getMediaUrl(strapiData.SolutionAboutSection?.image?.data?.attributes?.url || strapiData.SolutionAboutSection?.image?.url),
        buttontext: strapiData.SolutionAboutSection?.buttontext,
        buttonLink: strapiData.SolutionAboutSection?.buttonLink,
        stats: extractItems(strapiData.SolutionAboutSection?.stats).length > 0
          ? extractItems(strapiData.SolutionAboutSection?.stats).map((stat: any) => ({
            label: stat.title || stat.label || "",
            value: stat.description || stat.value || "",
          }))
          : mockSolutionData.aboutSection.stats,
      },

      servicesSection: {
        heading: strapiData.SolutionServiceSection?.heading || "Mobile and Web App Development Services",
        subtitle: strapiData.SolutionServiceSection?.subtitle || "Our Skilled Developers Build AI-Powered Apps With Modern Frameworks To Enhance Business Performance.",
        items: extractItems(strapiData.SolutionServiceSection?.items || strapiData.SolutionServiceSection?.card).length > 0
          ? extractItems(strapiData.SolutionServiceSection?.items || strapiData.SolutionServiceSection?.card)
          : [],
      },

      modulesSection: {
        heading: strapiData.ModulesSection?.heading || mockSolutionData.modulesSection.heading,
        subHeading: strapiData.ModulesSection?.subHeading || mockSolutionData.modulesSection.subHeading,
        items: extractItems(strapiData.ModulesSection?.appModuleItems).length > 0
          ? extractItems(strapiData.ModulesSection?.appModuleItems).map((item: any) => ({
            id: item.tab || item.tabname || "default",
            label: item.tabname || item.tab || "Tab",
            shortLabel: item.tabname || item.tab || "Tab",
            icon: item.tabicon || "",
            features: item.features || [],
            buttontext: item.buttontext || "Request Full Demo",
            buttonlink: item.buttonlink || "#",
            image: getMediaUrl(item.image?.data?.[0]?.attributes?.url || item.image?.data?.attributes?.url) || undefined
          }))
          : mockSolutionData.modulesSection.items,
      },

      problemsSection: {
        heading: strapiData.ProblemsSection?.heading || mockSolutionData.problemsSection.heading,
        subHeading: strapiData.ProblemsSection?.subHeading || mockSolutionData.problemsSection.subHeading,
        items: extractItems(strapiData.ProblemsSection?.items).length > 0
          ? extractItems(strapiData.ProblemsSection?.items).map((item: any) => ({
            title: item.title || "",
            problem: item.disc || item.problem || "",
            solution: item.Solution || item.solution || "",
            icon: item.icon || "",
          }))
          : mockSolutionData.problemsSection.items,
      },

      offeringsSection: {
        heading: strapiData.OfferingsSection?.heading || mockSolutionData.offeringsSection.heading,
        subHeading: strapiData.OfferingsSection?.subHeading || mockSolutionData.offeringsSection.subHeading,
        items: extractItems(strapiData.OfferingsSection?.items).length > 0
          ? extractItems(strapiData.OfferingsSection?.items)
          : mockSolutionData.offeringsSection.items,
      },

      techFeaturesSection: {
        heading: strapiData.TechFeaturesSection?.heading || mockSolutionData.techFeaturesSection.heading,
        subHeading: strapiData.TechFeaturesSection?.subHeading || mockSolutionData.techFeaturesSection.subHeading,
        items: extractItems(strapiData.TechFeaturesSection?.items).length > 0
          ? extractItems(strapiData.TechFeaturesSection?.items)
          : mockSolutionData.techFeaturesSection.items,
      },

      clonesSection: {
        heading: (strapiData.ClonesSection || strapiData.clonesSection)?.heading || mockSolutionData.clonesSection.heading,
        subHeading: (strapiData.ClonesSection || strapiData.clonesSection)?.disc || (strapiData.ClonesSection || strapiData.clonesSection)?.subHeading || mockSolutionData.clonesSection.subHeading,
        items: extractItems((strapiData.ClonesSection || strapiData.clonesSection)?.CloneItems || (strapiData.ClonesSection || strapiData.clonesSection)?.cloneItems || (strapiData.ClonesSection || strapiData.clonesSection)?.items).length > 0
          ? extractItems((strapiData.ClonesSection || strapiData.clonesSection)?.CloneItems || (strapiData.ClonesSection || strapiData.clonesSection)?.cloneItems || (strapiData.ClonesSection || strapiData.clonesSection)?.items).map((item: any) => ({
            name: item.tab || item.name || item.tabName || "Clone",
            description: item.description || item.disc || "",
            image: getMediaUrl(item.image?.data?.[0]?.attributes?.url || item.image?.data?.attributes?.url || item.image?.url || item.image || item.Image?.data?.[0]?.attributes?.url || item.Image?.data?.attributes?.url || item.Image?.url || item.Image)
          }))
          : mockSolutionData.clonesSection.items,
        mockup: (strapiData.ClonesSection || strapiData.clonesSection)?.mockup || mockSolutionData.clonesSection.mockup,
      },

      pricingSection: {
        heading: strapiData.PricingSection?.heading || mockSolutionData.pricingSection.heading,
        subHeading: strapiData.PricingSection?.subHeading || mockSolutionData.pricingSection.subHeading,
        items: extractItems(strapiData.PricingSection?.items).length > 0
          ? extractItems(strapiData.PricingSection?.items)
          : mockSolutionData.pricingSection.items,
      },

      faqSection: {
        heading: Array.isArray(strapiData.faqSection) ? mockSolutionData.faqSection.heading : (strapiData.faqSection?.heading || mockSolutionData.faqSection.heading),
        subHeading: Array.isArray(strapiData.faqSection) ? mockSolutionData.faqSection.subHeading : (strapiData.faqSection?.subHeading || mockSolutionData.faqSection.subHeading),
        items: Array.isArray(strapiData.faqSection)
          ? strapiData.faqSection.map((faq: any) => ({
            question: faq.quz || faq.question || "",
            answer: faq.answer || ""
          }))
          : (strapiData.faqSection?.items || strapiData.faqSection?.faqdata)?.length > 0
            ? (strapiData.faqSection?.items || strapiData.faqSection?.faqdata).map((faq: any) => ({
              question: faq.quz || faq.question || "",
              answer: faq.answer || ""
            }))
            : (strapiData.faqSection?.quz || strapiData.faqSection?.answer)
              ? [{ question: strapiData.faqSection.quz || "", answer: strapiData.faqSection.answer || "" }]
              : mockSolutionData.faqSection.items,
      },
      demoVideo: strapiData.demoVideo?.videolink ? {
        title: strapiData.demoVideo.title || "Watch Demo",
        videoUrl: strapiData.demoVideo.videolink,
        thumbnailUrl: "/images/hero/hero-right-side-main.webp",
      } : undefined,
    };

    return mappedData;
  } catch (error) {
    console.error("Error mapping Strapi solution data:", error);
    return null;
  }
}
