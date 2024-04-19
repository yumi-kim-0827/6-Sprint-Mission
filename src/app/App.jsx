import "./App.css";
import { Header } from "/src/widgets/header/index.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
