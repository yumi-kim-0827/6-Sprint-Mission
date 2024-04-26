import { Link } from "react-router-dom";
import MakeItemCard from "./MakeItemCard";

function MakeItemList({ items }) {
  return (
    <div className="item-container">
      {items.map((item) => {
        return (
          <div className="item-box" key={item.id}>
            <MakeItemCard item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default MakeItemList;
