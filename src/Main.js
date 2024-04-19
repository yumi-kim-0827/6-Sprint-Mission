import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { ItemPage } from "./page/ItemPage";
import { HomePage } from "./page/HomePage";
import { AddItemPage } from "./page/AddItemPage";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<HomePage />}/>
          <Route path="items">
            <Route index element={<ItemPage />}/>
          </Route>
          <Route path="additem" element={<AddItemPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}