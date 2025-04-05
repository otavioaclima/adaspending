
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Building, User, ExternalLink, Filter, ChevronDown, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Layout from '@/components/layout/Layout';
import { recipients } from '@/data/mockData';

const RecipientCard = ({ recipient }: { recipient: typeof recipients[0] }) => {
  const RecipientIcon = 
    recipient.type === 'organization' ? Building :
    recipient.type === 'team' ? Users : User;
  
  return (
    <Link to={`/recipients/${recipient.id}`}>
      <Card className="h-full hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-cardano-blue/10 rounded-full w-10 h-10 flex items-center justify-center">
              <RecipientIcon className="h-5 w-5 text-cardano-blue" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{recipient.name}</h3>
              <p className="text-sm text-gray-500 capitalize">{recipient.type}</p>
            </div>
          </div>
          
          {recipient.description && (
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{recipient.description}</p>
          )}
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div>
              <p className="text-xs text-gray-500">Total Funded</p>
              <p className="font-bold text-cardano-blue">
                {recipient.totalFunded.toLocaleString()} ADA
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Success Rate</p>
              <p className="font-medium">
                {recipient.proposalsSubmitted > 0 
                  ? Math.round((recipient.proposalsApproved / recipient.proposalsSubmitted) * 100) 
                  : 0}%
              </p>
            </div>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">
              {recipient.proposalsApproved} / {recipient.proposalsSubmitted} proposals
            </span>
            {recipient.location && (
              <span className="text-gray-500">
                {recipient.location}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const Recipients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredRecipients = recipients.filter(recipient => {
    // Apply search filter
    if (searchTerm && !recipient.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Apply type filter
    if (selectedType !== 'all' && recipient.type !== selectedType) {
      return false;
    }
    
    return true;
  });
  
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Recipients</h1>
        <p className="text-lg text-gray-600">
          Explore individuals, teams, and organizations that received treasury funding
        </p>
      </div>
      
      {/* Search and Filter Section */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              className="pl-9"
              placeholder="Search recipients by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
            {selectedType !== 'all' && (
              <Badge variant="secondary" className="ml-1">1</Badge>
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Recipient Type</label>
                  <Select 
                    value={selectedType} 
                    onValueChange={setSelectedType}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="individual">Individual</SelectItem>
                      <SelectItem value="team">Team</SelectItem>
                      <SelectItem value="organization">Organization</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Minimum Funding</label>
                  <Input type="number" placeholder="Min ADA Funded" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Success Rate</label>
                  <Select defaultValue="any">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Any Success Rate" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Success Rate</SelectItem>
                      <SelectItem value="high">High (>75%)</SelectItem>
                      <SelectItem value="medium">Medium (25-75%)</SelectItem>
                      <SelectItem value="low">Low (<25%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setSelectedType('all');
                  }} 
                  className="flex items-center gap-1"
                >
                  <X className="h-4 w-4" />
                  Clear Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Active Filters Display */}
        {selectedType !== 'all' && (
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="py-1 px-3 flex items-center gap-1">
              Type: {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => setSelectedType('all')}
              />
            </Badge>
          </div>
        )}
      </div>
      
      {/* Recipients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRecipients.map(recipient => (
          <RecipientCard key={recipient.id} recipient={recipient} />
        ))}
      </div>
      
      {filteredRecipients.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-gray-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-2">No Recipients Found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
          <Button 
            variant="outline" 
            onClick={() => {
              setSearchTerm('');
              setSelectedType('all');
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </Layout>
  );
};

export default Recipients;
