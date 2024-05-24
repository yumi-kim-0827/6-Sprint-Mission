import { Product } from "../../../types";
import MakeItemCard from "./MakeItemCard";

interface MakeItemListProps {
  items: Product[];
}

const MakeItemList: React.FC<MakeItemListProps> = ({ items }) => {
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
};

export default MakeItemList;
