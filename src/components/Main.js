import BestProducts from "./BestProducts";

export default function Main({ items }) {
  return (
    <>
      <BestProducts items={items} />
      {/* <onSaleProducts /> */}
    </>
  );
}
