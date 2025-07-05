import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHome, FiBook, FiHeart, FiStar, FiPhone } = FiIcons;

const Navigation = ({ activeIndex, onNavigate, pages }) => {
  const icons = [FiHome, FiBook, FiHeart, FiStar, FiPhone];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center px-4 py-3">
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-300 ${
              activeIndex === index 
                ? 'bg-white bg-opacity-20 text-white' 
                : 'text-blue-100 hover:text-white hover:bg-white hover:bg-opacity-10'
            }`}
          >
            <SafeIcon 
              icon={icons[index]} 
              className={`text-lg ${activeIndex === index ? 'scale-110' : ''}`}
            />
            <span className="text-xs font-medium">{page.title}</span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;