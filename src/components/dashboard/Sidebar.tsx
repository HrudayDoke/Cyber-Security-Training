"use client";

import React, {
  useEffect,
  useState,
} from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  FileCheck,
  Bot,
} from "lucide-react";

const navItems = [
  {
    label:
      "AI Assistant",
    href:
      "/assistant",
    icon: Bot,
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Modules",
    href: "/modules",
    icon: BookOpen,
  },
  {
    name: "Badges",
    href: "/badges",
    icon: Trophy,
  },
  {
    name: "Certificate",
    href: "/certificate",
    icon: FileCheck,
  },  
];





export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}) {

  const router = useRouter();

const [user, setUser] =
  useState<any>(null);

const [showMenu, setShowMenu] =
  useState(false);

useEffect(() => {

  const storedUser =
    localStorage.getItem(
      "currentUser"
    );

  if (storedUser) {

    const parsedUser =
      JSON.parse(storedUser);

    setUser(parsedUser);
  }

}, []);

const handleLogout = () => {

  localStorage.removeItem(
    "currentUser"
  );

  router.push("/login");

};
  
  return (

  <>

    <button
      onClick={() => setIsOpen(!isOpen)}
      className="
      fixed
      top-6
      left-6
      z-50
      bg-[#0F172A]
      border
      border-slate-700
      text-white
      p-3
      rounded-xl
      hover:bg-slate-800
      transition-all
      shadow-lg
      "
    >

      <div className="space-y-1">

        <div className="w-6 h-[3px] bg-white rounded-full" />

        <div className="w-6 h-[3px] bg-white rounded-full" />

        <div className="w-6 h-[3px] bg-white rounded-full" />

      </div>

    </button>

    <aside
      className={`
      fixed
      top-0
      left-0
      h-screen
      bg-[#0B1727]/95
      backdrop-blur-xl
      border-r
      border-cyan-500/10
      p-6
      transition-all
      duration-300
      z-40
      ${
        isOpen
          ? "w-64 translate-x-0"
          : "w-64 -translate-x-full"
      }
      `}
    >

      <div className="relative mb-10 mt-16">

  <button
    onClick={() =>
      setShowMenu(!showMenu)
    }
    className="
    w-full
    bg-slate-800/70
    border
    border-slate-700
    rounded-2xl
    p-4
    text-left
    hover:bg-slate-800
    transition-all
    "
  >

    

    <div className="flex items-center gap-3 mt-2">

  <div
    className="
    w-12
    h-12
    rounded-full
    bg-cyan-500
    flex
    items-center
    justify-center
    text-black
    font-black
    text-lg
    shadow-[0_0_20px_rgba(34,211,238,0.4)]
    "
  >

    {user?.name
      ? user.name.charAt(0).toUpperCase()
      : "U"}

  </div>

  <div>

    <h2 className="text-white text-lg font-bold">
      {user?.name || "User"}
    </h2>

    <p className="text-slate-400 text-sm">
      Cybersecurity Learner
    </p>

  </div>

</div>

  </button>

  {showMenu && (

    <div
      className="
      absolute
      top-full
      left-0
      mt-3
      w-full
      bg-[#0F172A]
      border
      border-slate-700
      rounded-2xl
      overflow-hidden
      shadow-2xl
      z-50
      "
    >

      <button
        onClick={handleLogout}
        className="
        w-full
        text-left
        px-5
        py-4
        text-red-400
        hover:bg-slate-800
        transition-all
        "
      >
        Logout
      </button>

    </div>

  )}

</div>

      <nav className="space-y-4">

        {navItems.map((item) => {

          const Icon = item.icon;

          return (

            <Link
              key={item.href}
              href={item.href}
              className="
              flex
              items-center
              gap-3
              text-slate-300
              hover:text-white
              hover:bg-slate-800
              transition-all
              duration-300
              p-3
              rounded-xl
              "
            >

              <Icon size={20} />

              <span>{item.name}</span>

            </Link>

          );

        })}

      </nav>

    </aside>

  </>

  );
}