import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

// id            Int      @id @default(autoincrement())
//   title         String
//   description   String
//   requirement   String[]
//   package       String // 10 LPA etc 
//   type          String // full-time, part-time, internship, etc.
//   qualification String[]
//   location      String
//   category      String
//   createdAt     DateTime @default(now())
//   updatedAt     DateTime @updatedAt



export async function POST(req) {
  try {

    const body = await req.json();
    if (!body) {
      return NextResponse.json({
        message: "Provide body"
      }, { status: 403 })
    }




    const res = await prisma.jobpost.create({
      data: {
        title: "Full Stack Developer",
        description: "A passionate full stack developer",
        requirement: [
          "SKills in React js ",
          "Master in Next js ",
        ],
        package: "10LPA",
        type: "Full Time",
        location: "Banglore",
        category: "Test"


      }
    })

    if (!res) {
      return;
    }

    return NextResponse.json({
      message: "Jobpost created succesfully !",
      data: {
        response: res
      }

    }, { status: 200 });
  } catch (err) {
    console.log("something went wrong", err);
    return NextResponse.json({
      message: "something went wrong",
      error: err,
    });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Hello World!" });
}
