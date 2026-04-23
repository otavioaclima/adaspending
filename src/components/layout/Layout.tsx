
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, BarChart3, Award, Users, FileText, Vote, Briefcase } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: BarChart3 },
    { name: 'Projects', href: '/projects', icon: Briefcase },
    { name: 'Proposals', href: '/proposals', icon: Award },
    { name: 'Vendors', href: '/vendors', icon: Users },
    { name: 'Spending Explorer', href: '/explorer', icon: FileText },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#131637] to-[#000111] border-b border-gray-800 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/dashboard" className="flex items-center">
              {isHomePage ? (
                <img 
                  src="/lovable-uploads/257db3dc-2214-4178-afd2-70760c3899c4.png" 
                  alt="Cardano Treasury Explorer" 
                  className="h-20 w-auto" 
                />
              ) : (
                <img
                  src="/lovable-uploads/14b66eb5-72ae-42fe-94f7-70a49cc9ad69.png"
                  alt="ADAspending Logo"
                  className="h-10 w-auto"
                />
              )}
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link text-white hover:text-gray-200 ${location.pathname === item.href ? 'nav-link-active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="bg-transparent text-white border-white/30 hover:bg-white/10">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      <div className="md:hidden border-b bg-white">
        <div className="container mx-auto p-2 overflow-x-auto">
          <div className="flex space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap
                  ${location.pathname === item.href 
                    ? 'bg-cardano-blue text-white' 
                    : 'text-gray-700 hover:bg-cardano-blue/10 hover:text-cardano-blue'}`}
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <img 
                  src="/lovable-uploads/e4da4614-7cea-4f9c-853c-3f019f7932ca.png" 
                  alt="Cardano Treasury Explorer" 
                  className="h-8 w-auto"
                />
                {/* ADAspending text removido */}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                An open data source for treasury spending on the Cardano blockchain.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Explore</h3>
                <ul className="space-y-1">
                  <li><Link to="/" className="text-sm text-gray-600 hover:text-cardano-blue">Overview</Link></li>
                  <li><Link to="/proposals" className="text-sm text-gray-600 hover:text-cardano-blue">Proposals</Link></li>
                  <li><Link to="/projects" className="text-sm text-gray-600 hover:text-cardano-blue">Projects</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Data</h3>
                <ul className="space-y-1">
                  <li><Link to="/vendors" className="text-sm text-gray-600 hover:text-cardano-blue">Vendors</Link></li>
                  <li><Link to="/explorer" className="text-sm text-gray-600 hover:text-cardano-blue">Spending Explorer</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Resources</h3>
                <ul className="space-y-1">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-cardano-blue">API</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-cardano-blue">Documentation</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-cardano-blue">About</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} ADAspending.com. All data is sourced from the public Cardano blockchain.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

