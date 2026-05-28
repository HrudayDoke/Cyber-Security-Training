"use client";

import Link from "next/link";
import {
  CheckCircle
} from "lucide-react";
import { useEffect, useState } from "react";
import { moduleContent }
from "@/data/moduleContent";


const modules = [

  {
    title: "Phishing Awareness",
    description:
      "Learn how to detect phishing emails and online scams.",
    slug: "phishing-awareness",
    icon: "🛡️",
  },

  {
    title: "Passwords & 2FA",
    description:
      "Master password security and multi-factor authentication.",
    slug: "password-security",
    icon: "🔐",
  },

  {
    title: "Malware Defense",
    description:
      "Protect systems against malware and ransomware attacks.",
    slug: "malware-defense",
    icon: "💻",
  },

  {
    title: "Network Security",
    description:
      "Understand VPNs, firewalls, and secure networking.",
    slug: "network-security",
    icon: "🌐",
  },

  {
    title: "Social Engineering",
    description:
      "Recognize manipulation tactics used by cyber attackers.",
    slug: "social-engineering",
    icon: "🎭",
  },

  {
    title: "Cloud Security",
    description:
      "Secure cloud applications and infrastructure.",
    slug: "cloud-security",
    icon: "☁️",
  },

  {
    title: "Data Privacy",
    description:
      "Understand GDPR and protect sensitive user data.",
    slug: "data-privacy",
    icon: "📂",
  },

  {
    title: "Email Security",
    description:
      "Protect inboxes from spoofing and spam attacks.",
    slug: "email-security",
    icon: "📧",
  },

  {
    title: "Threat Intelligence",
    description:
      "Analyze cyber threats and attacker behaviors.",
    slug: "threat-intelligence",
    icon: "🧠",
  },

  {
    title: "Secure Coding",
    description:
      "Learn secure development and vulnerability prevention.",
    slug: "secure-coding",
    icon: "👨‍💻",
  },

  {
    title: "Mobile Security",
    description:
      "Protect smartphones and mobile applications.",
    slug: "mobile-security",
    icon: "📱",
  },

  {
    title: "AI Threat Detection",
    description:
      "Use AI to identify modern cybersecurity threats.",
    slug: "ai-threat-detection",
    icon: "🤖",
  },

];

export default function ModulesPage() {

const [badges,
setBadges] =
  useState<string[]>([]);

useEffect(() => {

  const storedBadges =
    JSON.parse(
      localStorage.getItem(
        "badges"
      ) || "[]"
    );

  setBadges(
    storedBadges
  );

}, []);




  return (

    <main className="min-h-screen text-white">

      <div className="max-w-7xl mx-auto">

        <h1
          className="
          text-6xl
          font-black
          text-white
          "
        >
          Modules
        </h1>

        <p
          className="
          text-slate-400
          text-xl
          mt-4
          "
        >
          Browse all cybersecurity learning modules.
        </p>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
          mt-16
          "
        >

          {modules.map((module) => (

            <Link
              key={module.slug}
              
href={{
  pathname:
    `/modules/${module.slug}`,
}}

              className="
              bg-white/5
              border
              border-slate-800
              rounded-3xl
              p-8
              hover:border-cyan-500/40
              hover:scale-[1.02]
              transition-all
              duration-300
              backdrop-blur-xl
              shadow-[0_0_40px_rgba(15,23,42,0.4)]
              "
            >
              
              {
                badges.includes(
                  module.slug
                ) && (

                  <div
                    className="
                    absolute
                    top-5
                    right-5
                    "
                  >

                  <CheckCircle
                    className="
                    text-green-400
                    bg-black
                    rounded-full
                    "
                    size={32}
                  />



                  </div>
                )
              }
              <div className="text-5xl">
                {module.icon}
              </div>

              <h2
                className="
                text-2xl
                font-bold
                mt-6
                "
              >
                {module.title}
              </h2>

              <p
                className="
                text-slate-400
                leading-8
                mt-4
                "
              >
                {module.description}
              </p>

            </Link>

          ))}

        </div>

      </div>

    </main>

  );
}