"use client";

import { useEffect, useState } from "react";

export default function CertificatePage() {

  const [unlocked,setUnlocked] =
  useState(false);

  const [userName, setUserName] =
  useState("User");

  const [certificateId, setCertificateId] =
  useState("");

  const currentDate =
    new Date().toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );

  useEffect(() => {

  const badges =
    JSON.parse(
      localStorage.getItem(
        "badges"
      ) || "[]"
    );

  if (badges.length >= 12) {

    setUnlocked(true);
  }

    const currentUser =
    localStorage.getItem(
      "currentUser"
    );

  if (currentUser) {

    const parsedUser =
      JSON.parse(currentUser);

    setUserName(
      parsedUser.name
    );
  }

    const uniqueId =
    `CST-${Math.floor(
      100000 + Math.random() * 900000
    )}`;
    setCertificateId(uniqueId);
  }, []);
  if (!unlocked) {

  return (

    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      text-white
      p-10
      "
    >

      <div
        className="
        bg-[#0F172A]/80
        border
        border-red-500/20
        rounded-3xl
        p-12
        text-center
        max-w-2xl
        "
      >

        <h1
          className="
          text-5xl
          font-black
          text-red-400
          mb-6
          "
        >
          Certificate Locked
        </h1>

        <p
          className="
          text-slate-300
          text-xl
          leading-10
          "
        >
          Complete all modules and
          unlock all badges to
          access your cybersecurity
          certificate.
        </p>

      </div>

    </div>
  );
}

  return (

    <main
  className="
  min-h-screen
  bg-[#020817]
  flex
  items-center
  justify-center
  px-4
  py-4
  overflow-hidden
  "
>

      <div
          className="
          relative
          bg-blue-700
          w-[820px]
          h-[620px]
          p-[22px]
          shadow-[0_25px_100px_rgba(0,0,0,0.45)]
          "
        style={{
          clipPath:
             "polygon(70px 0%, calc(100% - 70px) 0%, 100% 70px, 100% calc(100% - 70px), calc(100% - 70px) 100%, 70px 100%, 0% calc(100% - 70px), 0% 70px)"
        }}
      >

        <div
          className="
          bg-white
          w-full
          h-full
          px-8
          py-6
          text-center
          relative
          flex
          flex-col
          justify-between
          gap-4
          overflow-hidden
          "
          style={{
            clipPath:
              "polygon(60px 0%, calc(100% - 60px) 0%, 100% 60px, 100% calc(100% - 60px), calc(100% - 60px) 100%, 60px 100%, 0% calc(100% - 60px), 0% 60px)"
          }}
        >

          <h1
            className="
            text-[32px]
            leading-[40px]
            font-black
            tracking-[2px]
            text-slate-900
            uppercase
            mb-4
            "
          >
            Cyber Security Training Certificate
          </h1>
          
          <div
            className="
            flex
            items-center
            justify-center
            gap-4
            mb-4
            w-full
            "
          >

            <div className="flex-1 max-w-[160px] h-[3px] bg-blue-600" />

            <div
              className="
              w-12
              h-12
              rounded-full
              border-[5px]
              border-blue-600
              flex
              items-center
              justify-center
              "
            >
              <span className="text-xl text-blue-600">
                🔒
              </span>
            </div>

            <div className="w-52 h-[3px] bg-blue-600" />

          </div>

          <p className="
              text-slate-500
              text-[18px]
              mb-2
              ">
            This is to certify that
          </p>

          <h2
            className="
            text-[42px]
            leading-[48px]
            font-black
            text-blue-700
            uppercase
            tracking-[3px]
            mb-8
            "
          >
            {userName}
          </h2>

          <p
            className="
            max-w-4xl
            mx-auto
            text-slate-600
            text-[16px]
            leading-[30px]
            mb-8
            "
          >
            Successfully completed the Advanced
            CyberSecurity awareness and protection
            training program including phishing
            defense, password security, malware
            prevention, cyber hygiene, and secure
            digital practices.
          </p>

          <div
            className="
            flex
            justify-center
            gap-4
            mb-4
            flex-wrap
            "
          >

            <div
              className="
              bg-blue-700
              text-white
              px-5
              py-2
              rounded-full
              text-sm
              font-semibold
              shadow-lg
              "
            >
              Date of Issue: {currentDate}
            </div>

            <div
              className="
              bg-blue-700
              text-white
              px-5
              py-2
              rounded-full
              text-sm
              font-semibold
              shadow-lg
              "
            >
              Certificate No: {certificateId}
            </div>

          </div>

          <div
            className="
            flex
            items-center
            justify-between
            mt-2
            "
          >

            <div className="text-center">

            <div
              className="
              w-24
              h-24
              rounded-full
              border-[10px]
              border-blue-700
              mx-auto
              flex
              flex-col
              items-center
              justify-center
              text-blue-700
              "
            >

              <div className="text-2xl mb-2">
                🛡️
              </div>

              <div className="font-black text-sm">
                VERIFIED
              </div>

            </div>

            <p className="mt-2 text-slate-500 text-sm">
              Date of Completion
            </p>

            <p className="text-blue-700 font-bold text-lg">
              {currentDate}
            </p>

            </div>

          </div>

        </div>

        <div className="mt-10 text-center">

        <button

          className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-8
          py-4
          rounded-2xl
          font-semibold
          text-lg
          shadow-lg
          transition-all
          "
        >
          Download Certificate
        </button>

      </div>

      </div>

    </main>

  );
}