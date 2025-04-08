import { Button, Icon } from '#/shared/components';
import React from 'react';
import s from './styles.module.scss';
import type { CarTuningMenuProps } from './types';

const mainCategories = [
   { label: 'Colors', value: 'colors', icon: 'mdi:palette' },
   { label: 'Parts', value: 'parts', icon: 'mdi:car-cog' },
];

export const CarTuningMenu: React.FC<CarTuningMenuProps> = React.memo(
   ({ active, setActive }) => {
      return (
         <div className={s['car-tuning-menu']}>
            <div className={s['container']}>
               {mainCategories.map(category => (
                  <div key={category.value} className={s['category-wrapper']}>
                     <button
                        className={`${s['nav-item']} ${
                           active === category.value ? s['active'] : ''
                        }`}
                        onClick={() => setActive(category.value)}
                     >
                        <Icon
                           name={category.icon}
                           className={s['nav-icon']}
                           c_size={20}
                        />
                        <span>{category.label}</span>
                     </button>
                  </div>
               ))}
               <Button color='mint' className={s['save-button']}>
                  <Icon name='lucide:save' />
               </Button>
            </div>
         </div>
      );
   },
);
