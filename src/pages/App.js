import GlobalStyle from "../styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Home from "./Home";
import Board from "./Board";
import Items from "./Items/Items";
import AddItem from "./AddItem";
import Login from "./Login";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/items" element={<Items />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
