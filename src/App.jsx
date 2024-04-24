import "./css/reset.css";
import "./css/style.css";
import "./css/App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Item from "./pages/Item";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/item" element={<Item />} />
      </Routes>
    </>
  );
}

export default App;
