import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Toast } from './components/Toast';
import { FlowIndex } from './pages/flow';
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
  {
    path: '/flow',
    element: <FlowIndex />,
  },
]);

export const App = () => (
  <div className="min-h-screen bg-base-100 p-8 text-zinc-200">
    <RouterProvider router={router} />
    <Toast />
  </div>
);
