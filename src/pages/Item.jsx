import useMediaQuery from "../hooks/useMediaQuery";

import Header from "../components/Header";

import "../css/Item.css";
import ListSection from "../components/ListSection";
import { useCallback, useEffect, useState } from "react";

function Item() {
  const [width, setWidth] = useState(window.innerWidth);
  const [limit1, setLimit1] = useState(4);
  const [limit2, setLimit2] = useState(10);

  const matches = useMediaQuery("");

  const handleResize = () => {
    setWidth(window.innerWidth);
    if (width > 744) {
      setLimit1(4);
      setLimit2(10);
    } else if (width > 375) {
      setLimit1(2);
      setLimit2(6);
    } else {
      setLimit1(1);
      setLimit2(4);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

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
