import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";

function App() {
  const [navSelected, setNavSelected] = useState("자유게시판");

  const navClickHandler = (text) => {
    setNavSelected(text);
  };

  return (
    <div className="App">
      <Header navSelected={navSelected} navClickHandler={navClickHandler} />
    </div>
  );
}

export default App;
