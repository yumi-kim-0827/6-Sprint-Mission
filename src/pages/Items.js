import TopNavigation from "../components/TopNavigation";
import Product from "../components/Product";
import ProductFooter from "../components/ProductFooter";

const Items = () => {
  return (
    <>
      <TopNavigation />
      <main className="items_container">
        <Product />
      </main>
      <ProductFooter />
    </>
  );
};

export default Items;
