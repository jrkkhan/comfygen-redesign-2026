/**
 * Page utilities for dynamic routing and SEO
 */

// Constants for page categories
export const CATEGORIES = {
  PAGES: "pages",
  SOLUTIONS: "solutions",
  INDUSTRIES: "industries",
} as const;

export type Category = (typeof CATEGORIES)[keyof typeof CATEGORIES];

/**
 * Parse slug array into category and pageSlug
 * @param slug - Array of slug segments
 * @returns Object with category and pageSlug
 */
export function parseSlug(slug: string[] | undefined): {
  category: Category;
  pageSlug: string;
} {
  if (!slug || slug.length === 0) {
    return { category: CATEGORIES.PAGES, pageSlug: "" };
  }

  if (slug.length === 1) {
    return { category: CATEGORIES.PAGES, pageSlug: slug[0] };
  }

  return { category: slug[0] as Category, pageSlug: slug[1] };
}

/**
 * Format slug by replacing hyphens with spaces and converting to uppercase
 * @param slug - Slug to format
 * @returns Formatted slug
 */
export function formatSlug(slug: string): string {
  return slug.replace(/-/g, " ").toUpperCase();
}

/**
 * Extract SEO data from API response with fallback handling
 * @param data - API response data
 * @returns SEO data object
 */
export function extractSeoData(data: any) {
  return data?.attributes?.Seo ||
    data?.Seo ||
    data?.attributes?.seo ||
    data?.seo ||
    {};
}

/**
 * Generate fallback title
 * @param pageSlug - Page slug
 * @param category - Category name
 * @returns Generated title
 */
export function generateFallbackTitle(
  pageSlug: string,
  category: string = "services"
): string {
  return `${formatSlug(pageSlug)} | Comfygen`;
}

/**
 * Generate fallback description
 * @param pageSlug - Page slug
 * @param category - Category name
 * @returns Generated description
 */
export function generateFallbackDescription(
  pageSlug: string,
  category: string = "services"
): string {
  return `Leading ${pageSlug.replace(/-/g, " ")} ${category} by Comfygen.`;
}

/**
 * Map category to template component
 */
export const TEMPLATE_COMPONENTS = {
  [CATEGORIES.PAGES]: "ServicePageTemplate",
  [CATEGORIES.SOLUTIONS]: "SolutionPageTemplate",
  [CATEGORIES.INDUSTRIES]: "IndustryPageTemplate",
} as const;

/**
 * Get the canonical URL for a page
 * @param slug - Slug segments array
 * @param pageSlug - Page slug
 * @returns Full canonical URL
 */
export function getCanonicalUrl(
  slug: string[] | undefined,
  pageSlug: string
): string {
  const combinedUrl = slug?.join("/") || pageSlug;
  return `https://www.comfygen.com/${combinedUrl}`;
}