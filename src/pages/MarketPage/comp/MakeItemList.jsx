import MakeItemCard from "./MakeItemCard";
import heart from "../assets/ic_heart.png";
import { FormatCurrencyWon } from "../utils/FormatCurrencyWon";

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
