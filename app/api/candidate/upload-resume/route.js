import path from "path";
import fs from "fs";
import { parseResumeFromBuffer } from "./parser"; // adjust if needed
import { NextResponse, NextRequest } from "next/server";

  // Uploads folder
  const uploadDir = path.join(process.cwd(), "uploads");
  console.log(uploadDir);

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  export const config = { 
    api: {
      bodyParser: false,
    },  
  };

export async function POST(req) {
  console.log("control reach inside the post endpoint ");
  try {
    const formData = await req.formData();
    console.log("formData:", formData);
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadDir, filename);

    fs.writeFileSync(filePath, buffer);
    console.log(buffer);
    const parsed = await parseResumeFromBuffer(buffer, filename);
    // data to be inserted into the database
    // const data = {
    //   name: parsed.name,
    //   email: parsed.email,
    //   phone: parsed.phone,
    //   skills: parsed.skills,
    //   education: parsed.education,
    //   status: "CV Received",
    //   resumeUrl: file.name,
    //   location: parsed.location,
    //   jobpostId: 1,
    //   experience: parsed.experience,
    //   address: parsed.address,
    //   qualification: parsed.qualification,
    //   parsedText: parsed.parsed.text,
    //   testScore: parsed.parsed.score,
    //   testStatus: "pending",
    //   appliedAt: new Date(),
    //   updatedAt: new Date(),
    // };
    console.log(parsed);
    return NextResponse.json({ success: true, parsed });
  } catch (err) {
    console.error("Resume upload error:", err);

    return NextResponse.json(
      { success: false, error: err.message, message: "something went wrong " },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Hello World!" });
}
