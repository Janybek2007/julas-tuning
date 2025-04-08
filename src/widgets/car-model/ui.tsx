import React from 'react';
import s from './styles.module.scss';

export const CarModel: React.FC = React.memo(() => {
   return <div className={s['model']}></div>;
});
