import { NextResponse, NextRequest } from "next/server";
import path from "path";
import fs from "fs";
// import prisma from "@lib/prisma";

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

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filename = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadDir, filename);
    fs.writeFileSync(filePath, buffer);

    // const data = await parseResumeWithGeminiModel(buffer);
    // console.log(data);



    // await prisma.candidate.create({
    //   data: {
    //     name: data.name,
    //     email: data.email,
    //     phone: data.phone,
    //     jobpost: 1,
    //     status: "CV Recived",


    //   }
    // })




    return NextResponse.json({
      message: "everthing went well",
      // parsedData: data,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "hllo from get endpoint" });
}
