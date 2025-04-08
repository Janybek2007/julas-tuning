import React from 'react';
import { TuningLoader } from '#/shared/components';
import { CarTuningMenu } from '#/widgets/car-tuning-menu';
import { useModelLoader, useProgress } from '#/shared/utils';
import { Tunings } from '#/widgets/tunings';
import { CarModel } from '#/widgets/car-model';
import s from './styles.module.scss';
import { parseAsString, useQueryState } from 'nuqs';

export const CreateTuningById: React.FC = () => {
   const modelUrls = [
      'https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf',
   ];

   const [t, setT] = useQueryState('t', parseAsString);

   const { progress, error, hasError } = useModelLoader({ modelUrls });

   const { percentage, isLoading } = useProgress({
      externalPercentage: progress,
      stopOnError: hasError,
      // duration: 2000,
   });

   if (error) {
      return (
         <main>
            <p>Ошибка: {error}</p>
         </main>
      );
   }

   return (
      <main className={s['main']}>
         {isLoading ? (
            <TuningLoader
               percentage={percentage}
               text='С <span>Аскар Авто Трейд</span> покупка авто за границей становится простой и безопасной!'
            />
         ) : (
            <>
               <CarModel />
               <div className={s['b']}>
                  <CarTuningMenu  active={t} setActive={setT} />
                  {t && !['colors'].includes(t) && (
                     <Tunings setActive={setT} part={t} models={[]} />
                  )}
               </div>
            </>
         )}
      </main>
   );
};
