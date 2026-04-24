
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sun, Moon, BarChart3, Award, Users, FileText, Vote, Briefcase, Twitter, Mail, Heart, Info, ChevronDown } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useState('EN');

  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: BarChart3 },
    { name: 'Projects', href: '/projects', icon: Briefcase },

    { name: 'Vendors', href: '/vendors', icon: Users },
    { name: 'Spending Explorer', href: '/explorer', icon: FileText },
    { name: 'Treasury Donations', href: '/donations', icon: Heart },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'About', href: '/about', icon: Info },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Disclaimer Top Bar */}
      <div className="bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-1.5 px-4 text-center transition-colors">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <img src="/assets/cardano.ico" alt="Cardano logo" className="w-4 h-4 opacity-80" />
          <p className="text-[10px] md:text-[11px] font-medium text-gray-500 dark:text-gray-400">
            An unofficial community project tracking Cardano Treasury data directly from the Cardano blockchain.
          </p>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-[#131637] to-[#000111] border-b border-gray-800 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/dashboard" className="flex items-center">
              {isHomePage ? (
                <img
                  src="/assets/257db3dc-2214-4178-afd2-70760c3899c4.png"
                  alt="Cardano Treasury Explorer"
                  className="h-20 w-auto"
                />
              ) : (
                <img
                  src="/assets/14b66eb5-72ae-42fe-94f7-70a49cc9ad69.png"
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 gap-2 px-2 focus-visible:ring-0 focus-visible:ring-offset-0">
                  <span className="text-lg">
                    {lang === 'EN' ? '🇺🇸' : lang === 'PT' ? '🇧🇷' : lang === 'ES' ? '🇪🇸' : '🇯🇵'}
                  </span>
                  <span className="text-xs font-bold">{lang}</span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[#131637] border-gray-800 text-white min-w-[140px]">
                <DropdownMenuItem 
                  onClick={() => setLang('EN')}
                  className="hover:!bg-white/10 focus:!bg-white/10 !text-white cursor-pointer flex items-center gap-2"
                >
                  <span className="text-lg">🇺🇸</span>
                  <span>English (EN)</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLang('PT')}
                  className="hover:!bg-white/10 focus:!bg-white/10 !text-white cursor-pointer flex items-center gap-2"
                >
                  <span className="text-lg">🇧🇷</span>
                  <span>Português (PT)</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLang('ES')}
                  className="hover:!bg-white/10 focus:!bg-white/10 !text-white cursor-pointer flex items-center gap-2"
                >
                  <span className="text-lg">🇪🇸</span>
                  <span>Español (ES)</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLang('JP')}
                  className="hover:!bg-white/10 focus:!bg-white/10 !text-white cursor-pointer flex items-center gap-2"
                >
                  <span className="text-lg">🇯🇵</span>
                  <span>日本語 (JP)</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-white hover:bg-white/10"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
              )}
              <span className="sr-only">Toggle theme</span>
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
      <footer className="bg-gray-100 dark:bg-gray-900 border-t dark:border-gray-800 py-8 transition-colors">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <img
                  src="/assets/e4da4614-7cea-4f9c-853c-3f019f7932ca.png"
                  alt="Cardano Treasury Explorer"
                  className="h-8 w-auto"
                />
                {/* ADAspending text removido */}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                An open data source for treasury spending on the Cardano blockchain.<br />
                Bringing transparency and accountability to community funds.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Explore</h3>
                <ul className="space-y-1">
                  <li><Link to="/dashboard" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue">Overview</Link></li>

                  <li><Link to="/projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue">Projects</Link></li>
                  <li><Link to="/vendors" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue">Vendors</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Data</h3>
                <ul className="space-y-1">
                  <li><Link to="/explorer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue">Spending Explorer</Link></li>
                  <li><Link to="/donations" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue">Treasury Donations</Link></li>
                  <li><Link to="/analytics" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue">Analytics</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Resources</h3>
                <ul className="space-y-1">
                  <li><Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue">About</Link></li>
                  <li><Link to="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue">Privacy Policy</Link></li>
                  <li><Link to="/accessibility" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue">Accessibility</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Contact</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://x.com/ADAspending_com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue flex items-center gap-2"
                    >
                      <Twitter size={14} />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:hello@adaspending.com"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-cardano-blue flex items-center gap-2"
                    >
                      <Mail size={14} />
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-500">
            <p>© {new Date().getFullYear()} ADAspending.com. All data is sourced from the public Cardano blockchain.</p>
            <p className="mt-1">ADAspending is a 100% open-source project.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

