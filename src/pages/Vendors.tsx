import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Building, Filter, ChevronDown, ChevronUp, MessageSquare, Info, Link2, Wallet, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import { intersectProjects } from '@/data/intersectData';

// Helper to get unique vendors and their aggregated stats
const useVendorStats = () => {
  return useMemo(() => {
    const stats: Record<string, {
      name: string;
      totalFunded: number;
      amountSpent: number;
      projectCount: number;
      statusCount: Record<string, number>;
    }> = {};

    intersectProjects.forEach(project => {
      if (!stats[project.vendor]) {
        stats[project.vendor] = {
          name: project.vendor,
          totalFunded: 0,
          amountSpent: 0,
          projectCount: 0,
          statusCount: {}
        };
      }

      const v = stats[project.vendor];
      v.totalFunded += project.totalAmount;
      v.amountSpent += project.amountSpent;
      v.projectCount += 1;
      v.statusCount[project.status] = (v.statusCount[project.status] || 0) + 1;
    });

    return Object.values(stats).sort((a, b) => b.totalFunded - a.totalFunded);
  }, []);
};

const VendorCard = ({ vendor }: { vendor: any }) => {
  return (
    <Link to={`/vendors/${encodeURIComponent(vendor.name)}`}>
      <Card className="h-full hover:shadow-lg transition-all border-gray-200 group">
        <CardContent className="p-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-cardano-blue/10 rounded-xl w-12 h-12 flex items-center justify-center group-hover:bg-cardano-blue group-hover:text-white transition-colors text-cardano-blue">
              <Building className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 group-hover:text-cardano-blue transition-colors leading-tight">
                {vendor.name}
              </h3>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                Active Vendor
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-5 p-3 bg-gray-50 rounded-lg border border-gray-100">
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Total Alocation</p>
              <p className="text-sm font-bold text-gray-900 flex items-center">
                <Wallet className="h-3 w-3 mr-1 text-cardano-blue" />
                ₳{vendor.totalFunded.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Total Spent</p>
              <p className="text-sm font-bold text-orange-600 flex items-center">
                ₳{vendor.amountSpent.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center text-gray-600 font-medium">
              <Briefcase className="h-4 w-4 mr-1.5 text-gray-400" />
              {vendor.projectCount} {vendor.projectCount === 1 ? 'Project' : 'Projects'}
            </div>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-100">
              {Object.keys(vendor.statusCount).length} Status Types
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const TransparencyToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      <Card className={`border-blue-200 transition-all ${isOpen ? 'bg-blue-50' : 'bg-white hover:bg-blue-50/30'}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
        >
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-700">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-blue-900">Transparency & Communication</h2>
              {!isOpen && <p className="text-sm text-blue-700/70">Click to expand community guidelines and resources for DReps</p>}
            </div>
          </div>
          {isOpen ? <ChevronUp className="h-5 w-5 text-blue-700" /> : <ChevronDown className="h-5 w-5 text-blue-700" />}
        </button>

        {isOpen && (
          <CardContent className="px-6 pb-6 pt-0 border-t border-blue-100 flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-bold text-blue-900">
                  <Info className="h-4 w-4 text-blue-700" />
                  For DReps
                </div>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Evaluate vendors based primarily on <b>competence</b>, <b>delivery capacity</b>, and <b>transparency</b>—not only the lowest price.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-bold text-blue-900">
                  <Link2 className="h-4 w-4 text-blue-700" />
                  Market Benchmarks
                </div>
                <p className="text-sm text-blue-800 leading-relaxed mb-2">
                  Check hourly rates and market prices before approving proposals.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-blue-700 underline text-xs" size="sm">
                  <a href="https://www.linkedin.com/pulse/hourly-rates-worldwide-2023-statista/" target="_blank" rel="noopener noreferrer">
                    See Benchmarks
                  </a>
                </Button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-bold text-blue-900">
                  <MessageSquare className="h-4 w-4 text-blue-700" />
                  Direct Channels
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Button asChild variant="outline" size="sm" className="bg-white h-7 text-[10px] px-2">
                    <a href="https://discord.gg/cardano" target="_blank" rel="noopener noreferrer">Discord</a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="bg-white h-7 text-[10px] px-2">
                    <a href="https://t.me/CardanoBR" target="_blank" rel="noopener noreferrer">Telegram</a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="bg-white h-7 text-[10px] px-2">
                    <a href="https://forum.cardano.org/" target="_blank" rel="noopener noreferrer">Forum</a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-100/50 rounded-lg flex items-center gap-3">
              <Info className="h-4 w-4 text-blue-700 shrink-0" />
              <p className="text-xs font-medium text-blue-800">
                Coming soon: Vendors will be able to add contacts and communication channels directly on the platform.
              </p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

const Vendors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const vendors = useVendorStats();

  const filteredVendors = useMemo(() => {
    return vendors.filter(vendor =>
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [vendors, searchTerm]);

  return (
    <Layout>
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900">Vendors</h1>
            <Badge variant="secondary" className="bg-cardano-blue/10 text-cardano-blue border-none h-6 px-3">
              {vendors.length} Total
            </Badge>
          </div>
          <p className="text-gray-600 max-w-2xl">
            Directory of teams & organizations delivering projects for the Intersect Treasury Contracts 1.
          </p>
        </div>

        <div className="w-full md:w-80 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            className="pl-9 h-11 border-gray-200"
            placeholder="Search vendors by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <TransparencyToggle />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredVendors.map(vendor => (
          <VendorCard key={vendor.name} vendor={vendor} />
        ))}
      </div>

      {filteredVendors.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
          <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4 shadow-sm">
            <Users className="h-8 w-8 text-gray-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No Vendors Found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search for "{searchTerm}"</p>
          <Button
            variant="outline"
            onClick={() => setSearchTerm('')}
          >
            Clear Search
          </Button>
        </div>
      )}
    </Layout>
  );
};

export default Vendors;
