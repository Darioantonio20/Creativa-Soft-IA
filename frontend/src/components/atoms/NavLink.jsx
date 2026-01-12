import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ 
  to = '#', 
  children, 
  className = '', 
  isActive = false,
  ...props 
}) => {
  const baseClasses = 'text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium';
  const activeClasses = isActive ? 'text-teal-400' : '';
  
  return (
    <Link 
      to={to}
      className={`${baseClasses} ${activeClasses} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
