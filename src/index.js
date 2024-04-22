import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'; // 수정된 부분
import ItemsPage from 'pages/ItemsPage';
import AddItem from 'pages/addItem';
import reportWebVitals from './reportWebVitals';

import './index.css';
import './normalize.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/items',
    element: <ItemsPage />,
  },
  {
    path: '/addItem',
    element: <AddItem />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);

reportWebVitals();
