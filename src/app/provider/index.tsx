import { Outlet } from 'react-router';
import { NuqsAdapter } from 'nuqs/adapters/react-router/v7';

export const Provider: React.FC = () => {
   return (
      <div className='wrapper'>
         <NuqsAdapter>
            <Outlet />
         </NuqsAdapter>
      </div>
   );
};
