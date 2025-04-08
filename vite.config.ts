import { reactRouter } from '@react-router/dev/vite';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import compression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
   const env = loadEnv('develpoment', '.', '');
   const isProd = mode === 'production';
   const isDev = mode === 'development';
   return {
      plugins: [
         reactRouter(),
         tsconfigPaths(),
         compression({
            algorithm: 'brotliCompress',
            ext: '.br',
            threshold: 10240,
            deleteOriginFile: false,
         }),
      ],
      server: {
         port: parseInt(env.APP_PORT),
         host: true,
      },
      build: {
         target: 'esnext',
         outDir: 'dist',
         sourcemap: isDev,
         minify: isProd ? 'terser' : false,
         cssMinify: true,
         ssr: false,
      },
   };
});
