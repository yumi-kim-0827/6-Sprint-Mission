import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Items from "./components/Items";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Items />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
