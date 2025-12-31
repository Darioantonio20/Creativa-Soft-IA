import React from 'react';
import { Text } from '../atoms';
import information from '../data/information.json';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  className = "",
}) => {
  const { hero, company } = information;
  const { title, subtitle, description } = hero;
  return (
    <section className={`min-h-screen flex items-center justify-center relative ${className}`}>
      <div className="text-center z-10 max-w-6xl mx-auto px-6">
        {/* Logo Animation */}
        <div className="mb-8 animate-slide-up">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl shadow-2xl animate-glow mb-6 transform hover:scale-105 transition-transform duration-300 overflow-hidden">
            <img 
              src={company.logoPath} 
              alt={`${company.name} Logo`} 
              className="w-20 h-20 object-contain rounded-full"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Text variant="h1" className="mb-6">
            <span className="block text-6xl md:text-7xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-400">{title}</span>
          </Text>
        </div>
        
        <div className="animate-slide-up mb-12" style={{ animationDelay: '0.4s' }}>
          <Text variant="h4" className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle} {description}
          </Text>
        </div>
       
      </div>
    </section>
  );
};

export default HeroSection;
