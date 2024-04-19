import AllItems from "../components/AllItems";
import BestItems from "../components/BestItems";
import styles from "../styles/Items.module.css";
import { useEffect, useState } from "react";

function Items() {
  const [bestPageSize, setBestPageSize] = useState(4);
  const [allPageSize, setAllPageSize] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBestPageSize(1);
        setAllPageSize(4);
      } else if (window.innerWidth < 1199) {
        setBestPageSize(2);
        setAllPageSize(6);
      } else {
        setBestPageSize(4);
        setAllPageSize(10);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.itemsContainer}>
      <BestItems pageSize={bestPageSize} />
      <AllItems pageSize={allPageSize} />
    </div>
  );
}

export default Items;
