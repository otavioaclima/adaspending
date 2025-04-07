
import React from 'react';
import { Users, Globe, Award, ExternalLink, Building, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const QuemSomosSection = () => {
  return (
    <section id="quem-somos" className="py-24 px-4 bg-gradient-to-br from-white to-cardano-light">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 bg-white/80 border-cardano-teal/30 text-cardano-blue font-medium">
            Our Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cardano-dark">Who We Are</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We're passionate Cardano advocates dedicated to transparency and community empowerment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/90 border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-cardano-blue" aria-hidden="true" />
            <CardContent className="p-8">
              <div className="rounded-full bg-cardano-light p-3 w-14 h-14 flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-cardano-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cardano-dark">Experienced Team</h3>
              <p className="text-gray-700 mb-6">
                The same team behind GovernanceSpace and CardanoFeed, recognized leaders in the Cardano ecosystem building trusted community resources.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Badge variant="secondary" className="bg-cardano-light/70 text-cardano-blue hover:bg-cardano-light">Cardano Ecosystem</Badge>
                <Badge variant="secondary" className="bg-cardano-light/70 text-cardano-blue hover:bg-cardano-light">Community Leaders</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-cardano-teal" aria-hidden="true" />
            <CardContent className="p-8">
              <div className="rounded-full bg-cardano-light p-3 w-14 h-14 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-cardano-teal" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cardano-dark">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                Promoting financial transparency within the Cardano ecosystem by making funding and governance data accessible to all community members.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Badge variant="secondary" className="bg-cardano-light/70 text-cardano-teal hover:bg-cardano-light">Transparency</Badge>
                <Badge variant="secondary" className="bg-cardano-light/70 text-cardano-teal hover:bg-cardano-light">Governance</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-cardano-coral" aria-hidden="true" />
            <CardContent className="p-8">
              <div className="rounded-full bg-cardano-light p-3 w-14 h-14 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-cardano-coral" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cardano-dark">Our Commitment</h3>
              <p className="text-gray-700 mb-6">
                Providing accurate and verifiable data on Cardano treasury funds, contributing to a more transparent and accountable ecosystem.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Badge variant="secondary" className="bg-cardano-light/70 text-cardano-coral hover:bg-cardano-light">Accountability</Badge>
                <Badge variant="secondary" className="bg-cardano-light/70 text-cardano-coral hover:bg-cardano-light">Community-Driven</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-none shadow-xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-shrink-0 mb-6 md:mb-0">
                  <Users className="h-20 w-20 text-cardano-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-cardano-dark">Why Trust Us?</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-cardano-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>Years of experience building trusted Cardano ecosystem tools</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-cardano-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>Active participation in Cardano governance processes</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-cardano-blue mr-3 mt-0.5 flex-shrink-0" />
                      <span>Commitment to open data and transparency</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button className="bg-cardano-blue hover:bg-cardano-blue/90" asChild>
                      <a href="https://governancespace.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <span>GovernanceSpace</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button className="bg-cardano-blue hover:bg-cardano-blue/90" asChild>
                      <a href="https://cardanofeed.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <span>CardanoFeed</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuemSomosSection;
