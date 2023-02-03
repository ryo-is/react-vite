import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Store } from './pages/Store';
import { Populations } from './pages/Populations';
import { PopulationByJotai } from './pages/PopulationByJotai';
import { Toast } from './components/Toast';

import './configs/recoil';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Store />,
  },
  {
    path: '/population',
    element: <Populations />,
  },
  {
    path: '/population-jotai',
    element: <PopulationByJotai />,
  },
]);

export const App = () => (
  <div className="min-h-screen text-zinc-200 bg-base-100 p-8">
    <RouterProvider router={router} />
    <Toast />
  </div>
);
