import React from "react";
import ItemsPage from "./pages/ItemsPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import BoardPage from "./pages/BoardPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AddItemPage from "./pages/AddItemPage";
import App from "./App";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/board",
        element: <BoardPage />,
      },
      {
        path: "/items",
        element: <ItemsPage />,
        children: [{ path: ":productId", element: <ItemDetailPage /> }],
      },
      {
        path: "/additem",
        element: <AddItemPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
