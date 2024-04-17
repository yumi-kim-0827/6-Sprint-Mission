import BestProducts from "./BestProducts";
import OnSaleProducts from "./OnSaleProducts";

export default function Items({ items }) {
  return (
    <>
      <BestProducts items={items} />
      <OnSaleProducts items={items} />
    </>
  );
}
