"use client";

import { useEffect, useState } from "react";
import { getUnlockedBadges } from "@/lib/badges";
import {getModuleProgress,} from "@/lib/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Shield,
  Trophy,
  BookOpen,
  CheckCircle,
} from "lucide-react";

export default function DashboardPage() {
  const [progressData, setProgressData] =
  useState<{ [key: string]: number }>({});

  const [badgeCount, setBadgeCount] =
  useState(0);

  const totalProgress = Object.values(progressData).reduce(
    (a, b) => a + b,
    0
  ) / 12;

  const userLevel =
  totalProgress >= 80
    ? "Expert"
    : totalProgress >= 50
    ? "Intermediate"
    : "Beginner";

  const moduleSlugs = [
  "phishing-awareness",
  "password-security",
  "malware-defense",
  "network-security",
  "social-engineering",
  "cloud-security",
  "data-privacy",
  "email-security",
  "threat-intelligence",
  "secure-coding",
  "mobile-security",
  "ai-threat-detection",
];

useEffect(() => {

  const loadDashboardData =
    () => {

    const data:
    { [key: string]: number } = {};

    moduleSlugs.forEach(
      (slug) => {

      data[slug] =
        Number(
          localStorage.getItem(
            `${slug}-progress`
          ) || "0"
        );
    });

    setProgressData(data);

    const badges =
      JSON.parse(
        localStorage.getItem(
          "badges"
        ) || "[]"
      );

    setBadgeCount(
      badges.length
    );
  };

  loadDashboardData();

  window.addEventListener(
    "focus",
    loadDashboardData
  );

  return () => {

    window.removeEventListener(
      "focus",
      loadDashboardData
    );
  };

}, []);


  return (
    <div
  className="
  flex
  bg-[#081120]
  text-white
  bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_55%)]
  "
>

      <main
    className="
    flex-1
    p-8
    transition-all
    duration-300
    "
  >
        <div className="max-w-full mx-auto">

          <div className="mb-8">
            <h1 className="
                  text-5xl
                  font-bold
                  bg-gradient-to-r
                  from-cyan-300
                  via-blue-400
                  to-indigo-400
                  text-transparent
                  bg-clip-text">
              Security Training Dashboard
            </h1>

            <h2 className="text-2xl text-slate-300 mt-4">Welcome back 👋</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

            <Card className="
                    bg-white/5
                    backdrop-blur-md
                    border border-white/10
                    text-white
                    rounded-2xl
                    shadow-xl
                    hover:border-blue-500
                    hover:scale-[1.02]
                    transition-all duration-300">
              <CardContent className="p-6">
                <Shield className="mb-4 text-blue-400" size={32} />
                <h2 className="text-2xl font-bold">{moduleSlugs.length}</h2>
                <p className="text-slate-400">Modules</p>
              </CardContent>
            </Card>

            <Card className="
                    bg-[#0F172A]/70
                    backdrop-blur-xl
                    border border-cyan-500/10
                    text-white
                    rounded-2xl
                    shadow-[0_0_25px_rgba(56,189,248,0.08)]
                    hover:border-cyan-400/40
                    hover:shadow-[0_0_35px_rgba(56,189,248,0.18)]
                    hover:-translate-y-1
                    transition-all duration-300
                    ">
              <CardContent className="p-6">
                <BookOpen className="mb-4 text-green-400" size={32} />
                <h2 className="text-2xl font-bold">{Math.round(totalProgress)}%</h2>
                <p className="text-slate-400">Progress</p>
              </CardContent>
            </Card>

            <Card className="
                    bg-[#0F172A]/70
                    backdrop-blur-xl
                    border border-cyan-500/10
                    text-white
                    rounded-2xl
                    shadow-[0_0_25px_rgba(56,189,248,0.08)]
                    hover:border-cyan-400/40
                    hover:shadow-[0_0_35px_rgba(56,189,248,0.18)]
                    hover:-translate-y-1
                    transition-all duration-300
                    ">
              <CardContent className="p-6">
                <Trophy className="mb-4 text-yellow-400" size={32} />
                <h2 className="text-2xl font-bold">{badgeCount}</h2>
                <p className="text-slate-400">Badges</p>
              </CardContent>
            </Card>

            <Card className="
                    bg-[#0F172A]/70
                    backdrop-blur-xl
                    border border-cyan-500/10
                    text-white
                    rounded-2xl
                    shadow-[0_0_25px_rgba(56,189,248,0.08)]
                    hover:border-cyan-400/40
                    hover:shadow-[0_0_35px_rgba(56,189,248,0.18)]
                    hover:-translate-y-1
                    transition-all duration-300
                    ">
              <CardContent className="p-6">
                <CheckCircle className="mb-4 text-purple-400" size={32} />
                <h2 className="text-2xl font-bold">{userLevel}</h2>
                <p className="text-slate-400">Current Level</p>
              </CardContent>
            </Card>

            <Card className="
                  bg-[#0F172A]/70
                  backdrop-blur-xl
                  border border-green-500/20
                  text-white
                  rounded-2xl
                  shadow-[0_0_25px_rgba(34,197,94,0.08)]
                  hover:border-green-400/40
                  hover:-translate-y-1
                  transition-all duration-300
                  ">
                    <CardContent className="p-6">

                      <div className="flex items-center gap-3 mb-4">

                        <div className="
                        w-3
                        h-3
                        rounded-full
                        bg-green-400
                        animate-pulse
                        " />

                        <p className="text-green-400 font-semibold">
                          AI Active
                        </p>

                      </div>

                      <h2 className="text-2xl font-bold">
                        Threat Detection
                      </h2>

                      <p className="text-slate-400 mt-2">
                        Monitoring cyber risks in real-time
                      </p>

                    </CardContent>
                  </Card>            

          </div>

          <Card className="
                  bg-[#0F172A]/70
                  backdrop-blur-xl
                  border border-cyan-500/10
                  text-white
                  rounded-2xl
                  shadow-[0_0_25px_rgba(56,189,248,0.08)]
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_35px_rgba(56,189,248,0.18)]
                  hover:-translate-y-1
                  transition-all duration-300
                  ">
            <CardContent className="p-6">
              <div className="flex justify-between mb-4">
                <h2 className="text-xl font-semibold">
                  Learning Progress
                </h2>

                <span className="text-slate-400">
                  {Math.round(totalProgress)}%
                </span>
              </div>

              <Progress value={Math.round(totalProgress)} className="h-3" />
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
}