import React from 'react';
import { Text, Button } from '../atoms';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "CREATIVA SOFT-IA",
  subtitle = "Designing and developing intelligent digital solutions",
  description = "that help organizations innovate and scale",
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  className = "",
}) => {
  return (
    <section className={`min-h-screen flex items-center justify-center relative ${className}`}>
      <div className="text-center z-10 max-w-6xl mx-auto px-6">
        {/* Logo Animation */}
        <div className="mb-8 animate-slide-up">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl shadow-2xl animate-glow mb-6 transform hover:scale-105 transition-transform duration-300">
            <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              <path fill="white" d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Text variant="h1" className="mb-6">
            <span className="block text-6xl md:text-7xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-400">CREATIVA</span>
            <span className="block text-4xl md:text-5xl font-light text-brand-400">SOFT-IA</span>
          </Text>
        </div>
        
        <div className="animate-slide-up mb-12" style={{ animationDelay: '0.4s' }}>
          <Text variant="h4" className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle} {description}
          </Text>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="primary" 
            size="lg" 
            onClick={onPrimaryClick}
            className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white px-8 py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-brand-500/25"
          >
            {primaryButtonText}
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={onSecondaryClick}
            className="border-2 border-brand-500 text-brand-400 hover:bg-brand-500 hover:text-white px-8 py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300"
          >
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
