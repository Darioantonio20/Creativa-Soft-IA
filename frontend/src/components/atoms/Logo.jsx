import React from 'react';
import logoImage from '../../assets/img/logoCreativaSoftIA.png';

const Logo = ({ 
  className = '', 
  size = 'base',
  variant = 'default',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    base: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24'
  };
  
  const variantClasses = {
    default: 'bg-gradient-to-br from-teal-400 to-blue-500',
    dark: 'bg-gray-800 border border-gray-700',
    light: 'bg-white border border-gray-200'
  };
  
  const containerClasses = `${sizeClasses[size]} ${variantClasses[variant]} rounded-lg flex items-center justify-center ${className}`;
  
  return (
    <div className={containerClasses} {...props}>
      <img 
        src={logoImage} 
        alt="Creativa Soft-IA Logo" 
        className="w-full h-full object-contain p-2"
      />
    </div>
  );
};

export default Logo;
