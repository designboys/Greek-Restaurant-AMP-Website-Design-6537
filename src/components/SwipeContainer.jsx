import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import StoryPage from './pages/StoryPage';
import SocialPage from './pages/SocialPage';
import ContactPage from './pages/ContactPage';
import Navigation from './Navigation';

const SwipeContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const pages = [
    { component: HomePage, title: 'Home' },
    { component: MenuPage, title: 'Menu' },
    { component: StoryPage, title: 'Story' },
    { component: SocialPage, title: 'Reviews' },
    { component: ContactPage, title: 'Contact' }
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const navigateToSlide = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  return (
    <div className="relative w-full h-full">
      <Navigation 
        activeIndex={activeIndex} 
        onNavigate={navigateToSlide}
        pages={pages}
      />
      
      <Swiper
        modules={[Pagination, EffectCoverflow]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          dynamicBullets: true
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        speed={600}
        onSlideChange={handleSlideChange}
        onSwiper={setSwiperInstance}
        className="swiper-container"
      >
        {pages.map((page, index) => (
          <SwiperSlide key={index}>
            <page.component />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipeContainer;