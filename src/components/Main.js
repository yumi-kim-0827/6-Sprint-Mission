import BestProducts from "./BestProducts";

export default function Main({ items }) {
  const itemsList = items.map(item => {
    return <div key={item.id}>{item.name}</div>;
  });
  console.log(itemsList);

  return (
    <>
      <BestProducts />
      {/* <onSaleProducts /> */}
    </>
  );
}
