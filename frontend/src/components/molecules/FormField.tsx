import React from 'react';
import { Input, Button } from '../atoms';

interface FormFieldProps {
  label: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  required?: boolean;
  name?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  buttonText,
  onButtonClick,
  required = false,
  name,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <Input
        label={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        required={required}
        name={name}
      />
      {buttonText && onButtonClick && (
        <Button
          onClick={onButtonClick}
          className="bg-gradient-to-r from-brand-500 to-brand-600 shadow-brand-500/25 hover:-translate-y-1"
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default FormField;
