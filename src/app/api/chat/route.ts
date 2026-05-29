import { knowledgeBase }
from "@/data/knowledgeBase";
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

    const body =
      await req.json();

    const model =
      genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

    const message =
  body.message.toLowerCase();

let context = "";

if (
  message.includes("phishing")
) {
  context =
    knowledgeBase.phishing;
}
else if (
  message.includes("password")
) {
  context =
    knowledgeBase.password;
}
else if (
  message.includes("malware")
) {
  context =
    knowledgeBase.malware;
}
else if (
  message.includes("social")
) {
  context =
    knowledgeBase.socialEngineering;
}
else if (
  message.includes("network")
) {
  context =
    knowledgeBase.networkSecurity;
}

const prompt = `
You are a cybersecurity expert.

Answer the question using
the provided knowledge base.

Knowledge Base:
${context}

Question:
${body.message}

Provide:
- Explanation
- Real-world example
- Prevention tips
`;

const result =
  await model.generateContent(
    prompt
  );

    const response =
      result.response.text();

    return Response.json({
      response,
    });

  } catch (error: any) {

    console.log(error);

    return Response.json({
      response:
        "AI assistant failed.",
    });
  }
}
