import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import s from './styles.module.scss';

const brands = ['bmw', 'mercedes', 'honda', 'hyundai', 'toyota', 'ford', 'tesla', 'byd', 'kia', 'lada'];

export const BrandSelector: React.FC = React.memo(() => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <div className={s.wrapper}>
         <div className={`${s['container']} container`}>
            <Swiper
               className={s.container}
               slidesPerView={10}
               centeredSlides={true}
               loop={true}
               spaceBetween={41.3}
               onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
               initialSlide={0}
            >
               {brands.map((brand, index) => (
                  <SwiperSlide
                     key={`${brand}-${index}`}
                     className={`${s.item} ${index === activeIndex ? s.active : ''}`}
                  >
                     <img src={`/car-brands/${brand}.svg`} alt={brand} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
});
