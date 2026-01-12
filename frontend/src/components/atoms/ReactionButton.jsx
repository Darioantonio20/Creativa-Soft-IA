import React from 'react';
import { FaHeart, FaThumbsUp, FaLaugh, FaSurprise } from 'react-icons/fa';

const ReactionButton = ({ 
  type = 'like', 
  count = 0, 
  isActive = false, 
  onClick, 
  className = '' 
}) => {
  const reactionMap = {
    like: { icon: FaThumbsUp, color: 'text-blue-400', activeColor: 'text-blue-500' },
    love: { icon: FaHeart, color: 'text-red-400', activeColor: 'text-red-500' },
    laugh: { icon: FaLaugh, color: 'text-yellow-400', activeColor: 'text-yellow-500' },
    surprise: { icon: FaSurprise, color: 'text-purple-400', activeColor: 'text-purple-500' }
  };

  const { icon: Icon, color, activeColor } = reactionMap[type];
  const currentColor = isActive ? activeColor : color;

  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-3 py-1 rounded-full transition-all duration-300 hover:bg-gray-700 ${className}`}
    >
      <Icon className={`${currentColor} ${isActive ? 'animate-pulse' : ''}`} />
      <span className="text-sm text-gray-300">{count}</span>
    </button>
  );
};

export default ReactionButton;
