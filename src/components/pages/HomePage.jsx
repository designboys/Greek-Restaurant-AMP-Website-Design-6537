import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowRight, FiMapPin } = FiIcons;

const HomePage = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1544124499-58912cbddaad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Greek Pattern Overlay */}
      <div className="absolute inset-0 greek-pattern opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          {/* Logo/Brand */}
          <motion.div 
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white mb-2 font-playfair">
              Mykonos
            </h1>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-2"></div>
            <h2 className="text-2xl text-white font-playfair">Taverna</h2>
          </motion.div>

          {/* Tagline */}
          <motion.p 
            className="text-xl text-white mb-8 font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Authentic Greek Flavors
            <br />
            <span className="text-yellow-300">Made Fresh Daily</span>
          </motion.p>

          {/* Location Badge */}
          <motion.div 
            className="flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <SafeIcon icon={FiMapPin} className="text-yellow-300 mr-2" />
            <span className="text-white text-sm font-medium">Downtown • Mediterranean Quarter</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <span>View Menu</span>
              <SafeIcon icon={FiArrowRight} className="ml-2" />
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
              Order Now
            </button>
          </motion.div>
        </motion.div>

        {/* Swipe Hint */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="text-white text-center">
            <p className="text-sm opacity-80 mb-2">Swipe to explore</p>
            <div className="flex space-x-2 justify-center">
              <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
              <div className="w-2 h-2 bg-white rounded-full opacity-40"></div>
              <div className="w-2 h-2 bg-white rounded-full opacity-20"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;