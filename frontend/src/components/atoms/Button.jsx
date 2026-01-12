import React from 'react';

const Button = ({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'base',
  href = '',
  onClick,
  ...props 
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-teal-500 hover:bg-teal-600 text-white focus:ring-teal-500',
    secondary: 'bg-transparent border-2 border-teal-400 text-teal-400 hover:bg-teal-400/10 focus:ring-teal-400',
    dark: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 focus:ring-gray-500'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    base: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
