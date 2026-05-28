
"use client";

import { useEffect, useState } from "react";
import { useParams }
from "next/navigation";

import { quizData }
from "@/data/quizData";

export default function QuizPage() {

  const params = useParams();

  const slug =
    params.slug as string;

  const questions =
    quizData[slug];

  const [currentQuestion,
  setCurrentQuestion] =
    useState(0);

  const [score, setScore] =
    useState(0);

  const [finished,
  setFinished] =
    useState(false);

const [shuffledOptions,
setShuffledOptions] =
  useState<string[]>([]);

  const [showBadgePopup,setShowBadgePopup] =
  useState(false);

  const [earnedBadge,setEarnedBadge] =
  useState("");

  

  const handleAnswer =
    (option: string) => {

    if (
      option ===
      questions[currentQuestion]
      .answer
    ) {

      setScore(score + 1);
    }

    const next =
      currentQuestion + 1;

    if (
      next < questions.length
    ) {

      setCurrentQuestion(next);

    } else {

      localStorage.setItem(
        `${slug}-progress`,
        "100"
      );

if (score + 1 === 10) {

  const unlockedBadges =
    JSON.parse(
      localStorage.getItem(
        "badges"
      ) || "[]"
    );

  const badgeName = slug;

  if (
    !unlockedBadges.includes(
      badgeName
    )
  ) {

    unlockedBadges.push(
      badgeName
    );

    localStorage.setItem(
      "badges",
      JSON.stringify(
        unlockedBadges
      )
    );
  }

  setEarnedBadge(
    badgeName
      .replaceAll("-", " ")
      .replace(
        /\b\w/g,
        (char) =>
          char.toUpperCase()
      )
  );

  setShowBadgePopup(true);
}

      setFinished(true);
    }
  };

useEffect(() => {

  const shuffled =
    [
      ...questions[
        currentQuestion
      ].options
    ].sort(
      () =>
        Math.random() - 0.5
    );

  setShuffledOptions(
    shuffled
  );

}, [currentQuestion]);


  if (!questions) {

    return (
      <div className="text-white p-10">
        Quiz not found
      </div>
    );
  }

  return (

    <main
      className="
      min-h-screen
      text-white
      flex
      items-center
      justify-center
      p-8
      "
    >

      <div
        className="
        w-full
        max-w-3xl
        bg-[#0F172A]/80
        border
        border-cyan-500/10
        rounded-3xl
        p-10
        "
      >

        {!finished ? (

          <>

            <h1
              className="
              text-3xl
              font-black
              mb-10
              "
            >
              Question
              {" "}
              {currentQuestion + 1}
              {" "}
              /
              {" "}
              {questions.length}
            </h1>

            <h2
              className="
              text-2xl
              text-slate-200
              mb-10
              "
            >
              {
                questions[
                  currentQuestion
                ].question
              }
            </h2>

            <div className="space-y-5">
              
              {
                
                
                shuffledOptions.map(
                  (
                    option: string
                  ) => (

                  <button
                    key={option}
                    onClick={() =>
                      handleAnswer(option)
                    }
                    className="
                    w-full
                    text-left
                    bg-slate-800
                    hover:bg-cyan-500
                    hover:text-black
                    p-5
                    rounded-2xl
                    transition-all
                    duration-300
                    "
                  >
                    {option}
                  </button>

                ))
              }

            </div>

          </>

        ) : (

          <div className="text-center">

            <h1
              className="
              text-5xl
              font-black
              text-cyan-400
              "
            >
              Quiz Completed
            </h1>

            <p
              className="
              text-2xl
              mt-8
              "
            >
              Score:
              {" "}
              {score}
              /
              {questions.length}
            </p>

            <p
              className="
              mt-6
              text-xl
              "
            >
              {
                score >= 7
                  ? "✅ Passed"
                  : "❌ Failed"
              }
            </p>

            <button
              onClick={() =>
                window.location.reload()
              }
              className="
              mt-8
              bg-cyan-500
              text-black
              px-6
              py-3
              rounded-xl
              font-bold
              "
            >
              Retake Quiz
            </button>

          </div>

        )}

      </div>
        
        {
  showBadgePopup && (

    <div
      className="
      fixed
      inset-0
      bg-black/70
      flex
      items-center
      justify-center
      z-50
      "
    >

      <div
        className="
        bg-[#0F172A]
        border
        border-cyan-500/20
        rounded-3xl
        p-12
        text-center
        shadow-[0_0_50px_rgba(34,211,238,0.2)]
        animate-in
        fade-in
        zoom-in
        "
      >

        <div
          className="
          text-7xl
          mb-6
          "
        >
          🏆
        </div>

        <h1
          className="
          text-4xl
          font-black
          text-cyan-400
          mb-6
          "
        >
          Congratulations!
        </h1>

        <p
          className="
          text-2xl
          text-white
          "
        >
          You unlocked
        </p>

        <h2
          className="
          text-3xl
          font-bold
          text-yellow-400
          mt-4
          "
        >
          {earnedBadge}
        </h2>

        <button
          onClick={() =>
            setShowBadgePopup(false)
          }
          className="
          mt-10
          bg-cyan-500
          hover:bg-cyan-400
          text-black
          font-bold
          px-8
          py-4
          rounded-2xl
          "
        >
          Continue
        </button>

      </div>

    </div>
  )
}
    </main>

  );
}
