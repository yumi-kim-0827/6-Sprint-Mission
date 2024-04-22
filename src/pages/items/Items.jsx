import BestProducts from "./components/BestProducts";
import OnSaleProducts from "./components/OnSaleProducts";
import { PaginationBar } from "./components/PaginationBar";

export default function Items({ items }) {
  return (
    <>
      <BestProducts items={items} />
      <OnSaleProducts items={items} />
      <PaginationBar items={items} />
    </>
  );
}
