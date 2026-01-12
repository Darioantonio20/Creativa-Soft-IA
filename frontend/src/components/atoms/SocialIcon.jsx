import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const SocialIcon = ({ 
  platform, 
  className = '', 
  ...props 
}) => {
  const iconMap = {
    'facebook': <FaFacebook className={className} />,
    'linkedin': <FaLinkedin className={className} />
  };

  const hrefMap = {
    'facebook': 'https://facebook.com',
    'linkedin': 'https://linkedin.com'
  };

  const Icon = iconMap[platform];
  const href = hrefMap[platform];

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-400 hover:text-teal-400 transition-colors duration-300 ${className}`}
      {...props}
    >
      {Icon}
    </a>
  );
};

export default SocialIcon;
