import {
   type RouteConfig,
   index,
   layout,
   route,
} from '@react-router/dev/routes';

export default [
   layout('../pages/layouts/site/index.tsx', [
      index('../pages/welcome/index.tsx'),
      route('/home', '../pages/home/index.tsx'),
      route('/tunings/my', '../pages/tunings/my/index.tsx'),
      route('/tunings/all', '../pages/tunings/all/index.tsx'),
      route('/tunings/create', '../pages/tunings/create/index.tsx'),
      route('/tunings/create/:id', '../pages/tunings/create-by-id/index.ts'),
   ]),
   route('/login', '../pages/login/index.tsx'),
] satisfies RouteConfig;
