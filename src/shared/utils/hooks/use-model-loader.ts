import { useState, useEffect } from 'react';
import {
   GLTFLoader,
   type GLTF,
} from 'three/examples/jsm/loaders/GLTFLoader.js';

interface UseModelLoaderOptions {
   modelUrls: string[];
}

interface UseModelLoaderResult {
   progress: number;
   models: GLTF[] | null;
   error: string | null;
   hasError: boolean;
}

export const useModelLoader = ({
   modelUrls,
}: UseModelLoaderOptions): UseModelLoaderResult => {
   const [progress, setProgress] = useState(0);
   const [models, setModels] = useState<GLTF[] | null>(null);
   const [error, setError] = useState<string | null>(null);
   const [hasError, setHasError] = useState(false);

   useEffect(() => {
      if (!modelUrls || modelUrls.length === 0) {
         setProgress(100);
         return;
      }

      const loader = new GLTFLoader();
      const totalModels = modelUrls.length;
      let loadedModels = 0;
      const loadedModelsArray: GLTF[] = [];

      const updateProgress = () => {
         if (hasError) return;
         const progressValue = (loadedModels / totalModels) * 100;
         setProgress(Math.min(Math.round(progressValue), 100));
         if (loadedModels === totalModels) {
            setModels(loadedModelsArray);
         }
      };

      modelUrls.forEach((url, index) => {
         loader.load(
            url,
            gltf => {
               if (hasError) return;
               loadedModelsArray[index] = gltf;
               loadedModels += 1;
               updateProgress();
            },
            xhr => {
               if (hasError || !xhr.lengthComputable) return;
               const modelProgress = (xhr.loaded / xhr.total) * 100;
               const overallProgress =
                  ((loadedModels + modelProgress / 100) / totalModels) * 100;
               setProgress(Math.min(Math.round(overallProgress), 100));
            },
            err => {
               if (hasError) return;
               setError(
                  `Ошибка загрузки модели ${url}: ${(err as any).message}`,
               );
               setHasError(true);
            },
         );
      });

      return () => {
         // No setHasError(true) here unless an error occurred
      };
   }, [modelUrls]);

   return { progress, models, error, hasError };
};
