import Nav from "../components/Common/Nav";
import BestItemsSection from "../components/Items/BestItemsSection";
import AllItemsSection from "../components/Items/AllItemsSection";
import "./ItemsPage.css";

function ItemsPage({ device }) {
  return (
    <>
      <Nav />
      <main>
        <BestItemsSection device={device} />
        <AllItemsSection device={device} />
      </main>
    </>
  );
}

export default ItemsPage;
