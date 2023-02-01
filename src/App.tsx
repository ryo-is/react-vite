import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Stores } from './pages/stores';
import { Population } from './pages/population';

import './configs/recoil';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Stores />,
  },
  {
    path: '/population',
    element: <Population />,
  },
]);

export const App = () => (
  <div className="min-h-screen text-zinc-200 bg-base-100 p-8">
    <RouterProvider router={router} />
  </div>
);
