import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createHashRouter, RouterProvider, HashRouter } from 'react-router-dom';

export interface Translation {
  id: string;
  message: string;
}

const router = createHashRouter([
  {
    path: '/*',
    element: <App />,
  },
  {
    path: '/*/slo',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
