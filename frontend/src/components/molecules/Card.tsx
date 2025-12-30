import React from 'react';
import { Text } from '../atoms';

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 ${className}`}>
      <Text variant="h3" className="mb-2">
        {title}
      </Text>
      <Text variant="p" className="mb-4">
        {description}
      </Text>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Card;
