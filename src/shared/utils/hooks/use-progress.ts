import { useState, useEffect } from 'react';

interface UseProgressOptions {
   duration?: number;
   interval?: number;
   externalPercentage?: number;
   stopOnError?: boolean;
}

interface UseProgressResult {
   percentage: number;
   isLoading: boolean;
}

export const useProgress = ({
   duration = 3000,
   interval = 50,
   externalPercentage,
   stopOnError = false,
}: UseProgressOptions = {}): UseProgressResult => {
   const [percentage, setPercentage] = useState(0);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      if (stopOnError) {
         setIsLoading(false);
         setPercentage(0);
         return;
      }

      const targetPercentage =
         externalPercentage !== undefined
            ? Math.min(Math.max(externalPercentage, 0), 100)
            : 100;

      if (percentage === targetPercentage) {
         setIsLoading(targetPercentage < 100);
         return;
      }

      const steps = duration / interval;
      const increment = (targetPercentage - percentage) / steps;

      const timer = setInterval(() => {
         setPercentage(prev => {
            const next = prev + increment;
            if (
               (increment > 0 && next >= targetPercentage) ||
               (increment < 0 && next <= targetPercentage)
            ) {
               clearInterval(timer);
               setIsLoading(targetPercentage < 100);
               return targetPercentage;
            }
            return next;
         });
      }, interval);

      return () => clearInterval(timer);
   }, [duration, interval, externalPercentage, stopOnError]);

   return {
      percentage: Math.round(percentage),
      isLoading,
   };
};
