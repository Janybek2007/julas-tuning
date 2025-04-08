import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import s from './styles.module.scss';
import { CarItem, ConfirmModal } from '#/shared/components';
import { EmptyMyTunings } from '#/widgets/empty-my-tunings';

export const MyTunings: React.FC = () => {
   const [tunings, setTunings] = React.useState([1, 2, 3, 4, 5]);
   const [open, setOpen] = React.useState(false);

   const Remove = React.useCallback((id: number) => {
      return () => {
         setTunings(d => d.filter(v => v !== id));
         setOpen(true);
      };
   }, []);

   return (
      <>
         <AnimatePresence initial={false}>
            {open && (
               <ConfirmModal
                  title='Конфигурация удалена'
                  actions={[{ label: 'Отменить', click: () => {} }]}
                  onClose={() => setOpen(false)}
               />
            )}
         </AnimatePresence>
         <main className={s['main']}>
            <div className={`container`}>
               <h4 className={s['title']}>Мои тюнинги</h4>
               <AnimatePresence>
                  {tunings.length == 0 ? (
                     <EmptyMyTunings />
                  ) : (
                     <div className={s['list']}>
                        {tunings.map((id, i) => (
                           <motion.div
                              key={id}
                              initial={{ opacity: 0, y: 30, scale: 0.95 }}
                              animate={{
                                 opacity: 1,
                                 y: 0,
                                 scale: 1,
                                 transition: {
                                    duration: 0.5,
                                    delay: i * 0.1,
                                 },
                              }}
                              exit={{
                                 opacity: 0,
                                 y: 30,
                                 scale: 0.95,
                                 transition: { duration: 0.3 },
                              }}
                           >
                              <CarItem
                                 item={{ title: 'Kia K5', id }}
                                 actions={[{ type: 'view' }, { type: 'call' }]}
                                 tuning={{
                                    created_at: '17.03.25',
                                    delete: Remove(id),
                                 }}
                              />
                           </motion.div>
                        ))}
                     </div>
                  )}
               </AnimatePresence>
            </div>
         </main>
      </>
   );
};
