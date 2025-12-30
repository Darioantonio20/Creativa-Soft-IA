import React from 'react';
import { Text } from '../atoms';
import information from '../data/information.json';

interface FooterProps {
  companyName: string;
  year?: number;
  links?: { label: string; href: string }[];
}

const Footer: React.FC<FooterProps> = ({ companyName, year = new Date().getFullYear(), links = [] }) => {
  const { footer } = information;
  
  return (
    <footer className="relative bg-navy-900/90 backdrop-blur-sm border-t border-brand-500/20 text-white py-12 mt-auto">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-brand-500/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-dark-blue-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="animate-slide-up">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <Text variant="h4" className="text-white font-bold">
                  <span className="text-white">CREATIVA</span>
                  <span className="text-brand-400 font-light ml-1">SOFT-IA</span>
                </Text>
              </div>
            </div>
            <Text variant="p" className="text-gray-300 leading-relaxed">
              {footer.companyDescription}
            </Text>
          </div>
          
          {/* Quick Links */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Text variant="h5" className="text-white font-semibold mb-4">{footer.quickLinksTitle}</Text>
            <div className="space-y-2">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-brand-400 transition-all duration-300 transform hover:translate-x-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Text variant="h5" className="text-white font-semibold mb-4">{footer.connectTitle}</Text>
            <div className="flex space-x-4 mb-4">
              <button className="w-10 h-10 bg-gradient-to-br from-brand-400/20 to-brand-600/20 rounded-lg flex items-center justify-center hover:from-brand-400 hover:to-brand-600 transition-all duration-300 transform hover:scale-110" aria-label="Facebook">
                <svg className="w-5 h-5 text-brand-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="w-10 h-10 bg-gradient-to-br from-brand-400/20 to-brand-600/20 rounded-lg flex items-center justify-center hover:from-brand-400 hover:to-brand-600 transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
                <svg className="w-5 h-5 text-brand-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-brand-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Text variant="p" className="text-gray-400 mb-4 md:mb-0">
              © {year} {companyName}
            </Text>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">{footer.teamName}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
