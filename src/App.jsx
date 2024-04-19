import Header from "./components/Header/Header";
import Market from "./pages/Market/Market";

import "./styles/reset.css";
import "./styles/global.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
