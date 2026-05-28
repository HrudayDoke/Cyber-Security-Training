import Link from "next/link";

import {
  Shield,
  Lock,
  Network,
} from "lucide-react";

interface ModuleCardProps {
  slug: string;
  title: string;
  description: string;
  progress: number;
}

export default function ModuleCard({
  slug,
  title,
  description,
  progress,
}: ModuleCardProps) {

  const icons = [
    <Shield key="shield" className="w-8 h-8 text-blue-500" />,
    <Lock key="lock" className="w-8 h-8 text-emerald-500" />,
    <Network key="network" className="w-8 h-8 text-purple-500" />,
  ];

  const iconMap: Record<string, React.ReactNode> = {

  "phishing-awareness":
    <Shield className="w-8 h-8 text-blue-500" />,

  "passwords-2fa":
    <Lock className="w-8 h-8 text-emerald-500" />,

  "malware-defense":
    <Network className="w-8 h-8 text-purple-500" />,

};

const selectedIcon =
  iconMap[slug] ||
  <Shield className="w-8 h-8 text-blue-500" />;
  return (
    <Link href={`/modules/${slug}`}>

      <div
        className="
        bg-[#0F172A]
        border border-slate-800
        rounded-3xl
        p-6
        shadow-sm
        hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
        hover:border-blue-500/40
        hover:-translate-y-1
        transition-all duration-300
        cursor-pointer
        group
        "
      >

        <div
          className="
          w-16 h-16
          rounded-2xl
          bg-[#162033]
          flex items-center justify-center
          mb-6
          group-hover:scale-110
          transition-all
          "
        >
          {selectedIcon}
        </div>

        <h3 className="text-2xl font-bold text-white mb-3">
          {title}
        </h3>

        <p className="text-slate-400 leading-7 mb-6">
          {description}
        </p>

        <div className="w-full bg-slate-800 rounded-full h-3">
          <div
            className="
            bg-gradient-to-r
            from-blue-500
            to-cyan-400
            h-3
            rounded-full
            "
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4 text-sm text-slate-400">
          {progress}% completed
        </div>

      </div>

    </Link>
  );
}