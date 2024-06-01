import BestPost from "@/pageComponents/boards/BestPost";
import styles from "./style.module.css";
import SearchPost from "@/pageComponents/boards/SearchPost";
import { useEffect } from "react";

const Boards = () => {
  useEffect(() => {
    console.log("sprint9");
  }, []);
  return (
    <div className={styles.container}>
      <BestPost />
      <SearchPost />
    </div>
  );
};

export default Boards;
