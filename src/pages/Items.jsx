import ItemsList from "../components/Items/ItemsList.jsx";
import BestItemsList from "../components/Items/BestItemsList.jsx";
import "../styles/Items/Items.css";

const Items = () => {
  return (
    <div className="Items">
      <BestItemsList />
      <ItemsList />
    </div>
  );
};

export default Items;
