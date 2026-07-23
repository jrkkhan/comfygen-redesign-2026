import { NextResponse } from "next/server";

export function success(data: unknown, source?: "cache" | "origin", status = 200) {
  return NextResponse.json(data, { status });
}

export function failure(message: string, status = 500) {
  return NextResponse.json({ success: false, error: message }, { status });
}