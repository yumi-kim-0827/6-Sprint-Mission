import App from 'App';
import { createBrowserRouter } from 'react-router-dom';
import ItemsPage from 'pages/ItemsPage';

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
    path: '/*',
    element: <h1>미구현 페이지 입니다.</h1>,
  },
]);
