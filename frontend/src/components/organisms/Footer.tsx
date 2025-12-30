import React from 'react';
import { Text } from '../atoms';

interface FooterProps {
  companyName: string;
  year?: number;
  links?: { label: string; href: string }[];
}

const Footer: React.FC<FooterProps> = ({ companyName, year = new Date().getFullYear(), links = [] }) => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Text variant="p" className="text-gray-300 mb-4 md:mb-0">
            © {year} {companyName}. All rights reserved.
          </Text>
          <div className="flex space-x-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
