import test from "node:test";
import assert from "node:assert/strict";
import { createIntersectOverviewSummary, summarizeIntersectProjects } from "../server/intersectSummary.js";

const projects = [
  { vendor: "Team A", totalAmount: 120, amountSpent: 45 },
  { vendor: "Team A", totalAmount: 80, amountSpent: 50 },
  { vendor: "Team B", totalAmount: 40, amountSpent: 10 },
];

test("overview summary counts projects and distinct vendor groups", () => {
  const summary = summarizeIntersectProjects(projects);
  assert.equal(summary.projectCount, 3);
  assert.equal(summary.vendorGroupCount, 2);
});

test("overview summary reconciles allocations, withdrawn value, and remaining allocation", () => {
  const { financialSummary } = summarizeIntersectProjects(projects);
  assert.deepEqual(financialSummary, {
    totalAllocatedAda: 240,
    withdrawnMilestoneAda: 105,
    remainingMilestoneAda: 135,
  });
});

test("remaining allocation cannot become negative when withdrawals exceed allocation", () => {
  const { financialSummary } = summarizeIntersectProjects([
    { vendor: "Team A", totalAmount: 100, amountSpent: 130 },
  ]);
  assert.equal(financialSummary.remainingMilestoneAda, 0);
});

test("overview endpoint preserves source and freshness metadata from the shared directory", () => {
  const directory = {
    projects,
    source: "Intersect Administration API · Cardano mainnet",
    updatedAt: "2026-10-20T00:00:00.000Z",
    upstreamUpdatedAt: "2026-10-19T23:59:00.000Z",
    sync: { state: "delayed", lagHours: 24 },
    stale: true,
  };
  const summary = createIntersectOverviewSummary(directory);
  assert.equal(summary.source, directory.source);
  assert.equal(summary.updatedAt, directory.updatedAt);
  assert.equal(summary.upstreamUpdatedAt, directory.upstreamUpdatedAt);
  assert.deepEqual(summary.sync, directory.sync);
  assert.equal(summary.stale, true);
});
