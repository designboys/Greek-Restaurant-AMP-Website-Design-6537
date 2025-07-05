import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiUsers, FiAward } = FiIcons;

const StoryPage = () => {
  const storyCards = [
    {
      icon: FiHeart,
      title: 'Our Passion',
      content: 'Born from a love for authentic Greek cuisine, our family recipes have been passed down through generations.'
    },
    {
      icon: FiUsers,
      title: 'Our Family',
      content: 'Founded by the Kostas family in 1995, we bring the warmth of Greek hospitality to every meal.'
    },
    {
      icon: FiAward,
      title: 'Our Promise',
      content: 'Using only the finest ingredients imported from Greece, we create dishes that transport you to the Mediterranean.'
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 pt-20">
      <div className="container mx-auto px-6 h-full flex flex-col">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-2 font-playfair">Our Story</h1>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-blue-100">A legacy of authentic Greek flavors</p>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="mb-8 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Greek restaurant family"
            className="w-full h-48 object-cover"
          />
        </motion.div>

        {/* Story Cards */}
        <div className="flex-1 space-y-4 overflow-y-auto">
          {storyCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <SafeIcon icon={card.icon} className="text-blue-900 text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 font-playfair">{card.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{card.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div 
          className="text-center py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <blockquote className="text-xl font-light text-white italic mb-4">
            "Every dish tells a story of our homeland, every meal creates a memory."
          </blockquote>
          <cite className="text-yellow-300 font-semibold">- Dimitris Kostas, Head Chef</cite>
        </motion.div>
      </div>
    </div>
  );
};

export default StoryPage;