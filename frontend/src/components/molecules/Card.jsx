import React from 'react';
import Label from '../atoms/Label';
import Icon from '../atoms/Icon';

const Card = ({ 
  icon,
  title,
  description,
  className = '',
  ...props 
}) => {
  return (
    <div className={`bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-teal-500 transition-colors duration-300 ${className}`} {...props}>
      {/* Icono */}
      <div className="mb-4">
        <Icon size="lg" variant="default">
          {icon}
        </Icon>
      </div>
      
      {/* Título */}
      <Label 
        variant="white" 
        size="lg" 
        className="font-semibold mb-3 block"
      >
        {title}
      </Label>
      
      {/* Descripción */}
      <Label 
        variant="secondary" 
        size="base" 
        className="leading-relaxed block"
      >
        {description}
      </Label>
    </div>
  );
};

export default Card;
