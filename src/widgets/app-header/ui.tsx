import React from 'react';
import { Link, useLocation } from 'react-router';
import s from './styles.module.scss';
import { AUTO_TRADE_URL } from '#/shared/constants';
import { Icon } from '#/shared/components';
import { property } from '#/shared/utils';

export const AppHeader: React.FC = React.memo(() => {
   const { pathname } = useLocation();
   if (pathname === '/' || /^\/tunings\/create\/.*/.test(pathname)) return;

   return (
      <header
         className={s['header']}
         ref={el => {
            property(el).global('--header-height', `${el?.clientHeight}px`);
         }}
      >
         <div className={`${s['container']} container`}>
            <div className={s['jylas-logo']}>
               <img src='/icons/jylas-tuning.svg' alt='Jylas Tuning Logo' />
            </div>
            <div className={s['end']}>
               <Link to='/tunings/all'>
                  <img src='/icons/all-tunings2.svg' alt='Jylas Tuning Logo' />
                  Все тюнинги
               </Link>
               <Link to='/tunings/my'>
                  <Icon name='lucide:bookmark' />
                  Мои тюнинги
               </Link>
               <Link to='/login'>
                  <img src='/icons/my-tunings.svg' alt='Jylas Tuning Logo' />
                  Войти
               </Link>
               <a
                  className={s['askar-logo']}
                  href={AUTO_TRADE_URL}
                  target='_blank'
               >
                  <img src='/icons/askar.svg' alt='Askar Auto Logo' />
               </a>
            </div>
         </div>
      </header>
   );
});
