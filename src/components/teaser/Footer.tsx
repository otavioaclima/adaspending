
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/257db3dc-2214-4178-afd2-70760c3899c4.png" 
              alt="ADAspending Graph Logo" 
              className="h-16" 
            />
            <p className="mt-2 text-gray-400 text-sm">
              An open data source for treasury spending on the Cardano blockchain.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Blog
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                Platform
              </Link>
            </div>
            
            <div className="flex items-center space-x-4 justify-center md:justify-end">
              <a href="mailto:hello@adaspending.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                <Mail size={18} />
                <span>hello@adaspending.com</span>
              </a>
            </div>
            
            <div className="flex items-center space-x-4 justify-center md:justify-end">
              <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                <Twitter size={20} />
                <span>Follow us on X</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p className="mb-2">© {new Date().getFullYear()} ADAspending.com. All data is sourced from the public Cardano blockchain.</p>
          <p>ADAspending is a 100% open-source project.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
