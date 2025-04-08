import React from 'react';
import type { ConfirmModalProps } from './types';
import s from './styles.module.scss';
import { useOutsideClick } from '#/shared/utils';
import { Icon } from '../icon';
import { Button } from '../button';
import { motion } from 'framer-motion';

export const ConfirmModal: React.FC<ConfirmModalProps> = React.memo(
   ({ onClose, actions, title }) => {
      const ref = useOutsideClick<HTMLDivElement>(onClose);

      return (
         <>
            <motion.div
               className='blurbg'
               initial={{ opacity: 0 }}
               animate={{ opacity: 0.5 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.3 }}
            />
            <motion.div
               className={s['modal']}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.9 }}
               transition={{ duration: 0.3 }}
            >
               <div className={s['body']} ref={ref}>
                  <button onClick={onClose} className={s['close']}>
                     <Icon name='lucide:x' />
                  </button>
                  <div className={s['content']}>
                     <h3>{title}</h3>
                     <div className={s['actions']}>
                        {actions.map((v, i) => (
                           <Button
                              key={i + title}
                              children={v.label}
                              onClick={v.click}
                              color='secondary'
                           />
                        ))}
                     </div>
                  </div>
               </div>
            </motion.div>
         </>
      );
   },
);
