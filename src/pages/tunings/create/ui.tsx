import { CarItem } from '#/shared/components';
import { BrandSelector } from '#/widgets/brand-selector';
import React from 'react';
import s from './styles.module.scss';
import { useNavigate } from 'react-router';

export const CreateTuning: React.FC = () => {
   const navigate = useNavigate();
   return (
      <main>
         <BrandSelector />
         <div className={`container ${s['list']}`}>
            {Array.from({ length: 8 }).map((_, i) => (
               <CarItem
                  key={i + '-car-item'}
                  item={{ title: 'Kia K5', id: 10 }}
                  actions={[
                     {
                        type: 'select',
                        onClick: () => navigate(`/tunings/create/${i}`),
                     },
                  ]}
                  soon={i >= 5}
               />
            ))}
         </div>
      </main>
   );
};
