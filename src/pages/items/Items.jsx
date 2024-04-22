import BestProducts from "./components/BestProducts";
import OnSaleProducts from "./components/OnSaleProducts";

export default function Items({ items }) {
  return (
    <>
      <BestProducts items={items} />
      <OnSaleProducts items={items} />
    </>
  );
}
