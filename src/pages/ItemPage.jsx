import { useEffect, useState } from "react";

import ListSection from "../components/ListSection";
import Header from "../components/Header";

import "../css/Item.css";

function Item() {
  const [width, setWidth] = useState(window.innerWidth);

  // 첫 mount 시 window width값에 따른 limit 변화
  const [limit1, setLimit1] = useState(() => {
    if (width > 744) {
      return 4;
    } else if (width > 375) {
      return 2;
    } else {
      return 1;
    }
  });
  const [limit2, setLimit2] = useState(() => {
    if (width > 744) {
      return 10;
    } else if (width > 375) {
      return 6;
    } else {
      return 4;
    }
  });

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
  }, [width, window.innerWidth]);

  return (
    <div className="Item">
      <Header />
      <div className="lists">
        <ListSection initialOrder={"favorite"} limit={limit1} />
        <ListSection
          initialOrder={"recent"}
          sort={true}
          ispage={true}
          limit={limit2}
        />
      </div>
    </div>
  );
}

export default Item;
