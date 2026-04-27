
import React from "react";
import { CheckCircle, Clock, PauseCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { useIntersectData } from "@/hooks/useIntersectData";
import { Link } from "react-router-dom";

const TrackingAlerts = () => {
  const { t } = useLanguage();
  const { data: intersectProjects = [] } = useIntersectData();

  // Categories based on Intersect project statuses
  const allCompleted = intersectProjects.filter(p => p.status.toLowerCase() === "completed");
  const allInProgress = intersectProjects.filter(p => p.status.toLowerCase() === "in progress");
  const allPaused = intersectProjects.filter(p => p.status.toLowerCase() === "paused" || p.status.toLowerCase() === "on hold");

  const alerts = [
    {
      id: 1,
      title: t('alerts.high_confidence'),
      description: t('alerts.high_confidence_desc'),
      color: "emerald",
      icon: <CheckCircle className="h-6 w-6 text-emerald-500" />,
      count: allCompleted.length,
      projects: allCompleted.slice(0, 5),
      href: "/projects?status=completed"
    },
    {
      id: 2,
      title: t('alerts.active_monitoring'),
      description: t('alerts.active_monitoring_desc'),
      color: "blue",
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      count: allInProgress.length,
      projects: allInProgress.slice(0, 5),
      href: "/projects?status=in_progress"
    },
    {
      id: 3,
      title: t('alerts.paused_review'),
      description: t('alerts.paused_review_desc'),
      color: "amber",
      icon: <PauseCircle className="h-6 w-6 text-amber-500" />,
      count: allPaused.length,
      projects: allPaused.slice(0, 5),
      href: "/projects?status=paused"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {alerts.map((alert) => (
        <Card key={alert.id} className="group relative overflow-hidden border-none shadow-xl bg-white dark:bg-[#0f172a] hover:shadow-2xl transition-all duration-500 flex flex-col rounded-[2.5rem] ring-1 ring-black/5 dark:ring-white/5">
          {/* Subtle Accent Background Gradient */}
          <div className={`absolute top-0 right-0 w-48 h-48 bg-${alert.color}-500/5 blur-[80px] rounded-full -mr-24 -mt-24 transition-colors duration-700`} />
          
          <CardHeader className="pb-4 pt-8 px-8 relative z-10">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className={`p-3.5 bg-${alert.color}-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-500`}>
                  {alert.icon}
                </div>
                <div className="max-w-[140px] md:max-w-none">
                  <CardTitle className="text-xl font-black tracking-tight dark:text-white leading-none mb-1.5">{alert.title}</CardTitle>
                  <CardDescription className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {alert.description}
                  </CardDescription>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Link to={alert.href} className={`flex items-center gap-2 px-3 py-1.5 bg-${alert.color}-500/5 hover:bg-${alert.color}-500/10 border border-${alert.color}-500/20 rounded-xl group/view transition-all active:scale-95`}>
                  <span className={`text-xs font-black text-${alert.color}-600 dark:text-${alert.color}-400`}>
                    {alert.count}
                  </span>
                  <div className={`w-px h-3 bg-${alert.color}-500/20`} />
                  <ArrowRight className={`h-3.5 w-3.5 text-${alert.color}-600 dark:text-${alert.color}-400 transition-transform group-hover/view:translate-x-1`} />
                </Link>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-grow flex flex-col px-8 pb-8 pt-2 relative z-10">
            <div className="space-y-2">
              <div className="grid gap-2">
                {alert.projects.map((project, idx) => (
                  <Link 
                    key={project.id || idx} 
                    to={`/projects/${project.id}`}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 border border-transparent hover:border-gray-200 dark:hover:border-white/10 transition-all group/item shadow-sm hover:shadow-md"
                  >
                    <span className="text-[11px] font-bold text-gray-700 dark:text-gray-200 truncate pr-3 group-hover/item:text-cardano-blue transition-colors">
                      {project.projectName.length > 45 ? project.projectName.substring(0, 45) + '...' : project.projectName}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-gray-300 group-hover/item:text-cardano-blue transition-all transform translate-x-1 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                  </Link>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TrackingAlerts;
