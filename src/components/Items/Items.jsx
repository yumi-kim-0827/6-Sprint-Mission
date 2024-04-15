import ItemsList from "./ItemsList.jsx";
import BestItemsList from "./BestItemsList.jsx";
import "../../styles/Items/Items.css";

const Items = () => {
  return (
    <div className="Items">
      <BestItemsList />
      <ItemsList />
    </div>
  );
};

export default Items;
