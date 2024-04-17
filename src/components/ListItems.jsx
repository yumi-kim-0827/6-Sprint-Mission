import React, { useEffect, useState } from "react";
import ItemComp from "./ItemComp";

function ListItems({ items }) {
  return (
    <div className="ListItems">
      {items &&
        items.map((item) => {
          return (
            <li key={item.id}>
              <ItemComp item={item} />
            </li>
          );
        })}
    </div>
  );
}

export default ListItems;
