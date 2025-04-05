
import React, { useState } from 'react';
import { Search, Filter, ChevronDown, X, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Layout from '@/components/layout/Layout';
import ProposalCard from '@/components/ui/ProposalCard';
import { proposals, fundRounds } from '@/data/mockData';

const categories = [
  'All Categories',
  'DeFi',
  'Tooling',
  'Education',
  'RealFi',
  'Governance',
  'Identity',
  'Developer Tools',
  'Other'
];

const statuses = [
  'All Statuses',
  'Active',
  'Completed',
  'Approved',
  'Pending',
  'Rejected'
];

interface FilterState {
  searchTerm: string;
  category: string;
  status: string;
  fundRound: string;
  minAmount: number | null;
  maxAmount: number | null;
}

const Awards = () => {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    category: 'All Categories',
    status: 'All Statuses',
    fundRound: 'All Rounds',
    minAmount: null,
    maxAmount: null
  });
  
  const [showFilters, setShowFilters] = useState(false);
  
  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };
  
  const clearFilters = () => {
    setFilters({
      searchTerm: '',
      category: 'All Categories',
      status: 'All Statuses',
      fundRound: 'All Rounds',
      minAmount: null,
      maxAmount: null
    });
  };
  
  // Apply filters to proposals
  const filteredProposals = proposals.filter(proposal => {
    // Search term filter
    if (filters.searchTerm && !proposal.title.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (filters.category !== 'All Categories' && proposal.category !== filters.category) {
      return false;
    }
    
    // Status filter
    if (filters.status !== 'All Statuses' && 
        proposal.status !== filters.status.toLowerCase()) {
      return false;
    }
    
    // Fund round filter
    if (filters.fundRound !== 'All Rounds' && proposal.fundRound !== filters.fundRound) {
      return false;
    }
    
    // Amount range filter
    if (filters.minAmount !== null && proposal.requestedAmount < filters.minAmount) {
      return false;
    }
    
    if (filters.maxAmount !== null && proposal.requestedAmount > filters.maxAmount) {
      return false;
    }
    
    return true;
  });
  
  const activeFilterCount = [
    filters.category !== 'All Categories',
    filters.status !== 'All Statuses',
    filters.fundRound !== 'All Rounds',
    filters.minAmount !== null,
    filters.maxAmount !== null
  ].filter(Boolean).length;
  
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Award Search</h1>
        <p className="text-lg text-gray-600">
          Find and explore proposals that received funding from the Cardano treasury
        </p>
      </div>
      
      {/* Search and Filter Section */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              className="pl-9"
              placeholder="Search by proposal title, recipient, or keywords..."
              value={filters.searchTerm}
              onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
            />
          </div>
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <Badge variant="secondary" className="ml-1">
                {activeFilterCount}
              </Badge>
            )}
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </Button>
          <Button>
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
        
        {/* Expandable Filters */}
        {showFilters && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Category</label>
                  <Select 
                    value={filters.category} 
                    onValueChange={(value) => handleFilterChange('category', value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Status</label>
                  <Select 
                    value={filters.status} 
                    onValueChange={(value) => handleFilterChange('status', value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="All Statuses" />
                    </SelectTrigger>
                    <SelectContent>
                      {statuses.map(status => (
                        <SelectItem key={status} value={status}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Fund Round</label>
                  <Select 
                    value={filters.fundRound} 
                    onValueChange={(value) => handleFilterChange('fundRound', value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="All Rounds" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Rounds">All Rounds</SelectItem>
                      {fundRounds.map(round => (
                        <SelectItem key={round.id} value={round.name}>
                          {round.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Amount Range (ADA)</label>
                  <div className="flex items-center gap-2">
                    <Input 
                      type="number" 
                      placeholder="Min"
                      value={filters.minAmount || ''}
                      onChange={(e) => handleFilterChange('minAmount', e.target.value ? Number(e.target.value) : null)}
                    />
                    <span>-</span>
                    <Input 
                      type="number" 
                      placeholder="Max"
                      value={filters.maxAmount || ''}
                      onChange={(e) => handleFilterChange('maxAmount', e.target.value ? Number(e.target.value) : null)}
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button variant="ghost" onClick={clearFilters} className="flex items-center gap-1">
                  <X className="h-4 w-4" />
                  Clear Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Active Filters Display */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {filters.category !== 'All Categories' && (
              <Badge variant="outline" className="py-1 px-3 flex items-center gap-1">
                Category: {filters.category}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => handleFilterChange('category', 'All Categories')}
                />
              </Badge>
            )}
            {filters.status !== 'All Statuses' && (
              <Badge variant="outline" className="py-1 px-3 flex items-center gap-1">
                Status: {filters.status}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => handleFilterChange('status', 'All Statuses')}
                />
              </Badge>
            )}
            {filters.fundRound !== 'All Rounds' && (
              <Badge variant="outline" className="py-1 px-3 flex items-center gap-1">
                Fund: {filters.fundRound}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => handleFilterChange('fundRound', 'All Rounds')}
                />
              </Badge>
            )}
            {(filters.minAmount !== null || filters.maxAmount !== null) && (
              <Badge variant="outline" className="py-1 px-3 flex items-center gap-1">
                Amount: {filters.minAmount || '0'} - {filters.maxAmount || '∞'} ADA
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => {
                    handleFilterChange('minAmount', null);
                    handleFilterChange('maxAmount', null);
                  }}
                />
              </Badge>
            )}
          </div>
        )}
      </div>
      
      {/* Results */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {filteredProposals.length} Results
          </h2>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="amount-high">Amount (High to Low)</SelectItem>
              <SelectItem value="amount-low">Amount (Low to High)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {filteredProposals.length === 0 ? (
          <Card className="text-center p-8">
            <div className="mx-auto mb-4 bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
              <AlertCircle className="h-8 w-8 text-gray-400" />
            </div>
            <CardTitle className="mb-2">No Results Found</CardTitle>
            <CardDescription>
              Try adjusting your search filters to find what you're looking for
            </CardDescription>
            <Button variant="ghost" onClick={clearFilters} className="mt-4">
              Clear All Filters
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProposals.map((proposal) => (
              <ProposalCard 
                key={proposal.id}
                id={proposal.id}
                title={proposal.title}
                category={proposal.category}
                requestedAmount={proposal.requestedAmount}
                status={proposal.status}
                fundRound={proposal.fundRound}
                recipient={proposal.recipient}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Awards;
