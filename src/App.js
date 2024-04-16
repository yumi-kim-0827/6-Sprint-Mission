
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/common.css";
import ItemPage from "./ItemPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/items" element= {<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
