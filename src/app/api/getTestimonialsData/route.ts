import { NextResponse } from "next/server";
import { success, failure } from "@/lib/utils/apiResponse";
import { getTestimonialsDataService } from "@/lib/services/pageService";

export async function GET() {
  const result = await getTestimonialsDataService();
  
  if (result.error) {
    return failure(result.message || "Failed to fetch testimonials data", result.statusCode || 500);
  }

  return success(result.data);
}
