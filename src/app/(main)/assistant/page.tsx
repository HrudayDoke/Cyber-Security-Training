
"use client";

import {
  useState,
} from "react";

export default function
AssistantPage() {

  const [message,
  setMessage] =
    useState("");

  const [reply,
  setReply] =
    useState("");

  const [loading,
  setLoading] =
    useState(false);

  const askAI =
    async () => {

    if (!message) return;

    setLoading(true);

    try {

      const res =
        await fetch(
          "/api/chat",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              message,
            }),
          }
        );

      const data =
        await res.json();

      setReply(
        data.response
      );

    } catch {

      setReply(
        "AI assistant failed."
      );
    }

    setLoading(false);
  };

  return (

    <main
      className="
      min-h-screen
      text-white
      p-10
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
          text-6xl
          font-black
          text-cyan-400
          "
        >
          AI Cybersecurity Assistant
        </h1>

        <p
          className="
          text-slate-400
          mt-4
          text-xl
          "
        >
          Ask AI anything about cybersecurity.
        </p>

        <textarea
          value={message}

          onChange={(e) =>
            setMessage(
              e.target.value
            )
          }

          placeholder="
Ask about phishing,
malware,
ransomware,
secure coding...
          "

          className="
          w-full
          h-48
          mt-10
          bg-[#0F172A]
          border
          border-cyan-500/20
          rounded-3xl
          p-6
          text-lg
          outline-none
          "
        />

        <button
          onClick={askAI}

          className="
          mt-6
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

          {
            loading
            ? "Thinking..."
            : "Ask AI"
          }

        </button>

        {
          reply && (

            <div
              className="
              mt-10
              bg-[#0F172A]
              border
              border-cyan-500/20
              rounded-3xl
              p-8
              text-slate-300
              leading-9
              whitespace-pre-line
              "
            >
              {reply}
            </div>
          )
        }

      </div>

    </main>
  );
}
