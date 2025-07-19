import fs from "fs";
import pdfParse from "pdf-parse";
import path from "path";

const skillsPath = path.join(process.cwd(), "app/api/candidate/upload-resume/skills.txt");
const SKILLS = fs.readFileSync(skillsPath, "utf-8").split("\n").map(s => s.trim()).filter(Boolean);

function extractEmail(text) {
  const match = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  return match ? match[0] : "";
}

function extractPhone(text) {
  const match = text.match(/(\+91[-\s]?)?\d{10}/);
  return match ? match[0] : "";
}

function extractName(text) {
  const lines = text.split("\n").map(l => l.trim()).filter(Boolean);
  return lines.length > 0 ? lines[0] : "";
}

function extractSkills(text) {
  const found = [];
  for (const skill of SKILLS) {
    const pattern = new RegExp(`\\b${skill}\\b`, "i");
    if (pattern.test(text)) {
      found.push(skill);
    }
  }
  return found;
}

function extractEducation(text) {
  const educationKeywords = [
    "B\\.Tech", "B\\.E", "Bachelor", "Master", "M\\.Tech", "M\\.E", "MCA", "Diploma", "SSC", "HSC", "CBSE", "ICSE"
  ];
  const lines = text.split("\n").map(l => l.trim());
  const education = [];

  for (const line of lines) {
    if (educationKeywords.some(kw => new RegExp(kw, "i").test(line))) {
      education.push(line);
    }
  }

  return education;
}

export async function parseResumeFromBuffer(buffer, filename) {
  const { text } = await pdfParse(buffer);

  return {
    file: filename,
    parsed: {
      name: extractName(text),
      email: extractEmail(text),
      phone: extractPhone(text),
      skills: extractSkills(text),
      education: extractEducation(text),
    },
  };
}
