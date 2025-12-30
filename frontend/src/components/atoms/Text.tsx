import React from 'react';

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  color?: 'default' | 'brand' | 'white' | 'gray' | 'dark';
  className?: string;
}

const Text: React.FC<TextProps> = ({ 
  children, 
  variant = 'p', 
  color = 'default', 
  className = '' 
}) => {
  const variantClasses = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold',
    h5: 'text-lg font-medium',
    h6: 'text-base font-medium',
    p: 'text-base',
    span: 'text-sm',
  };

  const colorClasses = {
    default: {
      h1: 'text-gray-900',
      h2: 'text-gray-800',
      h3: 'text-gray-800',
      h4: 'text-gray-700',
      h5: 'text-gray-700',
      h6: 'text-gray-600',
      p: 'text-gray-600',
      span: 'text-gray-600',
    },
    brand: {
      h1: 'text-brand-600',
      h2: 'text-brand-600',
      h3: 'text-brand-500',
      h4: 'text-brand-500',
      h5: 'text-brand-400',
      h6: 'text-brand-400',
      p: 'text-brand-400',
      span: 'text-brand-400',
    },
    white: {
      h1: 'text-white',
      h2: 'text-white',
      h3: 'text-white',
      h4: 'text-white',
      h5: 'text-white',
      h6: 'text-white',
      p: 'text-white',
      span: 'text-white',
    },
    gray: {
      h1: 'text-gray-300',
      h2: 'text-gray-300',
      h3: 'text-gray-300',
      h4: 'text-gray-300',
      h5: 'text-gray-300',
      h6: 'text-gray-300',
      p: 'text-gray-300',
      span: 'text-gray-300',
    },
    dark: {
      h1: 'text-navy-900',
      h2: 'text-navy-800',
      h3: 'text-navy-700',
      h4: 'text-navy-700',
      h5: 'text-navy-600',
      h6: 'text-navy-600',
      p: 'text-navy-600',
      span: 'text-navy-600',
    },
  };

  const Tag = variant;
  
  return (
    <Tag className={`${variantClasses[variant]} ${colorClasses[color][variant]} ${className}`}>
      {children}
    </Tag>
  );
};

export default Text;
