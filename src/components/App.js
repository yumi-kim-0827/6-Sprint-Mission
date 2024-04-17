import "../styles/App.css";
import { useEffect, useState } from "react";
import { getMarketList } from "../api";
import AllList from "./AllList";
import BestList from "./BestList";
import Nav from "./Nav";

const App = () => {
  const [pandaList, setPandaList] = useState([]);

  const handleLoad = async () => {
    const { list } = await getMarketList();
    setPandaList(list);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <Nav />
      <div className="itemPage">
        <BestList items={pandaList} />
        <AllList items={pandaList} />
      </div>
    </div>
  );
};
export default App;
