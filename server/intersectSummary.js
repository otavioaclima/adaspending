export const summarizeIntersectProjects = (projects) => {
  const financialSummary = projects.reduce((summary, project) => ({
    totalAllocatedAda: summary.totalAllocatedAda + project.totalAmount,
    withdrawnMilestoneAda: summary.withdrawnMilestoneAda + project.amountSpent,
  }), {
    totalAllocatedAda: 0,
    withdrawnMilestoneAda: 0,
  });
  financialSummary.remainingMilestoneAda = Math.max(
    0,
    financialSummary.totalAllocatedAda - financialSummary.withdrawnMilestoneAda,
  );

  return {
    projectCount: projects.length,
    vendorGroupCount: new Set(projects.map((project) => project.vendor)).size,
    financialSummary,
  };
};

export const createIntersectOverviewSummary = (directory) => ({
  ...summarizeIntersectProjects(directory.projects),
  source: directory.source,
  updatedAt: directory.updatedAt,
  upstreamUpdatedAt: directory.upstreamUpdatedAt,
  sync: directory.sync,
  stale: directory.stale,
});
