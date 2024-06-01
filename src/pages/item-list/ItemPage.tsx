import AllItems from "./components/AllItems";
import BestItems from "./components/BestItems";
import "./ItemPage.scss";

function ItemPage() {
  return (
    <div className="page-wrapper">
      <BestItems />
      <AllItems />
    </div>
  );
}

export default ItemPage;
