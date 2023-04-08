import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export interface Translation {
  id: string;
  message: string;
}

const Main = () => {
  const router = createBrowserRouter([
    {
      path: '/portfolio_V2',
      element: <App />,
    },
    {
      path: '/portfolio_V2/slo',
      element: <App />,
    },
  ]);
  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
