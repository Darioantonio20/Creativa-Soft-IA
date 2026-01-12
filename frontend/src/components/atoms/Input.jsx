import React from 'react';

const Input = ({ 
  className = '', 
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  ...props 
}) => {
  const baseClasses = 'w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors';
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseClasses} ${className}`}
      {...props}
    />
  );
};

export default Input;
