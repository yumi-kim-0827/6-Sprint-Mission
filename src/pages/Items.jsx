import Product from "../components/Items/Product/Product";
import ProductFooter from "../components/Items/Product/ProductFooter";

const Items = () => {
  return (
    <>
      <main className="items_container">
        <Product />
      </main>
      <ProductFooter />
    </>
  );
};

export default Items;
