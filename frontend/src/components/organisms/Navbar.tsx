import React from 'react';
import { Text } from '../atoms';

interface NavbarProps {
  logo?: string;
  title: string;
  links?: { label: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ logo, title, links = [] }) => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {logo && <img src={logo} alt="Logo" className="h-8 w-8" />}
          <Text variant="h4" className="text-white font-bold">
            {title}
          </Text>
        </div>
        <div className="flex space-x-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-blue-200 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
