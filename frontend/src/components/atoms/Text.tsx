import React from 'react';

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, variant = 'p', className = '' }) => {
  const baseClasses = {
    h1: 'text-4xl font-bold text-gray-900',
    h2: 'text-3xl font-bold text-gray-800',
    h3: 'text-2xl font-semibold text-gray-800',
    h4: 'text-xl font-semibold text-gray-700',
    h5: 'text-lg font-medium text-gray-700',
    h6: 'text-base font-medium text-gray-600',
    p: 'text-base text-gray-600',
    span: 'text-sm text-gray-600',
  };

  const Tag = variant;
  
  return <Tag className={`${baseClasses[variant]} ${className}`}>{children}</Tag>;
};

export default Text;
