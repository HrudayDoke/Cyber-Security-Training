
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
        model: "gemini-1.5-flash",
      });

    const result =
      await model.generateContent(
        body.message
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
