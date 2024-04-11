import React from "react";
import "../styles/Container.css";
import Items from "./Items/Items.jsx";
import Board from "./Board.jsx";

const Container = ({ navSelected }) => {
  return (
    <div className="Container">
      {navSelected === "자유게시판" ? <Board /> : <Items />}
    </div>
  );
};

export default Container;
