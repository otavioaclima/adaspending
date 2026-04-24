
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Milestone = {
  title: string;
  description: string;
  status: string;
  dueDate: string;
};

type Proposal = {
  id: string;
  title: string;
  category: string;
  fundRound: string;
  abstract: string;
  milestones?: Milestone[];
};

type Props = {
  proposals: Proposal[];
};

const VendorMilestones = ({ proposals }: Props) => {
  const { t } = useLanguage();
  return (
    <div>
      <h2 className="font-bold text-lg mb-2">{t('project.progress_milestones')}</h2>
      {proposals.length === 0 ? (
        <div className="text-gray-500 italic">{t('project.no_projects_vendor')}</div>
      ) : (
        proposals.map((proposal) => (
          <div key={proposal.id} className="mb-6 border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-800">{proposal.title}</span>
              <span className="text-xs text-gray-500">
                {proposal.fundRound} · {proposal.category}
              </span>
            </div>
            <div className="mb-2">
              <span className="text-sm text-gray-600">{proposal.abstract}</span>
            </div>
            {proposal.milestones && proposal.milestones.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                  <thead>
                    <tr>
                      <th className="py-1 px-2 text-left">{t('milestone.title_label')}</th>
                      <th className="py-1 px-2 text-left">{t('milestone.description_label')}</th>
                      <th className="py-1 px-2 text-left">{t('milestone.status_label')}</th>
                      <th className="py-1 px-2 text-left">{t('milestone.due_date_label')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {proposal.milestones.map((m, idx) => (
                      <tr key={idx} className="border-b">
                        <td className="py-1 px-2 font-medium">{m.title}</td>
                        <td className="py-1 px-2">{m.description}</td>
                        <td className="py-1 px-2 capitalize">
                          <span
                            className={
                              m.status === "completed"
                                ? "text-green-700 font-medium"
                                : m.status === "in-progress"
                                ? "text-yellow-700 font-medium"
                                : "text-gray-600"
                            }
                          >
                            {m.status === "completed"
                              ? t('vendors.status.completed')
                              : m.status === "in-progress"
                              ? t('vendors.status.in_progress')
                              : t('vendors.status.pending')}
                          </span>
                        </td>
                        <td className="py-1 px-2">
                          {new Date(m.dueDate).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="italic text-gray-400">
                {t('project.no_milestones_project')}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default VendorMilestones;
