import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { parseResumeFromBuffer } from "./parser"; // adjust if needed

// Uploads folder
const uploadDir = path.join(process.cwd(), "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadDir, filename);

    fs.writeFileSync(filePath, buffer);

    const parsed = await parseResumeFromBuffer(buffer, filename);

    return NextResponse.json({ success: true, parsed });
  } catch (err) {
    console.error("Resume upload error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}


export async function GET() {
  return NextResponse.json({ message: "Hello World!" });
}
