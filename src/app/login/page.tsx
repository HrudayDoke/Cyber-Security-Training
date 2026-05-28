"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {

  const users =
    JSON.parse(
      localStorage.getItem("users") || "[]"
    );

  const existingUser =
    users.find(
      (user: any) =>
        user.email === email
    );

  if (!existingUser) {

    alert(
      "Email is not registered."
    );

    return;
  }

  if (
    existingUser.password !== password
  ) {

    alert(
      "Incorrect password."
    );

    return;
  }

  localStorage.setItem(
    "currentUser",
    JSON.stringify(existingUser)
  );

  router.push("/dashboard");

};

  return (

    <main
      className="
      min-h-screen
      bg-gradient-to-br
      from-[#020817]
      via-[#081120]
      to-[#0F172A]
      flex
      items-center
      justify-center
      p-6
      "
    >

      <div
        className="
        w-full
        max-w-md
        bg-white/5
        backdrop-blur-xl
        border
        border-cyan-500/20
        rounded-3xl
        p-10
        shadow-[0_0_50px_rgba(59,130,246,0.15)]
        "
      >

        <h1
          className="
          text-4xl
          font-black
          text-white
          text-center
          mb-3
          "
        >
          Welcome Back
        </h1>

        <p
          className="
          text-slate-400
          text-center
          mb-10
          "
        >
          AI CyberSecure Platform
        </p>

        <div className="space-y-6">

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
            w-full
            bg-[#0F172A]
            border
            border-slate-700
            text-white
            px-5
            py-4
            rounded-2xl
            outline-none
            focus:border-cyan-500
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
            w-full
            bg-[#0F172A]
            border
            border-slate-700
            text-white
            px-5
            py-4
            rounded-2xl
            outline-none
            focus:border-cyan-500
            "
          />

          <button
            onClick={handleLogin}
            className="
            w-full
            bg-cyan-500
            hover:bg-cyan-400
            text-black
            font-bold
            py-4
            rounded-2xl
            transition-all
            duration-300
            hover:scale-[1.02]
            "
          >
            Login
          </button>

        </div>

        <p
          className="
          text-slate-400
          text-center
          mt-8
          "
        >
          Don’t have an account?{" "}

          <Link
            href="/register"
            className="
            text-cyan-400
            hover:underline
            "
          >
            Register
          </Link>

        </p>

      </div>

    </main>

  );
}