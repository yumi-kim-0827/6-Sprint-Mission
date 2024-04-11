import "./Items.css";

import TopNavigation from "../components/TopNavigation";
import Product from "../components/Product";

const Items = () => {
  return (
    <>
      <TopNavigation />
      <main className="items_container">
        <Product />
      </main>
    </>
  );
};

export default Items;
