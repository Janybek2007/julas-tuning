import React from 'react';
import s from './styles.module.scss';
import { Icon } from '#/shared/components';
import { useLocation } from 'react-router';

export const AppFooter: React.FC = () => {
   const { pathname } = useLocation();
   if (/^\/tunings\/create\/.*/.test(pathname)) return;

   return (
      <footer className={s['footer']}>
         <div className={`${s['container']} container`}>
            <div className={s['start']}>
               <img src='/icons/askar-logo.svg' alt='' />
            </div>
            <hr />
            <div className={s['center']}>
               <figure>
                  <img src='/icons/jylas-tuning.svg' alt='Jylas Tuning Logo' />
               </figure>
               <div className={s['cols']}>
                  <div className={s['col']}>
                     <h5>
                        <Icon name='mdi:telephone' /> Телефон
                     </h5>
                     <ul>
                        {[
                           '+996 995-20-08-92',
                           '+996 700-90-00-82',
                           '+996 508-00-00-01',
                        ].map(v => (
                           <li key={v}>
                              <a href={`tel:${v}`}>{v}</a>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className={s['col']}>
                     <h5>
                        <Icon name='line-md:instagram' /> Instagram
                     </h5>
                     <ul>
                        <li>
                           <a
                              href='https://instagram.com/askar_auto_america'
                              target='_blank'
                              rel='noopener noreferrer'
                           >
                              @askar_auto_america us
                           </a>
                        </li>
                        <li>
                           <a
                              href='https://instagram.com/askar_korea'
                              target='_blank'
                              rel='noopener noreferrer'
                           >
                              @askar_korea 🇰🇷
                           </a>
                        </li>
                        <li>
                           <a
                              href='https://instagram.com/jylas_tuning'
                              target='_blank'
                              rel='noopener noreferrer'
                           >
                              @jylas_tuning
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div className={s['col']}>
                     <h5>
                        <Icon name='ph:map-pin-fill' /> Адресс
                     </h5>
                     <p>
                        <a
                           href='https://2gis.kg/bishkek/geo/70000001097250737'
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           Улица Максима Горького, 1г/1, Бишкек
                        </a>
                     </p>
                  </div>
               </div>
            </div>
            <hr />
            <div className={s['end']}>
               <a
                  href='https://www.iant.kg/'
                  target='_blank'
                  rel='noopener noreferrer'
               >
                  <img src='/icons/iant-logo.svg' alt='IAnt Logo' />
               </a>
            </div>
         </div>
      </footer>
   );
};
