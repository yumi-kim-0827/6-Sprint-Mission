import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getProducts } from "./api";

import Item from "./pages/ItemPage";
import Main from "./pages/MainPage";

import "./css/reset.css";
import "./css/style.css";
import "./css/App.css";
import AddItemPage from "./pages/AddItemPage";

export const GetItemsContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const getItems = async (order, limit, page) => {
    let result;

    try {
      setIsLoading(true);
      result = await getProducts({ order, limit, page });
    } catch (err) {
      console.err(err);
    } finally {
      setIsLoading(false);
    }
    const { list, totalCount } = await result;

    return result;
  };

  return (
    <>
      <GetItemsContext.Provider value={getItems}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/item" element={<Item />} />
          <Route path="/additem" element={<AddItemPage />} />
        </Routes>
      </GetItemsContext.Provider>
    </>
  );
}

export default App;
