
import React from "react";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent
} from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, ScatterChart, Scatter, ZAxis
} from "recharts";

interface ChartSectionProps {
  chartType: string;
  setChartType: (v: string) => void;
  timeframe: string;
  setTimeframe: (v: string) => void;
  categoryData: any[];
  fundingByRound: any[];
  monthlyFunding: any[];
  proposalScatterData: any[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#BFBFBF'];

export default function ChartSection(props: ChartSectionProps) {
  const {
    chartType, setChartType,
    timeframe, setTimeframe,
    categoryData, fundingByRound,
    monthlyFunding, proposalScatterData
  } = props;

  return (
    <>
      {/* Chart Controls */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label className="text-sm font-medium text-gray-700 mb-1 block">Chart Type</label>
              <Select value={chartType} onValueChange={setChartType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select chart type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="category">Funding by Category</SelectItem>
                  <SelectItem value="round">Funding by Round</SelectItem>
                  <SelectItem value="time">Funding Over Time</SelectItem>
                  <SelectItem value="scatter">Proposal Amount vs Votes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full sm:w-1/2">
              <label className="text-sm font-medium text-gray-700 mb-1 block">Time Frame</label>
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time frame" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="latest">Latest Fund Round</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Chart Display */}
      <Card>
        <CardHeader>
          <CardTitle>
            {chartType === 'category' && 'Funding by Category'}
            {chartType === 'round' && 'Funding by Round'}
            {chartType === 'time' && 'Funding Over Time'}
            {chartType === 'scatter' && 'Proposal Amount vs Votes'}
          </CardTitle>
          <CardDescription>
            {chartType === 'category' && 'Distribution of funding across different proposal categories'}
            {chartType === 'round' && 'Budget and proposal count by fund round'}
            {chartType === 'time' && 'Monthly funding trends over time'}
            {chartType === 'scatter' && 'Relationship between proposal amount and vote count'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            {chartType === 'category' && (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => `${value}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            )}

            {chartType === 'round' && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={fundingByRound}
                  margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#0033AD" />
                  <YAxis yAxisId="right" orientation="right" stroke="#1BAAD6" />
                  <Tooltip 
                    formatter={(value: number, name: string) => [
                      name === 'budget' ? `${value.toLocaleString()} ADA` : value.toLocaleString(),
                      name === 'budget' ? 'Budget' : 
                      name === 'proposals' ? 'Total Proposals' : 'Approved Proposals'
                    ]}
                  />
                  <Legend />
                  <Bar yAxisId="left" dataKey="budget" name="Budget (ADA)" fill="#0033AD" />
                  <Bar yAxisId="right" dataKey="proposals" name="Total Proposals" fill="#1BAAD6" />
                  <Bar yAxisId="right" dataKey="approvedProposals" name="Approved Proposals" fill="#00C49F" />
                </BarChart>
              </ResponsiveContainer>
            )}

            {chartType === 'time' && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthlyFunding}
                  margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value: number) => `${value.toLocaleString()} ADA`} />
                  <Line 
                    type="monotone" 
                    dataKey="amount" 
                    name="Funding Amount" 
                    stroke="#0033AD" 
                    strokeWidth={2}
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            )}

            {chartType === 'scatter' && (
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                  margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="amount" 
                    name="Requested Amount (ADA)" 
                    type="number"
                    domain={['auto', 'auto']}
                    label={{ value: 'Requested Amount (ADA)', position: 'insideBottomRight', offset: -10 }}
                  />
                  <YAxis 
                    dataKey="votes" 
                    name="Yes Votes" 
                    type="number" 
                    label={{ value: 'Yes Votes', angle: -90, position: 'insideLeft' }}
                  />
                  <ZAxis dataKey="name" name="Proposal" />
                  <Tooltip 
                    cursor={{ strokeDasharray: '3 3' }}
                    formatter={(value: any, name: string, props: any) => {
                      if (name === 'Requested Amount (ADA)') {
                        return [`${value.toLocaleString()} ADA`, name];
                      }
                      if (name === 'Yes Votes') {
                        return [value.toLocaleString(), name];
                      }
                      return [value, name];
                    }}
                  />
                  <Legend />
                  <Scatter 
                    name="Approved Proposals" 
                    data={proposalScatterData.filter(p => p.approved)} 
                    fill="#00C49F"
                  />
                  <Scatter 
                    name="Rejected Proposals" 
                    data={proposalScatterData.filter(p => !p.approved)} 
                    fill="#FF8042"
                  />
                </ScatterChart>
              </ResponsiveContainer>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
