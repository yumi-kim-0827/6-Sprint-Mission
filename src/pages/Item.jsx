import useMediaQuery from "../hooks/useMediaQuery";

import Header from "../components/Header";

import "../css/Item.css";
import ListSection from "../components/ListSection";
import { useState } from "react";

/*
desktop : 1200~
tablet : 768~1200
phone : ~768
*/

function Item() {
  const [limit1, setLimit1] = useState(4);
  const [limit2, setLimit2] = useState(10);

  return (
    <div className="Item">
      <Header />
      <div className="lists">
        <ListSection order={"favorite"} limit={limit1} />
        <ListSection order={"recent"} sort={true} limit={limit2} />
      </div>
    </div>
  );
}

export default Item;
