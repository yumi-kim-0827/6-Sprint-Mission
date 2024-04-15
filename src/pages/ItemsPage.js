import Nav from "../components/Nav";
import BestItemsSection from "../components/BestItemsSection";
import AllItemsSection from "../components/AllItemsSection";
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
