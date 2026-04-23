
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, ShieldCheck, Database, Users } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-10 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">About ADAspending</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The open data source for tracking treasury spending on the Cardano blockchain, 
            bringing transparency and accountability to community funds.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-none bg-cardano-blue/5 shadow-none">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-cardano-blue mb-3">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To provide the Cardano community with clear, accessible, and real-time information on how treasury funds are allocated and spent. 
                We believe that transparency is the foundation of decentralized governance.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none bg-cardano-teal/5 shadow-none">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-cardano-teal mb-3">Our Vision</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To foster a more accountable Cardano ecosystem where every ADA holder can easily track the impact of treasury-funded projects 
                and participate in informed decision-making.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What we track */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">What We Track</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-cardano-blue h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2 dark:text-white">Treasury Metrics</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Global treasury size, reserves, and circulating supply directly from the blockchain.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-green-600 dark:text-green-400 h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2 dark:text-white">Project Delivery</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Status, milestones, and funding amounts for Intersect and Catalyst projects.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600 dark:text-purple-400 h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2 dark:text-white">Vendor Spending</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Accountability for vendors and organizations receiving community funds.</p>
            </div>
          </div>
        </section>

        {/* Data Source Section (Adapted from USAspending) */}
        <section className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 italic text-cardano-blue">Where does the data come from?</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                ADAspending pulls data from multiple sources across the Cardano ecosystem. 
                Our primary source of truth is the <strong>public Cardano blockchain</strong>, supplemented by data from the Intersect Treasury contracts, 
                Project Catalyst, and community explorers like Cardanoscan and Cexplorer.
              </p>
              <p className="text-gray-300 leading-relaxed">
                As an <strong>unofficial community project</strong>, we prioritize data integrity and transparency. 
                Our platform is 100% open-source, allowing anyone to verify our data collection and processing methods.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Database className="h-32 w-32 text-gray-700 opacity-50" />
            </div>
          </div>
        </section>

        {/* Community Note */}
        <div className="text-center text-gray-500 max-w-2xl mx-auto">
          <p className="text-sm">
            ADAspending is built by the community, for the community. We are not affiliated with the Cardano Foundation, IOG, or Emurgo. 
            All our data is sourced from public records and the blockchain.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
