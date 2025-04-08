
import React from 'react';
import { Twitter, Mail, Info, FileText, Users } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <img src="/lovable-uploads/257db3dc-2214-4178-afd2-70760c3899c4.png" alt="ADAspending Graph Logo" className="h-16" />
            
            <p className="mt-2 text-gray-400 text-sm">An open data source for tracking treasury spending on the Cardano blockchain.<br />
Bringing transparency and accountability to community funds.</p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <div className="flex flex-wrap space-x-4 md:space-x-6 justify-end">
              
              <span className="text-gray-400 py-1">
                Stay in touch with us
              </span>
            </div>
            
            <div className="flex items-center space-x-4 justify-center md:justify-end">
              <a href="mailto:hello@adaspending.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                <Mail size={18} />
                <span>hello@adaspending.com</span>
              </a>
            </div>
            
            <div className="flex items-center space-x-4 justify-center md:justify-end">
              <a href="https://x.com/ADAspending_com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                <Twitter size={20} />
                <span>Follow us on X</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              <p>{new Date().getFullYear()} ADAspending.com. All data is sourced from the public Cardano blockchain.</p>
              <p>ADAspending is a 100% open-source project.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://cardano.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Cardano
              </a>
              <a href="https://intersectmbo.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Intersect
              </a>
              <a href="https://governancespace.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">GovSpace</a>
              
              <a href="https://gov.tools/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                GovTool
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
