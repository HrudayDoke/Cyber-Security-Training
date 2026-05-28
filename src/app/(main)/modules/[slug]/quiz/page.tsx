"use client";

import Link from "next/link";
import { unlockBadge } from "@/lib/badges";
import { modules } from "@/data/modules";
import { saveModuleProgress } from "@/lib/progress";
import { use, useState } from "react";

export default function QuizPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = use(params);

  const module = modules.find(
    (item) => item.slug === slug
  );

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const score =
  module?.quiz?.reduce(
    (total, question, index) => {

      return selectedAnswers[index] === question.answer
        ? total + 1
        : total;

    },
    0
  ) || 0;

  if (!module) {
    return <div>Quiz Not Found</div>;
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-10">

          <Link
            href={`/modules/${module?.slug}`}
            className="
            text-blue-600
            hover:text-blue-700
            font-semibold
            "
          >
            ← Back to Module
          </Link>

          <Link
            href="/dashboard"
            className="
            text-slate-600
            hover:text-slate-900
            font-medium
            "
          >
            Dashboard
          </Link>

        </div>

        <h1 className="text-4xl font-bold mb-8">
          {module.title} Quiz
        </h1>

        <div className="space-y-8">

          {module.quiz?.map((q, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >

              <h2 className="text-xl font-semibold mb-6">
                {index + 1}. {q.question}
              </h2>

              <div className="space-y-3">

                {q.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}

                    onClick={() => {

                      const updated = [...selectedAnswers];

                      updated[index] = option;

                      setSelectedAnswers(updated);
                    }}

                    className={`
                        w-full
                        flex
                        items-center
                        gap-4
                        text-left
                        p-5
                        rounded-2xl
                        border
                        transition-all
                        duration-300

                        ${
                          selectedAnswers[index] === option

                            ? `
                              bg-blue-500/10
                              border-blue-500
                              shadow-[0_0_25px_rgba(59,130,246,0.25)]
                            `

                            : `
                              bg-[#0B1730]
                              border-slate-800
                              hover:border-blue-500/40
                              hover:bg-blue-500/5
                            `
                        }
                      `}
                  >

                    <div
                      className={`
                        w-6
                        h-6
                        rounded-full
                        border-2
                        flex
                        items-center
                        justify-center

                        ${
                          selectedAnswers[index] === option
                            ? "border-blue-500"
                            : "border-slate-600"
                        }
                      `}
                    >

                      {selectedAnswers[index] === option && (

                        <div className="w-3 h-3 rounded-full bg-blue-500" />

                      )}

                    </div>

                    <span className="text-slate-200 font-medium">
                      {option}
                    </span>

                  </button>
                ))}

              </div>

            </div>
          ))}

        </div>
        <div className="mt-10">

        <button

          onClick={() => {

            setShowResult(true);

            const percentage =
              (score / (module?.quiz?.length || 1)) * 100;

            saveModuleProgress(
              module.slug,
              percentage
            );
            alert(`Progress Saved: ${percentage}%`);

              if (percentage === 100) {
                unlockBadge("security-expert");
                alert("Congratulations! You've unlocked the Security Expert badge!");
              }
          }}

          className="
          bg-green-600
          hover:bg-green-700
          px-6 py-3
          rounded-xl
          font-semibold
          "
        >
          Submit Quiz
        </button>

        </div>

        {showResult && (

  <div
    className="
    mt-8
    bg-[#0F172A]
    border border-slate-800
    rounded-3xl
    p-8
    "
  >

    <h2 className="text-3xl font-bold text-white mb-4">
      Quiz Result
    </h2>

    <p className="text-xl text-slate-300">
      You scored {score} out of {module?.quiz?.length || 0}
    </p>

  </div>

)}


      </div>
      
    </main>
  );
}