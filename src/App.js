import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItemPage from "./component/pages/AddItemPage";
import CoummuntyPage from "./component/pages/CoummuntyPage";
import LoginPage from "./component/pages/LoginPage";
import ItemsPage from "./component/pages/ItemsPage/ItemsPage";
import MainPage from "./component/pages/MainPage";
import Header from "./component/Layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="withHeader">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="items" element={<ItemsPage />} />
          <Route path="additem" element={<AddItemPage />} />
          <Route path="community" element={<CoummuntyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
