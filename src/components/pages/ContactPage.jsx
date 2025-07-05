import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMapPin, FiClock, FiMail, FiCalendar } = FiIcons;

const ContactPage = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Call Us',
      info: '(555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: FiMapPin,
      title: 'Visit Us',
      info: '123 Mediterranean Ave, Downtown',
      action: 'https://maps.google.com'
    },
    {
      icon: FiClock,
      title: 'Hours',
      info: 'Mon-Sun: 11AM - 10PM',
      action: null
    },
    {
      icon: FiMail,
      title: 'Email',
      info: 'info@mykonostaverna.com',
      action: 'mailto:info@mykonostaverna.com'
    }
  ];

  const handleReservation = () => {
    setIsReservationOpen(true);
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-800 pt-20">
      <div className="container mx-auto px-6 h-full flex flex-col">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-2 font-playfair">Contact Us</h1>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-blue-100">We'd love to hear from you</p>
        </motion.div>

        {/* Map Section */}
        <motion.div 
          className="mb-8 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center relative">
            <div className="text-center text-white">
              <SafeIcon icon={FiMapPin} className="text-4xl mb-2 mx-auto" />
              <p className="text-lg font-semibold">Interactive Map</p>
              <p className="text-sm opacity-80">123 Mediterranean Ave, Downtown</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <button className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium hover:bg-opacity-30 transition-all duration-300">
                Open in Maps
              </button>
            </div>
          </div>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 border border-white border-opacity-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="bg-yellow-400 p-3 rounded-full w-fit mx-auto mb-3">
                  <SafeIcon icon={item.icon} className="text-blue-900 text-xl" />
                </div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.info}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col space-y-4 pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <button 
            onClick={handleReservation}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            <SafeIcon icon={FiCalendar} className="mr-2" />
            Reserve a Table
          </button>
          
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            <SafeIcon icon={FiPhone} className="mr-2" />
            Call Now
          </button>
        </motion.div>
      </div>

      {/* Reservation Modal */}
      {isReservationOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="bg-white rounded-2xl p-6 max-w-md w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Reserve Your Table</h3>
              <p className="text-gray-600">We'll call you to confirm your reservation</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="date" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Time</option>
                <option>6:00 PM</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
              </select>
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={() => setIsReservationOpen(false)}
                className="flex-1 border-2 border-gray-300 text-gray-600 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                Cancel
              </button>
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Confirm
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ContactPage;