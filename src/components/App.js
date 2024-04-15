import { useEffect, useState } from "react";
import { getMarketList } from "../api";
import AllList from "./AllList";
import BestList from "./BestList";

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
      <BestList items={pandaList} />
      <AllList items={pandaList} />
    </div>
  );
};
export default App;
