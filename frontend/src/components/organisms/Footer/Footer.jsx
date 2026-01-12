import React from 'react';
import Label from '../../atoms/Label';
import Logo from '../../atoms/Logo';
import SocialIcon from '../../atoms/SocialIcon';

const Footer = () => {
  const quickLinks = [
    { name: 'Política de Privacidad', href: '#privacy' },
    { name: 'Términos de Servicio', href: '#terms' },
    { name: 'Contáctanos', href: '#contacto' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Información de la empresa */}
          <div>
            <div className="flex items-center mb-4">
              <Logo size="sm" variant="default" />
              <Label 
                variant="white" 
                size="lg" 
                className="ml-3 font-bold"
              >
                CREATIVA SOFT-IA
              </Label>
            </div>
            <Label 
              variant="secondary" 
              size="base" 
              className="leading-relaxed"
            >
              Diseñando y desarrollando soluciones digitales inteligentes que ayudan a las organizaciones a innovar y escalar.
            </Label>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <Label 
              variant="white" 
              size="lg" 
              className="font-semibold mb-4 block"
            >
              Enlaces Rápidos
            </Label>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Conéctate con Nosotros */}
          <div>
            <Label 
              variant="white" 
              size="lg" 
              className="font-semibold mb-4 block"
            >
              Conéctate con Nosotros
            </Label>
            <div className="flex space-x-4">
              <SocialIcon 
                platform="facebook" 
                className="text-2xl"
              />
              <SocialIcon 
                platform="linkedin" 
                className="text-2xl"
              />
            </div>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Label 
              variant="secondary" 
              size="base" 
              className="mb-2 sm:mb-0"
            >
              © 2026 Creativa Soft-IA
            </Label>
            <Label 
              variant="secondary" 
              size="base"
            >
              Equipo de Creativa Soft-IA
            </Label>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
