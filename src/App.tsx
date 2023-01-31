import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Stores } from './pages/stores';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Stores />,
  },
]);

export const App = () => (
  <div className="min-h-screen text-zinc-200 bg-base-100 p-6">
    <RouterProvider router={router} />
  </div>
);
