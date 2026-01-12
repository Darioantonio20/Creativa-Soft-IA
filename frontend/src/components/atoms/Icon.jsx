import React from 'react';

const Icon = ({ 
  className = '', 
  size = 'base',
  variant = 'default',
  children,
  ...props 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    base: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };
  
  const variantClasses = {
    default: 'text-teal-400',
    primary: 'text-blue-500',
    secondary: 'text-gray-400',
    white: 'text-white'
  };
  
  const classes = `${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Icon;
