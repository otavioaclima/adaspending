
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/e4da4614-7cea-4f9c-853c-3f019f7932ca.png" 
              alt="ADAspending Logo" 
              className="h-10" 
            />
            <p className="mt-2 text-gray-400 text-sm">
              An open data source for treasury spending on the Cardano blockchain.
            </p>
          </div>
          
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
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ADAspending.com. All data is sourced from the public Cardano blockchain.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
