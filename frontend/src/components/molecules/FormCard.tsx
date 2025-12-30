import React, { ReactNode } from 'react';
import Text from '../atoms/Text';

interface FormCardProps {
  title?: string;
  description?: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

const FormCard: React.FC<FormCardProps> = ({
  title,
  description,
  children,
  icon,
  className = '',
}) => {
  return (
    <div className={`rounded-2xl bg-navy-900/80 backdrop-blur-sm overflow-hidden shadow-xl border border-gray-800 ${className}`}>
      <div className="px-6 py-5 sm:px-8 sm:py-7">
        <div className="flex items-center mb-4">
          {icon && (
            <div className="flex-shrink-0 mr-3 text-brand-400">
              {icon}
            </div>
          )}
          <div>
            {title && (
              <Text variant="h3" className="text-xl font-bold text-white">
                {title}
              </Text>
            )}
            {description && (
              <Text variant="p" className="mt-1 text-gray-300">
                {description}
              </Text>
            )}
          </div>
        </div>
        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export { FormCard };
export default FormCard;
