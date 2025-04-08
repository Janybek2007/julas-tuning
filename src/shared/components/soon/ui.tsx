import React from 'react';
import { motion } from 'framer-motion';
import s from './styles.module.scss';
import { Link } from 'react-router';

export const Soon: React.FC = React.memo(() => {
   return (
      <div className={s['soon']}>
         <motion.h4
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
               duration: 1.2,
               ease: 'easeOut',
               delay: 0.2,
            }}
         >
            СКОРО
         </motion.h4>
         <motion.p
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
               duration: 1.3,
               delay: 0.4,
               ease: 'easeOut',
            }}
         >
            Мы готовим что-то удивительное. Следите за обновлениями — скоро
            будет доступно!
         </motion.p>
         <Link to='/'>На Главную</Link>
      </div>
   );
});
