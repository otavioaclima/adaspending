import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Briefcase, ArrowRight, Wallet } from "lucide-react";
import { intersectProjects, IntersectProject } from "@/data/intersectData";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectShowcaseCard = ({ project, color }: { project: IntersectProject, color: "green" | "blue" | "orange" }) => {
  const colorClasses = {
    green: "bg-green-50/50 border-green-100 hover:border-green-300 hover:shadow-md dark:bg-green-950/20 dark:border-green-900/50",
    blue: "bg-blue-50/50 border-blue-100 hover:border-blue-300 hover:shadow-md dark:bg-blue-950/20 dark:border-blue-900/50",
    orange: "bg-orange-50/50 border-orange-100 hover:border-orange-300 hover:shadow-md dark:bg-orange-950/20 dark:border-orange-900/50",
  };

  return (
    <Link to={`/projects/${project.id}`}>
      <div className={`p-4 rounded-xl border-2 transition-all duration-300 mb-4 group ${colorClasses[color]}`}>
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-sm text-gray-900 dark:text-gray-100 line-clamp-2 mb-2 leading-snug group-hover:text-cardano-blue transition-colors">
            {project.projectName}
          </h4>
          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 group-hover:text-cardano-blue transition-all shrink-0 ml-2" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
            <Briefcase className="h-3.5 w-3.5 mr-2 shrink-0 text-gray-400" />
            <span className="truncate font-medium">{project.vendor}</span>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center text-[11px] font-bold text-cardano-blue dark:text-blue-400">
              <Wallet className="h-3.5 w-3.5 mr-1.5 shrink-0" />
              <span>₳{project.totalAmount.toLocaleString()}</span>
            </div>
            {project.amountSpent > 0 && (
              <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500">
                {((project.amountSpent / project.totalAmount) * 100).toFixed(0)}%
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

const TrackingAlerts = () => {
  const { t } = useLanguage();
  const allCompleted = intersectProjects.filter(p => p.status.toLowerCase() === "completed");
  const allInProgress = intersectProjects.filter(p => p.status.toLowerCase() === "in progress");
  const allPaused = intersectProjects.filter(p => p.status.toLowerCase() === "paused");

  const completed = allCompleted.slice(0, 3);
  const inProgress = allInProgress.slice(0, 3);
  const paused = allPaused.slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Completed Column */}
      <Card className="border-none shadow-md bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center justify-between text-green-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              {t('status.completed')}
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-700 border-none text-[10px] h-5 px-1.5">
              {allCompleted.length}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {completed.length === 0 ? (
            <p className="text-sm text-gray-500 italic">{t('showcase.no_completed')}</p>
          ) : (
            completed.map(p => (
              <ProjectShowcaseCard key={p.id} project={p} color="green" />
            ))
          )}
          <Link to="/projects?status=Completed" className="text-xs text-green-600 font-bold hover:underline mt-2 inline-block">
            {t('showcase.view_all_completed')}
          </Link>
        </CardContent>
      </Card>

      {/* In Progress Column */}
      <Card className="border-none shadow-md bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center justify-between text-blue-600">
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              {t('status.in_progress')}
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-none text-[10px] h-5 px-1.5">
              {allInProgress.length}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {inProgress.length === 0 ? (
            <p className="text-sm text-gray-500 italic">{t('showcase.no_in_progress')}</p>
          ) : (
            inProgress.map(p => (
              <ProjectShowcaseCard key={p.id} project={p} color="blue" />
            ))
          )}
          <Link to="/projects?status=In Progress" className="text-xs text-blue-600 font-bold hover:underline mt-2 inline-block">
            {t('showcase.view_all_in_progress')}
          </Link>
        </CardContent>
      </Card>

      {/* Paused Column */}
      <Card className="border-none shadow-md bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center justify-between text-orange-600">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              {t('status.paused_projects')}
            </div>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-none text-[10px] h-5 px-1.5">
              {allPaused.length}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {paused.length === 0 ? (
            <p className="text-sm text-gray-500 italic">{t('showcase.no_paused')}</p>
          ) : (
            paused.map(p => (
              <ProjectShowcaseCard key={p.id} project={p} color="orange" />
            ))
          )}
          <Link to="/projects?status=Paused" className="text-xs text-orange-600 font-bold hover:underline mt-2 inline-block">
            {t('showcase.view_all_paused')}
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrackingAlerts;

