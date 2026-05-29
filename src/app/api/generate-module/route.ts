"use client";
import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

const genAI =
  new GoogleGenerativeAI(
    process.env
      .NEXT_PUBLIC_GEMINI_API_KEY!
  );

export async function POST(
  req: Request
) {

  try {

    const { topic } =
      await req.json();

    const model =
      genAI.getGenerativeModel({
        model:
          "gemini-2.0-flash",
      });

    const prompt = `
Create a cybersecurity lesson.

Topic:
${topic}

Include:

1. Introduction
2. Real-world example
3. Attack scenario
4. Prevention tips
5. Key takeaways

Format with headings.
`;

    const result =
      await model.generateContent(
        prompt
      );

    return Response.json({
      content:
        result.response.text(),
    });

  } catch {

    return Response.json({
      content: null,
    });
  }
}