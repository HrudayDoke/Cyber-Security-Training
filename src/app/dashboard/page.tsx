import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Shield,
  Trophy,
  BookOpen,
  CheckCircle,
} from "lucide-react";

import Sidebar from "@/components/dashboard/Sidebar";
import ModuleCard from "@/components/dashboard/ModuleCard";
import { modules } from "@/data/modules";

export default function DashboardPage() {
  return (
    <div className="flex bg-slate-950 text-white">
      
      <Sidebar />

      <main className="flex-1 min-h-screen p-6">
        <div className="max-w-7xl mx-auto">

          <div className="mb-8">
            <h1 className="text-4xl font-bold">
              Security Training Dashboard
            </h1>

            <p className="text-slate-400 mt-2">
              Track your cybersecurity learning progress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

            <Card className="bg-slate-900 border-slate-800 text-white">
              <CardContent className="p-6">
                <Shield className="mb-4 text-blue-400" size={32} />
                <h2 className="text-2xl font-bold">7</h2>
                <p className="text-slate-400">Modules</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 text-white">
              <CardContent className="p-6">
                <BookOpen className="mb-4 text-green-400" size={32} />
                <h2 className="text-2xl font-bold">0%</h2>
                <p className="text-slate-400">Progress</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 text-white">
              <CardContent className="p-6">
                <Trophy className="mb-4 text-yellow-400" size={32} />
                <h2 className="text-2xl font-bold">0</h2>
                <p className="text-slate-400">Badges</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 text-white">
              <CardContent className="p-6">
                <CheckCircle className="mb-4 text-purple-400" size={32} />
                <h2 className="text-2xl font-bold">Beginner</h2>
                <p className="text-slate-400">Current Level</p>
              </CardContent>
            </Card>

          </div>

          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardContent className="p-6">
              <div className="flex justify-between mb-4">
                <h2 className="text-xl font-semibold">
                  Learning Progress
                </h2>

                <span className="text-slate-400">
                  0%
                </span>
              </div>

              <Progress value={0} className="h-3" />
            </CardContent>
          </Card>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6">
              Training Modules
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {modules.map((module) => (
                <ModuleCard
                  key={module.id}
                  title={module.title}
                  description={module.description}
                  progress={module.progress}
                />
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}