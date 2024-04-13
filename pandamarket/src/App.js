import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Item from "./pages/Item";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/items" element={<Item />} />
    </Routes>
  );
}

export default App;
