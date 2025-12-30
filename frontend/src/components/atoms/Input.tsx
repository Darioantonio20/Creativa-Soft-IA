import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  name,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full space-y-1">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={twMerge(
          'w-full px-4 py-3 bg-navy-800/70 border border-gray-700 rounded-lg',
          'focus:ring-2 focus:ring-brand-500 focus:border-transparent text-white',
          'placeholder-gray-400 transition-all duration-150',
          'hover:border-gray-600 focus:outline-none',
          disabled && 'opacity-50 cursor-not-allowed',
          error ? 'border-red-500' : 'border-gray-700',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-400 transition-all duration-150">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
