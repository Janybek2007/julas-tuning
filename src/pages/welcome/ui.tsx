import React, { useState, useRef, useEffect } from 'react';
import s from './styles.module.scss';
import { Button } from '#/shared/components';

export const WelcomePage: React.FC = () => {
   const items = [
      { label: 'Все тюнинги', href: '/tunings/all', icon: '/icons/all-tunings.svg' },
      { label: 'Мои тюнинги', href: '/tunings/my', icon: '/icons/my-tunings.svg' },
      { label: 'Создать тюнинг', href: '/tunings/create', icon: '/icons/create-tuning.svg' },
      { label: 'Войти', href: '/login', icon: '/icons/login.svg' },
   ];

   const [activeIndex, setActiveIndex] = useState(0);
   const [isAnimating, setIsAnimating] = useState(false);
   const sliderRef = useRef<HTMLDivElement>(null);
   const startX = useRef<number | null>(null);
   const currentX = useRef<number>(0);

   const handleSwipeStart = (e: React.MouseEvent | React.TouchEvent) => {
      if (isAnimating) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      startX.current = clientX;
      currentX.current = 0;
   };

   const handleSwipeMove = (e: React.MouseEvent | React.TouchEvent) => {
      if (startX.current === null || isAnimating) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      currentX.current = clientX - startX.current;
      if (sliderRef.current) {
         sliderRef.current.style.transform = `translateX(${currentX.current}px)`;
      }
   };

   const handleSwipeEnd = () => {
      if (startX.current === null || isAnimating) return;
      const threshold = 50; // Minimum swipe distance to trigger a change
      setIsAnimating(true);

      if (currentX.current > threshold) {
         setActiveIndex(prev => (prev === 0 ? items.length - 1 : prev - 1));
      } else if (currentX.current < -threshold) {
         setActiveIndex(prev => (prev === items.length - 1 ? 0 : prev + 1));
      }

      if (sliderRef.current) {
         sliderRef.current.style.transform = 'translateX(0)';
         sliderRef.current.style.transition = 'transform 0.3s ease-out';
      }

      startX.current = null;
      setTimeout(() => {
         setIsAnimating(false);
         if (sliderRef.current) {
            sliderRef.current.style.transition = '';
         }
      }, 300); // Match animation duration
   };

   const getVisibleItems = () => {
      const totalItems = items.length;
      const prevIndex = (activeIndex - 1 + totalItems) % totalItems;
      const nextIndex = (activeIndex + 1) % totalItems;
      return [items[prevIndex], items[activeIndex], items[nextIndex]];
   };

   useEffect(() => {
      const slider = sliderRef.current;
      if (slider) {
         slider.addEventListener('touchmove', e => e.preventDefault(), { passive: false });
      }
      return () => {
         if (slider) {
            slider.removeEventListener('touchmove', e => e.preventDefault());
         }
      };
   }, []);

   return (
      <main className={s.welcomePage}>
         <div className={s.container}>
            <div
               ref={sliderRef}
               className={s.slider}
               onMouseDown={handleSwipeStart}
               onMouseMove={handleSwipeMove}
               onMouseUp={handleSwipeEnd}
               onMouseLeave={handleSwipeEnd}
               onTouchStart={handleSwipeStart}
               onTouchMove={handleSwipeMove}
               onTouchEnd={handleSwipeEnd}
            >
               {getVisibleItems().map((item, idx) => (
                  <div
                     key={`${item.href}-${idx}`}
                     className={`${s.slide} ${idx === 1 ? s.active : idx === 0 ? s.prev : s.next}`}
                  >
                     <span>{item.label}</span>
                     <hr />
                     <div className={s.circle}>
                        <div>
                           <img src={item.icon} alt={`${item.label}-Action`} />
                        </div>
                     </div>
                     <Button as='a' href={item.href} variant='outline'>
                        Выбрать
                     </Button>
                  </div>
               ))}
            </div>
         </div>
      </main>
   );
};
