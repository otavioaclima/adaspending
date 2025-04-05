
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { treasuryStats, fundRounds } from '@/data/mockData';

const ChartsSection = () => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#BFBFBF'];

  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Funding by Category</CardTitle>
            <CardDescription>Distribution of approved proposals by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie 
                    data={treasuryStats.categoryDistribution} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={80} 
                    fill="#8884d8" 
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {treasuryStats.categoryDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Fund Rounds History */}
        <Card>
          <CardHeader>
            <CardTitle>Historical Fund Rounds</CardTitle>
            <CardDescription>Budget and proposal count by fund round</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={fundRounds} 
                  margin={{
                    top: 10,
                    right: 10,
                    left: 10,
                    bottom: 20
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#0033AD" />
                  <YAxis yAxisId="right" orientation="right" stroke="#1BAAD6" />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="totalBudget" name="Budget (ADA)" fill="#0033AD" />
                  <Bar yAxisId="right" dataKey="proposals" name="Proposals" fill="#1BAAD6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ChartsSection;
