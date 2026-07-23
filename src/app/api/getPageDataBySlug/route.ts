import { NextRequest } from "next/server";
import { success, failure } from "@/lib/utils/apiResponse";
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
      
      // Deep populate for known nested repeatable components
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
        url: value.url ?? null,
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
    // Strapi throws 400 error if we try to populate JSON type fields
    if (key === "serviceScema" || key === "serviceSchema" || key === "structuredData") {
      continue;
    }
    if (value !== null && typeof value === "object") {
      populate.push(key);
    }
  }
  return populate;
}

const fetchCategoryData = async (category: string, slug: string, meta: string | null, fetchOptions: any) => {
  const populateFieldsData: any = await safeFetch(`${strApiBaseUrl}/${category}?filters[slug][$eq]=${slug}&populate=*`, fetchOptions);
  const validData = populateFieldsData?.data?.[0];

  if (!validData || validData?.error || validData?.statusCode === 404) {
    return null; // Not found in this category
  }

  if (meta === "meta") {
    return projectionData(validData);
  }

  const populateFields = populateFieldsFunc(validData) || "";
  const { url } = buildUrlFromQuery({ slug, category, populate: populateFields });
  console.log("Fetching Strapi URL from route.ts:", url);

  const resData: any = await safeFetch(url, fetchOptions);
  const data: any = resData?.data?.[0];

  if (!data || data?.error || data?.statusCode === 404) {
    return null;
  }

  return projectionData(data);
};

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get("category");
  const slug = req.nextUrl.searchParams.get("slug");
  const meta = req.nextUrl.searchParams.get("meta");

  if (!slug || !category) {
    return failure(`Query param 'slug': ${slug} and 'category': ${category} is required`, 400);
  }

  try {
    const fetchOptions = {
      timeoutMs: 20000,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    };

    if (category === "all") {
      const categoriesToSearch = ["pages", "solutions", "industries"];

      // Use Promise.any to resolve IMMEDIATELY when the first valid data is found.
      // It will throw an error only if all 3 collections return null (404).
      const promises = categoriesToSearch.map(cat =>
        fetchCategoryData(cat, slug, meta, fetchOptions).then(res => {
          if (res !== null) return { data: res, resolvedCategory: cat };
          throw new Error("Not found in this category");
        })
      );

      try {
        const resolvedResult = await Promise.any(promises);
        return success({ ...resolvedResult.data, resolvedCategory: resolvedResult.resolvedCategory });
      } catch (aggregateError) {
        // If Promise.any catches, it means all 3 promises threw an error (i.e., not found in any collection)
        return failure("invalid request", 400);
      }
    } else {
      const result = await fetchCategoryData(category, slug, meta, fetchOptions);
      if (result) {
        return success(result);
      }
      return failure("invalid request", 400);
    }
  } catch (err) {
    console.error("[getPageDataBySlug] error:", err);
    return failure("Failed to fetch data", 502);
  }
}