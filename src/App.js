import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/common.css";
import ItemPage from "./pages/ItemPage";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route exact path="items" element={<ItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
