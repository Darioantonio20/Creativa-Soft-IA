import React from 'react';

const Label = ({ 
  children, 
  className = '', 
  variant = 'default',
  size = 'base',
  ...props 
}) => {
  const baseClasses = 'font-medium';
  
  const variantClasses = {
    default: 'text-gray-300',
    primary: 'text-teal-400',
    secondary: 'text-gray-400',
    white: 'text-white'
  };
  
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '6xl': 'text-6xl'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Label;
