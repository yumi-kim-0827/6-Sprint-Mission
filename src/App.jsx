import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getProducts } from "./api";

import Item from "./pages/Item";
import Main from "./pages/Main";

import "./css/reset.css";
import "./css/style.css";
import "./css/App.css";

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
        </Routes>
      </GetItemsContext.Provider>
    </>
  );
}

export default App;
