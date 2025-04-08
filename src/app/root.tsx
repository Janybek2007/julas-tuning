import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

import type { Route } from './+types/root';
import { Provider } from './provider';
import './styles';

export const links: Route.LinksFunction = () => [
   { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
   { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
   {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
   },
   {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
   },
   { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap' },
   { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap' },
   { rel: 'apple-touch-icon', sizes: '192x192', href: '/seo/apple-touch-icon.png' },
   { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/seo/favicon-32x32.png' },
   { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/seo/favicon-16x16.png' },
   { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
   { rel: 'icon', href: '/seo/favicon.ico' },
];

export function Layout({ children }: { children: React.ReactNode }) {
   return (
      <html lang='en'>
         <head>
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <Meta />
            <Links />
         </head>
         <body>
            {children}
            <ScrollRestoration />
            <Scripts />
         </body>
      </html>
   );
}

export default function App() {
   return <Provider />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
   let message = 'Oops!';
   let details = 'An unexpected error occurred.';
   let stack: string | undefined;

   if (isRouteErrorResponse(error)) {
      message = error.status === 404 ? '404' : 'Error';
      details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
   } else if (import.meta.env.DEV && error && error instanceof Error) {
      details = error.message;
      stack = error.stack;
   }

   return (
      <main className='pt-16 p-4 container mx-auto'>
         <h1>{message}</h1>
         <p>{details}</p>
         {stack && (
            <pre className='w-full p-4 overflow-x-auto'>
               <code>{stack}</code>
            </pre>
         )}
      </main>
   );
}
