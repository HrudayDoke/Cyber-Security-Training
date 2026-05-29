"use client";

import { useState } from "react";

export default function PhishingAnalyzerPage() {
  const [emailText, setEmailText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeEmail = async () => {
    if (!emailText.trim()) return;

    setLoading(true);

    const response = await fetch("/api/phishing-analyzer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emailText }),
    });

    const data = await response.json();

    setResult(data.analysis);
    setLoading(false);
  };

  return (
    <main className="min-h-screen text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-black text-cyan-400">
          AI Phishing Analyzer
        </h1>


        <textarea
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
          placeholder="Paste suspicious emails or messages and let AI analyze them...."
          className="w-full h-60 mt-8 bg-slate-900 rounded-2xl p-5 border border-cyan-500/20"
        />

        <button
          onClick={analyzeEmail}
          className="mt-6 bg-cyan-500 text-black px-8 py-4 rounded-2xl font-bold"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        {result && (
          <div className="mt-8 bg-slate-900 rounded-2xl p-6 border border-cyan-500/20 whitespace-pre-line">
            {result}
          </div>
        )}
      </div>
    </main>
  );
}