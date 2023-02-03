import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Stores } from './pages/stores';
import { Population } from './pages/population';

import './configs/recoil';
import { PopulationByJotai } from './pages/population-jotai';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Stores />,
  },
  {
    path: '/population',
    element: <Population />,
  },
  {
    path: '/population-jotai',
    element: <PopulationByJotai />,
  },
]);

export const App = () => (
  <div className="min-h-screen text-zinc-200 bg-base-100 p-8">
    <RouterProvider router={router} />
  </div>
);
