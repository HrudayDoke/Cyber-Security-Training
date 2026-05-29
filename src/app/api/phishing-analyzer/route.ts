import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const { emailText } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are a cybersecurity threat analyst.

Analyze the following email/message and determine if it is a phishing attempt.

Provide the response in this format:

Threat Level: Low / Medium / High

Indicators:
- indicator 1
- indicator 2
- indicator 3

Explanation:
Brief explanation.

Recommendation:
What the user should do.

Email:
${emailText}
`;

    const result = await model.generateContent(prompt);

    return Response.json({
      analysis: result.response.text(),
    });
  } catch (error) {

  console.error(
    "Phishing Analyzer Error:",
    error
  );

  return Response.json({
    analysis:
      "Failed to analyze message.",
  });
}
}