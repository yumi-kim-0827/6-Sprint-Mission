import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemPage from "./pages/ItemPage";
import Home from "./pages/Home";
import AddItemPage from "./pages/AddItemPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route exact path="items" element={<ItemPage />} />
          <Route exact path="addItem" element={<AddItemPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;