import "./OnSaleProducts.css";
import NavOnSaleProducts from "./NavOnSaleProducts";
import ItemCard from "./ItemCard";
import useItemCount from "./useItemCount";

export default function OnSaleProducts({ items }) {
  let count = useItemCount();

  return (
    <div className="container-onSaleProducts">
      <NavOnSaleProducts />
      <div className="cards-container">
        {count === 1 ? (
          <>
            <ItemCard mb items={items} count={0} />
            <ItemCard mb items={items} count={1} />
            <ItemCard mb items={items} count={2} />
            <ItemCard mb items={items} count={3} />
          </>
        ) : count === 2 ? (
          <>
            <ItemCard tb items={items} count={0} />
            <ItemCard tb items={items} count={1} />
            <ItemCard tb items={items} count={2} />
            <ItemCard tb items={items} count={3} />
            <ItemCard tb items={items} count={4} />
            <ItemCard tb items={items} count={5} />
          </>
        ) : count === 4 ? (
          <>
            <ItemCard pc items={items} count={0} />
            <ItemCard pc items={items} count={1} />
            <ItemCard pc items={items} count={2} />
            <ItemCard pc items={items} count={3} />
            <ItemCard pc items={items} count={4} />
            <ItemCard pc items={items} count={5} />
            <ItemCard pc items={items} count={6} />
            <ItemCard pc items={items} count={7} />
            <ItemCard pc items={items} count={8} />
            <ItemCard pc items={items} count={9} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>판매 중인 상품 영역</div>
    </div>
  );
}
