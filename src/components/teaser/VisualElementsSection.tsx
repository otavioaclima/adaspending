import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

// Sample data for charts
const treasuryData = [
  { month: 'Jan', amount: 1200000 },
  { month: 'Feb', amount: 1800000 },
  { month: 'Mar', amount: 2400000 },
  { month: 'Apr', amount: 1600000 },
  { month: 'May', amount: 3200000 },
  { month: 'Jun', amount: 2800000 },
];

const categoryData = [
  { name: 'DApps', value: 35 },
  { name: 'Infrastructure', value: 25 },
  { name: 'Education', value: 15 },
  { name: 'Marketing', value: 10 },
  { name: 'Research', value: 15 },
];

const roundsData = [
  { name: 'Fund 7', proposals: 58, funded: 32 },
  { name: 'Fund 8', proposals: 72, funded: 41 },
  { name: 'Fund 9', proposals: 89, funded: 47 },
  { name: 'Fund 10', proposals: 103, funded: 52 },
];

const COLORS = ['#0033AD', '#1BAAD6', '#FF5733', '#33C3F0', '#8884D8'];

const VisualElementsSection = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Blockchain background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSIjMDAzM0FEIj48cGF0aCBkPSJNMzYgMjRhNiA2IDAgMSAwIDAgMTIgNiA2IDAgMCAwIDAtMTJ6bS0xMiAwYTYgNiAwIDEgMCAwIDEyIDYgNiAwIDAgMCAwLTEyem0wLTEyYTYgNiAwIDEgMCAwIDEyIDYgNiAwIDAgMCAwLTEyem0xMiAwYTYgNiAwIDEgMCAwIDEyIDYgNiAwIDAgMCAwLTEyem0xMiAwYTYgNiAwIDEgMCAwIDEyIDYgNiAwIDAgMCAwLTEyem0tMjQgMTJhNiA2IDAgMSAwIDAgMTIgNiA2IDAgMCAwIDAtMTJ6Ii8+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Data Visualization <span className="text-cardano-blue">Preview</span>
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          A sneak peek into the powerful data visualization tools available in the ADAspending dashboard.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Treasury Spending Over Time Chart */}
          <Card className="shadow-lg border-cardano-teal/20 overflow-hidden transform transition-all duration-500 hover:shadow-xl cardano-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-cardano-blue">Treasury Spending Over Time</h3>
              <p className="text-sm text-gray-500 mb-4">Monthly allocation of treasury funds</p>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={treasuryData}
                    margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0033AD" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#1BAAD6" stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value.toLocaleString()} ADA`} />
                    <Area 
                      type="monotone" 
                      dataKey="amount" 
                      stroke="#0033AD" 
                      fillOpacity={1} 
                      fill="url(#colorAmount)" 
                      className="animate-pulse-slow"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Category Distribution Pie Chart */}
          <Card className="shadow-lg border-cardano-teal/20 overflow-hidden transform transition-all duration-500 hover:shadow-xl cardano-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-cardano-blue">Funding by Category</h3>
              <p className="text-sm text-gray-500 mb-4">Distribution across different project categories</p>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      className="animate-pulse-slow"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        
        {/* Bar Chart for Fund Rounds */}
        <Card className="shadow-lg border-cardano-teal/20 overflow-hidden transform transition-all duration-500 hover:shadow-xl cardano-card">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-cardano-blue">Fund Rounds Analytics</h3>
            <p className="text-sm text-gray-500 mb-4">Proposals submitted vs funded by round</p>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={roundsData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="proposals" fill="#0033AD" name="Total Proposals" className="animate-pulse-slow" />
                  <Bar dataKey="funded" fill="#1BAAD6" name="Funded Projects" className="animate-pulse-slow" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VisualElementsSection;
