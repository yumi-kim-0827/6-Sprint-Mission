import "./BestProducts.css";
import Card from "./Card";

function BestProducts({ items }) {
  return (
    <div className='best-products'>
      <h1>베스트 상품</h1>
      <ul className='best-products-wrap'>
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
export default BestProducts;
