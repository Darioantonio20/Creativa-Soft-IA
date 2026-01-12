import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ 
  to = '#', 
  children, 
  className = '', 
  isActive = false,
  ...props 
}) => {
  const location = useLocation();
  const baseClasses = 'text-gray-300 hover:text-teal-400 transition-all duration-300 font-medium transform hover:scale-105';
  const activeClasses = isActive ? 'text-teal-400 scale-105' : '';
  
  // Si el enlace empieza con # y no estamos en la página principal, 
  // redirigir a la página principal con el ancla
  const getCorrectTo = () => {
    if (to.startsWith('#') && location.pathname !== '/') {
      return `/${to}`;
    }
    return to;
  };
  
  // Si estamos en la página principal y es un enlace con #,
  // usar un enlace normal de ancla en lugar de Link
  if (to.startsWith('#') && location.pathname === '/') {
    return (
      <a 
        href={to}
        className={`${baseClasses} ${activeClasses} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link 
      to={getCorrectTo()}
      className={`${baseClasses} ${activeClasses} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
