import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import ItemsPage from 'pages/ItemsPage';
import AddItemPage from 'pages/AddItemPage';

export const router = createBrowserRouter([
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
    element: <AddItemPage />,
  },
  {
    path: '/*',
    element: <h1>미구현 페이지 입니다.</h1>,
  },
]);
