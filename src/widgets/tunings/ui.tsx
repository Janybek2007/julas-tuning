import React from 'react';
import { type TuningsProps } from './types';
import s from './styles.module.scss';
import { Icon } from '#/shared/components';

export const navigatings = [
   { label: 'Подкраска', value: 'touchup', icon: 'mdi:brush' },
   { label: 'Склейкер', value: 'scraper', icon: 'mdi:knife' },
   { label: 'Диски', value: 'wheels', icon: 'arcticons:pakwheels' },
   { label: 'Перег. бампер', value: 'frontbumper', icon: 'mdi:car-estate' },
   { label: 'Зад. бампер', value: 'rearbumper', icon: 'mdi:car-back' },
   { label: 'Рестайлинг', value: 'restyling', icon: 'mdi:car-repair' },
   { label: 'Тонировка', value: 'tinting', icon: 'mdi:window-closed-variant' },
];

export const Tunings: React.FC<TuningsProps> = React.memo(
   ({ models, part, setActive }) => {
      return (
         <div className={`${s['container']}`}>
            {part === 'parts' ? (
               <>
                  <div className={s['part-items']}>
                     {navigatings.map(item => (
                        <button
                           key={item.value}
                           className={`${s['part-item']} ${
                              part === item.value ? s['active'] : ''
                           }`}
                           onClick={() => setActive(item.value)}
                        >
                           <Icon
                              name={item.icon}
                              className={s['part-icon']}
                              c_size={28}
                           />
                           <span>{item.label}</span>
                        </button>
                     ))}
                  </div>
               </>
            ) : (
               <div className={s['list']}>{}</div>
            )}
         </div>
      );
   },
);
