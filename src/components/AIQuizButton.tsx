"use client";

export default function AIQuizButton({
  topic,
  slug,
}: {
  topic: string;
  slug: string;
}) {

  const generateQuiz = async () => {

  try {

    console.log("Calling AI Quiz API...");
    const res = await fetch(
    
      "/api/generate-quiz",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          topic,
        }),
      }
    );

    const text =
      await res.text();

    console.log(text);

    if (!text) {

      alert(
        "AI Quiz generation failed."
      );

      return;
    }

    const data =
      JSON.parse(text);

    alert(
    "API Response: " +
    JSON.stringify(data)
    );

    console.log("Response:", data);

    if (
  !data.quiz ||
  data.quiz === "Error"
) {

  alert(
    "AI service unavailable. Loading standard quiz."
  );

  window.location.href =
    `/quiz/${slug}`;

  return;
}

    console.log(
    "Generated Quiz:",
    data.quiz
    );

    localStorage.setItem(
      "aiQuiz",
      data.quiz
    );

    window.location.href =
      `/quiz/${slug}?ai=true`;

  } catch (error) {

    console.error(error);

    alert(
      "AI Quiz generation failed."
    );
  }
};

  return (

    <button
      onClick={generateQuiz}
      className="
      mt-4
      ml-4
      bg-purple-500
      hover:bg-purple-400
      text-white
      font-bold
      px-8
      py-4
      rounded-2xl
      "
    >
      Generate AI Quiz
    </button>
  );
}