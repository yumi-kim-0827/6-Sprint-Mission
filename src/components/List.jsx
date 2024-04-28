import React from "react";

import Card from "./Card";

import "./../css/List.css";

function List({ items }) {
  return (
    <>
      <ul className="List">
        {items &&
          items.map((item) => {
            return (
              <li key={item.id}>
                <Card item={item} />
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default List;
