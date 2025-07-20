import { GoogleGenAI } from "@google/genai";

const APIKEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: APIKEY });

export async function parseResumeWithGeminiModel(fileBuffer) {
  const filePart = {
    inlineData: {
      mimeType: "application/pdf",
      data: fileBuffer.toString("base64"),
    },
  };

  const prompt = `You are a resume parser. Extract the following fields from the resume as JSON:
  {
    "name": "",
    "email": "",
    "phone": "",
    "education": [""],
    "skills": [""]
  }
  Return ONLY pure JSON, with no explanation, markdown, or text.`;

  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash", // Use the latest available if 2.5 doesn't support PDFs yet
      contents: [{ role: "user", parts: [{ text: prompt }, filePart] }],
    });

    const rawText = result.candidates[0].content.parts?.[0].text;
    console.log(rawText);

    const match = rawText.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("Could not extract JSON from Gemini response.");

    const parsedJson = JSON.parse(match[0]);
    return parsedJson;
  } catch (err) {
    console.error("Error while calling Gemini model:", err);
    throw err;
  }
}
