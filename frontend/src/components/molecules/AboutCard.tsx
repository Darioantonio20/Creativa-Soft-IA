import React from 'react';

interface AboutCardProps {
  children: React.ReactNode;
  className?: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-gradient-to-br from-navy-800/50 to-navy-900/50 backdrop-blur-sm rounded-2xl border border-brand-500/20 p-12 shadow-2xl ${className}`}>
      <div className="text-center">
        {children}
      </div>
    </div>
  );
};

export default AboutCard;
