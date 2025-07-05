import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiExternalLink, FiThumbsUp } = FiIcons;

const SocialPage = () => {
  const reviews = [
    {
      name: 'Maria S.',
      rating: 5,
      review: 'Absolutely incredible! The moussaka was just like my grandmother used to make. Authentic flavors and warm hospitality.',
      date: '2 days ago',
      platform: 'Google'
    },
    {
      name: 'John D.',
      rating: 5,
      review: 'Best Greek restaurant in the city! The lamb was perfectly cooked and the service was outstanding. Highly recommend!',
      date: '1 week ago',
      platform: 'Yelp'
    },
    {
      name: 'Sophie L.',
      rating: 5,
      review: 'Amazing experience! The staff made us feel like family. The baklava was to die for. Will definitely be back!',
      date: '2 weeks ago',
      platform: 'TripAdvisor'
    },
    {
      name: 'Alex M.',
      rating: 5,
      review: 'Fantastic food and atmosphere. The souvlaki was perfectly grilled and the tzatziki was fresh and delicious.',
      date: '3 weeks ago',
      platform: 'Google'
    }
  ];

  const stats = [
    { number: '4.9', label: 'Average Rating' },
    { number: '500+', label: 'Happy Customers' },
    { number: '25+', label: 'Years of Service' }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-yellow-50 to-orange-50 pt-20">
      <div className="container mx-auto px-6 h-full flex flex-col">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-2 font-playfair">What People Say</h1>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600">Hear from our beloved customers</p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-blue-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Reviews Carousel */}
        <motion.div 
          className="flex-1 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="h-full"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-lg p-6 h-full max-h-80">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.date} • {review.platform}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <SafeIcon key={i} icon={FiStar} className="text-yellow-400 text-lg" />
                      ))}
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed text-lg italic">
                      "{review.review}"
                    </p>
                  </div>

                  {/* Action */}
                  <div className="flex items-center justify-center">
                    <SafeIcon icon={FiThumbsUp} className="text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">Helpful review</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col space-y-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            <SafeIcon icon={FiExternalLink} className="mr-2" />
            Read More on Google
          </button>
          
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
            Leave a Review
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialPage;