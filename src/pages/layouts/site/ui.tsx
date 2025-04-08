import AppFooter from '#/widgets/app-footer';
import AppHeader from '#/widgets/app-header';
import React from 'react';
import { Outlet } from 'react-router';

export const SiteLayout: React.FC = () => {
   return (
      <div>
         <AppHeader />
         <Outlet />
         <AppFooter />
      </div>
   );
};
