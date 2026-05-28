"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {

  const router = useRouter();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");


const handleRegister =
async (
  e: React.FormEvent
) => {

  e.preventDefault();

if (
  !email.includes("@") ||
  !email.includes(".")
) {

  alert(
    "Enter valid email address"
  );

  return;
}

if (
  password.length < 8
) {

  alert(
    "Password must contain at least 8 characters"
  );

  return;
}

const strongPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;

if (
  !strongPassword.test(
    password
  )
) {

  alert(
    "Password must contain uppercase, lowercase, number and special character"
  );

  return;
}

  const existingUsers =
    JSON.parse(
      localStorage.getItem("users") || "[]"
    );

  const alreadyExists =
    existingUsers.find(
      (user: any) =>
        user.email === email
    );

  if (alreadyExists) {

    alert(
      "User already registered with this email."
    );
    

    return;
  }

  const newUser = {
    name,
    email,
    password,
  };

  existingUsers.push(newUser);

  localStorage.setItem(
    "users",
    JSON.stringify(existingUsers)
  );

  localStorage.setItem(
    "currentUser",
    JSON.stringify(newUser)
  );
  console.log(newUser);

  router.push("/login");
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
          Create Account
        </h1>

        <p
          className="
          text-slate-400
          text-center
          mb-10
          "
        >
          Join AI CyberSecure
        </p>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
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
            onClick={handleRegister}
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
            Create Account
          </button>

        </div>

        <p
          className="
          text-slate-400
          text-center
          mt-8
          "
        >
          Already have an account?{" "}

          <Link
            href="/login"
            className="
            text-cyan-400
            hover:underline
            "
          >
            Login
          </Link>

        </p>

      </div>

    </main>

  );
}
