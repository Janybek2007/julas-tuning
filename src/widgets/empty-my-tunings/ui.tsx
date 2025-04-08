import React from 'react';
import s from './styles.module.scss';
export const EmptyMyTunings: React.FC = React.memo(() => {
   return (
      <div className={s['empty']}>
         <img src='/icons/empty-my-tunings.svg' alt='Emtpy My Tunings Icon' />
         <div className={s['col']}>
            <h4>Здесь пока ничего нет</h4>
            <h5>Создайте конфигурацию и авто появится здесь</h5>
         </div>
      </div>
   );
});
