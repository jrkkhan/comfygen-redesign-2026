import { safeFetch } from "@/lib/http/fetcher";
// import { getOrSetCache } from "@/lib/redis/cache";

const strApiBaseUrl: string = "https://cms.comfygen.com/api";
// const strApiBaseUrl: string = "http://101.53.148.136:1337/api";

interface BuildUrlParams {
  category: string;
  slug: string;
  populate?: string[] | null;
}

interface BuildUrlParamsReturn {
  url: string;
  query: string;
}

const buildUrlFromQuery = ({ category, slug, populate }: BuildUrlParams): BuildUrlParamsReturn => {
  const params = new URLSearchParams();

  params.append("filters[slug][$eq]", slug);

  if (populate && populate.length > 0) {
    for (const field of populate) {
      const trimmedField = field.trim();
      
      if (trimmedField === 'ClonesSection') {
        params.append(`populate[${trimmedField}][populate][CloneItems][populate]`, "*");
      } else if (trimmedField === 'ModulesSection') {
        params.append(`populate[${trimmedField}][populate][appModuleItems][populate]`, "*");
      } else if (['ProblemsSection', 'OfferingsSection', 'TechFeaturesSection', 'PricingSection'].includes(trimmedField)) {
        params.append(`populate[${trimmedField}][populate][items][populate]`, "*");
      } else if (trimmedField === 'faqSection') {
        params.append(`populate[${trimmedField}][populate][faqdata][populate]`, "*");
        params.append(`populate[${trimmedField}][populate][items][populate]`, "*");
      } else if (trimmedField === 'SolutionServiceSection') {
        params.append(`populate[${trimmedField}][populate][card][populate]`, "*");
      } else {
        // Default populate
        params.append(`populate[${trimmedField}][populate]`, "*");
      }
    }
  }

  return {
    url: `${strApiBaseUrl}/${category}?${params.toString()}`,
    query: params?.toString()
  };
};

const removeFields = [
  "id",
  "documentId",
  "createdAt",
  "updatedAt",
  "publishedAt",
];

const projectionData = (data: unknown): unknown => {
  // Primitive values
  if (data === null || typeof data !== "object") {
    return data;
  }

  // Arrays
  if (Array.isArray(data)) {
    return data.map(projectionData);
  }

  const result: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(data)) {
    // Remove unwanted fields
    if (removeFields.includes(key)) {
      continue;
    }

    // Special handling for img
    if (
      key === "img" &&
      value &&
      typeof value === "object" &&
      !Array.isArray(value)
    ) {
      result.img = {
        url: (value as any).url ?? null,
      };
      continue;
    }

    // Recursively process nested values
    result[key] = projectionData(value);
  }

  return result;
};

const populateFieldsFunc = (data: unknown): string[] => {
  const populate: string[] = [];
  if (typeof data !== "object" || data === null) {
    return populate;
  }
  for (const [key, value] of Object.entries(data)) {
    if (value !== null && typeof value === "object") {
      populate.push(key);
    }
  }
  return populate;
}

export async function getPageDataBySlugService(category: string, slug: string) {
  try {
    const fetchOptions = {
      timeoutMs: 20000,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      }
    };

    const populateFieldsData: any = await safeFetch(`${strApiBaseUrl}/${category}?filters[slug][$eq]=${slug}&populate=*`, fetchOptions);
    const validData = populateFieldsData?.data?.[0] || { error: true, message: "invalid request", statusCode: 404 };

    if (validData?.statusCode === 404 || validData.error) {
      return { error: true, message: "invalid request", statusCode: 404 };
    }

    const populateFields = populateFieldsFunc(validData) || [];
    const { url } = buildUrlFromQuery({ slug, category, populate: populateFields });

    const resData: any = await safeFetch(url, fetchOptions);
    const data: any = resData?.data?.[0] || { error: true, message: "invalid request", statusCode: 404 };

    if (data?.statusCode === 404 || data.error) {
      return { error: true, message: "invalid request", statusCode: 404 };
    }

    const dataToReturn = projectionData(data);

    return { data: dataToReturn, error: false };
  } catch (err) {
    console.error("[getPageDataBySlugService] error:", err);
    return { error: true, message: "Failed to fetch data", statusCode: 502 };
  }
}

export async function getTestimonialsDataService() {
  try {
    const fetchOptions = {
      timeoutMs: 20000,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      }
    };

    const url = `${strApiBaseUrl}/testimonial?populate[reviewcards][populate]=*&populate[testimonialvideo][populate]=*`;
    const resData: any = await safeFetch(url, fetchOptions);
    const data: any = resData?.data || { error: true, message: "invalid request", statusCode: 404 };

    if (data?.statusCode === 404 || data.error) {
      return { error: true, message: "invalid request", statusCode: 404 };
    }

    const dataToReturn = projectionData(data);

    return { data: dataToReturn, error: false };
  } catch (err) {
    console.error("[getTestimonialsDataService] error:", err);
    return { error: true, message: "Failed to fetch data", statusCode: 502 };
  }
}

export async function getPortfoliosService() {
  try {
    const fetchOptions = {
      timeoutMs: 20000,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: { revalidate: 300 } // Cache portfolios for 5 minutes to keep speed blazing-fast!
    };

    const url = `${strApiBaseUrl}/portfolios?populate=*`;
    const resData: any = await safeFetch(url, fetchOptions);
    const data: any = resData?.data || [];

    if (resData?.error || !resData?.data) {
      console.error("[getPortfoliosService] error fetching portfolios:", resData);
      return { data: [], error: true };
    }

    const mapped = data.map((item: any) => {
      const attrs = item.attributes || item;
      const getMediaUrl = (media: any) => {
        if (!media) return "";
        const urlPath = media.url || media.data?.attributes?.url;
        if (!urlPath) return "";
        if (urlPath.startsWith("http")) return urlPath;
        return `https://cms.comfygen.com${urlPath}`;
      };

      return {
        id: attrs.slug || item.id?.toString() || "",
        title: attrs.title || "",
        desc: attrs.description || "",
        image: getMediaUrl(attrs.image),
        category: attrs.category || "All",
        clientName: attrs.clientName || "",
        duration: attrs.duration || "",
        technologies: attrs.technologies 
          ? attrs.technologies.split(',').map((t: string) => t.trim()) 
          : [],
        fullChallenge: attrs.fullChallenge || "",
        fullSolution: attrs.fullSolution || "",
        results: attrs.results 
          ? attrs.results.split('\n').map((r: string) => r.trim()).filter(Boolean) 
          : [],
        gallery: attrs.gallery?.data 
          ? attrs.gallery.data.map((g: any) => getMediaUrl(g.attributes || g)) 
          : []
      };
    });

    return { data: mapped, error: false };
  } catch (err) {
    console.error("[getPortfoliosService] error:", err);
    return { data: [], error: true };
  }
}
