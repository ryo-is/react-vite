import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Toast } from './components/Toast';
import { PopulationByJotai } from './pages/populations/PopulationByJotai';
import { Store } from './pages/store/Store';
import { Top } from './pages/Top';
// import { Populations } from './pages/Populations';

import './configs/recoil';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Top />,
  },
  {
    path: '/store',
    element: <Store />,
  },
  {
    path: '/population',
    element: <PopulationByJotai />,
  },
]);

export const App = () => (
  <div className="min-h-screen bg-base-100 p-8 text-zinc-200">
    <RouterProvider router={router} />
    <Toast />
  </div>
);
