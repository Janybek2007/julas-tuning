import React from 'react';
import s from './styles.module.scss';

interface TuningLoaderProps {
   percentage: number;
   text: string;
}

export const TuningLoader: React.FC<TuningLoaderProps> = React.memo(
   ({ percentage, text }) => {
      const radius = 50;
      const circumference = 2 * Math.PI * radius;
      const strokeDashoffset =
         circumference - (percentage / 100) * circumference;

      return (
         <div className={s['tuning-loader']}>
            <div className={s['circle']}>
               <svg width='120' height='120' viewBox='0 0 120 120'>
                  <circle
                     cx='60'
                     cy='60'
                     r={radius}
                     stroke='#2a3a3f'
                     strokeWidth='10'
                     fill='none'
                  />
                  <circle
                     cx='60'
                     cy='60'
                     r={radius}
                     stroke='#00c4b4'
                     strokeWidth='10'
                     fill='none'
                     strokeDasharray={circumference}
                     strokeDashoffset={strokeDashoffset}
                     strokeLinecap='round'
                     className={s['circle__progress']}
                  />
               </svg>
               <div className={s['percentage']}>{percentage}%</div>
            </div>
            <p
               className={s['text']}
               dangerouslySetInnerHTML={{ __html: text }}
            ></p>
         </div>
      );
   },
);
