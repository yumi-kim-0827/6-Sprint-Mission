import Header from "./components/common/Header";

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
