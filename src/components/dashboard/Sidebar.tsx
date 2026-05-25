"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  FileCheck,
} from "lucide-react";

const navItems = [
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

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-6">
      <h1 className="text-2xl font-bold text-white mb-10">
        CyberSecure
      </h1>

      <nav className="space-y-4">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-300 p-3 rounded-xl"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}