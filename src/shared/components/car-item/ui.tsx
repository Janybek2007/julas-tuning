import React, { useMemo } from 'react';
import type { ActionType, CarItemProps } from './types';
import s from './styles.module.scss';
import { Button, type ButtonProps } from '../button';
import { Icon } from '../icon';

const DEFAULT_ACTIONS: CarItemProps['actions'] = [
   { type: 'view' },
   { type: 'call' },
];

const ACTION_CONFIG: Record<ActionType, ButtonProps> = {
   view: { variant: 'solid', color: 'primary', children: 'Показать' },
   select: { variant: 'solid', color: 'mint', children: 'Выбрать' },
   call: {
      variant: 'outline',
      color: 'primary',
      className: s['call'],
      children: (
         <>
            <Icon name='ic:baseline-whatsapp' />
            Связаться
         </>
      ),
   },
} as const;

export const CarItem: React.FC<CarItemProps> = React.memo(
   ({ item, actions = DEFAULT_ACTIONS, tuning, soon }) => {
      const { image = '/images/car-placeholder.png', title } = item;

      const actionButtons = useMemo(
         () =>
            actions.map((action, index) => {
               const config = ACTION_CONFIG[action.type] || ACTION_CONFIG.view;
               return (
                  <Button
                     key={`${title}-${action.type}-${index}`}
                     {...config}
                     {...action}
                     disabled={soon}
                  />
               );
            }),
         [actions, title],
      );

      return (
         <div className={`${s['car-item']} ${tuning && s['tuning']}`}>
            {tuning && (
               <div className={s['head']}>
                  <span>Создано {tuning.created_at}</span>
                  <button onClick={tuning.delete}>Удалить</button>
               </div>
            )}
            <div data-disabled={soon} className={`${s['background']}`} />
            <div className={s['content']}>
               <img data-disabled={soon} src={image} alt={`Car - ${title}`} />
               {!soon && <h4>{title}</h4>}
               <div className={s['actions']}>{actionButtons}</div>
            </div>
         </div>
      );
   },
);
