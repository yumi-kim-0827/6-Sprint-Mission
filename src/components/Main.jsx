import BestProducts from "./BestProducts";
import OnSaleProducts from "./OnSaleProducts.jsx";

export default function Main({ items }) {
  return (
    <>
      <BestProducts items={items} />
      <OnSaleProducts items={items} />
    </>
  );
}
