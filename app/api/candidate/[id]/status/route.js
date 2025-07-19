import { NextResponse, NextRequest } from "next/server";

export async function POST(req) {
  // getting candidate status data from request
}

export async function GET() {
  return NextResponse.json({ message: "Hello World!" });
}
