import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Label from '../../atoms/Label';
import NavLink from '../../atoms/NavLink';
import Button from '../../atoms/Button';
import Logo from '../../atoms/Logo';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', to: '/' },
    { name: 'Características', to: '#caracteristicas' },
    { name: 'Sobre Nosotros', to: '#sobre-nosotros' },
    { name: 'Oportunidades', to: '/oportunidades' },
    { name: 'Blog', to: '/blog' },
    { name: 'Contacto', to: '#contacto' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900/95 backdrop-blur-sm shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Logo size="sm" variant="default" />
            <Label 
              variant="white" 
              size="lg" 
              className="ml-3 font-bold hidden sm:block"
            >
              CREATIVA SOFT-IA
            </Label>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <NavLink 
                key={index}
                to={link.to}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-teal-400 focus:outline-none focus:text-teal-400"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link, index) => (
                <NavLink 
                  key={index}
                  to={link.to}
                  className="block px-3 py-2 rounded-md text-base"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
