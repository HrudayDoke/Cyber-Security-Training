import { GoogleGenerativeAI }
from "@google/generative-ai";

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
          "gemini-2.5-flash",
      });

    const result =
      await model.generateContent(
        `
Generate 10 MCQs about
${topic}

Return ONLY valid JSON.

[
 {
   "question":"",
   "options":["","","",""],
   "answer":""
 }
]
`
      );

    return Response.json({
      quiz:
        result.response.text(),
    });

  } catch (error) {

    console.error("QUIZ ERROR:", error);

    return Response.json({
      quiz: "Error",
    });

   
  }
}