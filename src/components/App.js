import "../styles/App.css";
import { useEffect, useState } from "react";
import { getMarketList } from "../api";
import AllList from "./AllList";
import BestList from "./BestList";
import Nav from "./Nav";

const App = () => {
  const [pandaList, setPandaList] = useState([]);
  const [order, setOrder] = useState("id");
  const sortedList = pandaList.sort((a, b) => b[order] - a[order]);
  console.log(pandaList);

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
        <AllList items={sortedList} onClick={setOrder} />
      </div>
    </div>
  );
};
export default App;
