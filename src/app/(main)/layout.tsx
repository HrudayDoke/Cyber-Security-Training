"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [isOpen, setIsOpen] =
    useState(true);

  return (

    <div className="flex">

      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <main
        className={`
        flex-1
        min-h-screen
        bg-[#020817]
        transition-all
        duration-300
        p-8
        ${
          isOpen
            ? "ml-64"
            : "ml-0"
        }
        `}
      >

        {children}

      </main>

    </div>

  );
}