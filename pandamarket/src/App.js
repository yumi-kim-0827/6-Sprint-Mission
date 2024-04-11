import { useState } from "react";
import { Header } from "./layout/Header";
import { View } from "./layout/View";

function App() {
  const [page, setPage] = useState("ViewItemList")
  return (
    <div className="pandamarket">
      <Header/>
      <View page={page}/>
    </div>
  );
}

export default App;
