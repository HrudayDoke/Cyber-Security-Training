import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ModuleCardProps {
  title: string;
  description: string;
  progress: number;
}

export default function ModuleCard({
  title,
  description,
  progress,
}: ModuleCardProps) {
  return (
    <Card className="bg-slate-900 border-slate-800 text-white hover:border-blue-500 transition-all duration-300">
      <CardContent className="p-6">

        <h2 className="text-xl font-semibold mb-2">
          {title}
        </h2>

        <p className="text-slate-400 mb-4">
          {description}
        </p>

        <div className="flex justify-between mb-2 text-sm">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        <Progress value={progress} />

      </CardContent>
    </Card>
  );
}