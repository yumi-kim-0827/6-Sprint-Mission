import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import ItemsPage from 'pages/ItemsPage';
import AddItemPage from 'pages/AddItemPage';
import { ImageUrlProvider } from 'contexts/ItemImageContext';

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
    element: (
      <ImageUrlProvider>
        <AddItemPage />
      </ImageUrlProvider>
    ),
  },
  {
    path: '/*',
    element: <h1>미구현 페이지 입니다.</h1>,
  },
]);
