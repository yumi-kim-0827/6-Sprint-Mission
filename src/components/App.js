import { useEffect, useState } from "react";
import { getMarketList } from "../api";
import AllList from "./AllList";

const App = () => {
  const [pandaList, setPandaList] = useState([]);

  const handleLoad = async () => {
    const { list } = await getMarketList();
    setPandaList(list);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return <AllList items={pandaList} />;
};
export default App;
