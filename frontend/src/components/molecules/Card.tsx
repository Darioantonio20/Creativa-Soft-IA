import React from 'react';
import { Text } from '../atoms';

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, children, className = '', icon }) => {
  return (
    <div className={`group relative bg-gradient-to-br from-navy-800/50 to-navy-900/50 backdrop-blur-sm rounded-2xl border border-brand-500/20 p-8 hover:border-brand-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-500/10 ${className}`}>
      {/* Animated Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Icon */}
      {icon && (
        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
          <div className="w-14 h-14 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center shadow-lg animate-glow group-hover:animate-pulse">
            {icon}
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        <Text variant="h3" className="text-xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors duration-300">
          {title}
        </Text>
        <Text variant="p" className="text-gray-300 leading-relaxed mb-6">
          {description}
        </Text>
        {children && (
          <div className="mt-6 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            {children}
          </div>
        )}
      </div>
      
      {/* Hover Effect Corner */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-brand-500 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default Card;
