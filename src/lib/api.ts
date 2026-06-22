import qs from 'qs';

/**
 * Helper function to fetch data from the CMS (Strapi).
 * @param path - The API endpoint path (e.g., '/mobile-app-development')
 * @param urlParamsObject - Object containing query parameters to be stringified by qs
 * @param options - Additional fetch options (e.g., { cache: 'no-store' })
 */
export async function fetchAPI(path: string, urlParamsObject = {}, options = {}) {
  try {
    // Stringify the URL params using qs
    const queryString = qs.stringify(urlParamsObject, {
      encodeValuesOnly: true, // encode only the values to keep the brackets clean (optional but good practice for Strapi)
    });

    // Build the request URL
    const requestUrl = `https://cms.comfygen.com/api${path}${queryString ? `?${queryString}` : ''}`;

    // Make the fetch request
    const response = await fetch(requestUrl, {
      cache: 'no-store', // Default to no-store during active development
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Error fetching from CMS: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("fetchAPI Error:", error);
    return null;
  }
}
