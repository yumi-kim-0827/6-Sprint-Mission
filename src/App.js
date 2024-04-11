import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Container from "./components/Container.jsx";

function App() {
  const [navSelected, setNavSelected] = useState("중고마켓");

  const navClickHandler = (text) => {
    setNavSelected(text);
  };

  return (
    <div className="App">
      <Header navSelected={navSelected} navClickHandler={navClickHandler} />
      <Container navSelected={navSelected}></Container>
    </div>
  );
}

export default App;
