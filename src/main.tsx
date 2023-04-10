import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <HashRouter>
      <Routes>
        <Route path='/*' element={<App />} />
        <Route path='/*/slo' element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
