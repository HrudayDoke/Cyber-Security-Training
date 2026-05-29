import AIQuizButton
from "@/components/AIQuizButton";
import Link from "next/link";

import { moduleContent }
from "@/data/moduleContent";

export default async function ModulePage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {

  const { slug } =
    await params;

  const module =
    moduleContent[slug];

  if (!module) {

    return (

      <div className="text-white p-10">
        Module not found
      </div>
    );
  }

  return (

    <main
      className="
      min-h-screen
      text-white
      p-8
      "
    >

      <div
        className="
        max-w-5xl
        mx-auto
        "
      >

        <h1
          className="
          text-5xl
          font-black
          text-cyan-400
          "
        >
          {module.title}
        </h1>

        <div
          className="
          bg-[#0F172A]/80
          border
          border-cyan-500/10
          rounded-3xl
          p-10
          mt-10
          "
        >

          <h2
            className="
            text-3xl
            font-bold
            text-cyan-300
            mb-8
            "
          >
            Lesson Content
          </h2>

          <p
            className="
            text-slate-300
            leading-10
            text-xl
            whitespace-pre-line
            "
          >
            {module.content}
          </p>

          <Link
            href={`/quiz/${slug}`}
          >

            <button
              className="
              mt-12
              bg-cyan-500
              hover:bg-cyan-400
              text-black
              font-bold
              px-8
              py-4
              rounded-2xl
              transition-all
              duration-300
              "
            >
              Start Quiz
            </button>

          </Link>
          <AIQuizButton
            topic={module.title}
            slug={slug}
          />
        </div>

      </div>

    </main>
  );
}
