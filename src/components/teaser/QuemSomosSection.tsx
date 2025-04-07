
import React from 'react';
import { Users, Globe, FilePen, BadgeCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const QuemSomosSection = () => {
  return (
    <section id="quem-somos" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the team behind ADAspending and our commitment to transparency in Cardano governance.
          </p>
        </div>

        <Card className="mb-10 overflow-hidden border-none shadow-lg">
          <div className="bg-cardano-blue text-white p-6">
            <h3 className="text-xl font-semibold flex items-center">
              <Users className="mr-2 h-5 w-5" /> 
              Our Team
            </h3>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-700 mb-4">
              We're the same team behind <a href="https://governancespace.com" target="_blank" rel="noopener noreferrer" className="text-cardano-blue font-medium hover:underline">GovernanceSpace.com</a> and <a href="https://cardanofeed.com" target="_blank" rel="noopener noreferrer" className="text-cardano-blue font-medium hover:underline">CardanoFeed.com</a>, recognized platforms in the Cardano ecosystem.
            </p>
            <p className="text-gray-700">
              With years of experience in the Cardano ecosystem, our team is deeply involved in governance processes and the community, always seeking to contribute to a more transparent and accessible ecosystem.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="bg-cardano-blue text-white p-6">
              <h3 className="text-xl font-semibold flex items-center">
                <Globe className="mr-2 h-5 w-5" /> 
                Our Mission
              </h3>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700">
                Our goal is to promote financial transparency within the Cardano ecosystem, making funding and governance data accessible to all community members in an easy and intuitive way.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-lg">
            <div className="bg-cardano-blue text-white p-6">
              <h3 className="text-xl font-semibold flex items-center">
                <FilePen className="mr-2 h-5 w-5" /> 
                Our Commitment
              </h3>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700">
                We are committed to providing accurate and verifiable data on how Cardano treasury funds are allocated and used, contributing to a more transparent and accountable ecosystem.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <BadgeCheck className="mr-2 h-5 w-5 text-cardano-blue" /> 
            Why Trust Us?
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-cardano-blue mr-2">•</span>
              <span className="text-gray-700">Proven experience in the Cardano ecosystem</span>
            </li>
            <li className="flex items-start">
              <span className="text-cardano-blue mr-2">•</span>
              <span className="text-gray-700">Development of reference platforms like GovernanceSpace and CardanoFeed</span>
            </li>
            <li className="flex items-start">
              <span className="text-cardano-blue mr-2">•</span>
              <span className="text-gray-700">Active participation in Cardano governance processes</span>
            </li>
            <li className="flex items-start">
              <span className="text-cardano-blue mr-2">•</span>
              <span className="text-gray-700">Commitment to open data and transparency</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QuemSomosSection;
