import React from 'react';

interface BackgroundPatternProps {
  className?: string;
  variant?: 'hero' | 'section' | 'footer';
}

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ 
  className = "", 
  variant = 'hero' 
}) => {
  const getPattern = () => {
    switch (variant) {
      case 'hero':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-dark-blue-950">
              <div className="absolute inset-0 bg-gradient-radial from-brand-500/10 via-transparent to-transparent animate-gradient bg-300%"></div>
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-dark-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-[800px] h-[800px] border border-brand-500/10 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-0 w-[600px] h-[600px] border border-brand-500/5 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
              </div>
            </div>
          </>
        );
      case 'section':
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-brand-500/5 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-dark-blue-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        );
      case 'footer':
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-brand-500/5 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-dark-blue-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${variant === 'hero' ? 'fixed' : ''} ${className}`}>
      {getPattern()}
    </div>
  );
};

export default BackgroundPattern;
