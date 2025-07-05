import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDownload, FiStar } = FiIcons;

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const menuCategories = [
    {
      name: 'Starters',
      items: [
        {
          name: 'Spanakopita',
          description: 'Crispy phyllo pastry filled with spinach and feta',
          price: '$12',
          image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Dolmades',
          description: 'Grape leaves stuffed with rice and herbs',
          price: '$10',
          image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        }
      ]
    },
    {
      name: 'Mains',
      items: [
        {
          name: 'Moussaka',
          description: 'Layered eggplant with meat sauce and béchamel',
          price: '$24',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Lamb Kleftiko',
          description: 'Slow-cooked lamb with potatoes and herbs',
          price: '$28',
          image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        }
      ]
    },
    {
      name: 'Souvlaki',
      items: [
        {
          name: 'Chicken Souvlaki',
          description: 'Grilled chicken skewers with tzatziki',
          price: '$18',
          image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Pork Souvlaki',
          description: 'Marinated pork with Greek salad',
          price: '$19',
          image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        }
      ]
    },
    {
      name: 'Gyros',
      items: [
        {
          name: 'Traditional Gyros',
          description: 'Seasoned meat with pita and vegetables',
          price: '$16',
          image: 'https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Chicken Gyros',
          description: 'Grilled chicken with fresh herbs',
          price: '$15',
          image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        }
      ]
    },
    {
      name: 'Desserts',
      items: [
        {
          name: 'Baklava',
          description: 'Honey-soaked phyllo with nuts',
          price: '$8',
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Greek Yogurt',
          description: 'With honey and walnuts',
          price: '$7',
          image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        }
      ]
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="container mx-auto px-6 h-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-2 font-playfair">Our Menu</h1>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600">Authentic Greek dishes made with love</p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex justify-center mb-6 overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex space-x-2 bg-white rounded-full p-2 shadow-lg">
            {menuCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === index
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Menu Items */}
        <motion.div 
          className="flex-1 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="h-full"
          >
            {menuCategories[activeCategory].items.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full max-h-96">
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-bold text-lg">
                      {item.price}
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <SafeIcon key={i} icon={FiStar} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2 font-playfair">{item.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-8 pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto">
            <SafeIcon icon={FiDownload} className="mr-2" />
            Download Full Menu
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default MenuPage;