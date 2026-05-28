"use client";

import { useEffect, useState } from "react";

import {
  ShieldCheck,
  Trophy,
} from "lucide-react";

import { getUnlockedBadges } from "@/lib/badges";

export default function BadgesPage() {

  const [badges, setBadges] = useState<string[]>([]);

  useEffect(() => {

    const storedBadges =
  JSON.parse(
    localStorage.getItem(
      "badges"
    ) || "[]"
  );

setBadges(storedBadges);

  }, []);


  return (
    <main className="min-h-screen bg-[#081120] text-white p-10">

      <div className="max-w-6xl mx-auto">

        <div className="mb-10">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-6xl font-black text-white">
                Achievement Badges
              </h1>

              <p className="text-slate-400 text-xl mt-4">
                Earn badges by completing cybersecurity quizzes.
              </p>

            </div>

            <div
              className="
              bg-blue-600
              text-white
              px-6
              py-4
              rounded-2xl
              text-2xl
              font-bold
              shadow-lg
              "
            >
              {badges.length} Badges
            </div>

          </div>

        </div>

        {badges.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-sm p-10 text-center">

            <Trophy className="mx-auto mb-4 text-slate-400" size={60} />

            <h2 className="text-2xl font-semibold text-slate-800 mb-2">
              No Badges Yet
            </h2>

            <p className="text-slate-500">
              Complete quizzes to unlock achievements.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {badges.map((badge) => (

              <div
                key={badge}
                className="
                bg-[#0F172A]
                rounded-3xl
                p-8
                border
                border-slate-800
                shadow-sm
                hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
                hover:border-blue-500/40
                hover:-translate-y-2
                transition-all
                duration-300
                group
                "
              >

              <div
                className="
                w-28
                h-28
                rounded-3xl
                bg-gradient-to-br
                from-blue-900/40
                to-cyan-900/40
                flex
                items-center
                justify-center
                mb-8
                group-hover:scale-110
                transition-all
                "
              >

                  <ShieldCheck
                    className="text-blue-600"
                    size={40}
                  />

                </div>

                <h2 className="text-2xl font-bold text-white mb-2">
                    {badge
                      .replaceAll("-", " ")
                      .replace(
                        /\b\w/g,
                        (char) =>
                          char.toUpperCase()
                      )}

                </h2>
                <div
                  className="
                  inline-flex
                  bg-emerald-100
                  text-emerald-700
                  px-4
                  py-1
                  rounded-full
                  text-sm
                  font-semibold
                  mb-4
                  "
                >
                  Unlocked
                </div>
                
              </div>

            ))}

          </div>

        )}

      </div>

    </main>
  );
}