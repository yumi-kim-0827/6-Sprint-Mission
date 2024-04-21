import BestItemsSection from "../components/Items/BestItemsSection";
import AllItemsSection from "../components/Items/AllItemsSection";
import "./ItemsPage.css";

function ItemsPage({ device }) {
  return (
    <main>
      <BestItemsSection device={device} />
      <AllItemsSection device={device} />
    </main>
  );
}

export default ItemsPage;
