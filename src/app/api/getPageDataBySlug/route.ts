import { NextRequest } from "next/server";
import { success, failure } from "@/lib/utils/apiResponse";
import { safeFetch } from "@/lib/http/fetcher";
// import { getOrSetCache } from "@/lib/redis/cache";

const strApiBaseUrl: string = "https://cms.comfygen.com/api";

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
      params.append(`populate[${field.trim()}][populate]`, "*");
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
    if (value !== null && typeof value === "object") {
      populate.push(key);
    }
  }
  return populate;
}

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get("category");
  const slug = req.nextUrl.searchParams.get("slug");
  const meta = req.nextUrl.searchParams.get("meta");

  if (!slug || !category) {
    return failure(`Query param 'slug': ${slug} and 'category': ${category} is required`, 400);
  }


  // const fetchFunc = () => {
  //   return safeFetch(url, { timeoutMs: 8000 });
  // }

  // const redisKey: string = `${category}:${slug}:${query}`;

  try {
    // const resDat: unknown = await getOrSetCache(
    //   redisKey,
    //   5 * 60,
    //   fetchFunc
    // );


    const populateFieldsData: any = await safeFetch(`${strApiBaseUrl}/${category}?filters[slug][$eq]=${slug}&populate=*`, { timeoutMs: 8000 });
    const validData = populateFieldsData?.data?.[0] || { error: true, message: "invalid request", statusCode: 404 };
    if (validData?.statusCode === 404) {
      return failure("invalid request", 400);
    }
    if (meta === "meta") {
      const dataToReuturn = projectionData(validData);
      return success(dataToReuturn);
    }
    const populateFields = populateFieldsFunc(validData) || "";
    const { url } = buildUrlFromQuery({ slug, category, populate: populateFields });

    const resData: any = await safeFetch(url, { timeoutMs: 8000 });
    const data: any = resData?.data?.[0] || { error: true, message: "invalid request", statusCode: 404 };
    // const data: unknown = resData?.data?.data?.[0] || { error: true, message: "invalid request", statusCode: 404 };
    if (data?.statusCode === 404) {
      return failure("invalid request", 400);
    }

    const dataToReuturn = projectionData(data);

    return success(dataToReuturn);
  } catch (err) {
    console.error("[getPageDataBySlug] error:", err);
    return failure("Failed to fetch data", 502);
  }
}