import React from 'react';
import { Text } from '../atoms';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
  className?: string;
  showDivider?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  title, 
  subtitle, 
  id, 
  className = "",
  showDivider = true 
}) => {
  return (
    <section className={`py-24 relative ${className}`} id={id}>
      <div className="max-w-7xl mx-auto px-6">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            <div className="animate-slide-up">
              {title && (
                <>
                  <Text variant="h2" className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {title}
                  </Text>
                  {showDivider && (
                    <div className="w-24 h-1 bg-gradient-to-r from-brand-400 to-brand-600 mx-auto mb-6"></div>
                  )}
                </>
              )}
              {subtitle && (
                <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <Text variant="p" className="text-xl text-gray-300 max-w-3xl mx-auto">
                    {subtitle}
                  </Text>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
